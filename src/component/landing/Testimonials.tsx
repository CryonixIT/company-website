"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Cryonix delivered our entire custom ERP in 6 weeks. The software engineering standard is world-class — absolutely zero technical debt.",
    author: "Arjun Mehta",
    role: "CTO, LogiCore Systems",
    initial: "AM",
  },
  {
    quote: "The AI CCTV hardware-security pipeline they designed has performed flawlessly. False positives have dropped to near zero.",
    author: "Priya Sharma",
    role: "Head of Operations, SecureVault",
    initial: "PS",
  },
  {
    quote: "We brought a vague specification and received a production-ready system within weeks. They operate at a different layer of execution.",
    author: "Daniel Osei",
    role: "Founder, Quantify AI",
    initial: "DO",
  },
];

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[number]; index: number }) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const smx = useSpring(mx, { stiffness: 150, damping: 20 });
  const smy = useSpring(my, { stiffness: 150, damping: 20 });

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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMove}
      whileHover="hover"
      className="relative p-8 rounded-xl border overflow-hidden flex flex-col justify-between"
      style={{
        background: "var(--card-gradient)",
        borderColor: "var(--border-accent)",
        willChange: "transform",
      }}
    >
      {/* Cursor tracking radial glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl"
        style={{ background: backgroundGlow }}
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        variants={{ hover: { boxShadow: "0 0 0 1px var(--accent), 0 0 30px rgba(53,162,159,0.1)" } }}
        initial={{ boxShadow: "none" }}
        transition={{ duration: 0.3 }}
      />

      {/* Large quotation watermark */}
      <motion.div
        className="absolute top-4 right-6 font-title text-8xl font-black select-none pointer-events-none leading-none"
        variants={{ hover: { opacity: 0.06, color: "var(--accent)" } }}
        initial={{ opacity: 0.02, color: "#ffffff" }}
        transition={{ duration: 0.3 }}
      >
        &ldquo;
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
      <div className="relative z-10">
        {/* Quote icon */}
        <motion.div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 border"
          style={{ borderColor: "var(--accent-25)", background: "var(--accent-5)" }}
          variants={{ hover: { borderColor: "var(--accent)", boxShadow: "0 0 15px rgba(53,162,159,0.3)" } }}
          transition={{ duration: 0.3 }}
        >
          <Quote className="w-4 h-4 text-[var(--accent)]" />
        </motion.div>

        <motion.p
          className="text-sm leading-relaxed mb-8 flex-1 font-sans"
          variants={{ hover: { color: "rgba(255,255,255,0.9)" } }}
          initial={{ color: "var(--muted-text)" }}
          transition={{ duration: 0.25 }}
        >
          &ldquo;{t.quote}&rdquo;
        </motion.p>
      </div>

      {/* Author section */}
      <div className="relative z-10">
        <div
          className="h-px w-full mb-6"
          style={{ background: "linear-gradient(to right, var(--accent), transparent)" }}
        />
        <div className="flex items-center gap-3.5">
          <motion.div
            className="relative"
            variants={{ hover: { scale: 1.05 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-title relative z-10"
              style={{ background: "linear-gradient(135deg, var(--accent), #51E5FF)", color: "#000000" }}
            >
              {t.initial}
            </div>
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid var(--accent)" }}
              initial={{ scale: 1, opacity: 0 }}
              variants={{ hover: { scale: 1.6, opacity: [0, 0.5, 0], transition: { duration: 1.5, repeat: Infinity } } }}
            />
          </motion.div>
          <div>
            <div className="text-white text-xs font-bold uppercase tracking-wider font-tech">{t.author}</div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--muted-text)] font-mono">{t.role}</div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ background: "linear-gradient(to right, var(--accent), #51E5FF)" }}
        initial={{ width: "0%" }}
        variants={{ hover: { width: "100%" } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="clients"
      className="relative py-28 px-6 md:px-12 overflow-hidden border-t"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 20%, var(--accent-8), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 80%, var(--accent-5), transparent 70%), var(--background)",
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
      <div className="pointer-events-none absolute left-[-5%] top-10 h-[400px] w-[400px] rounded-full blur-[150px] opacity-[0.1]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute right-[-8%] bottom-10 h-[350px] w-[350px] rounded-full blur-[140px] opacity-[0.07]" style={{ background: "var(--accent)" }} />
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
            Client Stories
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-white leading-[1.05] font-title" style={{ letterSpacing: "-0.02em" }}>
            Trusted by{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-cyan-300">
              Operators.
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.author} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
