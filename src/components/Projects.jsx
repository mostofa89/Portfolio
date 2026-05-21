import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative glass-card overflow-hidden cursor-default"
    >
      {/* Gradient header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Floating glow */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-60 transition-opacity group-hover:opacity-100"
          style={{ background: project.accent }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Title overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="text-xs font-mono text-white/60 uppercase tracking-widest">
            {project.tagline}
          </div>
          <h3 className="mt-1 font-display font-bold text-2xl text-white">{project.title}</h3>
        </div>

        {/* Index marker */}
        <div className="absolute top-4 right-4 font-mono text-xs text-white/40">
          {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        <p className="text-sm text-slate-400 leading-relaxed min-h-[60px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="chip border-white/10 bg-white/[0.03] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white text-ink-950 text-sm font-medium hover:bg-neon-cyan transition-colors group/btn"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`${
              project.live ? "" : "flex-1"
            } inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-sm font-medium hover:bg-white/5 hover:border-white/30 transition-all`}
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </a>
        </div>
      </div>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="section-eyebrow">03 / Projects</span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Things I've <span className="text-gradient">built</span>.
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              A selection of projects across the full stack — each one taught me
              something I couldn't have learned from a tutorial.
            </p>
          </div>
          <a
            href="https://github.com/mostofa89"
            target="_blank"
            rel="noreferrer"
            className="neon-btn-ghost self-start md:self-auto group"
          >
            View All on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
