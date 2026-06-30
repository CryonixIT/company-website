"use client";

import { motion } from "framer-motion";

const TECH_BADGES = [
  "Next.js", "TypeScript", "Python", "PyTorch", 
  "AWS", "Kubernetes", "Figma", "PostgreSQL"
];

const METRICS = [
  { label: "Years of Craft", value: "3+", sub: "Est. 2024" },
  { label: "Code Commits", value: "24K+", sub: "Verified codebase" },
  { label: "Countries Served", value: "8", sub: "Global clients" },
  { label: "Response Time", value: "<2h", sub: "Under SLA contract" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-6">
          <p
            className="text-xs uppercase tracking-widest mb-3 font-semibold"
            style={{ color: "var(--foreground)", letterSpacing: "0.2em" }}
          >
            // Who We Are
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase mb-6 text-white leading-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            Engineering <br />
            <span style={{ color: "var(--foreground)" }}>Excellence.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted-text)" }}>
            Cryonix IT was established with a singular conviction: that the boundary dividing software intelligence and physical infrastructure is artificial. We design end-to-end architectures that span both seamlessly.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted-text)" }}>
            Our collective consists of engineers and product thinkers from top research labs and startups. We reject pre-packaged templates and offshore workflows, maintaining absolute control over the code quality.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2.5">
            {TECH_BADGES.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded text-[10px] uppercase font-bold tracking-widest font-mono"
                style={{
                  border: "1px solid var(--accent)",
                  color: "var(--foreground)",
                  background: "var(--card-bg)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded border flex flex-col justify-between"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--accent)",
                aspectRatio: "1/1",
              }}
              whileHover={{ borderColor: "var(--foreground)" }}
            >
              <div
                className="font-bold text-3xl md:text-4xl mb-1.5"
                style={{
                  color: "var(--foreground)",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                {metric.value}
              </div>
              <div>
                <div className="text-white text-xs uppercase font-bold tracking-wider mb-0.5">
                  {metric.label}
                </div>
                <div className="text-[10px]" style={{ color: "var(--foreground)", opacity: 0.6 }}>
                  {metric.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
