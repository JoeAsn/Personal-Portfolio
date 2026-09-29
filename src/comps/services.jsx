import {
  Code2,
  Layers,
  Server,
//   BrainCircuit,
//   Rocket,
//   Database,
//   Gauge,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Responsive Web-Design",
    description:
"I design and develop responsive interfaces that provide a consistent and engaging experience across desktops, tablets, and mobile devices."  },
  {
    icon: <Layers size={28} />,
    title: "Front-End Applications",
    description:
"I build modern, interactive, and scalable web applications using current frontend technologies, focusing on performance, usability, and clean code."  }
  ,
  {
    icon: <Server size={28} />,
    title: "Simple REST APIs",
    description:
      "I build simple REST APIs for creating, reading, updating, and deleting data with clear and reliable endpoints.",
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-100 py-28 transition-colors dark:bg-[#081526]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16">
          <p className="mb-3 uppercase tracking-[0.3em] text-cyan-500">What I Build</p>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white">Services</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-zinc-400">
            I create modern digital experiences combining beautiful interfaces, scalable architecture, and intelligent technologies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] dark:border-white/10 dark:bg-[#111c2f]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500 transition group-hover:bg-cyan-400 group-hover:text-black">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}