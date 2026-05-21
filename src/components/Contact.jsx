import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { CONTACT_LINKS } from "../data/portfolio";

const ICON_MAP = { mail: Mail, github: Github, linkedin: Linkedin, mapPin: MapPin };
const COLORS = ["#34d399", "#38bdf8", "#818cf8", "#38bdf8"];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(data.get("subject") || "Hello from your portfolio");
    const body = encodeURIComponent(
      `${data.get("message") || ""}\n\n— ${data.get("name") || "Anonymous"} (${data.get("email") || "no email"})`
    );
    window.location.href = `mailto:mostofakamaljoy89@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="section-eyebrow justify-center">05 / Contact</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Let's build something <span className="text-gradient">together</span>.
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Open to collaborations, feedback, freelance, or just a good conversation about code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          {/* Links */}
          <div className="space-y-3">
            {CONTACT_LINKS.map((link, i) => {
              const Icon = ICON_MAP[link.iconName];
              const color = COLORS[i % COLORS.length];
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-4 p-5 glass-card glow-border"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      borderColor: `${color}44`,
                      background: `${color}15`,
                      color,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                      {link.label}
                    </div>
                    <div className="font-medium text-sm truncate group-hover:text-white transition-colors">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField name="name" label="Your name" placeholder="Jane Doe" />
              <FormField name="email" label="Your email" type="email" placeholder="jane@example.com" />
            </div>
            <FormField name="subject" label="Subject" placeholder="Project enquiry" />
            <FormField
              name="message"
              label="Message"
              placeholder="Tell me a bit about your project or idea..."
              textarea
            />
            <button
              type="submit"
              className="neon-btn-primary w-full justify-center group"
              disabled={sent}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Opening your email client...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FormField({ name, label, type = "text", placeholder, textarea }) {
  const base =
    "w-full px-4 py-3 rounded-xl bg-[#0a0e1a]/35 border border-[#e0e7ff]/10 text-sm text-[#e0e7ff] placeholder:text-[#e0e7ff]/30 focus:outline-none focus:border-neon-cyan/55 focus:bg-[#141a2e] transition-all";
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={5} required className={`${base} resize-none`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required className={base} />
      )}
    </label>
  );
}
