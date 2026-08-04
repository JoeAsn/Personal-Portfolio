import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] dark:border-white/10 dark:bg-[#111c2f] ${project.size === "large" || project.size === "wide" ? "md:col-span-2" : ""}`}>
      <div className="relative h-72 overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-600 dark:text-zinc-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400 hover:text-black dark:bg-white dark:text-black">
            <FaGithub size={16} />
            Code
          </a>

          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-400 dark:border-white/20 dark:text-white">
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}