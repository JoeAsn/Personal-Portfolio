import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl shadow-sm ${isDark ? "border-white/10 bg-[#12131a]/80" : "border-slate-200 bg-white/80"}`}
    >
      <div className="relative mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <div
          className={`text-2xl font-bold tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}
        >
          Y.A
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`rounded-md px-2 py-1 text-sm font-medium transition-colors duration-300 ${isDark ? "text-gray-400 hover:bg-white/5 hover:text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Icon - All Devices */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={`p-1 transition-colors ${isDark ? "text-gray-400 hover:text-blue-400" : "text-slate-600 hover:text-blue-500"}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Resume Button */}
          <a
            href={"/resume/Yohannes_Asnake_CV.docx"}
            target="_blank"
            className="hidden cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90 sm:inline-flex"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className={`${isDark ? "text-gray-300" : "text-slate-700"} md:hidden`}
          >
            {isMenuOpen ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            className={`absolute left-0 top-16 w-full border-b px-6 py-5 md:hidden ${isDark ? "border-white/10 bg-[#12131a]" : "border-slate-200 bg-white"}`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
                >
                  {link.name}
                </a>
              ))}

              <a
                href={"/resume/Yohannes_Asnake_CV.docx"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white"
              >
                View Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
