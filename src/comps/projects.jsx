import ProjectCard from "./project-card";
import chatbot from "../assets/chatbot.png"
import ecommerce from "../assets/ecommerce.png"
import portfolio from "../assets/portfolio.png"
import Resume from "../assets/Resume.png"
import furniture from "../assets/furniture.png"
import fileManager from "../assets/file-manager.png"
const projects = [
    {
    title: "Furniture Website",
    description:
      "Responsive website design for a local furniture company built with React + Ts + tailwindcss",
    image: furniture,
    technologies: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/JoeAsn/",
    demo: "https://zefmesh-furniture-webdesign.vercel.app/",
    size: "wide",
  },
  {
    title: "AI Chat Application",
    description:
      "A modern AI chatbot built with React, TypeScript and OpenRouter API with real-time conversations.",
    image: chatbot,
    technologies: ["React", "TypeScript", "Tailwind", "API"],
    github: "https://github.com/JoeAsn/chat-bot.git",
    demo: "https://chat-bot-five-navy.vercel.app/",
    size: "normal",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured ecommerce application with authentication, cart management and product APIs.",
    image: ecommerce,
    technologies: ["React", "TypeScript" , "Supabase"],
    github: "https://github.com/JoeAsn/Ecommerce-Marketplace.git",
    demo: "https://ecommerce-marketplace-theta.vercel.app/",
    size: "large",
  },
  {
    title: "File Manager",
    description:
      "A responsive file management site with upload, download, search, and delete functionality.",
    image: fileManager,
    technologies: ["React", "Node.js", "Tailwind"],
    github: "https://github.com/JoeAsn/File-Manager.git",
    demo: "#",
    size: "normal",
  },
    {
    title: "Resume Analyzer",
    description:
      "A responsive Website which Helps Job applicants to optimize thier resume besed on Job specification",
    image: Resume ,
    technologies: ["React", "API", "TailwindCSS" , "TypeScript"],
    github: "https://github.com/JoeAsn/Resume-Analyzer.git",
    demo: "https://resume-analyzer-sand-psi.vercel.app/",
    size: "wide",
  } ,
  {
    title: "Portfolio Website",
    description:
      "A high-performance personal portfolio built with React and Tailwind CSS.",
    image : portfolio,
    technologies: ["React", "Tailwind"],
    github: "https://github.com/JoeAsn/Personal-Portfolio.git",
    demo: "#",
    size: "normal",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 py-28 transition-colors dark:bg-[#081526]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 uppercase tracking-[0.3em] text-cyan-500">Projects</p>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white">Featured Works</h2>
          </div>

          <a href="https://github.com/JoeAsn" className="hidden text-sm font-semibold uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white md:block">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}