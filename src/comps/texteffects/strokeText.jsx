import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DEFAULT_TEXT = "Draw Attention";

export default function StrokeText({
  text = DEFAULT_TEXT,
  strokeColor = "#A78BFA",
  fillColor = "#F8FAFC",
  strokeWidth = 1.4,
  drawDuration = 1.6,
  fillDelay = 0.2,
  stagger = 0.05,
  ease = "power2.out",
  trigger = "mount",
  fillMode = "wipe",
  fontSize = 128,
  fontWeight = 800,
  letterSpacing = -4,
  reverse = false,
  className = "",
  style = {},
}) {
  const rootRef = useRef(null);
  const strokeTextRef = useRef(null);
  const wipeRectRef = useRef(null);

  const [box, setBox] = useState(null);

  const rawId = useId();

  const wipeId = `stroke-text-wipe-${rawId.replace(
    /[^a-zA-Z0-9_-]/g,
    ""
  )}`;

  const characters = useMemo(
    () => Array.from(String(text ?? "")),
    [text]
  );

  const dash = Math.max(fontSize * 7, 200);

  const fontStyle = useMemo(
    () => ({
      fontSize: `${fontSize}px`,
      fontWeight,
      letterSpacing: `${letterSpacing}px`,
    }),
    [fontSize, fontWeight, letterSpacing]
  );


  // Measure SVG text size
  useLayoutEffect(() => {
    const node = strokeTextRef.current;

    if (!node) return;

    let cancelled = false;

    const measure = () => {
      if (cancelled || !strokeTextRef.current) return;

      let bbox;

      try {
        bbox = strokeTextRef.current.getBBox();
      } catch {
        return;
      }

      if (!bbox.width) return;

      const pad = Math.max(
        Number(strokeWidth) || 1,
        fontSize * 0.1
      );

      setBox({
        x: bbox.x - pad,
        y: bbox.y - pad,
        width: bbox.width + pad * 2,
        height: bbox.height + pad * 2,
      });
    };


    measure();

    document.fonts?.ready.then(measure);

    return () => {
      cancelled = true;
    };

  }, [
    characters,
    fontSize,
    fontWeight,
    letterSpacing,
    strokeWidth,
  ]);



  // Animation
  useEffect(() => {

    const root = rootRef.current;

    if (!root || !box) return;


    const strokes = gsap.utils.toArray(
      root.querySelectorAll("[data-stroke-char]")
    );

    const fills = gsap.utils.toArray(
      root.querySelectorAll("[data-fill-char]")
    );

    const wipe = wipeRectRef.current;


    const fillEnabled = fillMode !== "none";
    const useWipe = fillMode === "wipe";

    const fillDuration = Math.max(
      0.4,
      drawDuration * 0.5
    );


    const targets = [
      ...strokes,
      ...fills,
      wipe,
    ].filter(Boolean);


    const reset = () => {

      gsap.set(strokes, {
        strokeDasharray: dash,
        strokeDashoffset: dash,
      });

      gsap.set(fills, {
        opacity: useWipe ? 1 : 0,
      });

      if (wipe) {
        gsap.set(wipe,{
          attr:{
            width:0
          }
        });
      }
    };


    const finish = () => {

      gsap.set(strokes,{
        strokeDashoffset:0
      });

      gsap.set(fills,{
        opacity:1
      });

      if(wipe){
        gsap.set(wipe,{
          attr:{
            width:box.width
          }
        });
      }

    };


    if(
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ){
      finish();
      return;
    }


    const createTimeline = () => {

      reset();

      const tl = gsap.timeline({
        paused:true,
        repeat:
          trigger === "loop"
            ? -1
            : 0,
      });


      tl.to(
        strokes,
        {
          strokeDashoffset:0,
          duration:drawDuration,
          ease,
          stagger:
            reverse
              ? {
                  each:stagger,
                  from:"end"
                }
              : stagger,
        }
      );


      if(useWipe && wipe){

        tl.to(
          wipe,
          {
            attr:{
              width:box.width
            },
            duration:fillDuration,
            ease:"power2.inOut"
          },
          drawDuration + fillDelay
        );

      }
      else if(fillEnabled){

        tl.to(
          fills,
          {
            opacity:1,
            duration:fillDuration,
            ease:"power2.out",
            stagger,
          },
          drawDuration + fillDelay
        );

      }


      return tl;
    };


    let timeline;


    if(trigger === "hover"){

      finish();

      const play = () => {

        timeline?.kill();

        timeline=createTimeline();

        timeline.play();

      };


      root.addEventListener(
        "pointerenter",
        play
      );


      return ()=>{
        root.removeEventListener(
          "pointerenter",
          play
        );
      };

    }


    timeline=createTimeline();


    if(trigger==="scroll"){

      const scroll=ScrollTrigger.create({

        trigger:root,

        start:"top 82%",

        once:true,

        onEnter(){
          timeline.play();
        }

      });


      return ()=>{
        scroll.kill();
        timeline.kill();
      };

    }


    timeline.play();


    return ()=>{
      timeline.kill();
      gsap.killTweensOf(targets);
    };


  },[
    box,
    trigger,
    fillMode,
    drawDuration,
    fillDelay,
    stagger,
    ease,
    reverse,
    dash,
  ]);



  const viewBox = box
    ? `${box.x} ${box.y} ${box.width} ${box.height}`
    : `0 ${-fontSize} 600 ${fontSize*1.3}`;



  return (

    <span
      ref={rootRef}
      className={`
        block 
        w-full 
        leading-none
        ${trigger==="hover"?"cursor-pointer":""}
        ${className}
      `}
      style={style}
      role="img"
      aria-label={text}
    >

      <svg
        className="block w-full"
        style={{
          height:`${fontSize*1.3}px`
        }}
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
      >


        {
          fillMode==="wipe" && box && (

            <defs>

              <clipPath
                id={wipeId}
                clipPathUnits="userSpaceOnUse"
              >

                <rect
                  ref={wipeRectRef}
                  x={box.x}
                  y={box.y}
                  width="0"
                  height={box.height}
                />

              </clipPath>

            </defs>

          )
        }



        <text
          ref={strokeTextRef}
          x="0"
          y="0"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={fontStyle}
          className="select-none"
        >

          {
            characters.map((char,index)=>(
              <tspan
                key={index}
                data-stroke-char
              >
                {char}
              </tspan>
            ))
          }

        </text>



        <text
          x="0"
          y="0"
          fill={fillColor}
          stroke="none"
          style={fontStyle}
          className="select-none"
          clipPath={
            fillMode==="wipe"
              ? `url(#${wipeId})`
              : undefined
          }
        >

          {
            characters.map((char,index)=>(
              <tspan
                key={index}
                data-fill-char
              >
                {char}
              </tspan>
            ))
          }


        </text>


      </svg>

    </span>

  );
}