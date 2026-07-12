"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Slow ambient gradient blob with two layers of motion:
 *  - a continuous drift/breathe loop (meshDrift keyframes, CSS)
 *  - a subtle parallax Y-shift tied to scroll position
 * Used behind hero/section headers to add depth without stealing focus.
 */
export default function MeshBlob({ variant = "light", className = "" }) {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);

  useEffect(() => setMounted(true), []);

  const palette =
    variant === "dark"
      ? "from-accentPrimary/25 via-accentSecondary/20 to-transparent"
      : "from-accentPrimary/8 via-accentSecondary/8 to-transparent";

  return (
    <motion.div
      style={mounted ? { y } : undefined}
      className={`pointer-events-none absolute -z-10 animate-meshDrift blur-[100px] bg-gradient-to-b ${palette} ${className}`}
      aria-hidden="true"
    />
  );
}
