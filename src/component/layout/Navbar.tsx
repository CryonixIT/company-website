"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when full-screen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(254, 127, 45, 0.15)" : "1px solid rgba(254, 127, 45, 0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-2 group relative z-50"
          >
            <span
              className="font-bold tracking-widest text-2xl transition-colors duration-300"
              style={{
                letterSpacing: "0.18em",
              }}
            >
              <span className="text-white">CRYONIX</span>
              <span style={{ color: "var(--accent)" }}>IT</span>
            </span>
          </motion.a>

          {/* Custom Animated CSS Hamburger Menu Trigger */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-50 transition-all duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className="w-7 h-[2px] transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
                background: menuOpen ? "#ffffff" : "var(--foreground)"
              }}
            />
            <span 
              className="w-7 h-[2px] transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                background: "var(--foreground)"
              }}
            />
            <span 
              className="w-7 h-[2px] transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none",
                background: menuOpen ? "#ffffff" : "var(--foreground)"
              }}
            />
          </motion.button>
        </div>
      </nav>

      {/* Full-Screen Menu (100vw, 100vh) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen z-45 flex flex-col justify-between p-8 md:p-16 overflow-hidden"
            style={{
              background: "rgba(0, 0, 0, 0.96)",
              backdropFilter: "blur(24px)",
            }}
          >
            {/* Technical grid backdrop in menu */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white" />
              <div className="absolute left-[66%] top-0 bottom-0 w-px bg-white" />
              <div className="absolute top-[50%] left-0 right-0 h-px bg-white" />
            </div>

            {/* Menu Header space */}
            <div className="h-12" />

            {/* Menu Core Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-auto">
              {/* Left Side Cryonix IT Text Structure */}
              <div className="md:col-span-5 flex flex-col justify-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-4"
                >
                  <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold block">
                    // ARCHITECTURE & INTEGRITY
                  </span>
                  <h2 className="text-white text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
                    CRYONIX<span style={{ color: "var(--accent)" }}>IT</span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                    Forging high-performance digital infrastructure for enterprises demanding absolute precision.
                  </p>
                </motion.div>
              </div>

              {/* Right Side Large Menu Links */}
              <div className="md:col-span-7 flex flex-col items-start md:pl-12 border-l border-zinc-900">
                <nav className="flex flex-col gap-6 w-full">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx + 0.3, duration: 0.6 }}
                      className="w-full"
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-4xl md:text-7xl font-black uppercase transition-all duration-300 flex items-center gap-4 relative group py-2"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {/* Number Index */}
                        <span className="text-xs font-mono text-zinc-600 transition-colors duration-300 group-hover:text-[var(--accent)]">
                          0{idx + 1}
                        </span>
                        {/* Label with slide offset */}
                        <span className="transition-transform duration-300 group-hover:translate-x-3 group-hover:text-[var(--accent)] flex items-center gap-4">
                          {link.label}
                          <span className="text-xl md:text-3xl opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--accent)" }}>
                            →
                          </span>
                        </span>
                      </a>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="pt-6"
                  >
                    <a
                      href="#contact"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border"
                      style={{
                        borderColor: "var(--accent)",
                        background: "transparent",
                        color: "var(--accent)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.color = "#000000";
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(254, 127, 45, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--accent)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Start Project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </nav>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-900 pt-6">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                CRYONIX IT // ESTABLISHED 2024
              </span>
              <div className="flex gap-6">
                {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
