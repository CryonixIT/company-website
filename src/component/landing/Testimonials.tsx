"use client";

import { motion } from "framer-motion";
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

export default function Testimonials() {
  return (
    <section
      id="clients"
      className="py-24 px-6 md:px-12 border-t"
      style={{
        background: "var(--background)",
        borderColor: "var(--accent)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <p
            className="text-xs uppercase tracking-widest mb-3 font-semibold"
            style={{ color: "var(--foreground)", letterSpacing: "0.2em" }}
          >
            // Client Stories
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase text-white leading-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            Trusted by <br />
            <span style={{ color: "var(--foreground)" }}>Operators.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded border flex flex-col justify-between relative overflow-hidden"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--accent)",
              }}
              whileHover={{ borderColor: "var(--foreground)" }}
            >
              <Quote className="w-8 h-8 opacity-25 mb-6" style={{ color: "var(--foreground)" }} />

              <p className="text-xs leading-relaxed mb-8 flex-1" style={{ color: "var(--foreground)", opacity: 0.8 }}>
                "{t.quote}"
              </p>

              <div
                className="flex items-center gap-3.5 pt-6 border-t"
                style={{ borderColor: "var(--accent)", opacity: 0.8 }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[var(--background)]"
                  style={{
                    background: "var(--foreground)",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-white text-xs font-bold uppercase tracking-wider">{t.author}</div>
                  <div className="text-[10px]" style={{ color: "var(--foreground)", opacity: 0.5 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
