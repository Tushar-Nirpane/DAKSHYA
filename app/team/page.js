"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Github, Mail, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { DAKSHYA_DATA } from "@/lib/data";
import { springSoft } from "@/lib/motion";

const DOMAINS = ["All", "Leadership", "Technical", "Media", "Volunteers"];
const DOT_COLOR = {
  Leadership: "bg-red-500",
  Technical: "bg-accentPrimary",
  Media: "bg-yellow-500",
  Volunteers: "bg-orange-500",
};

export default function TeamPage() {
  const [filter, setFilter] = useState("All");
  const visible = DAKSHYA_DATA.team.filter((m) => filter === "All" || m.domain === filter);

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accentPrimary uppercase font-semibold px-3 py-1.5 rounded-full bg-accentPrimary/10 border border-accentPrimary/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Core Organization // Members Roster
          </span>
        </Reveal>
        <Reveal delay={0.05} as="h1" className="text-4xl sm:text-5xl font-black text-brandTextDark tracking-tight">
          The Core Team
        </Reveal>
        <Reveal delay={0.1} as="p" className="text-brandTextMuted font-light text-base max-w-xl mx-auto">
          Our core team members leading technical domains, hardware operations, and club initiatives.
        </Reveal>

        {/* Filter pills */}
        <Reveal delay={0.15} className="flex flex-wrap items-center justify-center gap-2 pt-4 font-mono text-xs">
          {DOMAINS.map((domain) => (
            <button
              key={domain}
              onClick={() => setFilter(domain)}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 uppercase tracking-wider font-semibold ${
                filter === domain
                  ? "bg-accentPrimary/15 border-accentPrimary text-accentPrimary font-bold shadow-xs scale-105"
                  : "border-brandBorder text-brandTextMuted bg-white hover:text-brandTextDark hover:border-slate-300"
              }`}
            >
              {domain}
            </button>
          ))}
        </Reveal>
      </div>

      {/* 5. MEMBERS SECTION CLEANUP: ONLY NAMES, ROLES & SOCIALS (NO PROFILE PHOTOS OR IMAGE PLACEHOLDERS) */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {visible.map((member) => (
            <motion.div
              key={member.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4 }}
              transition={springSoft}
              className="bg-white p-6 rounded-2xl flex flex-col justify-between group relative border border-brandBorder shadow-xs hover:border-accentPrimary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-md border border-slate-200 bg-slate-50 text-slate-700 font-semibold`}
                  >
                    <span className={`w-2 h-2 rounded-full ${DOT_COLOR[member.domain] || "bg-slate-400"}`} />
                    {member.domain}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">DAKSHYA // MEMBER</span>
                </div>

                <h3 className="text-xl font-extrabold text-brandTextDark group-hover:text-accentPrimary transition-colors duration-200 tracking-tight">
                  {member.name}
                </h3>

                <p className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-4 border-t border-slate-100 text-slate-400 group-hover:text-brandTextDark transition duration-300">
                {member.social.linkedin && member.social.linkedin !== "#" && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-50 hover:bg-accentPrimary/10 hover:text-accentPrimary transition"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.social.github && member.social.github !== "#" && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-50 hover:bg-accentPrimary/10 hover:text-accentPrimary transition"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.social.email && member.social.email !== "#" && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-accentPrimary/10 hover:text-accentPrimary transition"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
