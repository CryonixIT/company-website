"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="px-6 py-16 relative overflow-hidden"
      style={{
        background: "var(--background)",
        borderTop: "1px solid var(--accent)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="font-bold tracking-widest text-sm"
                style={{
                  letterSpacing: "0.15em",
                }}
              >
                <span className="text-white">CRYONIX</span>
                <span style={{ color: "var(--accent)" }}>IT</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted-text)", opacity: 0.8 }}>
              Pioneering the intersection of clean code and complex logic. One partner for your entire digital ecosystem.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            {[
              {
                heading: "Services",
                links: ["Web Development", "AI & ML", "ERP Solutions", "Cloud Architecture"],
              },
              {
                heading: "Company",
                links: ["About Us", "Process", "Careers", "Contact"],
              },
              {
                heading: "Socials",
                links: ["LinkedIn ↗", "Twitter ↗", "GitHub ↗"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p
                  className="text-xs uppercase tracking-widest mb-4 font-bold"
                  style={{ color: "var(--foreground)", letterSpacing: "0.12em" }}
                >
                  {col.heading}
                </p>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => {
                    return (
                      <a
                        key={link}
                        href={link === "Contact" ? "#contact" : link === "Process" ? "#process" : "#"}
                        className="text-xs no-underline transition-colors duration-300 flex items-center gap-1.5"
                        style={{ color: "var(--muted-text)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-text)")}
                      >
                        {link}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8"
          style={{ borderTop: "1px solid var(--accent)", opacity: 0.3 }}
        />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
          <p className="text-xs" style={{ color: "var(--muted-text)", opacity: 0.8 }}>
            © {new Date().getFullYear()} Cryonix IT. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            suppressHydrationWarning
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer"
            style={{
              borderColor: "var(--accent)",
              background: "var(--card-bg)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--foreground)";
              e.currentTarget.style.background = "var(--foreground)";
              e.currentTarget.style.color = "var(--background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "var(--card-bg)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
