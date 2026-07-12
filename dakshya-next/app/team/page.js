"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { DAKSHYA_DATA } from "@/lib/data";
import { springSoft } from "@/lib/motion";

const DOMAINS = ["All", "Robotics", "Hardware", "Software", "Coordination"];
const DOT_COLOR = {
  Robotics: "bg-red-500",
  Hardware: "bg-orange-500",
  Software: "bg-accentPrimary",
  Coordination: "bg-yellow-500",
};

export default function TeamPage() {
  const [filter, setFilter] = useState("All");
  const visible = DAKSHYA_DATA.team.filter((m) => filter === "All" || m.domain === filter);

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <Reveal>
          <span className="text-xs font-mono tracking-widest text-accentPrimary uppercase font-semibold block">
            // Core Organization
          </span>
        </Reveal>
        <Reveal delay={0.05} as="h1" className="text-3xl sm:text-4xl font-extrabold text-brandTextDark tracking-tight">
          The Core 18
        </Reveal>
        <Reveal delay={0.1} as="p" className="text-brandTextMuted font-light">
          Meet the 18 core team members organizing and leading technical domains, workshops, and lab operations.
        </Reveal>

        <Reveal delay={0.15} className="flex flex-wrap items-center justify-center gap-2 pt-4 font-mono text-xs">
          {DOMAINS.map((domain) => (
            <button
              key={domain}
              onClick={() => setFilter(domain)}
              className={`px-4 py-2 rounded-lg border transition-colors duration-300 uppercase tracking-widest font-semibold ${
                filter === domain
                  ? "bg-accentPrimary/10 border-accentPrimary text-accentPrimary font-bold shadow-sm"
                  : "border-brandBorder text-brandTextMuted bg-white hover:text-brandTextDark"
              }`}
            >
              {domain}
            </button>
          ))}
        </Reveal>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((member) => (
            <motion.div
              key={member.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6 }}
              transition={springSoft}
              className="bg-white p-6 rounded-2xl flex flex-col items-center text-center group relative overflow-hidden border border-brandBorder shadow-sm hover:border-accentPrimary/30 hover:shadow-md transition-[border-color,box-shadow] duration-300"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-accentPrimary/5 to-transparent rounded-full" />

              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-accentPrimary via-accentSecondary to-slate-200 relative mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${DOT_COLOR[member.domain]}`} />
              </div>

              <h4 className="text-base font-bold text-brandTextDark group-hover:text-accentPrimary transition duration-200">
                {member.name}
              </h4>
              <span className="text-xs text-brandTextMuted font-mono mt-1 font-light">{member.role}</span>

              <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-0.5 rounded-full bg-slate-50 border border-brandBorder text-[10px] font-mono uppercase tracking-widest text-slate-500">
                {member.domain}
              </div>

              <div className="flex items-center gap-4 mt-6 text-slate-400 group-hover:text-brandTextDark transition duration-300">
                <a href={member.social.linkedin} className="hover:text-accentPrimary transition" aria-label={`${member.name} LinkedIn`}>
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={member.social.github} className="hover:text-accentPrimary transition" aria-label={`${member.name} GitHub`}>
                  <Github className="w-4 h-4" />
                </a>
                <a href={member.social.twitter} className="hover:text-accentPrimary transition" aria-label={`${member.name} Twitter`}>
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={`mailto:${member.social.email}`} className="hover:text-accentPrimary transition" aria-label={`Email ${member.name}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
