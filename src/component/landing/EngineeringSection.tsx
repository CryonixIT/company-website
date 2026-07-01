"use client";
import { motion } from "framer-motion";
import { Code2, Database, Palette, Rocket } from "lucide-react";

function Card({
  rotate,
  delay,
  sections,
}: {
  rotate: number;
  delay: number;
  sections: { icon: any; title: string; desc: string; tags: string[] }[];
}) {
  return (
    <motion.div
      className="w-full max-w-[380px] bg-gradient-to-br from-zinc-900/40 to-zinc-900/10 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 md:p-10"
      style={{ minHeight: "500px", transformPerspective: 1200 }}
      initial={{ opacity: 0, rotateY: rotate * 1.6, rotateX: 12, y: 40 }}
      whileInView={{ opacity: 1, rotateY: rotate, rotateX: 5, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        rotateY: rotate * 0.3,
        rotateX: 0,
        scale: 1.02,
        borderColor: "rgba(34,211,238,0.6)",
        boxShadow: "0 30px 80px -20px rgba(34,211,238,0.25)",
      }}
    >
      <div className="space-y-10">
        {sections.map((s, i) => (
          <div key={s.title}>
            {i > 0 && <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 mb-10" />}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="inline-flex p-3 bg-cyan-500/20 rounded-lg"
                whileHover={{ scale: 1.15, background: "rgba(34,211,238,0.3)", rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <s.icon className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 ml-12">{s.desc}</p>
            <div className="space-y-2 ml-12">
              {s.tags.map((tag, ti) => (
                <motion.div
                  key={tag}
                  className="flex items-center gap-2 text-cyan-300 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.2 + ti * 0.06, duration: 0.4 }}
                  whileHover={{ x: 4, color: "#67e8f9" }}
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function EngineeringSection() {
  return (
    <section
      id="engineering"
      className="relative w-full min-h-screen overflow-hidden py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.25) 95%), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%), url('/assets/engineering-bg/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Engineering Control Center</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Building premium digital experiences with modern technologies.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <Card
            rotate={25}
            delay={0.1}
            sections={[
              { icon: Code2, title: "Frontend", desc: "Fast, responsive and beautiful interfaces with modern frameworks.", tags: ["React", "Next.js", "TypeScript"] },
              { icon: Database, title: "Backend", desc: "Scalable server-side applications and robust APIs built for performance.", tags: ["Node.js", "PostgreSQL", "Express"] },
            ]}
          />
          <Card
            rotate={-25}
            delay={0.25}
            sections={[
              { icon: Palette, title: "UI/UX Design", desc: "Clean, intuitive designs focused on user experience and conversion.", tags: ["Figma", "Framer", "GSAP"] },
              { icon: Rocket, title: "Deployment", desc: "Seamless deployment, monitoring and maintenance for your applications.", tags: ["Vercel", "Docker", "GitHub"] },
            ]}
          />
        </div>
      </div>
    </section>
  );
}