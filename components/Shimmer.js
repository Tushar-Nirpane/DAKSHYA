"use client";

import { motion } from "framer-motion";

/**
 * Skeleton block with a soft shimmer sweep. Slight per-block random delay
 * (seeded by index) keeps a grid of these from pulsing in unison, which is
 * what makes shimmer read as organic instead of mechanical.
 */
export default function Shimmer({ className = "", index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 0.9, 0.6] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: (index % 5) * 0.15 }}
      className={`shimmer-surface rounded-2xl ${className}`}
    />
  );
}
