import { ArrowRight } from "lucide-react";
import profile from "../assets/peronal.png";
import lite_profile from "../assets/peronal-light-mode.png";
import StrokeText from "./texteffects/strokeText";
import ShapeGrid from "./texteffects/Gradent";

export default function Hero({ theme }) {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        w-full
        overflow-hidden
      "
    >
      {/* Base Background */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-gradient-to-br
          from-white
          via-zinc-100
          to-zinc-200

          dark:from-zinc-950
          dark:via-zinc-900
          dark:to-black
        "
      />

      {/* Animated Shape Grid Background */}
      <div
        className="
          absolute
          inset-0
          z-10
          h-full
          w-full
          opacity-40
          pointer-events-none
        "
      >
        <ShapeGrid
          speed={0.45}
          squareSize={45}
          direction="diagonal"
          borderColor={theme === "dark" ? "#4d607a" : "#a8b2be"}
          hoverFillColor={theme === "dark" ? "#2563eb" : "#60a5fa"}
          shape="square"
          hoverTrailAmount={Infinity}
        />
      </div>

      {/* Background Overlay */}
      <div
        className="
          absolute
          inset-0
          z-20
          bg-white/40

          dark:bg-black/50
        "
      />

      {/* Hero Content */}
      <div
        className="
          relative
          z-30
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          items-center
          gap-12
          px-6
          py-24

          lg:grid-cols-2
          lg:px-10
        "
      >
        {/* Text Section */}
        <div
          className="
            order-2
            lg:order-1
          "
        >
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-500
            "
          >
            Aspiring Software Engineer
          </p>

          <div
            className="
              text-4xl
              font-black
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            <StrokeText
              text="Yohannes Asnake"
              strokeColor="#38BDF8"
              fillColor={theme === "dark" ? "#ffffff" : "#09090b"}
              fontSize={window.innerWidth < 640 ? 60 : 120}
              fontWeight={900}
              drawDuration={2}
              fillDelay={0.3}
              trigger="mount"
              fillMode="wipe"
            />
          </div>

          <p
            className="
              mt-8
              max-w-xl
              text-base
              leading-7
              text-slate-700

              sm:text-lg

              dark:text-zinc-300
            "
          >
            I design and build fast, scalable and visually stunning web
            applications using React, TypeScript, and modern UI
            technologies.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-5
            "
          >
            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-slate-900
                px-8
                py-4
                font-semibold
                text-white
                transition

                hover:scale-105
                hover:bg-blue-500

                dark:bg-black
              "
            >
              View Projects
              <ArrowRight
                size={18}
                className="
                  transition
                  group-hover:translate-x-1
                "
              />
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-slate-300
                px-8
                py-4
                font-semibold
                text-slate-900
                transition

                hover:bg-white/50

                dark:border-zinc-700
                dark:text-white
              "
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          className="
            order-1
            flex
            justify-center

            lg:order-2
          "
        >
          <div
            className="
              relative
              w-full
              max-w-md
            "
          >
            <div
              className="
                absolute
                -inset-8
                rounded-full
                bg-gradient-to-r
                from-black-500/40
                to-gray-500/40
                blur-3xl
              "
            />

            <img
              src={theme === "dark" ? profile : lite_profile}
              alt="Developer"
              className="
                relative
                z-10
                w-full
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
