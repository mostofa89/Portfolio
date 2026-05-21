import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import CursorSpotlight from "./components/CursorSpotlight";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { NAV_ITEMS } from "./data/portfolio";

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function App() {
  const active = useActiveSection();

  const jumpTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative noise min-h-screen">
      <AnimatedBackground />
      <CursorSpotlight />
      <Navbar active={active} />

      <main className="relative z-10">
        <Hero jumpTo={jumpTo} />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer jumpTo={jumpTo} />
    </div>
  );
}
