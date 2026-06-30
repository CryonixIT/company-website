"use client";

import { motion } from "framer-motion";
import { Cpu, GitBranch, Database, Terminal, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// ─── Custom Movie-Style Count-Up Ticker ───
function CountUp({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isNaN(target)) {
      return;
    }
    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);

      // Easing out quadratic
      const easeOut = rate * (2 - rate);
      const current = easeOut * target;

      if (value.includes(".")) {
        setCount(parseFloat(current.toFixed(1)));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, value]);

  if (isNaN(target)) return <span>{value}</span>;
  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-36 pb-12 px-6 md:px-12"
      style={{ background: "#000000" }}
    >
      {/* Parallax Background Layer - Fades in AFTER logo and menu trigger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.25) 95%), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%), url('/assets/landing-bg/bg.png')",
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.05)`,
        }}
      />

      {/* Decorative Top Grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-white" />
      </div>

      {/* Hero Core Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center justify-center text-center my-auto">
        {/* Master Typographic Composition - Fades in AFTER background */}
        <h1
          className="font-bold tracking-tight uppercase select-none w-full text-center flex flex-col items-center gap-1.5"
          style={{ fontFamily: "var(--font-title)" }}
        >
          {/* Row 1: ARCHITECTING with textured metallic/silver gradient */}
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block text-4xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-black uppercase text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff 40%, #a1a1aa 100%)",
              letterSpacing: "0.02em",
            }}
          >
            Architecting
          </motion.span>

          {/* Row 2: AI AUTOMATION in orange */}
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="block text-4xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-black uppercase"
            style={{
              color: "var(--accent)",
              textShadow: "0px 0px 50px rgba(254, 127, 45, 0.25)",
              letterSpacing: "0.02em",
            }}
          >
            .AI Automation.
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
          className="text-[10px] sm:text-xs tracking-[0.45em] uppercase font-bold text-zinc-400 mt-6 mb-8 font-mono"
        >
          Cognitive agents // Autonomous enterprise
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35 }}
          className="max-w-md text-xs sm:text-sm leading-relaxed text-zinc-300 mb-8"
        >
          We architect autonomous AI systems and cognitive agents that automate complex workflows with zero friction.
        </motion.p>

        {/* Explore Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45 }}
        >
          <a
            href="#services"
            className="inline-flex items-center gap-3 px-8 py-3.5 border text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              background: "rgba(254, 127, 45, 0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(254, 127, 45, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(254, 127, 45, 0.05)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore Our Services <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Row of Stats / Details */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-900 mt-auto">
        {[
          { icon: Cpu, val: "50+", label: "Cognitive Agents" },
          { icon: GitBranch, val: "30+", label: "Automated Workflows" },
          { icon: Database, val: "5M+", label: "Tasks Processed" },
          { icon: Terminal, val: "15+", label: "Core AI Models" },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + idx * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 text-left pl-2"
            >
              {/* Tilted Diamond Icon Frame */}
              <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
                <div
                  className="absolute inset-0 border rotate-45 transition-all duration-300"
                  style={{
                    borderColor: "var(--accent)",
                    background: "rgba(254, 127, 45, 0.08)",
                  }}
                />
                <Icon className="w-4 h-4 relative z-10" style={{ color: "var(--accent)" }} />
              </div>

              {/* Stat Text */}
              <div className="flex flex-col justify-center">
                <span
                  className="text-lg md:text-xl font-bold leading-none text-white"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  <CountUp value={item.val} />
                </span>
                <span
                  className="text-[9px] uppercase tracking-widest mt-1 text-zinc-400 font-semibold"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
