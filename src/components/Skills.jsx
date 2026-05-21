import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data/portfolio";

function SkillBar({ item, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative w-7 h-7 rounded-md bg-white/5 border border-white/10 p-1 flex items-center justify-center">
            <img
              src={item.icon}
              alt=""
              className={`w-full h-full object-contain ${item.invert ? "invert" : ""}`}
              loading="lazy"
            />
          </div>
          <span className="font-medium text-sm">{item.name}</span>
        </div>
        <span className="font-mono text-xs text-slate-500">{item.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${item.level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#34d399] via-[#38bdf8] to-[#818cf8]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="section-eyebrow">02 / Skills</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            The <span className="text-gradient">stack</span> I reach for.
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Frontend, backend, and the tooling that ties it together. Levels are
            self-assessed and growing every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass-card glow-border p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-xl">{group.title}</h3>
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${group.accent}`} />
              </div>
              <div className="space-y-5">
                {group.items.map((item, i) => (
                  <SkillBar key={item.name} item={item} delay={gi * 0.05 + i * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
