"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Brain, Shield, Cloud, Layers, Palette } from "lucide-react";

interface Service {
  icon: any;
  title: string;
  desc: string;
  tag: string;
}

const SERVICES: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Next.js, MERN stack, and edge-native architectures built for performance at any scale.",
    tag: "Next.js / React",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Custom neural networks, computer vision, NLP pipelines — intelligence engineered for your domain.",
    tag: "PyTorch / Transformers",
  },
  {
    icon: Shield,
    title: "Hardware Security",
    desc: "AI-powered CCTV, biometric access, and physical security infrastructure — zero blind spots.",
    tag: "AI CCTV / Biometrics",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Multi-cloud deployments, Kubernetes orchestration, and cost-optimised infrastructure strategy.",
    tag: "AWS / GCP / Azure",
  },
  {
    icon: Layers,
    title: "ERP Solutions",
    desc: "End-to-end enterprise resource planning — custom-built to unify your operations and data.",
    tag: "Custom ERP Systems",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interaction design and visual systems that convert. Interfaces that feel inevitable.",
    tag: "Figma / Interaction",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-12" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-20">
          <p
            className="text-xs uppercase tracking-widest mb-3 font-semibold text-zinc-400"
            style={{ letterSpacing: "0.25em" }}
          >
            // Capabilities
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase mb-4 text-white leading-tight tracking-tight"
          >
            Engineered for <br />
            <span style={{ color: "var(--accent)" }}>Hyperscale.</span>
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            One specialized partner for your entire physical and digital system footprint. We don't build temporary fixes — we design permanence.
          </p>
        </div>

        {/* Services Grid with gap instead of border lines layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ svc, index }: { svc: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = svc.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden"
      style={{
        background: hovered ? "var(--card-bg-hover)" : "var(--card-bg)",
        borderColor: hovered ? "var(--accent)" : "rgba(234, 236, 240, 0.08)",
        boxShadow: hovered ? "0 10px 30px rgba(254, 127, 45, 0.05)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon frame */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          border: "1px solid",
          borderColor: hovered ? "var(--accent)" : "rgba(234, 236, 240, 0.15)",
          background: "var(--background)",
          color: hovered ? "var(--accent)" : "var(--foreground)",
        }}
      >
        <Icon className="w-5 h-5" />
      </div>

      <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
        {svc.title}
      </h3>
      <p className="text-xs leading-relaxed mb-6 text-zinc-400">
        {svc.desc}
      </p>

      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold font-mono" style={{ color: "var(--accent)" }}>
        <span>→</span>
        <span>{svc.tag}</span>
      </div>
    </motion.div>
  );
}
