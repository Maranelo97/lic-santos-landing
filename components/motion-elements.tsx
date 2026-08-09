"use client";

import { ReactLenis } from "lenis/react";
import { motion, MotionConfig, useReducedMotion, useScroll } from "motion/react";
import type { ReactNode } from "react";

const particles = [
  { left: "5%", top: "14%", size: 7, duration: 13, delay: 0 },
  { left: "13%", top: "68%", size: 4, duration: 17, delay: 2 },
  { left: "25%", top: "27%", size: 5, duration: 15, delay: 5 },
  { left: "39%", top: "80%", size: 8, duration: 19, delay: 1 },
  { left: "52%", top: "18%", size: 4, duration: 14, delay: 4 },
  { left: "64%", top: "72%", size: 6, duration: 16, delay: 6 },
  { left: "75%", top: "31%", size: 5, duration: 18, delay: 3 },
  { left: "87%", top: "59%", size: 7, duration: 15, delay: 7 },
  { left: "94%", top: "12%", size: 4, duration: 20, delay: 2 },
];

export function MotionProvider({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: shouldReduceMotion ? 0.55 : 1.08,
        respectReducedMotion: false,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      }}
    >
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </MotionConfig>
    </ReactLenis>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-terracotta"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

export function AmbientParticles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className={index % 3 === 0 ? "ambient-particle ambient-particle-warm" : "ambient-particle"}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -18, 4, 0],
            x: [0, 8, -4, 0],
            opacity: [0.18, 0.5, 0.26, 0.18],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
