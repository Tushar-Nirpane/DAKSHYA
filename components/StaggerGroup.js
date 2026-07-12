"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Parent for a set of fadeUp children (Reveal, or raw motion.div using the
 * fadeUp variant). Staggers each child's entrance by `stagger` seconds as
 * soon as the group scrolls into view.
 */
export default function StaggerGroup({ children, className = "", stagger = 0.1, delayChildren = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}
