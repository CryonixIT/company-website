"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin, ArrowRight, CheckCircle, Terminal } from "lucide-react";
import Button from "@/component/ui/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12 overflow-hidden border-t"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 70% 80%, var(--accent-8), transparent 70%), radial-gradient(ellipse 50% 50% at 20% 20%, var(--accent-5), transparent 70%), var(--background)",
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
          maskImage: "radial-gradient(ellipse 80% 60% at 60% 70%, black 35%, transparent 80%)",
        }}
      />

      {/* Ambient blur glows */}
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full blur-[150px] opacity-[0.12]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute left-[-8%] top-20 h-[380px] w-[380px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)" }} />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start z-10">
        {/* Left Side Text Info */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="flex items-center gap-3 text-xs uppercase mb-6 font-bold tracking-[0.25em] text-[var(--accent)] font-tech">
            <span className="h-[1px] w-8 bg-[var(--accent)] opacity-60" />
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-white leading-[1.05] font-title" style={{ letterSpacing: "-0.02em" }}>
            Initiate{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-cyan-300">
              Engagement.
            </span>
          </h2>
          <p className="text-sm leading-relaxed mb-10 max-w-sm text-[var(--muted-text)] font-sans">
            Let&apos;s construct something built to scale. Tell us about your technical parameters, timeline constraints, and systems goals. We respond with technical feedback within 2 hours.
          </p>

          {/* Contact info items with icon containers */}
          <div className="space-y-5">
            {[
              { icon: Mail, text: "hello@cryonixit.com", label: "Email" },
              { icon: Globe, text: "cryonixit.com", label: "Web" },
              { icon: MapPin, text: "Tech Hub, Silicon Valley, CA", label: "HQ" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex items-center gap-4"
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg flex items-center justify-center border backdrop-blur-md"
                    style={{
                      borderColor: "var(--accent-25)",
                      background: "var(--accent-5)",
                    }}
                    whileHover={{
                      borderColor: "var(--accent)",
                      boxShadow: "var(--glow-accent)",
                      scale: 1.05,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon className="w-4 h-4 text-[var(--accent)]" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--muted-text)] font-mono block">{item.label}</span>
                    <span className="text-xs text-white font-tech">{item.text}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side Form Box */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div
            className="relative p-8 md:p-10 rounded-xl border backdrop-blur-md overflow-hidden"
            style={{
              background: "var(--card-gradient)",
              borderColor: "var(--border-accent)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Cyberpunk corner bracket accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--accent)]/30" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)]/30" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--accent)]/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--accent)]/30" />

            {/* Decorative scan line */}
            <motion.div
              className="pointer-events-none absolute left-0 right-0 h-px opacity-[0.06]"
              style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }}
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Form header */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center border"
                style={{
                  borderColor: "var(--accent-25)",
                  background: "var(--accent-5)",
                }}
              >
                <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent)] font-tech">
                Transmission Panel
              </span>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-5"
              >
                {/* Animated success ring */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle className="w-12 h-12 text-[var(--accent)]" />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "1px solid var(--accent)" }}
                    initial={{ scale: 1 }}
                    animate={{ scale: 2.5, opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                <div
                  className="text-2xl font-bold uppercase font-title"
                  style={{ color: "var(--accent)" }}
                >
                  Transmission Received
                </div>
                <p className="text-xs text-[var(--muted-text)] max-w-xs font-sans">
                  Your brief has been logged into our system. An engineer will review and respond within 2 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { id: "name", label: "Client Identity", type: "text", placeholder: "Your name / Company name" },
                  { id: "email", label: "Channel Endpoint", type: "email", placeholder: "contact@company.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.id}
                      className="text-[10px] uppercase font-bold tracking-[0.15em] text-[var(--accent)] font-tech"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      suppressHydrationWarning
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [field.id]: e.target.value }))
                      }
                      className="w-full px-4 py-3.5 rounded-lg text-xs placeholder-zinc-600 outline-none transition-all duration-300 border backdrop-blur-md font-sans"
                      style={{
                        background: "rgba(0, 0, 0, 0.4)",
                        borderColor: "var(--border-accent)",
                        color: "var(--foreground)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.boxShadow = "var(--glow-accent-sm)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-accent)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase font-bold tracking-[0.15em] text-[var(--accent)] font-tech"
                  >
                    Technical Brief
                  </label>
                  <textarea
                    id="message"
                    required
                    suppressHydrationWarning
                    rows={4}
                    placeholder="Describe systems scope, database constraints, AI pipeline goals..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-lg text-xs placeholder-zinc-600 outline-none transition-all duration-300 resize-none border backdrop-blur-md font-sans"
                    style={{
                      background: "rgba(0, 0, 0, 0.4)",
                      borderColor: "var(--border-accent)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.boxShadow = "var(--glow-accent-sm)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-accent)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  icon={ArrowRight}
                >
                  Transmit Brief
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
