import { MARQUEE_WORDS } from "../data/portfolio";

export default function Marquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/5 bg-white/[0.015]">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={i}
            className="font-display font-bold text-3xl sm:text-4xl text-white/10 hover:text-gradient transition-all"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
