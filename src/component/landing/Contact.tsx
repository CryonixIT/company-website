"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin, ArrowRight } from "lucide-react";

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
      className="py-24 px-6 md:px-12 relative overflow-hidden border-t"
      style={{
        background: "var(--background)",
        borderColor: "rgba(234, 236, 240, 0.08)",
      }}
    >
      {/* Subtle Background Glow */}
      <div
        className="absolute pointer-events-none rounded-full blur-[140px] opacity-15"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          bottom: "-10%",
          right: "-10%",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        {/* Left Side Text Info */}
        <div className="lg:col-span-5">
          <p
            className="text-xs uppercase tracking-widest mb-3 font-semibold text-zinc-400"
            style={{ letterSpacing: "0.2em" }}
          >
            // Contact
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase mb-6 text-white leading-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            Initiate <br />
            <span style={{ color: "var(--accent)" }}>Engagement.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-zinc-400">
            Let's construct something built to scale. Tell us about your technical parameters, timeline constraints, and systems goals. We respond with technical feedback within 2 hours.
          </p>

          <div className="space-y-4">
            {[
              { icon: Mail, text: "hello@cryonixit.com" },
              { icon: Globe, text: "cryonixit.com" },
              { icon: MapPin, text: "Tech Hub, Silicon Valley, CA" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5 text-xs">
                  <Icon className="w-4 h-4 text-zinc-400" />
                  <span className="text-zinc-300">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Form Box */}
        <div className="lg:col-span-7">
          <div
            className="p-8 rounded-2xl border"
            style={{
              background: "var(--card-bg)",
              borderColor: "rgba(234, 236, 240, 0.08)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div
                  className="text-2xl font-bold uppercase"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  ✓ Received
                </div>
                <p className="text-xs text-zinc-400">
                  Your brief has been logged. An engineer will review and respond.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { id: "name", label: "Client Identity (Name)", type: "text", placeholder: "Your name / Company name" },
                  { id: "email", label: "Channel Endpoint (Email)", type: "email", placeholder: "contact@company.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.id}
                      className="text-[10px] uppercase font-bold tracking-widest text-zinc-400"
                      style={{ letterSpacing: "0.15em" }}
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
                      className="w-full px-4 py-3 rounded-xl text-xs placeholder-opacity-30 outline-none transition-colors duration-300"
                      style={{
                        background: "var(--background)",
                        border: "1px solid rgba(234, 236, 240, 0.12)",
                        color: "var(--foreground)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(234, 236, 240, 0.12)")}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase font-bold tracking-widest text-zinc-400"
                    style={{ letterSpacing: "0.15em" }}
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
                    className="w-full px-4 py-3 rounded-xl text-xs outline-none transition-colors duration-300 resize-none"
                    style={{
                      background: "var(--background)",
                      border: "1px solid rgba(234, 236, 240, 0.12)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(234, 236, 240, 0.12)")}
                  />
                </div>
                <button
                  type="submit"
                  suppressHydrationWarning
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: "var(--accent)",
                    color: "#000000",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(254, 127, 45, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Send Brief <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
