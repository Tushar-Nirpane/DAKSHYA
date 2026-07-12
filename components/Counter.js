"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Parses "18", "12+", "500+", "100%" into a numeric target + suffix, then
 * counts up on a spring once the card scrolls into view.
 */
export default function Counter({ value, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const match = String(value).match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 90, damping: 20, mass: 1 });
  const display = useRef(null);

  useEffect(() => {
    if (inView) motionVal.set(numeric);
  }, [inView, numeric, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (display.current) display.current.textContent = Math.round(v) + suffix;
    });
    return unsub;
  }, [spring, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      <span ref={display}>0{suffix}</span>
    </motion.span>
  );
}
