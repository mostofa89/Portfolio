import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid layer */}
      <div className="absolute inset-0 grid-bg" />

      {/* Animated calm aurora layers */}
      <motion.div
        className="absolute -top-[12%] left-[-10%] h-[42rem] w-[90rem] rotate-[-14deg] rounded-[45%] blur-[110px] opacity-35"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.32) 30%, rgba(129,140,248,0.24) 58%, transparent 100%)",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 35, -20, 0],
          rotate: [-14, -10, -18, -14],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[28%] right-[-22%] h-[36rem] w-[88rem] rotate-[18deg] rounded-[45%] blur-[120px] opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(129,140,248,0.28) 25%, rgba(56,189,248,0.3) 55%, transparent 100%)",
        }}
        animate={{
          x: [0, -90, 45, 0],
          y: [0, -30, 45, 0],
          rotate: [18, 14, 22, 18],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[18%] h-[34rem] w-[76rem] rotate-[7deg] rounded-[45%] blur-[120px] opacity-25"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.2) 28%, rgba(56,189,248,0.24) 64%, transparent 100%)",
        }}
        animate={{
          x: [0, 70, -35, 0],
          y: [0, -45, 20, 0],
          rotate: [7, 12, 4, 7],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
