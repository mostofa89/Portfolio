import { motion } from "framer-motion";
import { Code2, Rocket, Heart } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Clean Code Focus",
    body: "I write code I'd want to read six months from now — clear names, small functions, intentional structure.",
    color: "text-neon-cyan",
  },
  {
    icon: Rocket,
    title: "Ship It Mindset",
    body: "Ideas only matter if they ship. I focus on getting things deployed, tested in the wild, and iterated.",
    color: "text-neon-violet",
  },
  {
    icon: Heart,
    title: "Always Learning",
    body: "Every project teaches me something new — currently going deep on DRF, MySQL optimization, and animations.",
    color: "text-[#34d399]",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-eyebrow">01 / About</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            A developer who cares about <span className="text-gradient">the details</span> that make products feel right.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-lg text-slate-300 leading-relaxed"
          >
            <p>
              I'm a Computer Science student at <span className="text-white font-medium">BRAC University</span>{" "}
              who got hooked on building things people actually use. My playground is the full stack — React on the
              front, Django + DRF on the back, MySQL keeping it all honest.
            </p>
            <p>
              I don't have professional experience yet, and I'm not pretending otherwise. What I do have is a
              growing portfolio of <span className="text-white font-medium">real, working projects</span> — eCommerce flows, learning platforms,
              task managers — each one teaching me something new about clean architecture, user experience, or deployment.
            </p>
            <p>
              When I'm not coding, I'm reading docs, tinkering with new tools, or trying to figure out why
              an animation feels <em className="text-neon-cyan not-italic">just slightly off</em>.
            </p>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: "Location", value: "Dhaka, BD" },
                { label: "Education", value: "BRAC CSE" },
                { label: "Focus", value: "Full Stack" },
                { label: "Email", value: "Available" },
                { label: "Remote", value: "Welcome" },
                { label: "Coffee", value: "Always ☕" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-neon-violet/40 pl-3">
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
                  <div className="text-sm font-mono mt-0.5">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: -4 }}
                className="glass-card glow-border p-6 cursor-default"
              >
                <h.icon className={`w-7 h-7 ${h.color} mb-3`} />
                <h3 className="font-display font-semibold text-lg mb-2">{h.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
