"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, CircuitBoard, Bot, ArrowRight } from "lucide-react";
import MeshBlob from "@/components/MeshBlob";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";
import Counter from "@/components/Counter";
import { fadeUp } from "@/lib/motion";

const PILLARS = [
  {
    icon: Code2,
    color: "text-accentPrimary",
    bg: "bg-accentPrimary/10",
    title: "Computer Science",
    body: "Designing modern user interfaces, full stack IoT servers, cloud deployment integrations, and deep learning pipelines.",
  },
  {
    icon: CircuitBoard,
    color: "text-accentSecondary",
    bg: "bg-accentSecondary/10",
    title: "Electronics",
    body: "Designing PCBs, routing traces, soldering SMT components, and writing low-level ESP32 and MicroPython firmware.",
  },
  {
    icon: Bot,
    color: "text-amber-600",
    bg: "bg-amber-500/10",
    title: "Robotics",
    body: "Integrating ROS2, configuring LiDAR sensor feeds, calibrating servo motors, and simulating kinematic models.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* MINIMAL CREAM WHITE HERO */}
      <section className="relative overflow-hidden bg-brandBg tech-grid">
        <MeshBlob variant="light" className="top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[420px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <StaggerGroup className="lg:col-span-7 space-y-8 text-center lg:text-left" stagger={0.12}>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accentPrimary uppercase font-semibold px-3 py-1.5 rounded-full bg-accentPrimary/10 border border-accentPrimary/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accentPrimary animate-blink" />
              System online // Club Terminal v2
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans leading-[1.05] tracking-tight text-brandTextDark"
            >
              INSPIRED BY IDEA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-accentSecondary">
                DRIVEN BY TECHNOLOGY
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-brandTextMuted text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Welcome to DAKSHYA, the technical playground for developers, engineers, and creators. We convert
              abstract thoughts into practical prototypes, embedded platforms, and intelligent code.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <MagneticButton
                as={Link}
                href="/workshops"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-accentPrimary text-white font-mono font-bold hover:bg-accentPrimary/90 transition-colors duration-300 shadow-md text-center uppercase tracking-wider text-sm"
              >
                Explore Workshops
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                href="/team"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-brandBorder bg-white text-brandTextDark font-mono hover:bg-slate-50 transition-colors duration-300 text-center uppercase tracking-wider text-sm"
              >
                Meet The Team
              </MagneticButton>
            </motion.div>
          </StaggerGroup>

          {/* Right hand telemetry card */}
          <Reveal delay={0.25} className="lg:col-span-5 relative">
            <div className="bg-white p-6 rounded-2xl border border-brandBorder shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-brandBorder pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <span className="text-xs font-mono text-slate-400">DAKSHYA // Core telemetry</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Core Members", value: "18" },
                  { label: "Workshops Run", value: "12+" },
                  { label: "Students Reached", value: "500+" },
                  { label: "Practical Focus", value: "100%" },
                ].map((s) => (
                  <div key={s.label} className="p-3 bg-slate-50 rounded-lg border border-brandBorder">
                    <Counter value={s.value} className="text-accentPrimary font-bold font-mono text-lg block" />
                    <p className="text-[11px] text-brandTextMuted mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[11px] font-mono text-slate-400">
                &gt; initializing lab systems<span className="animate-blink">_</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY TECHNICAL PILLARS — bento-style trio */}
      <section className="py-20 bg-white border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-brandTextDark tracking-tight">Our Key Technical Pillars</h2>
            <p className="text-brandTextMuted font-light">
              We focus heavily on hands-on practical skill development through real workshops.
            </p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.12}>
            {PILLARS.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="p-6 bg-brandBg rounded-2xl border border-brandBorder hover:shadow-lg hover:border-accentPrimary/25 transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center ${p.color} mb-6`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brandTextDark mb-2">{p.title}</h3>
                <p className="text-sm font-light leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
