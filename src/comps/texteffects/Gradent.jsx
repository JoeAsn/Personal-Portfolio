import { useEffect, useRef } from "react";

export default function ShapeGrid({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#222",
  shape = "square",
  hoverTrailAmount = 0,
  className = "",
}) {

  const canvasRef = useRef(null);

  const animationRef = useRef(null);

  const offset = useRef({
    x: 0,
    y: 0,
  });

  const hoveredCell = useRef(null);

  const trail = useRef([]);

  const cells = useRef(new Map());



  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;


    const ctx = canvas.getContext("2d");


    let width = 0;
    let height = 0;



    const resize = () => {

      const rect =
        canvas.getBoundingClientRect();


      width = rect.width;
      height = rect.height;


      const ratio =
        window.devicePixelRatio || 1;


      canvas.width =
        width * ratio;


      canvas.height =
        height * ratio;


      ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
      );

    };



    resize();



    const observer =
      new ResizeObserver(resize);


    observer.observe(canvas);




    const drawShape = (
      x,
      y
    ) => {


      ctx.beginPath();


      if(shape === "circle"){

        ctx.arc(
          x + squareSize / 2,
          y + squareSize / 2,
          squareSize / 2,
          0,
          Math.PI * 2
        );

      }


      else if(shape === "triangle"){


        ctx.moveTo(
          x + squareSize / 2,
          y
        );


        ctx.lineTo(
          x + squareSize,
          y + squareSize
        );


        ctx.lineTo(
          x,
          y + squareSize
        );


        ctx.closePath();

      }


      else if(shape === "hexagon"){


        const centerX =
          x + squareSize / 2;


        const centerY =
          y + squareSize / 2;



        for(let i = 0; i < 6; i++){

          const angle =
            Math.PI / 3 * i;


          const px =
            centerX +
            squareSize / 2 *
            Math.cos(angle);


          const py =
            centerY +
            squareSize / 2 *
            Math.sin(angle);



          if(i === 0)

            ctx.moveTo(px,py);

          else

            ctx.lineTo(px,py);

        }


        ctx.closePath();


      }


      else {

        ctx.rect(
          x,
          y,
          squareSize,
          squareSize
        );

      }


    };






    const updateCells = () => {


      const targets =
        new Map();



      if(hoveredCell.current){


        targets.set(
          `${hoveredCell.current.x},${hoveredCell.current.y}`,
          1
        );


      }




      trail.current.forEach(
        (item,index)=>{


          targets.set(

            `${item.x},${item.y}`,

            1 -
            index /
            (hoverTrailAmount + 1)

          );


        }
      );




      targets.forEach(
        (_,key)=>{

          if(!cells.current.has(key)){

            cells.current.set(
              key,
              0
            );

          }

        }
      );




      cells.current.forEach(
        (value,key)=>{


          const target =
            targets.get(key) || 0;



          const next =
            value +
            (target-value) *
            0.15;



          if(next < 0.01){

            cells.current.delete(key);

          }

          else{

            cells.current.set(
              key,
              next
            );

          }


        }
      );


    };







    const draw = () => {


      ctx.clearRect(
        0,
        0,
        width,
        height
      );



      const cols =
        Math.ceil(width / squareSize) + 2;


      const rows =
        Math.ceil(height / squareSize) + 2;



      for(
        let x = -1;
        x < cols;
        x++
      ){


        for(
          let y = -1;
          y < rows;
          y++
        ){



          const px =
            x * squareSize +
            offset.current.x;



          const py =
            y * squareSize +
            offset.current.y;



          const key =
            `${x},${y}`;



          const opacity =
            cells.current.get(key);



          if(opacity){


            ctx.globalAlpha =
              opacity;


            drawShape(
              px,
              py
            );


            ctx.fillStyle =
              hoverFillColor;


            ctx.fill();


            ctx.globalAlpha = 1;


          }




          drawShape(
            px,
            py
          );


          ctx.strokeStyle =
            borderColor;


          ctx.lineWidth = 1;


          ctx.stroke();


        }

      }


    };







    const animate = () => {


      const move =
        Math.max(speed,0.1);



      switch(direction){


        case "right":

          offset.current.x -= move;

          break;



        case "left":

          offset.current.x += move;

          break;



        case "up":

          offset.current.y += move;

          break;



        case "down":

          offset.current.y -= move;

          break;



        case "diagonal":

          offset.current.x -= move;

          offset.current.y -= move;

          break;


        default:
          break;

      }



      updateCells();


      draw();



      animationRef.current =
        requestAnimationFrame(
          animate
        );


    };








    const handleMouseMove = (event)=>{


      const rect =
        canvas.getBoundingClientRect();



      const x =
        Math.floor(
          (
            event.clientX -
            rect.left
          )
          /
          squareSize
        );



      const y =
        Math.floor(
          (
            event.clientY -
            rect.top
          )
          /
          squareSize
        );



      if(
        !hoveredCell.current ||
        hoveredCell.current.x !== x ||
        hoveredCell.current.y !== y
      ){


        if(
          hoveredCell.current &&
          hoverTrailAmount > 0
        ){


          trail.current.unshift(
            hoveredCell.current
          );


          trail.current =
            trail.current.slice(
              0,
              hoverTrailAmount
            );


        }



        hoveredCell.current = {
          x,
          y
        };


      }


    };




    canvas.addEventListener(
      "mousemove",
      handleMouseMove
    );



    animationRef.current =
      requestAnimationFrame(
        animate
      );





    return ()=>{


      cancelAnimationFrame(
        animationRef.current
      );


      observer.disconnect();


      canvas.removeEventListener(
        "mousemove",
        handleMouseMove
      );


    };


  },[
    direction,
    speed,
    borderColor,
    squareSize,
    hoverFillColor,
    shape,
    hoverTrailAmount
  ]);






  return (

    <canvas

      ref={canvasRef}

      className={`
        absolute
        inset-0
        h-full
        w-full
        block
        ${className}
      `}

    />

  );

}