"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/component/ui/Button";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS_LEFT: NavLink[] = [
  { label: "Engineering", href: "#engineering" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Stats", href: "#stats" },
];

const NAV_LINKS_RIGHT: NavLink[] = [
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
];

function MenuLink({
  link,
  idx,
  onClick,
  onHover,
}: {
  link: NavLink;
  idx: number;
  onClick: () => void;
  onHover: (label: string | null) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 * idx + 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href={link.href}
        onClick={onClick}
        onMouseEnter={() => onHover(link.label)}
        onMouseLeave={() => onHover(null)}
        className="relative flex items-center gap-3 py-2.5 px-4 rounded-xl cursor-pointer"
        style={{ textDecoration: "none" }}
        whileHover="hover"
        initial="rest"
      >
        {/* Hover background — pure motion, no CSS transition */}
        <motion.span
          className="absolute inset-0 rounded-xl"
          variants={{
            rest: { opacity: 0, backgroundColor: "var(--accent-5)" },
            hover: { opacity: 1, backgroundColor: "var(--accent-5)" },
          }}
          transition={{ duration: 0.2 }}
          style={{ border: "1px solid var(--border-accent)" }}
        />

        <motion.span
          className="relative z-10 font-mono text-[10px] font-bold"
          variants={{ rest: { color: "#52525b" }, hover: { color: "var(--accent)" } }}
          transition={{ duration: 0.2 }}
        >
          {String(idx + 1).padStart(2, "0")}
        </motion.span>

        <motion.span
          className="relative z-10 font-black uppercase font-title"
          style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
          variants={{ rest: { color: "#ffffff", x: 0 }, hover: { color: "var(--accent)", x: 8 } }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {link.label}
        </motion.span>

        <motion.span
          className="relative z-10 ml-auto"
          style={{ color: "var(--accent)" }}
          variants={{ rest: { opacity: 0, x: -10 }, hover: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const getTelemetryLog = (label: string | null) => {
    const logs: Record<string, { event: string; desc: string; port: string }> = {
      Engineering: { event: "ENGINEERING_CONTROL_CENTER // STACK_INIT", desc: "Booting full-stack engineering nodes: Frontend, Backend, UI/UX, and Deployment subsystems. All modules online.", port: "PORT::3000" },
      Projects: { event: "PROJECT_REGISTRY_QUERY // PORTFOLIO_INDEX", desc: "Retrieving curated production builds: LogiCore ERP, SecureVault Auth, Quantify Analytics. Build status: 100% production-grade.", port: "PORT::3004" },
      Process: { event: "DEV_TIMELINE_COMPUTING // SCRUM_INDEX", desc: "Re-scanning step indices: Discovery -> Prototyping -> Build -> Scaling. Automated delivery pipeline: Ready.", port: "PORT::3001" },
      Stats: { event: "METRICS_AGGREGATOR // LIVE_STATS_FEED", desc: "Pulling KPI feed: 50+ projects shipped, 12+ industries served, 99.9% uptime SLA, 5-star client satisfaction.", port: "PORT::3005" },
      Team: { event: "COLLECTIVE_REGISTRY // OPERATOR_PROFILES", desc: "Loading team manifest: Mitesh Amin, Dax Patel, Tirth Dabgar, Moin Chhipa. All nodes active and online.", port: "PORT::3006" },
      Services: { event: "CORE_SERVICES_INDEXING // STACK_QUERY", desc: "Querying active microservices, database interfaces, hardware sensors, and AI pipeline hubs. Status: 100% stable.", port: "PORT::3000" },
      About: { event: "SYSTEMS_SPEC_READOUT // INTEGRATION_LOG", desc: "Accessing core architecture registry: 3+ years of craft, 24K+ verified commits, 8 countries served, <2h response.", port: "PORT::3002" },
      Clients: { event: "OPERATOR_CLIENT_REGISTRY // HANDSHAKE", desc: "Fetching active client integrations. Handshake parameters verified. Encrypted connection established.", port: "PORT::3003" },
    };
    return logs[label ?? ""] ?? { event: "TERMINAL_STANDBY // LISTENING_ON_NETWORK", desc: "Cryonix IT dashboard online. Awaiting client operator input to initialize system mapping...", port: "PORT::3000" };
  };

  const telemetry = getTelemetryLog(hoveredLink);
  const allLinks = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.88)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
          borderBottomColor: scrolled ? "var(--border-accent)" : "transparent",
        }}
        transition={{ duration: 0.4 }}
        style={{ borderBottom: "1px solid" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-1 relative z-50 py-1 px-3 rounded-lg"
            whileHover="hover"
            initial="rest"
            style={{ textDecoration: "none" }}
          >
            <motion.span
              className="absolute inset-0 rounded-lg"
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
              style={{ background: "radial-gradient(circle, var(--accent-12) 0%, transparent 80%)", filter: "blur(8px)" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative font-title font-bold text-2xl" style={{ letterSpacing: "0.18em" }}>
              <motion.span className="inline-block text-white" variants={{ rest: { y: 0 }, hover: { y: -2 } }} transition={{ type: "spring", stiffness: 400, damping: 12 }}>CRYONIX</motion.span>
              <motion.span className="inline-block" style={{ color: "var(--accent)" }} variants={{ rest: { y: 0 }, hover: { y: -2 } }} transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.04 }}>IT</motion.span>
            </span>
          </motion.a>

          {/* Hamburger */}
          <motion.button
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-50 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle menu"
          >
            {[
              { rotate: menuOpen ? 45 : 0, x: menuOpen ? 4 : 0, y: menuOpen ? 6 : 0 },
              { opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 },
              { rotate: menuOpen ? -45 : 0, x: menuOpen ? 4 : 0, y: menuOpen ? -6 : 0 },
            ].map((anim, i) => (
              <motion.span
                key={i}
                className="w-7 h-[2px] rounded-full"
                animate={{ ...anim, backgroundColor: menuOpen ? "#ffffff" : "var(--foreground)" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </motion.button>
        </div>
      </motion.nav>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen z-40 bg-black overflow-y-auto overflow-x-hidden flex flex-col"
            style={{ willChange: "clip-path" }}
          >
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)", backgroundSize: "64px 64px" }}
            />

            <div className="flex-1 flex flex-col justify-between p-6 md:p-12 lg:p-16 relative z-10">
              <div className="h-20 shrink-0" />

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start my-auto w-full max-w-7xl mx-auto">
                {/* Left: Telemetry Terminal */}
                <div className="lg:col-span-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="rounded-xl overflow-hidden relative"
                    style={{ border: "1px solid var(--border-accent)", background: "var(--card-gradient)" }}
                  >
                    {/* Corner brackets */}
                    {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((cls, i) => (
                      <div key={i} className={`absolute w-2 h-2 ${cls}`} style={{ borderColor: "var(--accent-30)" }} />
                    ))}

                    <div className="p-5 md:p-6">
                      <div className="flex items-center justify-between border-b pb-3 mb-4 font-mono text-[9px] uppercase tracking-widest" style={{ borderColor: "var(--border-accent)", color: "var(--accent)" }}>
                        <span>SYS@CRYONIX-IT ~ TELEMETRY</span>
                        <span className="animate-pulse">● LIVE</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-[10px] uppercase">
                        {[["ENDPOINT:", "192.168.31.212"], ["LATENCY:", "14ms"], ["PORT:", telemetry.port], ["ENC:", "SSL_ACTIVE"]].map(([k, v]) => (
                          <div key={k}>
                            <span className="block mb-0.5" style={{ color: "var(--muted-text)" }}>{k}</span>
                            <span className="font-bold" style={{ color: k === "ENC:" ? "var(--accent)" : "#ffffff" }}>{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-4" style={{ borderColor: "var(--border-accent)" }}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={telemetry.event}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="font-mono text-[9px] uppercase tracking-widest font-bold block mb-2" style={{ color: "var(--accent)" }}>
                              {telemetry.event}
                            </span>
                            <p className="text-xs leading-relaxed font-sans min-h-[54px]" style={{ color: "var(--muted-text)" }}>
                              {telemetry.desc}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right: Two-column nav grid */}
                <div className="lg:col-span-8 lg:pl-8 border-l" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {[...NAV_LINKS_LEFT.map((l, i) => ({ l, i })), ...NAV_LINKS_RIGHT.map((l, i) => ({ l, i: i + NAV_LINKS_LEFT.length }))].map(({ l, i }) => (
                      <MenuLink
                        key={l.label}
                        link={l}
                        idx={i}
                        onClick={() => setMenuOpen(false)}
                        onHover={setHoveredLink}
                      />
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-8 pl-4"
                  >
                    <Button href="#contact" magnetic onClick={() => setMenuOpen(false)}>
                      Start Project
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Bottom bar */}
              <motion.div
                className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 mt-8 w-full max-w-7xl mx-auto shrink-0"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">CRYONIX IT // EST. 2024</span>
                <div className="flex gap-6">
                  {["LinkedIn", "Twitter", "GitHub"].map((s) => (
                    <motion.a
                      key={s}
                      href="#"
                      className="text-[10px] uppercase tracking-widest font-mono font-bold"
                      style={{ color: "#71717a", textDecoration: "none" }}
                      whileHover={{ color: "var(--accent)", y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {s}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}