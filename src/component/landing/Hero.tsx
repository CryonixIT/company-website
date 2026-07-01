"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, GitBranch, Database, Terminal, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "@/component/ui/Button";

function CountUp({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isNaN(target)) return;
    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);
      const easeOut = rate * (2 - rate);
      const current = easeOut * target;

      setCount(value.includes(".") ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < duration) requestAnimationFrame(animate);
      else setCount(target);
    };

    requestAnimationFrame(animate);
  }, [target, value]);

  if (isNaN(target)) return <span>{value}</span>;
  return <span>{count}{suffix}</span>;
}


export default function Hero() {
  // Spring-smoothed parallax — replaces useState + manual transform + CSS transition-transform
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springConfig = { stiffness: 60, damping: 18, mass: 0.6 };
  const sx = useSpring(mx, springConfig);
  const sy = useSpring(my, springConfig);
  const bgX = useTransform(sx, (v) => `${v}px`);
  const bgY = useTransform(sy, (v) => `${v}px`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 30);
      my.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mx, my]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-36 pb-12 px-6 md:px-12"
      style={{ background: "#000000" }}
    >
      {/* Parallax Background Layer — pure motion now, spring replaces CSS transition lag */}
      <motion.div
        initial={{ opacity: 0, scale: 1.12 }}
        animate={{ opacity: 0.6, scale: 1.05 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.25) 95%), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%), url('/assets/landing-bg/bg.png')",
          x: sx,
          y: sy,
        }}
      />

      {/* Decorative Top Grid lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-white" />
      </motion.div>

      {/* Hero Core Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center justify-center text-center my-auto">
        <h1
          className="font-bold tracking-tight uppercase select-none w-full text-center flex flex-col items-center gap-1.5"
          style={{ fontFamily: "var(--font-title)" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block text-4xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-black uppercase text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff 40%, #a1a1aa 100%)",
              letterSpacing: "0.02em",
            }}
          >
            Architecting
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.6 }}
          className="text-[10px] sm:text-xs tracking-[0.45em] uppercase font-bold text-zinc-400 mt-6 mb-8 font-mono"
        >
          Cognitive agents // Autonomous enterprise
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.6 }}
          className="max-w-md text-xs sm:text-sm leading-relaxed text-zinc-300 mb-8"
        >
          We architect autonomous AI systems and cognitive agents that automate complex workflows with zero friction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.6 }}
        >
          <Button href="#services" magnetic={true} icon={ArrowRight}>
            Explore Our Services
          </Button>
        </motion.div>
      </div>

      {/* Bottom Row of Stats / Details */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
        className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-900 mt-auto"
      >
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
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 text-left pl-2"
            >
              <motion.div
                className="relative w-10 h-10 shrink-0 flex items-center justify-center"
                whileHover="hover"
              >
                <motion.div
                  className="absolute inset-0 border rotate-45"
                  style={{ borderColor: "var(--accent)" }}
                  variants={{
                    hover: { background: "rgba(254, 127, 45, 0.2)", scale: 1.1 },
                  }}
                  initial={{ background: "rgba(254, 127, 45, 0.08)" }}
                  transition={{ duration: 0.3 }}
                />
                <Icon className="w-4 h-4 relative z-10" style={{ color: "var(--accent)" }} />
              </motion.div>

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
      </motion.div>
    </section>
  );
}