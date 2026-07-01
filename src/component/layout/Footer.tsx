"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@cryonixit.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const linkColumns = [
    {
      heading: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "AI & ML", href: "#services" },
        { label: "ERP Solutions", href: "#services" },
        { label: "Cloud Architecture", href: "#services" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Process", href: "#process" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      heading: "Socials",
      links: [
        { label: "LinkedIn ↗", href: "#" },
        { label: "Twitter ↗", href: "#" },
        { label: "GitHub ↗", href: "#" },
      ],
    },
  ];

  return (
    <footer
      className="relative px-6 py-20 overflow-hidden border-t"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 100%, var(--accent-6), transparent 70%), var(--background)",
        borderTop: "1px solid var(--border-accent)",
      }}
    >
      {/* Subtle tech grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 90%, black 35%, transparent 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Modern Cockpit Header Console Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border border-[var(--accent)]/15 rounded-xl bg-black/40 p-4 md:p-6 backdrop-blur-md">
          {[
            { label: "CPU LOAD", val: "1.4% // NORMAL" },
            { label: "MEMORY POOL", val: "24.5MB // STABLE" },
            { label: "BANDWIDTH", val: "1.2 GB/S // PEAK" },
            { label: "PING LATENCY", val: "14ms // EXCELLENT" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="border-r border-[var(--accent)]/10 last:border-r-0 pl-2 md:pl-4 flex flex-col uppercase font-mono text-[9px] md:text-[10px]"
            >
              <span className="text-[var(--muted-text)] text-[8px] md:text-[9px] mb-1">{stat.label}</span>
              <span className="text-white font-bold tracking-wider">{stat.val}</span>
            </div>
          ))}
        </div>

        {/* Mid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Logo & description (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-5"
              whileHover="hover"
            >
              <span className="font-bold tracking-widest text-lg font-title" style={{ letterSpacing: "0.18em" }}>
                <motion.span
                  className="inline-block text-white"
                  variants={{ hover: { y: -2 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  CRYONIX
                </motion.span>
                <motion.span
                  className="inline-block text-[var(--accent)]"
                  variants={{ hover: { y: -2 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.04 }}
                >
                  IT
                </motion.span>
              </span>
            </motion.div>
            
            <p className="text-xs leading-relaxed text-[var(--muted-text)] font-sans max-w-sm">
              Pioneering the intersection of clean code and complex logic. One partner for your entire digital ecosystem.
            </p>

            {/* Click-to-copy email controller */}
            <div className="mt-8 flex flex-col gap-2 max-w-sm relative">
              <span className="text-[8px] uppercase tracking-widest text-[var(--accent)] font-mono font-bold">
                Operations Endpoint // Address Registration
              </span>
              <motion.button
                onClick={handleCopy}
                className="group flex items-center justify-between px-4 py-3 rounded-lg border backdrop-blur-md text-left cursor-pointer w-full bg-black/40"
                style={{
                  borderColor: copied ? "var(--accent)" : "var(--border-accent)",
                }}
                whileHover={{ borderColor: "var(--accent)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col">
                  <span className="text-xs text-white font-mono font-bold">
                    hello@cryonixit.com
                  </span>
                  <span className="text-[8px] uppercase tracking-wider text-[var(--muted-text)] font-mono mt-0.5">
                    Click to register address
                  </span>
                </div>
                <motion.span
                  className="text-[9px] font-bold font-mono uppercase px-2 py-1 rounded select-none"
                  style={{
                    background: copied ? "var(--accent)" : "var(--accent-5)",
                    color: copied ? "#000000" : "var(--accent)",
                  }}
                  animate={{ scale: copied ? [1, 1.08, 1] : 1 }}
                >
                  {copied ? "✓ COPIED" : "COPY"}
                </motion.span>
              </motion.button>
            </div>

            {/* Systems Status Indicator */}
            <div className="mt-5">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md border"
                style={{
                  background: "var(--accent-5)",
                  borderColor: "var(--border-accent)",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.15em] font-bold text-white font-mono">
                  ALL SYSTEMS OPERATIONAL // ONLINE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Links Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:pl-12">
            {linkColumns.map((col, colIdx) => (
              <motion.div
                key={col.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: colIdx * 0.1 }}
              >
                <p className="text-xs uppercase tracking-[0.15em] mb-5 font-bold text-white font-tech">
                  {col.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="text-xs no-underline flex items-center gap-2 text-[var(--muted-text)] font-sans"
                      whileHover={{
                        color: "#ffffff",
                        x: 4,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <motion.span
                        className="h-px bg-[var(--accent)] opacity-0"
                        initial={{ width: 0, opacity: 0 }}
                        whileHover={{ width: 12, opacity: 0.6 }}
                        transition={{ duration: 0.2 }}
                      />
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separator line */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)", opacity: 0.3 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-[10px] uppercase tracking-widest text-[var(--muted-text)] font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Cryonix IT. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            suppressHydrationWarning
            className="group relative w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer overflow-hidden"
            style={{
              borderColor: "var(--accent-30)",
              background: "var(--accent-5)",
              color: "var(--accent)",
            }}
            whileHover={{
              borderColor: "var(--accent)",
              background: "var(--accent)",
              color: "#000000",
              boxShadow: "var(--glow-accent)",
              scale: 1.1,
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 relative z-10" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
