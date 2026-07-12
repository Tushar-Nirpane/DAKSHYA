"use client";

import { motion } from "framer-motion";
import { Wrench, Users } from "lucide-react";
import MeshBlob from "@/components/MeshBlob";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";
import Counter from "@/components/Counter";
import { DAKSHYA_DATA } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export default function AboutPage() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <MeshBlob variant="light" className="top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[250px]" />

      <Reveal className="max-w-3xl space-y-4 mb-16">
        <span className="text-xs font-mono tracking-widest text-accentPrimary uppercase font-semibold block">
          // Our Identity
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brandTextDark tracking-tight">
          Inspired by Ideas, Driven by Technology
        </h1>
        <p className="text-brandTextMuted text-lg font-light leading-relaxed">
          DAKSHYA was founded on the belief that real engineering happens when you get your hands dirty. We provide
          the tools, the space, and the mentorship to build hardware hacks, robotics setups, and intelligent code
          libraries.
        </p>
      </Reveal>

      {/* Bento stat counters */}
      <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20" stagger={0.1}>
        {DAKSHYA_DATA.stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white p-6 rounded-xl border border-brandBorder shadow-sm relative overflow-hidden group hover:border-accentPrimary/35 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-accentPrimary/5 to-transparent rounded-bl-3xl" />
            <Counter value={stat.value} className="text-3xl sm:text-4xl font-extrabold font-mono text-accentPrimary mb-2 block" />
            <div className="text-sm font-semibold text-brandTextDark tracking-wide">{stat.label}</div>
            <div className="text-xs text-brandTextMuted mt-1 font-light">{stat.description}</div>
          </motion.div>
        ))}
      </StaggerGroup>

      {/* Detail pillars */}
      <div className="space-y-16">
        <Reveal as="h2" className="text-2xl font-bold text-brandTextDark tracking-tight text-center">
          // How We Operate
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Reveal className="space-y-4">
            <h3 className="text-xl font-bold text-brandTextDark flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-accentPrimary/10 flex items-center justify-center text-accentPrimary">
                <Wrench className="w-4 h-4" />
              </span>
              Hands-on Lab Environments
            </h3>
            <p className="text-sm leading-relaxed font-light">
              We maintain a hardware laboratory equipped with digital oscilloscopes, variable DC bench power
              supplies, SMD soldering platforms, micro-controllers, and sensor arrays. Club members can prototype
              their PCB designs directly inside our dedicated maker lab.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl overflow-hidden border border-brandBorder shadow-sm h-64">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Lab space"
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Reveal delay={0.15} className="md:order-1 rounded-2xl overflow-hidden border border-brandBorder shadow-sm h-64">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80"
              alt="Team planning"
              className="w-full h-full object-cover"
            />
          </Reveal>
          <Reveal className="md:order-2 space-y-4">
            <h3 className="text-xl font-bold text-brandTextDark flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-accentSecondary/10 flex items-center justify-center text-accentSecondary">
                <Users className="w-4 h-4" />
              </span>
              Collaborative Guild Structures
            </h3>
            <p className="text-sm leading-relaxed font-light">
              We operate as structured technical guilds: Software developers coordinate with hardware PCB layout
              engineers, while robotics system designers integrate ROS2 paths with the motor drivers. Everyone is
              aligned on active workspace milestones.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
