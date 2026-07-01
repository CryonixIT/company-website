"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "p1",
    index: "01",
    category: "Fintech Platform",
    title: "Nexora",
    description: "A next generation fintech platform engineered for speed and trust.",
  },
  {
    id: "p2",
    index: "02",
    category: "E-Commerce",
    title: "Cryonix",
    description: "A premium e-commerce experience built for a luxury fashion brand — focused on performance, elegance and conversion.",
  },
  {
    id: "p3",
    index: "03",
    category: "Creative Studio",
    title: "Fluora",
    description: "We craft visual stories — a portfolio built with motion-first storytelling.",
  },
  {
    id: "p4",
    index: "04",
    category: "Data Dashboard",
    title: "Orbit",
    description: "A real-time analytics dashboard built for clarity at a glance.",
  },
];

function randomImage(seed: string) {
  return `https://picsum.photos/seed/${seed}/900/1100`;
}

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(1);
  const total = projects.length;
  const active = projects[activeIndex % total];

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-[#040506] py-28 px-4">
      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-[28%] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[160px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />
      {/* fine grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* heading */}
      <div className="relative z-10 mx-auto mb-20 max-w-2xl text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400/70" />
          <span className="text-[11px] font-medium tracking-[0.35em] text-cyan-400">
            FEATURED PROJECTS
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/70" />
        </div>
        <h2 className="text-[2rem] font-semibold leading-tight text-white sm:text-4xl md:text-[3.25rem] md:leading-[1.1]">
          Crafted Digital{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
            Experiences
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[13px] leading-relaxed text-white/45 sm:text-[15px]">
          A selection of high-performance websites and applications engineered
          with precision and creativity.
        </p>
      </div>

      {/* carousel */}
      <div className="relative z-10">
        <Swiper
          modules={[EffectCoverflow, Navigation, Keyboard]}
          effect="coverflow"
          allowTouchMove={false}
          simulateTouch={false}
          centeredSlides
        initialSlide={1}
          speed={500}
          slidesPerView="auto"
          spaceBetween={-60}
          keyboard={{ enabled: true, onlyInViewport: true }}
          coverflowEffect={{
            rotate: 30,
            stretch: -20,
            depth: 260,
            modifier: 1.6,
            slideShadows: false,
          }}
          navigation={{ nextEl: ".fp-next", prevEl: ".fp-prev" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="!overflow-visible !py-12 cursor-default select-none"
        >
          {projects.map((project, i) => {
            const isActive = i === activeIndex;
            return (
              <SwiperSlide
                key={project.id}
                className="!w-[240px] sm:!w-[360px] md:!w-[440px]"
              >
                <div
                  className={`group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border transition-all duration-700 ease-out ${
                    isActive
                      ? "border-cyan-400/40 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_30px_80px_-20px_rgba(34,211,238,0.35)]"
                      : "border-white/10 opacity-40 saturate-50 blur-[8px]"
                  }`}
                >
                  {/* image */}
                  <img
                    src={randomImage(project.id)}
                    alt={project.title}
                    draggable={false}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                  />

                  {/* gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

                  {/* top bar: index + browser dots */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    </div>
                    <span className="font-mono text-[11px] tracking-wider text-white/50">
                      {project.index} / {String(total).padStart(2, "0")}
                    </span>
                  </div>

                  {/* bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <span
                      className={`mb-2 inline-block text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-500 ${
                        isActive ? "text-cyan-300" : "text-white/40"
                      }`}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p
                      className={`mt-3 max-w-[85%] overflow-hidden text-[12px] leading-relaxed text-white/60 transition-all duration-500 sm:text-[13px] ${
                        isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div
                      className={`mt-4 flex items-center gap-2 text-[11px] font-medium tracking-wide text-white transition-all duration-500 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                    >
                      <span className="border-b border-cyan-400/60 pb-0.5 text-cyan-300">
                        View Project
                      </span>
                      <span className="text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>

                  {/* hairline accent on active */}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-cyan-300/20" />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* arrows */}
        <button
          aria-label="Previous project"
          className="fp-prev absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-95 sm:flex sm:left-4 md:left-12"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          aria-label="Next project"
          className="fp-next absolute right-0 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-95 sm:flex sm:right-4 md:right-12"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* counter + labels */}
      <div className="relative z-10 mx-auto mt-10 flex max-w-[220px] items-center justify-center gap-4 font-mono text-[11px] tracking-[0.2em] text-white/35">
        <span className="text-white/70">{String(activeIndex + 1).padStart(2, "0")}</span>
        <span className="h-px w-10 bg-white/15" />
        <span>{String(total).padStart(2, "0")}</span>
      </div>

      {/* mobile nav (drag disabled, so mobile needs visible controls) */}
      <div className="relative z-10 mx-auto mt-8 flex max-w-[180px] items-center justify-center gap-6 sm:hidden">
        <button
          aria-label="Previous project"
          className="fp-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 backdrop-blur-xl transition active:scale-95 active:border-cyan-400/50 active:text-cyan-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          aria-label="Next project"
          className="fp-next flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 backdrop-blur-xl transition active:scale-95 active:border-cyan-400/50 active:text-cyan-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* progress indicator */}
      <div className="relative z-10 mx-auto mt-14 flex max-w-[220px] items-center gap-2">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/10"
          >
            <div
              className={`h-full bg-cyan-400 transition-all duration-700 ease-out ${
                i === activeIndex ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* active caption (subtle, optional duplicate of card info for accessibility) */}
      <div className="relative z-10 mx-auto mt-6 max-w-lg text-center">
        <p className="text-[11px] tracking-[0.3em] text-white/30">
          {String(activeIndex + 1).padStart(2, "0")} — {active.category.toUpperCase()}
        </p>
      </div>
    </section>
  );
}