"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  initial: string;
  isFounder: boolean;
  image: string;
  linkedin: string;
  email: string;
}

const FOUNDERS: TeamMember[] = [
  {
    name: "Mitesh Amin",
    role: "Co-Founder & Chief Architect",
    department: "Software Department",
    initial: "MA",
    isFounder: true,
    image: "/assets/team/mitesh.png",
    linkedin: "https://linkedin.com/in/mitesh-amin",
    email: "mitesh@cryonixit.com",
  },
  {
    name: "Dax Patel",
    role: "Co-Founder & Systems Director",
    department: "Hardware Department",
    initial: "DP",
    isFounder: true,
    image: "/assets/team/dax.png",
    linkedin: "https://linkedin.com/in/dax-patel",
    email: "dax@cryonixit.com",
  },
];

const TEAM: TeamMember[] = [
  {
    name: "Tirth Dabgar",
    role: "Frontend Architect",
    department: "Engineering Core",
    initial: "TD",
    isFounder: false,
    image: "/assets/team/tirth.png",
    linkedin: "https://linkedin.com/in/tirth-dabgar",
    email: "tirth@cryonixit.com",
  },
  {
    name: "Moin Chhipa",
    role: "Backend Lead",
    department: "Engineering Core",
    initial: "MC",
    isFounder: false,
    image: "/assets/team/moin.png",
    linkedin: "https://linkedin.com/in/moin-chhipa",
    email: "moin@cryonixit.com",
  },
];

function MemberCard({ member, index, large = false }: { member: TeamMember; index: number; large?: boolean }) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const smx = useSpring(mx, { stiffness: 150, damping: 20 });
  const smy = useSpring(my, { stiffness: 150, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const backgroundGlow = useMotionTemplate`radial-gradient(350px circle at ${smx}% ${smy}%, var(--accent-12), transparent 70%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      onMouseMove={handleMove}
      className={`group relative rounded-xl border backdrop-blur-md overflow-hidden bg-black/40 flex flex-col justify-between ${large ? "p-10 md:p-12" : "p-8"}`}
      style={{
        background: "var(--card-gradient)",
        borderColor: "var(--border-accent)",
      }}
    >
      {/* Cursor tracking radial glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: backgroundGlow }}
      />

      {/* Large initial watermark */}
      <div className={`absolute top-4 right-6 font-title font-black select-none pointer-events-none text-white/[0.01] group-hover:text-[var(--accent)]/[0.03] transition-colors duration-500 ${large ? "text-8xl" : "text-7xl"}`}>
        {member.initial}
      </div>

      {/* Cyberpunk corner bracket accents */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[var(--accent)]/20 group-hover:border-[var(--accent)] transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[var(--accent)]/20 group-hover:border-[var(--accent)] transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[var(--accent)]/20 group-hover:border-[var(--accent)] transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[var(--accent)]/20 group-hover:border-[var(--accent)] transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
        {/* Profile Image Wrapper */}
        <motion.div
          className="relative shrink-0 rounded-xl overflow-hidden border backdrop-blur-md"
          style={{
            width: large ? "130px" : "100px",
            height: large ? "130px" : "100px",
            borderColor: "var(--accent-25)",
            background: "rgba(0, 0, 0, 0.4)",
            boxShadow: "0 0 15px rgba(53, 162, 159, 0.05)",
          }}
          variants={{
            hover: {
              scale: 1.05,
              borderColor: "var(--accent)",
              boxShadow: "var(--glow-accent)",
            },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Cyberpunk grid/scanline overlay on image */}
          <div className="pointer-events-none absolute inset-0 z-20 opacity-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[size:100%_4px,_3px_100%]" />
          
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover select-none filter grayscale contrast-110 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />

          {/* Founder badge on image top left */}
          {member.isFounder && (
            <motion.div
              className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[7px] uppercase tracking-wider font-bold font-mono border z-30"
              style={{
                background: "rgba(0, 0, 0, 0.8)",
                borderColor: "var(--accent-30)",
                color: "var(--accent)",
              }}
            >
              LDR
            </motion.div>
          )}
        </motion.div>

        {/* Text and Actions details */}
        <div className="flex-1 flex flex-col justify-between h-full pt-1">
          <div>
            {/* Name */}
            <h3 className={`font-bold text-white uppercase tracking-wider font-title group-hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-2 ${large ? "text-lg md:text-xl mb-1.5" : "text-base mb-1"}`}>
              {member.name}
              <motion.span
                className="inline-flex"
                variants={{ hover: { x: 3, y: -3 } }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowUpRight className="w-4 h-4 text-[var(--accent)] opacity-60" />
              </motion.span>
            </h3>

            {/* Role */}
            <p className="text-xs text-[var(--muted-text)] font-sans group-hover:text-white/80 transition-colors duration-300">
              {member.role}
            </p>
          </div>

          {/* Social Redirections */}
          <div className="flex items-center gap-2.5 mt-5">
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg border text-[9px] font-bold font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer"
              style={{
                borderColor: "var(--accent-25)",
                background: "var(--accent-5)",
                color: "var(--accent)",
              }}
              whileHover={{
                borderColor: "var(--accent)",
                background: "var(--accent)",
                color: "#000000",
                boxShadow: "var(--glow-accent-sm)",
                y: -1,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={`${member.name}'s LinkedIn`}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href={`mailto:${member.email}`}
              className="px-3 py-1.5 rounded-lg border text-[9px] font-bold font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer"
              style={{
                borderColor: "var(--accent-25)",
                background: "var(--accent-5)",
                color: "var(--accent)",
              }}
              whileHover={{
                borderColor: "var(--accent)",
                background: "var(--accent)",
                color: "#000000",
                boxShadow: "var(--glow-accent-sm)",
                y: -1,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Mail ${member.name}`}
            >
              Email
            </motion.a>
          </div>
        </div>
      </div>

      {/* Department tag */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[var(--accent)]/10 group-hover:border-[var(--accent)]/30 transition-colors duration-300">
        <motion.div
          className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold font-mono text-[var(--accent)]"
          variants={{ hover: { x: 4 } }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="h-[1px] w-4 bg-[var(--accent)] opacity-60 group-hover:w-6 transition-all duration-300" />
          {member.department}
        </motion.div>
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

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-28 px-6 md:px-12 overflow-hidden border-t"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 40% 30%, var(--accent-8), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 70%, var(--accent-5), transparent 70%), var(--background)",
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
      <div className="pointer-events-none absolute -left-32 top-20 h-[460px] w-[460px] rounded-full blur-[150px] opacity-[0.1]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute right-[-8%] bottom-10 h-[380px] w-[380px] rounded-full blur-[140px] opacity-[0.06]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="max-w-xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="flex items-center gap-3 text-xs uppercase mb-6 font-bold tracking-[0.25em] text-[var(--accent)] font-tech">
            <span className="h-[1px] w-8 bg-[var(--accent)] opacity-60" />
            The Collective
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-white leading-[1.05] font-title" style={{ letterSpacing: "-0.02em" }}>
            Minds Behind{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-cyan-300">
              The Machine.
            </span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md text-[var(--muted-text)] font-sans">
            A tight-knit crew of builders, architects, and problem solvers. No layers of management — direct access to the engineers shaping your product.
          </p>
        </motion.div>

        {/* Founders label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-12" style={{ background: "linear-gradient(to right, var(--accent), transparent)" }} />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent)] font-tech">
            Leadership
          </span>
        </motion.div>

        {/* Founders grid — large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {FOUNDERS.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} large />
          ))}
        </div>

        {/* Team label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-12" style={{ background: "linear-gradient(to right, var(--accent), transparent)" }} />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent)] font-tech">
            Engineering Core
          </span>
        </motion.div>

        {/* Team grid — standard cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TEAM.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
