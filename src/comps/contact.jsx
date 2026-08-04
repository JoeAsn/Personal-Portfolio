import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    icon: <Mail size={22} />,
    title: "Email",
    value: "your.email@gmail.com",
    link: "mailto:your.email@gmail.com",
  },
  {
    icon: <FaGithub size={22} />,
    title: "Github",
    value: "github.com/yourusername",
    link: "https://github.com/",
  },
  {
    icon: <FaLinkedin size={22} />,
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    link: "www.linkedin.com/in/yohannes-asnake-378031388",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-100 py-28 transition-colors dark:bg-[#07111f]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 uppercase tracking-[0.3em] text-cyan-500">Contact</p>
            <h2 className="text-5xl font-black leading-tight text-slate-900 dark:text-white">
              Let's build something amazing together.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-700 dark:text-zinc-400">
              I'm always open to discussing new projects, creative ideas, and opportunities to build impactful digital products.
            </p>

            <div className="mt-10 flex w-fit items-center gap-3 rounded-full border border-green-400/30 bg-green-400/10 px-5 py-3">
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-semibold text-green-500">Available for opportunities</span>
            </div>

            <div className="mt-12 space-y-5">
              {contactLinks.map((item) => (
                <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-400 dark:border-white/10 dark:bg-white/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-zinc-400">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#111c2f]">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Send Message</h3>

            <form className="mt-8 space-y-5">
              <input type="text" placeholder="Your Name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500" />
              <input type="email" placeholder="Your Email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500" />
              <textarea rows="5" placeholder="Your Message" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500" />

              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 py-4 font-bold text-black transition hover:bg-cyan-300">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}