"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { springSnappy } from "@/lib/motion";

/**
 * Wraps any CTA and pulls it gently toward the cursor within a small radius,
 * then springs back to rest on mouse leave. Disabled automatically for
 * touch/coarse-pointer devices so it never fights a tap.
 */
export default function MagneticButton({ children, className = "", strength = 0.35, as: As = "a", ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: relX * strength, y: relY * strength });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const MotionTag = motion(As);

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={springSnappy}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...props}
    >
      <motion.span
        animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
        transition={springSnappy}
        className="inline-flex items-center justify-center gap-2"
      >
        {children}
      </motion.span>
    </MotionTag>
  );
}
