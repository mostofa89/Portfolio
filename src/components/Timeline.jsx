import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "../data/portfolio";

function TimelineCard({ item, icon: Icon, index, accentColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12"
    >
      {/* Dot */}
      <div
        className="absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 z-10"
        style={{ borderColor: accentColor, backgroundColor: "#141a2e" }}
      >
        <Icon className="w-4 h-4" style={{ color: accentColor }} />
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      <div className="glass-card glow-border p-6 hover:translate-x-1 transition-transform">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="font-display font-semibold text-lg">
            {item.degree || item.title}
          </h3>
          <span className="chip border-white/10 bg-white/[0.03] text-slate-400">
            <Calendar className="w-3 h-3" />
            {item.period}
          </span>
        </div>
        <div
          className="mt-1 font-mono text-sm font-medium"
          style={{ color: accentColor }}
        >
          {item.school || item.org}
        </div>
        <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.meta}</p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="education" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="section-eyebrow">04 / Journey</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Education & <span className="text-gradient">experience</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-neon-cyan" />
              <h3 className="font-display font-semibold text-xl">Education</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent" />
            </div>
            <div className="relative space-y-6">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-neon-cyan/10 to-transparent" />
              {EDUCATION.map((item, i) => (
                <TimelineCard
                  key={item.degree}
                  item={item}
                  icon={GraduationCap}
                  index={i}
                  accentColor="#38bdf8"
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div id="experience">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-neon-violet" />
              <h3 className="font-display font-semibold text-xl">Experience</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-neon-violet/40 to-transparent" />
            </div>
            <div className="relative space-y-6">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-violet/40 via-neon-violet/10 to-transparent" />
              {EXPERIENCE.map((item, i) => (
                <TimelineCard
                  key={item.title}
                  item={item}
                  icon={Briefcase}
                  index={i}
                  accentColor="#818cf8"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
