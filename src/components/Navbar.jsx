import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { NAV_ITEMS } from "../data/portfolio";

const base = import.meta.env.BASE_URL;

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink-950/82 backdrop-blur-xl border-b border-[#e0e7ff]/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <button
            onClick={() => jump("home")}
            className="group flex items-center gap-3 font-display font-bold text-xl"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#34d399] via-[#38bdf8] to-[#818cf8] text-ink-950 shadow-[0_0_24px_rgba(56,189,248,0.24)]">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#34d399] via-[#38bdf8] to-[#818cf8] blur-md opacity-35 group-hover:opacity-60 transition-opacity" />
              <img
                src={`${base}joy.jpg`}
                alt=""
                className="relative h-10 w-10 rounded-[10px] object-cover"
              />
            </span>
            <span className="hidden sm:inline text-[#e0e7ff] drop-shadow-[0_1px_12px_rgba(10,14,26,0.9)]">
              Mostofa Kamal<span className="text-[#34d399]">.</span>
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => jump(item.id)}
                    className="relative px-4 py-2 text-sm font-medium tracking-wide text-[#e0e7ff]/70 hover:text-[#e0e7ff] transition-colors"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[#141a2e] border border-[#e0e7ff]/10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/mostofa89"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-[#e0e7ff]/10 hover:border-neon-cyan/45 hover:bg-[#141a2e] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button onClick={() => jump("contact")} className="neon-btn-primary text-sm">
              Hire Me
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[68px] left-0 right-0 z-40 lg:hidden bg-ink-900/95 backdrop-blur-xl border-b border-[#e0e7ff]/10"
          >
            <div className="p-6 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => jump(item.id)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-all ${
                    active === item.id
                      ? "bg-[#141a2e] text-[#e0e7ff] border border-[#e0e7ff]/10"
                      : "text-[#e0e7ff]/65 hover:text-[#e0e7ff]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => jump("contact")} className="neon-btn-primary mt-2">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
