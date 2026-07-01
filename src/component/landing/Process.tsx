"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useScroll } from "framer-motion";
import { ArrowUpRight, Compass, Zap, Code2, Globe } from "lucide-react";
import Button from "@/component/ui/Button";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS: Step[] = [
  { 
    num: "01", 
    title: "Discovery & Architecture", 
    desc: "Deep-dive into your requirements. We design the entire system before writing a single line of code.",
    icon: Compass 
  },
  { 
    num: "02", 
    title: "Rapid Prototyping", 
    desc: "Working prototypes in days, not months. You see real, interactive progress from week one.",
    icon: Zap 
  },
  { 
    num: "03", 
    title: "Build & Integrate", 
    desc: "Full-stack development with continuous delivery, automated tests, and clean handoff documentation.",
    icon: Code2 
  },
  { 
    num: "04", 
    title: "Deploy & Scale", 
    desc: "Cloud infrastructure optimised for growth. We own reliability and performance post-launch.",
    icon: Globe 
  },
];

function ProcessCard({ step, index }: { step: Step; index: number }) {
  // Motion values drive the cursor-following glow sweep dynamically without triggering React re-renders
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const smx = useSpring(mx, { stiffness: 150, damping: 20 });
  const smy = useSpring(my, { stiffness: 150, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  // Re-evaluate template dynamically using framer-motion's useMotionTemplate hook
  const backgroundGlow = useMotionTemplate`radial-gradient(350px circle at ${smx}% ${smy}%, color-mix(in srgb, var(--accent) 15%, transparent), transparent 70%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      className="relative flex gap-6 sm:gap-8 items-start"
    >
      {/* Timeline Node Container */}
      <motion.div
        className="relative z-10 hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-black"
        style={{
          borderColor: "rgba(53, 162, 159, 0.25)",
          boxShadow: "0 0 15px rgba(53, 162, 159, 0.05)",
        }}
        variants={{
          hover: {
            scale: 1.1,
            borderColor: "var(--accent)",
            boxShadow: "0 0 25px rgba(53, 162, 159, 0.4)",
          }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <step.icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
        
        {/* Pulsing indicator dot on card hover */}
        <motion.span 
          className="absolute -top-1 -right-1 flex h-2.5 w-2.5 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          variants={{ hover: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.2 }}
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]"></span>
        </motion.span>
      </motion.div>

      {/* Process Card Details */}
      <motion.div
        onMouseMove={handleMove}
        className="relative flex-1 p-8 rounded-xl border overflow-hidden"
        style={{
          background: "linear-gradient(160deg, rgba(53, 162, 159, 0.06) 0%, rgba(255, 255, 255, 0.01) 80%)",
          borderColor: "rgba(53, 162, 159, 0.15)",
          willChange: "transform",
        }}
        variants={{
          hover: {
            borderColor: "var(--accent)",
            boxShadow: "0 20px 45px -15px rgba(53, 162, 159, 0.25)",
            y: -4
          }
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Cursor tracking radial glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl"
          style={{ background: backgroundGlow }}
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Large watermark number */}
        <motion.div
          className="absolute top-4 right-6 font-title text-6xl font-black select-none pointer-events-none"
          variants={{ hover: { opacity: 0.06, color: "var(--accent)" } }}
          initial={{ opacity: 0.02, color: "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          {step.num}
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

        <div className="relative flex items-start gap-4 z-10">
          <span
            className="sm:hidden font-mono text-sm font-bold shrink-0 py-0.5 border-r pr-4"
            style={{ color: "var(--accent)", borderColor: "rgba(53, 162, 159, 0.3)" }}
          >
            {step.num}
          </span>
          <div>
            <motion.h3
              className="text-base font-bold uppercase tracking-wider mb-3 flex items-center gap-2 font-title"
              variants={{ hover: { color: "var(--accent)" } }}
              initial={{ color: "#ffffff" }}
              transition={{ duration: 0.25 }}
            >
              {step.title}
              <motion.span
                className="inline-flex"
                variants={{ hover: { x: 3, y: -3 } }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowUpRight className="w-4 h-4" style={{ color: "var(--accent)" }} />
              </motion.span>
            </motion.h3>
            <motion.p
              className="text-sm leading-relaxed max-w-md font-sans"
              variants={{ hover: { color: "rgba(255,255,255,0.9)" } }}
              initial={{ color: "var(--muted-text)" }}
              transition={{ duration: 0.25 }}
            >
              {step.desc}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the steps container relative to the center of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  // Smoothly damp the scroll timeline scale
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section
      id="process"
      className="relative py-28 px-6 md:px-12 border-t overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 30% 20%, rgba(53, 162, 159, 0.08), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(53, 162, 159, 0.04), transparent 70%), var(--background)",
        borderTop: "1px solid rgba(53, 162, 159, 0.15)",
      }}
    >
      {/* Dynamic tech grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 35%, transparent 80%)",
        }}
      />
      
      {/* Background ambient lighting glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[460px] w-[460px] rounded-full blur-[150px] opacity-[0.12]" style={{ background: "var(--foreground)" }} />
      <div className="pointer-events-none absolute right-[-10%] bottom-0 h-[380px] w-[380px] rounded-full blur-[140px] opacity-[0.08]" style={{ background: "var(--foreground)" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)" }} />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Title & Intro */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="flex items-center gap-3 text-xs uppercase mb-6 font-bold tracking-[0.25em] text-[var(--accent)] font-tech">
              <span className="h-[1px] w-8 bg-[var(--accent)] opacity-60" />
              How We Work
            </p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-white leading-[1.05] font-title" style={{ letterSpacing: "-0.02em" }}>
              Built for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-cyan-300">
                Precision.
              </span>
            </h2>
            <p className="text-sm leading-relaxed mb-9 max-w-sm text-[var(--muted-text)] font-sans">
              We move with startup velocity coupled with enterprise-grade rigor. No pre-made templates. Every ecosystem is custom-forged to fit your exact performance parameters.
            </p>

            <Button href="#contact">
              See Our Work
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Timeline & Process Cards */}
        <div className="lg:col-span-7 relative" ref={containerRef}>
          {/* Static Background Timeline track */}
          <div
            className="hidden sm:block absolute left-[27px] top-3 bottom-3 w-[2px]"
            style={{ background: "rgba(53, 162, 159, 0.12)" }}
          />
          {/* Scroll-Linked Progress Timeline Line */}
          <motion.div
            className="hidden sm:block absolute left-[27px] top-3 bottom-3 w-[2px] origin-top"
            style={{ 
              backgroundImage: "linear-gradient(to bottom, var(--accent), #51E5FF)",
              scaleY 
            }}
          />
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <ProcessCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}