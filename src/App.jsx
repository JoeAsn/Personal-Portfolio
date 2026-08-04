import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Navbar from "./comps/NavBar";
import Hero from "./comps/hero";
import About from "./comps/about";
import Experience from "./comps/expirinace";
import Projects from "./comps/projects";
import Services from "./comps/services";
import Contact from "./comps/contact";
import Footer from "./comps/footer";

function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <AnimatedSection>
        <Hero theme={theme} />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>

      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}