"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  magnetic?: boolean;
  showIcon?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  magnetic = false,
  showIcon = true,
  icon: Icon = ArrowUpRight,
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configurations matching the original buttons (stiffness: 300, damping: 20)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!magnetic || disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    "group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-xs uppercase tracking-widest font-bold backdrop-blur-md relative overflow-hidden transition-all duration-300 select-none cursor-pointer";
  
  const customStyles = {
    background: "var(--accent-5)",
    border: "1px solid var(--accent-30)",
    color: "var(--accent)",
    x: magnetic ? springX : 0,
    y: magnetic ? springY : 0,
  };

  const hoverVariants = {
    background: "var(--accent-15)",
    borderColor: "var(--accent)",
    boxShadow: "var(--glow-accent-lg)",
    color: "#ffffff",
  };

  const innerContent = (
    <>
      {/* Dynamic reflection shine line */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {showIcon && Icon && (
          <motion.span
            className="inline-flex"
            variants={{
              hover: { x: 3, y: -3 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Icon className="w-4 h-4 text-inherit" />
          </motion.span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={customStyles}
        className={`${baseClasses} ${className}`}
        whileHover={hoverVariants}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        initial="rest"
        animate="rest"
      >
        {innerContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={customStyles}
      className={`${baseClasses} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      whileHover={disabled ? {} : hoverVariants}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
      initial="rest"
      animate="rest"
    >
      {innerContent}
    </motion.button>
  );
}
