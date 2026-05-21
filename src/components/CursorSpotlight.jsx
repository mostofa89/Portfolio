import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    let raf;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
          }
          raf = null;
        });
      }
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
