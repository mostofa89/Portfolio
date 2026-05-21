import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ServerCog,
} from "lucide-react";
import { HERO_ROLES, HERO_STATS, CV_FILE } from "../data/portfolio";

const base = import.meta.env.BASE_URL;

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = HERO_ROLES[index];
    const speed = deleting ? 45 : 90;

    if (!deleting && displayed === word) {
      const pause = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(pause);
    }
    if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % HERO_ROLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        deleting ? word.slice(0, displayed.length - 1) : word.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, deleting, index]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient">{displayed}</span>
      <span className="ml-1 w-[3px] h-[1em] bg-neon-cyan animate-blink translate-y-[2px]" />
    </span>
  );
}

export default function Hero({ jumpTo }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Text */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e0e7ff]/10 bg-[#141a2e]/80 shadow-[0_0_30px_rgba(56,189,248,0.1)] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#34d399] animate-ping opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-[#34d399]" />
            </span>
            <span className="text-xs font-mono tracking-wide text-[#e0e7ff]/85">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight drop-shadow-[0_0_24px_rgba(56,189,248,0.12)]"
          >
            Hey, I'm
            <br />
            <span className="text-[#e0e7ff]">Abu Hena Mostofa Kamal Joy.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#e0e7ff]/75"
          >
            I'm a <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-xl text-lg text-[#e0e7ff]/72 leading-relaxed"
          >
            BSc CSE student at BRAC University crafting full-stack apps with React,
            Django, and DRF. I care about clean code, thoughtful UI, and shipping
            things that actually work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button onClick={() => jumpTo("projects")} className="neon-btn-primary group">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href={`${base}${CV_FILE}`} download className="neon-btn-ghost group">
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#e0e7ff]/45">
              Find me
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#e0e7ff]/18 to-transparent max-w-[80px]" />
            <a
              href="mailto:mostofakamaljoy89@gmail.com"
              className="p-2 rounded-full border border-[#e0e7ff]/10 hover:border-neon-cyan hover:text-neon-cyan transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/mostofa89"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-[#e0e7ff]/10 hover:border-neon-violet hover:text-neon-violet transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mostofa-kamal-joy-636b89260/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-[#e0e7ff]/10 hover:border-[#34d399] hover:text-[#34d399] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="border-l-2 border-neon-cyan/35 pl-4"
              >
                <div className="font-display text-3xl font-bold text-gradient-static">
                  {stat.value}
                </div>
                <div className="text-xs text-[#e0e7ff]/55 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-square">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-3 rounded-full bg-neon-cyan/10 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full animate-spin-slow opacity-90">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #e0e7ff, #34d399, #38bdf8, #818cf8, #e0e7ff)",
                }}
              />
            </div>
            <div className="absolute inset-[6px] rounded-full bg-ink-950" />

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute inset-[14px] rounded-full overflow-hidden border border-[#e0e7ff]/18 shadow-[0_24px_90px_-42px_rgba(56,189,248,0.6)]"
            >
              <img
                src={`${base}joy.jpg`}
                alt="Abu Hena Mostofa Kamal Joy"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-neon-cyan/10 pointer-events-none" />
            </motion.div>

            {/* Floating tags */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 sm:-right-6 glass-card px-4 py-2 flex items-center gap-2"
            >
              <Code2 className="h-6 w-6 text-neon-cyan" />
              <div>
                <div className="text-xs text-[#e0e7ff]/62">Building</div>
                <div className="text-sm font-display font-medium text-[#e0e7ff]">React Apps</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-2 sm:-left-6 glass-card px-4 py-2 flex items-center gap-2"
            >
              <ServerCog className="h-6 w-6 text-[#34d399]" />
              <div>
                <div className="text-xs text-[#e0e7ff]/62">Backend</div>
                <div className="text-sm font-display font-medium text-[#e0e7ff]">Django + DRF</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 8, 0], y: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-4 sm:-right-12 glass-card px-3 py-2 hidden sm:flex items-center gap-2"
            >
              <GraduationCap className="h-5 w-5 text-neon-violet" />
              <div className="text-xs">
                <div className="font-display font-medium text-[#e0e7ff]">BRAC University</div>
                <div className="text-[#e0e7ff]/62">CSE</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-neon-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}
