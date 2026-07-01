"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_BADGES = [
  "Next.js", "TypeScript", "Python", "PyTorch",
  "AWS", "Kubernetes", "Figma", "PostgreSQL"
];

const METRICS = [
  { num: "01", label: "Years of Craft", value: "3+", sub: "Est. 2024" },
  { num: "02", label: "Code Commits", value: "24K+", sub: "Verified codebase" },
  { num: "03", label: "Countries Served", value: "8", sub: "Global clients" },
  { num: "04", label: "Response Time", value: "<2h", sub: "Under SLA contract" },
];

function MetricNode({ metric, index }: { metric: typeof METRICS[number]; index: number }) {
  const ratio = index === 0 ? "85%" : index === 1 ? "95%" : index === 2 ? "70%" : "99%";

  return (
    <motion.div
      className="relative pl-8 md:pl-10 pb-12 last:pb-0 group"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Node pulse status indicator */}
      <div className="absolute left-[-6px] top-2 z-10 flex h-3 w-3 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]" />
      </div>

      {/* Horizontal connector line */}
      <div
        className="absolute left-[6px] top-[13px] h-[1px] w-6 md:w-8 border-t border-dashed"
        style={{ borderColor: "var(--border-accent)" }}
      />

      {/* Blueprint Content Row */}
      <div className="pl-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex items-baseline gap-3.5">
          {/* Cyberpunk address log */}
          <span className="font-mono text-[9px] text-[var(--accent)] opacity-40 select-none">
            [SYS_NODE_0{metric.num}]
          </span>
          <div className="flex flex-col">
            <span className="text-white text-xs uppercase font-bold tracking-wider mb-0.5 font-tech group-hover:text-[var(--accent)] transition-colors duration-300">
              {metric.label}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[var(--muted-text)] font-mono">
              {metric.sub}
            </span>
          </div>
        </div>

        {/* Value and telemetry progress meter */}
        <div className="flex flex-col sm:items-end gap-1.5 min-w-[140px] md:min-w-[160px]">
          <span className="text-2xl md:text-3xl font-black font-title text-white group-hover:text-[var(--accent)] transition-colors duration-300">
            {metric.value}
          </span>
          
          {/* Telemetry progress bar */}
          <div className="h-[3px] w-full bg-zinc-900 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 rounded-full"
              style={{ background: "linear-gradient(to right, var(--accent), #51E5FF)" }}
              initial={{ width: "0%" }}
              whileInView={{ width: ratio }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 overflow-hidden border-t"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 30% 30%, var(--accent-8), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 70%, var(--accent-5), transparent 70%), var(--background)",
        borderTop: "1px solid var(--border-accent)",
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
      <div className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full blur-[150px] opacity-[0.1]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute right-[-8%] bottom-0 h-[350px] w-[350px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)" }} />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Info */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="flex items-center gap-3 text-xs uppercase mb-6 font-bold tracking-[0.25em] text-[var(--accent)] font-tech">
            <span className="h-[1px] w-8 bg-[var(--accent)] opacity-60" />
            Who We Are
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-white leading-[1.05] font-title" style={{ letterSpacing: "-0.02em" }}>
            Engineering{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-cyan-300">
              Excellence.
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-6 max-w-md text-[var(--muted-text)] font-sans">
            Cryonix IT was established with a conviction: that the boundary dividing software intelligence and physical infrastructure is artificial. We design end-to-end architectures that span both seamlessly.
          </p>
          <p className="text-sm leading-relaxed mb-10 max-w-md text-[var(--muted-text)] font-sans">
            Our collective consists of engineers and product thinkers from top research labs and startups. We reject pre-packaged templates and offshore workflows, maintaining absolute control over the code quality.
          </p>

          {/* Tech Badges with hover animation */}
          <div className="flex flex-wrap gap-2.5">
            {TECH_BADGES.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "var(--accent)",
                  boxShadow: "var(--glow-accent)",
                  color: "#ffffff",
                }}
                className="px-4 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-widest font-mono cursor-default border backdrop-blur-md"
                style={{
                  borderColor: "var(--accent-25)",
                  color: "var(--foreground)",
                  background: "var(--accent-5)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right Side Schematic Blueprint Panel */}
        <div className="lg:col-span-6 relative pl-4 md:pl-8">
          {/* Vertical dashed timeline guide */}
          <div
            className="absolute left-0 top-3 bottom-3 w-[1px] border-l border-dashed"
            style={{ borderColor: "var(--border-accent)" }}
          />

          {METRICS.map((metric, i) => (
            <MetricNode key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
