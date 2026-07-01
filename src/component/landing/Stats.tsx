"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";

const STATS = [
  { num: "01", value: "50+", label: "Projects Shipped", sub: "Production-grade" },
  { num: "02", value: "12+", label: "Industries Served", sub: "Cross-domain" },
  { num: "03", value: "99.9%", label: "Uptime SLA", sub: "Guaranteed" },
  { num: "04", value: "5★", label: "Client Rating", sub: "Verified reviews" },
];

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

function StatCard({ stat, index }: { stat: typeof STATS[number]; index: number }) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const smx = useSpring(mx, { stiffness: 150, damping: 20 });
  const smy = useSpring(my, { stiffness: 80, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const backgroundGlow = useMotionTemplate`radial-gradient(300px circle at ${smx}% ${smy}%, var(--accent-12), transparent 70%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      className="relative p-8 md:p-10 rounded-xl border overflow-hidden"
      style={{
        background: "var(--card-gradient)",
        borderColor: "var(--border-accent)",
        willChange: "transform",
      }}
      whileHover="hover"
    >
      {/* Cursor tracking radial glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl"
        style={{ background: backgroundGlow }}
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />

      {/* Card border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        variants={{
          hover: { boxShadow: "0 0 0 1px var(--accent), 0 0 30px rgba(53,162,159,0.15)", y: -4 },
        }}
        initial={{ boxShadow: "none", y: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Large watermark number */}
      <motion.div
        className="absolute top-3 right-5 font-title text-7xl font-black select-none pointer-events-none"
        variants={{ hover: { opacity: 0.06, color: "var(--accent)" } }}
        initial={{ opacity: 0.02, color: "#ffffff" }}
        transition={{ duration: 0.3 }}
      >
        {stat.num}
      </motion.div>

      {/* Corner brackets — motion only */}
      {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-2.5 h-2.5 ${cls}`}
          variants={{ hover: { borderColor: "var(--accent)" } }}
          initial={{ borderColor: "rgba(53,162,159,0.2)" }}
          transition={{ duration: 0.25 }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <motion.span
          className="block font-bold text-4xl md:text-5xl mb-2 font-title"
          style={{ color: "var(--foreground)" }}
          variants={{ hover: { color: "var(--accent)" } }}
          initial={{ color: "var(--foreground)" }}
          transition={{ duration: 0.25 }}
        >
          <CountUp value={stat.value} />
        </motion.span>
        <span className="block text-xs uppercase tracking-widest font-bold text-white mb-1 font-tech" style={{ letterSpacing: "0.15em" }}>
          {stat.label}
        </span>
        <span className="block text-[10px] uppercase tracking-wider text-[var(--muted-text)] font-mono">
          {stat.sub}
        </span>
      </div>

      {/* Bottom accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ background: "linear-gradient(to right, var(--accent), #51E5FF)" }}
        initial={{ width: "0%" }}
        whileInView={{ width: "30%" }}
        variants={{ hover: { width: "100%" } }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 50%, var(--accent-6), transparent 70%), var(--background)",
      }}
    >
      {/* Tech grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 35%, transparent 80%)",
        }}
      />

      {/* Ambient blur glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[400px] w-[400px] rounded-full blur-[150px] opacity-[0.1]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute right-[-10%] bottom-0 h-[350px] w-[350px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: "var(--accent)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="flex items-center gap-3 text-xs uppercase mb-6 font-bold tracking-[0.25em] text-[var(--accent)] font-tech">
            <span className="h-[1px] w-8 bg-[var(--accent)] opacity-60" />
            Performance Metrics
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-white leading-[1.05] font-title" style={{ letterSpacing: "-0.02em" }}>
            Numbers That{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-cyan-300">
              Speak.
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
