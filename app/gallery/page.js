"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Play, X, Film, Sparkles, Layers, Maximize2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { DAKSHYA_DATA } from "@/lib/data";

const TABS = ["All Media", "Robotics Workshops", "Lab Sessions", "Event Highlights"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All Media");
  const [activeMedia, setActiveMedia] = useState(null);

  // Horizontal Scroll Container Ref
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const visiblePhotos = DAKSHYA_DATA.media.filter(
    (item) => filter === "All Media" || item.category === filter
  );

  // Medium-speed horizontal scroll translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    <main className="min-h-screen bg-brandBg text-brandTextDark pb-24">
      {/* HEADER SECTION */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brandBorder pb-8">
          <Reveal className="space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accentPrimary uppercase font-semibold px-3 py-1.5 rounded-full bg-accentPrimary/10 border border-accentPrimary/20">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Experience // Gallery 2.0
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-brandTextDark">
              Captured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-accentSecondary">Moments</span>
            </h1>
            <p className="text-brandTextMuted font-light max-w-xl text-base leading-relaxed">
              Explore our live lab testing runs, hardware builds, and club events. Scroll down to experience the horizontal photo reel & dedicated video showcase.
            </p>
          </Reveal>

          {/* Category Filter Pills */}
          <Reveal delay={0.15} className="flex flex-wrap gap-2 font-mono text-xs">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 uppercase tracking-wider font-semibold ${
                  filter === tab
                    ? "border-accentPrimary text-accentPrimary bg-accentPrimary/15 shadow-sm scale-105"
                    : "border-brandBorder text-brandTextMuted bg-white hover:text-brandTextDark hover:border-slate-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 4. UI/UX SCROLL EFFECT (GALLERY HORIZONTAL SCROLL) */}
      <section ref={targetRef} className="relative h-[300vh] bg-slate-900/5">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute top-6 left-8 z-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-brandBorder shadow-xs">
            <Layers className="w-4 h-4 text-accentPrimary" />
            Horizontal Scroll Reel — Keep Scrolling Down
          </div>

          <motion.div style={{ x }} className="flex gap-8 pl-8 pr-24">
            {visiblePhotos.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setActiveMedia(item)}
                className="group relative flex-none w-[340px] sm:w-[420px] h-[480px] rounded-2xl overflow-hidden bg-white border border-brandBorder shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:border-accentPrimary/40"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Card Top Pill */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border border-white/20">
                  {item.category}
                </div>

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 space-y-2 text-white">
                  <span className="text-[11px] font-mono text-accentPrimary font-bold block">
                    PHOTO 0{index + 1} // {item.category}
                  </span>
                  <h3 className="text-xl font-extrabold group-hover:text-amber-300 transition duration-200 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-xs text-white/80 font-mono group-hover:text-accentPrimary transition">
                    <Maximize2 className="w-3.5 h-3.5" /> Click to expand
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEAMLESS TRANSITION DIVIDER */}
      <div className="relative py-12 bg-gradient-to-b from-transparent via-accentPrimary/5 to-transparent border-y border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-accentPrimary font-semibold block">
            End of Photo Reel ↓ Proceeding to Video Showcase
          </span>
        </div>
      </div>

      {/* 3. VIDEO SECTION SEQUENCE & HEADINGS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accentSecondary uppercase font-semibold px-3 py-1 rounded-full bg-accentSecondary/10 border border-accentSecondary/20">
            <Film className="w-3.5 h-3.5" />
            Dedicated Cinema Reel
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brandTextDark tracking-tight">
            Video Archive & Event Replays
          </h2>
          <p className="text-brandTextMuted font-light">
            Watch live recordings of our reversal reel, DTIL robotics events, and hands-on laboratory testing sessions.
          </p>
        </Reveal>

        {/* HEADING 1: The Reversal Reel */}
        <Reveal className="space-y-6">
          <div className="flex items-center gap-4 border-l-4 border-accentPrimary pl-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brandTextDark font-sans">
              The Reversal Reel
            </h3>
            <span className="text-xs font-mono text-accentPrimary bg-accentPrimary/10 px-2.5 py-1 rounded-md uppercase font-semibold">
              Featured Video
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-brandBorder shadow-xl group">
            <video
              src="/videos/reversal-reel.mp4"
              controls
              preload="metadata"
              className="w-full max-h-[600px] object-cover"
            />
            <div className="p-4 bg-slate-900/90 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>DAKSHYA // The Reversal Reel</span>
              <span className="text-slate-400">Resolution: 1080p MP4</span>
            </div>
          </div>
        </Reveal>

        {/* HEADING 2: DTIL Event */}
        <Reveal className="space-y-6">
          <div className="flex items-center gap-4 border-l-4 border-accentSecondary pl-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brandTextDark font-sans">
              DTIL Event
            </h3>
            <span className="text-xs font-mono text-accentSecondary bg-accentSecondary/10 px-2.5 py-1 rounded-md uppercase font-semibold">
              Event Highlights
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-brandBorder shadow-xl group">
            <video
              src="/videos/dtil-event.mp4"
              controls
              preload="metadata"
              className="w-full max-h-[600px] object-cover"
            />
            <div className="p-4 bg-slate-900/90 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>DAKSHYA // DTIL Event Coverage</span>
              <span className="text-slate-400">Official Recording</span>
            </div>
          </div>
        </Reveal>

        {/* HEADING 3: Robotics Lab (Multiple Videos) */}
        <Reveal className="space-y-8">
          <div className="flex items-center gap-4 border-l-4 border-amber-500 pl-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brandTextDark font-sans">
              Robotics Lab
            </h3>
            <span className="text-xs font-mono text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-md uppercase font-semibold">
              3 Clips Grid
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Robotics Testing Session #1", file: "/videos/robotics-lab-1.mp4" },
              { title: "Robotics Hardware Run #2", file: "/videos/robotics-lab-2.mp4" },
              { title: "Robotics Autonomous Demo #3", file: "/videos/robotics-lab-3.mp4" },
            ].map((video, idx) => (
              <div
                key={video.file}
                className="bg-slate-900 rounded-xl overflow-hidden border border-brandBorder shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative bg-black flex items-center justify-center h-64">
                  <video
                    src={video.file}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-slate-900 text-slate-200 flex-1 space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    CLIP 0{idx + 1} // ROBOTICS LAB
                  </span>
                  <h4 className="text-sm font-bold text-white">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* LIGHTBOX POPUP FOR PHOTO EXPANSION */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setActiveMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden border border-brandBorder shadow-2xl"
            >
              <div className="p-4 border-b border-brandBorder flex items-center justify-between font-mono text-xs text-brandTextDark">
                <span className="font-bold uppercase tracking-wider">{activeMedia.title}</span>
                <button
                  onClick={() => setActiveMedia(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-brandTextDark hover:bg-slate-100 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-slate-950 flex items-center justify-center min-h-[400px]">
                <img
                  src={activeMedia.url}
                  alt={activeMedia.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-white text-brandTextDark space-y-1 border-t border-brandBorder">
                <span className="text-xs font-mono text-accentPrimary font-bold uppercase block">
                  {activeMedia.category}
                </span>
                <h3 className="text-lg font-bold">{activeMedia.title}</h3>
                <p className="text-sm text-brandTextMuted font-light">{activeMedia.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
