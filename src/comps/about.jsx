import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import CountUp from "./texteffects/counter";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-sky-400 text-5xl" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-5xl" />,
  },
  {
    name: "Vite",
    icon: <SiVite className="text-orange-500 text-5xl" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-blue-500 text-5xl" />,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-28
        transition-colors
        dark:bg-[#081526]
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute
          left-0
          top-0
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-72
          w-72
          rounded-full
          bg-purple-500/10
          blur-[150px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          lg:px-10
        "
      >
        <div
          className="
            grid
            gap-20
            lg:grid-cols-2
          "
        >
          {/* About Content */}
          <div>
            <h2
              className="
                mb-10
                text-5xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              About Me
            </h2>

            <div
              className="
                space-y-8
                text-lg
                leading-9
                text-slate-700
                dark:text-zinc-300
              "
            >
              <p>
                I'm Yohannes Asnake, a Computer Science student and aspiring
                full-stack developer passionate about creating modern, scalable
                web applications and AI-powered software.
              </p>

              <p>
                I enjoy solving real-world problems through clean architecture,
                beautiful interfaces, and efficient backend systems. My goal is
                to build products that create meaningful impact.
              </p>

              <p>
                Currently, I'm focused on mastering React, TypeScript, backend
                engineering, and AI integration while building
                production-quality projects.
              </p>
            </div>

            {/* Animated Counters */}
            <div
              className="
                mt-14
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-3
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/80
                  p-6
                  shadow-sm
                  backdrop-blur-md
                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <h3
                  className="
                    text-4xl
                    font-black
                    text-slate-900
                    dark:text-white
                  "
                >
                  <CountUp from={0} to={7} duration={6} />+
                </h3>

                <p className="mt-2 text-slate-600 dark:text-zinc-400">
                  Projects Built
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/80
                  p-6
                  shadow-sm
                  backdrop-blur-md
                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <h3
                  className="
                    text-4xl
                    font-black
                    text-slate-900
                    dark:text-white
                  "
                >
                  <CountUp from={0} to={6} duration={2} />
                </h3>

                <p className="mt-2 text-slate-600 dark:text-zinc-400">
                  Months Learning
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/80
                  p-6
                  shadow-sm
                  backdrop-blur-md
                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <h3
                  className="
                    text-4xl
                    font-black
                    text-slate-900
                    dark:text-white
                  "
                >
                  ∞
                </h3>

                <p className="mt-2 text-slate-600 dark:text-zinc-400">
                  Curiosity
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2
              className="
                mb-10
                text-4xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              Skills
            </h2>

            <div
              className="
                grid
                grid-cols-2
                gap-5
                sm:grid-cols-3
              "
            >
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    text-center
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:border-cyan-400
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
                    dark:border-white/10
                    dark:bg-[#111c2f]
                  "
                >
                  <div className="mb-5 flex justify-center">{skill.icon}</div>

                  <h3
                    className="
                      font-medium
                      text-slate-800
                      dark:text-white
                    "
                  >
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
