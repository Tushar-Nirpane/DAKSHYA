"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * A single fade-in-up element, triggered once when it enters the viewport.
 * Use <StaggerGroup> as the parent when several Reveals should cascade.
 */
export default function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ ...fadeUp.show.transition, delay }}
    >
      {children}
    </MotionTag>
  );
}
