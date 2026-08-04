import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const timeline = [
  {
    year: "2025",
    icon: <GraduationCap size={22} />,
    title: "Computer Science Student",
    description:
      "My journey into Computer Science began with a curiosity about how technology works and how software can solve real-world problems. I was fascinated by the ability to turn ideas into useful applications through programming, which motivated me to explore the field further. After discovering the power of software development and artificial intelligence, I decided to pursue Computer Science to build a strong foundation in computing, improve my problem-solving skills, and develop innovative solutions that can create meaningful impact",
  },
  {
    year: "2025",
    icon: <Rocket size={22} />,
    title: "Programming Journey",
    description:
      "My programming journey began with exploring Python fundamentals, which introduced me to core programming concepts and problem-solving. I then moved into web development, building a strong foundation in HTML, CSS, and JavaScript before advancing into modern frontend technologies like React and TypeScript. Through hands-on projects, I have developed skills in creating responsive, scalable, and type-safe web applications while continuously improving my understanding of software development practices",
  },
  {
    year: "2026",
    icon: <Briefcase size={22} />,
    title: "Frontend Intern ",
    description: "Have have build some projects by particpating on codealpha virtual internship and got recoginzed" 
}];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-100 py-28 transition-colors dark:bg-[#07111f]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-cyan-500">
            Journey
          </p>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white">
            My Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-[2px] bg-cyan-500/30" />

          <div className="space-y-16">
            {timeline.map((item) => (
              <div key={item.year} className="relative flex gap-8">
                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-black shadow-lg shadow-cyan-500/40">
                  {item.icon}
                </div>

                <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-cyan-400 hover:shadow-xl dark:border-white/10 dark:bg-[#111c2f]">
                  <span className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
                    {item.year}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
