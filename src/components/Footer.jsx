import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { NAV_ITEMS } from "../data/portfolio";

const base = import.meta.env.BASE_URL;

export default function Footer({ jumpTo }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[#e0e7ff]/10 mt-20 pt-16 pb-8 px-6 lg:px-10 overflow-hidden">
      <div
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon-cyan/45 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <button
              onClick={() => jumpTo("home")}
              className="inline-flex items-center gap-2 font-display font-bold text-2xl"
            >
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#34d399] via-[#38bdf8] to-[#818cf8] text-ink-950">
                <img
                  src={`${base}joy.jpg`}
                  alt=""
                  className="h-9 w-9 rounded-md object-cover"
                />
              </span>
              <span className="text-[#e0e7ff]">Mostofa Kamal</span><span className="text-[#34d399]">.</span>
            </button>
            <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
              Full Stack Developer building practical projects with React, Django, and
              the rest of the modern web. Open to collaborations and learning
              opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => jumpTo(item.id)}
                  className="text-sm text-slate-400 hover:text-white text-left w-fit transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:mostofakamaljoy89@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-neon-cyan transition-colors w-fit"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
              <a
                href="https://github.com/mostofa89"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-neon-violet transition-colors w-fit"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mostofa-kamal-joy-636b89260/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#34d399] transition-colors w-fit"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e0e7ff]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            © {year} Abu Hena Mostofa Kamal Joy. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-mono inline-flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-[#34d399] fill-[#34d399]" /> using
            React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
