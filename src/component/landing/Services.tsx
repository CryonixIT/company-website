"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Code, Brain, Cloud, Layers, Palette, Video, Flame, Fingerprint, Server } from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  tag: string;
}

const SERVICES: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Next.js, MERN stack, and edge-native architectures built for performance at any scale. We deliver pixel-perfect interfaces backed by robust, scalable server infrastructure.",
    tag: "Next.js / React",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Custom neural networks, computer vision, NLP pipelines — intelligence engineered for your domain. From training to deployment, we own the full ML lifecycle.",
    tag: "PyTorch / Transformers",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Multi-cloud deployments, Kubernetes orchestration, and cost-optimised infrastructure strategy. We design for 99.99% uptime and horizontal scalability.",
    tag: "AWS / GCP / Azure",
  },
  {
    icon: Layers,
    title: "ERP Solutions",
    desc: "End-to-end enterprise resource planning — custom-built to unify your operations and data. Inventory, HR, finance, and logistics in one coherent system.",
    tag: "Custom ERP Systems",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interaction design and visual systems that convert. Interfaces that feel inevitable. Research-driven design sprints that eliminate guesswork.",
    tag: "Figma / Interaction",
  },
  {
    icon: Video,
    title: "CCTV Surveillance",
    desc: "Enterprise-grade IP surveillance networks with AI analytics. Real-time motion detection, license plate recognition, and centralized cloud monitoring with edge recording.",
    tag: "IP Video / AI Analytics",
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    desc: "Early detection smoke and heat sensor systems integrated with building management software. Auto-notifications, emergency zone routing, and compliant safety controls.",
    tag: "Safety / Smoke & Heat",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access",
    desc: "Multi-factor biometric access controls including fingerprint scanners, facial recognition terminals, and RFID readers. Highly secure, tamper-proof audit trails.",
    tag: "Biometrics / RFID / MFA",
  },
  {
    icon: Server,
    title: "IT Infra Building",
    desc: "High-performance structured cabling, server rack assembly, network routing and switching architecture. Built for low latency, high throughput, and maximum uptime.",
    tag: "Cabling / Networking / Racks",
  },
];

function AccordionPanel({ svc, index, isActive, onToggle }: {
  svc: Service;
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const Icon = svc.icon;
  const num = String(index + 1).padStart(2, "0");

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const smx = useSpring(mx, { stiffness: 80, damping: 20 });
  const smy = useSpring(my, { stiffness: 80, damping: 20 });

  const backgroundGlow = useMotionTemplate`radial-gradient(400px circle at ${smx}% ${smy}%, var(--accent-8), transparent 70%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        onMouseMove={handleMove}
        onClick={onToggle}
        className="group relative overflow-hidden cursor-pointer border-b"
        style={{ borderColor: "var(--border-accent)" }}
        animate={{
          backgroundColor: isActive ? "rgba(53,162,159,0.04)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Cursor-tracking glow — only rendered via motion, no CSS */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: backgroundGlow }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Active left accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: "linear-gradient(to bottom, var(--accent), #51E5FF)", originY: 0 }}
          animate={{ scaleY: isActive ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Corner brackets — pure motion opacity */}
        {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((cls, i) => (
          <motion.div
            key={i}
            className={`absolute w-2.5 h-2.5 border-[var(--accent)] ${cls}`}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
        ))}

        {/* Main row */}
        <div className="relative z-10 flex items-center gap-4 md:gap-10 px-4 md:px-10 py-5 md:py-7">
          {/* Number */}
          <motion.span
            className="font-mono text-sm font-bold shrink-0 w-8"
            animate={{ color: isActive ? "var(--accent)" : "var(--muted-text)" }}
            transition={{ duration: 0.25 }}
          >
            {num}
          </motion.span>

          {/* Icon */}
          <motion.div
            className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 border"
            animate={{
              scale: isActive ? 1.1 : 1,
              borderColor: isActive ? "var(--accent)" : "var(--accent-25)",
              background: isActive ? "var(--accent-12)" : "var(--accent-5)",
              boxShadow: isActive ? "0 0 20px rgba(53,162,159,0.3)" : "none",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-[var(--accent)]" />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="flex-1 text-sm md:text-base font-bold uppercase tracking-wider font-title flex items-center gap-3"
            animate={{ color: isActive ? "var(--accent)" : "#ffffff" }}
            transition={{ duration: 0.25 }}
          >
            {svc.title}
            <motion.span
              animate={{ x: isActive ? 3 : 0, y: isActive ? -3 : 0, opacity: isActive ? 1 : 0.4 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </motion.h3>

          {/* Tag on desktop */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="h-[1px] w-4 bg-[var(--accent)] opacity-40" />
            <span className="text-[10px] uppercase tracking-wider font-bold font-mono text-[var(--accent)]">
              {svc.tag}
            </span>
          </div>

          {/* Chevron */}
          <motion.div
            className="w-6 h-6 rounded-full border flex items-center justify-center shrink-0"
            animate={{
              rotate: isActive ? 180 : 0,
              borderColor: isActive ? "var(--accent)" : "var(--accent-25)",
            }}
            transition={{ duration: 0.3 }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[var(--accent)]">
              <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>

        {/* Expanded content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div className="relative z-10 px-4 md:px-10 pb-6 md:pb-10">
            <div className="ml-[calc(1rem+2.5rem+1rem)] md:ml-[calc(2rem+2.75rem+2.5rem)]">
              <div
                className="h-px w-full mb-5"
                style={{ background: "linear-gradient(to right, var(--accent), transparent)" }}
              />
              <motion.p
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : 15,
                }}
                transition={{ duration: 0.4, delay: isActive ? 0.08 : 0, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm leading-relaxed max-w-2xl text-[var(--muted-text)] font-sans"
              >
                {svc.desc}
              </motion.p>

              {/* Mobile tag */}
              <motion.div
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : 15,
                }}
                transition={{ duration: 0.4, delay: isActive ? 0.12 : 0 }}
                className="md:hidden mt-4 flex items-center gap-2"
              >
                <span className="h-[1px] w-4 bg-[var(--accent)] opacity-40" />
                <span className="text-[10px] uppercase tracking-wider font-bold font-mono text-[var(--accent)]">
                  {svc.tag}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="relative py-28 px-6 md:px-12 overflow-hidden border-t"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 70% 20%, var(--accent-8), transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, var(--accent-5), transparent 70%), var(--background)",
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
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 35%, transparent 80%)",
        }}
      />

      {/* Ambient blur glows */}
      <div className="pointer-events-none absolute -right-32 top-20 h-[460px] w-[460px] rounded-full blur-[150px] opacity-[0.1]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute left-[-8%] bottom-10 h-[380px] w-[380px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="flex items-center gap-3 text-xs uppercase mb-6 font-bold tracking-[0.25em] text-[var(--accent)] font-tech">
            <span className="h-[1px] w-8 bg-[var(--accent)] opacity-60" />
            Capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-white leading-[1.05] font-title" style={{ letterSpacing: "-0.02em" }}>
            Engineered for{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-cyan-300">
              Hyperscale.
            </span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md text-[var(--muted-text)] font-sans">
            One specialized partner for your entire physical and digital system footprint. We don&apos;t build temporary fixes — we design permanence.
          </p>
        </motion.div>

        {/* Accordion panels */}
        <div
          className="border-t rounded-xl overflow-hidden"
          style={{ borderColor: "var(--border-accent)" }}
        >
          {SERVICES.map((svc, i) => (
            <AccordionPanel
              key={svc.title}
              svc={svc}
              index={i}
              isActive={activeIndex === i}
              onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
