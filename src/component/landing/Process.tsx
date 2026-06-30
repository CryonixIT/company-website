"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discovery & Architecture",
    desc: "Deep-dive into your requirements. We design the entire system before writing a single line of code.",
  },
  {
    num: "02",
    title: "Rapid Prototyping",
    desc: "Working prototypes in days, not months. You see real, interactive progress from week one.",
  },
  {
    num: "03",
    title: "Build & Integrate",
    desc: "Full-stack development with continuous delivery, automated tests, and clean handoff documentation.",
  },
  {
    num: "04",
    title: "Deploy & Scale",
    desc: "Cloud infrastructure optimised for growth. We own reliability and performance post-launch.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 px-6 md:px-12 border-t"
      style={{
        background: "var(--background)",
        borderColor: "var(--accent)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side Sticky Text */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p
            className="text-xs uppercase tracking-widest mb-3 font-semibold"
            style={{ color: "var(--foreground)", letterSpacing: "0.2em" }}
          >
            // How We Work
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase mb-4 text-white leading-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            Built for <br />
            <span style={{ color: "var(--foreground)" }}>Precision.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted-text)" }}>
            We move with startup velocity coupled with enterprise-grade rigor. No pre-made templates. Every ecosystem is custom-forged to fit your exact performance parameters.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded text-xs uppercase tracking-widest font-bold transition-all duration-300"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--accent)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--foreground)";
              e.currentTarget.style.background = "var(--foreground)";
              e.currentTarget.style.color = "var(--background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "var(--card-bg)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            See Our Work <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right Side Process Cards */}
        <div className="lg:col-span-7 space-y-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded border flex gap-6 items-start group transition-colors duration-300"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--accent)",
              }}
              whileHover={{ borderColor: "var(--foreground)" }}
            >
              <span
                className="font-mono text-sm font-bold shrink-0 py-0.5 border-r pr-4"
                style={{
                  color: "var(--foreground)",
                  borderColor: "var(--accent)",
                  opacity: 0.8,
                }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.7 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
