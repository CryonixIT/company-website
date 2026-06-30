"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STATS = [
  { value: "50+", label: "Projects Shipped" },
  { value: "12+", label: "Industries Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "5★", label: "Client Rating" },
];

function CountUp({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const target = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isNaN(target)) {
      return;
    }
    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);
      const easeOut = rate * (2 - rate);
      const current = easeOut * target;

      if (value.includes(".")) {
        setCount(parseFloat(current.toFixed(1)));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, value]);

  if (isNaN(target)) return <span>{value}</span>;
  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "var(--background)" }}>
      <div
        className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto border-y border-x"
        style={{ borderColor: "var(--accent)" }}
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center p-8 text-center border-r last:border-r-0 md:even:border-r"
            style={{
              borderColor: "var(--accent)",
              background: "var(--background)",
            }}
          >
            <span
              className="block font-bold text-3xl md:text-4xl mb-1.5"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              <CountUp value={s.value} />
            </span>
            <span
              className="block text-[10px] uppercase tracking-widest"
              style={{ color: "var(--muted-text)", letterSpacing: "0.15em" }}
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
