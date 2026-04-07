"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;      // Velocity X
  vy: number;      // Velocity Y
  duration: number; // Random duration for each particle
  ease: string;    // Random easing function
}

export default function ClickSpark() {
  const [particles, setParticles] = useState<Particle[]>([]);
  // More yellow, fewer other colors
  const colors = ["#FFD100", "#FFF44F", "#FFEB3B", "#FFD100", "#FFD100", "#00e5ff", "#ffffff"];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newParticles: Particle[] = [];
      const particleCount = 20;

      for (let i = 0; i < particleCount; i++) {
        // Mostly upward with slight horizontal scatter
        const angle = Math.random() * Math.PI - Math.PI * 0.5; // -90° to 90° (upward bias)
        const speed = Math.random() * 100 + 80; // 80-180px/s upward velocity
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - Math.random() * 50; // Strong upward, minimal downward component

        const duration = Math.random() * 0.6 + 1.5;
        const ease = "easeIn";

        newParticles.push({
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 7 + 3,
          vx,
          vy,
          duration,
          ease,
        });
      }

      setParticles((prev) => [...prev, ...newParticles].slice(-60));

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
      }, 2000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
            animate={{
              x: p.x + p.vx,
              y: p.y + p.vy,
              opacity: 0,
              scale: 1,
              rotate: Math.random() * 180,
            }}
            transition={{
              duration: p.duration,
              ease: p.ease as any,
            }}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              boxShadow: `0 0 10px ${p.color}cc`,
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}