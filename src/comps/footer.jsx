import {
  ArrowUp,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];


export default function Footer() {

  return (

    <footer
      className="
        border-t
        border-slate-200
        bg-slate-100
        py-12
        transition-colors
        dark:border-white/10
        dark:bg-[#07111f]
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-10
        "
      >

        <div
          className="
            flex
            flex-col
            gap-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >


          {/* Brand */}


          <div>

            <a
              href="#home"
              className="
                text-3xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              YOHANNES.
            </a>


            <p
              className="
                mt-3
                max-w-sm
                text-slate-600
                dark:text-zinc-400
              "
            >
              Full Stack Developer building modern
              web applications and AI-powered solutions.
            </p>

          </div>




          {/* Navigation */}


          <nav
            className="
              flex
              flex-wrap
              gap-6
            "
          >

            {
              links.map((link)=>(
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    text-sm
                    font-medium
                    text-slate-600
                    transition
                    hover:text-cyan-500
                    dark:text-zinc-400
                    dark:hover:text-cyan-400
                  "
                >
                  {link.name}
                </a>
              ))
            }

          </nav>




          {/* Social Icons */}


          <div
            className="
              flex
              gap-4
            "
          >

            <a
              href="#"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-zinc-400
                transition
                hover:border-cyan-400
                hover:text-cyan-400
              "
            >
              <FaGithub size={20}/>
            </a>



            <a
              href="#"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                text-slate-600
                transition
                hover:border-cyan-400
                hover:text-cyan-500
                dark:border-white/10
                dark:text-zinc-400
                dark:hover:border-cyan-400
                dark:hover:text-cyan-400
              "
            >
              <FaLinkedin size={20}/>
            </a>



            <a
              href="mailto:your.email@gmail.com"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                text-slate-600
                transition
                hover:border-cyan-400
                hover:text-cyan-500
                dark:border-white/10
                dark:text-zinc-400
                dark:hover:border-cyan-400
                dark:hover:text-cyan-400
              "
            >
              <Mail size={20}/>
            </a>


          </div>


        </div>





        {/* Bottom */}


        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-slate-200
            pt-8
            text-sm
            text-slate-500
            md:flex-row
            md:items-center
            md:justify-between
            dark:border-white/10
            dark:text-zinc-500
          "
        >

          <p>
            © {new Date().getFullYear()} Yohannes Asnake.
            All rights reserved.
          </p>



          <a
            href="#home"
            className="
              flex
              items-center
              gap-2
              transition
              hover:text-cyan-400
            "
          >
            Back to top

            <ArrowUp size={16}/>

          </a>


        </div>


      </div>


    </footer>

  );
}