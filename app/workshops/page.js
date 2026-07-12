"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Loader2, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";
import Shimmer from "@/components/Shimmer";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";
import { DAKSHYA_DATA } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export default function WorkshopsPage() {
  const [loading, setLoading] = useState(true);
  const [modalWorkshop, setModalWorkshop] = useState(null);
  const [form, setForm] = useState({ fullName: "", email: "", dept: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  function openRegistration(workshop) {
    setModalWorkshop(workshop);
    setStatus("idle");
    setForm({ fullName: "", email: "", dept: "" });
  }

  function submitRegistration(e) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setModalWorkshop(null);
        setToast(true);
        setTimeout(() => setToast(false), 5000);
      }, 1200);
    }, 1200);
  }

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Reveal className="max-w-3xl space-y-4 mb-16">
        <span className="text-xs font-mono tracking-widest text-accentPrimary uppercase font-semibold block">
          // Academy Hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brandTextDark tracking-tight font-sans">
          Hands-on Workshops &amp; Practical Labs
        </h1>
        <p className="text-brandTextMuted text-lg font-light leading-relaxed">
          Sign up to attend our upcoming sessions or view archives and takeaway slides from our previous engineering
          events.
        </p>
      </Reveal>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-brandBorder overflow-hidden bg-white">
              <Shimmer index={i} className="h-48 rounded-none" />
              <div className="p-6 space-y-3">
                <Shimmer index={i + 1} className="h-4 w-3/4" />
                <Shimmer index={i + 2} className="h-3 w-full" />
                <Shimmer index={i + 3} className="h-3 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
          {DAKSHYA_DATA.workshops.map((workshop) => (
            <motion.div
              key={workshop.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 border border-brandBorder group"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div
                    className={`absolute top-4 right-4 font-mono text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full border bg-white/95 ${
                      workshop.status === "Upcoming" ? "border-green-300 text-green-700" : "border-slate-300 text-slate-600"
                    }`}
                  >
                    {workshop.status}
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-xs font-semibold px-2 py-0.5 rounded bg-accentPrimary text-white shadow-sm">
                    {workshop.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <motion.h3
                    layoutId={`workshop-title-${workshop.id}`}
                    className="text-lg font-bold text-brandTextDark group-hover:text-accentPrimary transition duration-200"
                  >
                    {workshop.title}
                  </motion.h3>
                  <p className="text-sm text-brandTextMuted font-light leading-relaxed">{workshop.description}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Key Takeaways
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {workshop.takeaways.map((t) => (
                        <span key={t} className="text-[11px] font-mono bg-slate-50 border border-slate-200 rounded px-2 py-0.5 text-brandTextMuted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{workshop.date}</span>
                <button
                  onClick={() => openRegistration(workshop)}
                  className="text-xs font-mono text-accentPrimary hover:underline transition uppercase tracking-wider flex items-center gap-1 font-semibold"
                >
                  <span>{workshop.status === "Upcoming" ? "Register" : "Slides"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      )}

      {/* REGISTRATION MODAL */}
      <Modal open={!!modalWorkshop} onClose={() => setModalWorkshop(null)} title="Registration Form" icon={<Terminal className="w-5 h-5" />}>
        <div className="p-6 space-y-6">
          <div className="p-4 rounded-lg bg-slate-50 border border-brandBorder text-xs font-mono space-y-1">
            <span className="text-slate-400 uppercase tracking-widest block font-bold">// Target Event</span>
            {modalWorkshop && (
              <motion.div layoutId={`workshop-title-${modalWorkshop.id}`} className="text-brandTextDark text-sm font-semibold mt-1">
                {modalWorkshop.title}
              </motion.div>
            )}
          </div>

          <form onSubmit={submitRegistration} className="space-y-4 font-mono text-xs">
            <div className="space-y-1.5">
              <label className="text-[10px] text-slate-400 uppercase block font-bold">Full Name //</label>
              <input
                type="text"
                required
                placeholder="Alan Turing"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full bg-slate-50 border border-brandBorder focus:border-accentPrimary rounded-lg px-4 py-2.5 outline-none text-brandTextDark transition"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] text-slate-400 uppercase block font-bold">Email Address //</label>
              <input
                type="email"
                required
                placeholder="turing@domain.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-slate-50 border border-brandBorder focus:border-accentPrimary rounded-lg px-4 py-2.5 outline-none text-brandTextDark transition"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] text-slate-400 uppercase block font-bold">Department / Major //</label>
              <select
                required
                value={form.dept}
                onChange={(e) => setForm({ ...form, dept: e.target.value })}
                className="w-full bg-slate-50 border border-brandBorder focus:border-accentPrimary rounded-lg px-4 py-2.5 outline-none text-brandTextDark transition"
              >
                <option value="" disabled>
                  Select department major
                </option>
                <option value="Computer Science">Computer Science &amp; Engineering</option>
                <option value="Electronics">Electronics &amp; Communications</option>
                <option value="Robotics">Robotics &amp; Automation</option>
                <option value="Mechanical">Mechanical Engineering</option>
                <option value="Other">Other technical domain</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full py-3 rounded-lg bg-accentPrimary text-white font-bold hover:bg-accentPrimary/90 transition duration-300 uppercase tracking-wider text-xs flex items-center justify-center gap-2 disabled:opacity-80"
            >
              {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>
                {status === "idle" ? "Submit Registration" : status === "submitting" ? "Submitting registration..." : "Successfully Registered!"}
              </span>
            </button>
          </form>
        </div>
      </Modal>

      <Toast open={toast} message="Registration submitted successfully!" onClose={() => setToast(false)} />
    </main>
  );
}
