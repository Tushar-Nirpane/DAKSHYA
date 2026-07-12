"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import Shimmer from "@/components/Shimmer";
import { DAKSHYA_DATA } from "@/lib/data";
import { springSoft } from "@/lib/motion";

const TABS = ["All Media", "Robotics Workshops", "Lab Sessions", "Event Highlights"];

export default function GalleryPage() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All Media");
  const [active, setActive] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const visible = DAKSHYA_DATA.media.filter((item) => filter === "All Media" || item.category === filter);

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <Reveal className="space-y-4">
          <span className="text-xs font-mono tracking-widest text-accentPrimary uppercase font-semibold block">
            // Live from the Lab
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brandTextDark tracking-tight">Captured Moments</h1>
          <p className="text-brandTextMuted font-light max-w-xl">
            A window into our lab sessions, testing runs, and key hacking projects. Click on any media item for high
            resolution view.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-wrap gap-2 font-mono text-xs">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`relative px-4 py-2 rounded-lg border transition-colors duration-300 uppercase tracking-wider font-semibold ${
                filter === tab
                  ? "border-accentPrimary text-accentPrimary bg-accentPrimary/10"
                  : "border-brandBorder text-brandTextMuted bg-white hover:text-brandTextDark"
              }`}
            >
              {tab}
            </button>
          ))}
        </Reveal>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Shimmer key={i} index={i} className="h-64" />
          ))}
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((item) => (
              <motion.button
                key={item.id}
                layout
                layoutId={`media-${item.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={springSoft}
                onClick={() => setActive(item)}
                className="group relative rounded-xl overflow-hidden bg-white border border-brandBorder shadow-sm text-left"
              >
                <div className="h-64 overflow-hidden relative">
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={springSoft}
                        className="w-14 h-14 rounded-full bg-accentPrimary/90 text-white flex items-center justify-center shadow-md"
                      >
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </motion.div>
                    </div>
                  )}
                  <img
                    src={item.type === "video" ? item.thumbnail : item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5 space-y-1">
                  <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-accentPrimary transition duration-200">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-200 line-clamp-1 font-light">{item.description}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* LIGHTBOX — magic-move from grid tile via shared layoutId */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`media-${active.id}`}
              transition={springSoft}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden border border-brandBorder shadow-2xl"
            >
              <div className="p-4 border-b border-brandBorder flex items-center justify-between font-mono text-xs text-brandTextDark">
                <span className="font-bold uppercase tracking-wider">{active.title}</span>
                <button onClick={() => setActive(null)} className="text-slate-400 hover:text-brandTextDark transition" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-slate-50 flex items-center justify-center min-h-[300px]">
                {active.type === "photo" ? (
                  <img src={active.url} alt={active.title} className="max-h-[60vh] w-auto object-contain" />
                ) : (
                  <video src={active.url} controls autoPlay className="max-h-[60vh] w-full">
                    Your browser does not support HTML5 video player elements.
                  </video>
                )}
              </div>

              <div className="p-6 bg-slate-50 border-t border-brandBorder text-xs text-brandTextMuted font-mono">
                {active.description}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
