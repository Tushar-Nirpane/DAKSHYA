"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Loader2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import Toast from "@/components/Toast";
import { fadeUp } from "@/lib/motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(false);
  const [errors, setErrors] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrors(true);
      return;
    }
    setErrors(false);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      setToast(true);
      setTimeout(() => setToast(false), 5000);
    }, 1400);
  }

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <Reveal className="lg:col-span-5 space-y-6">
        <span className="text-xs font-mono tracking-widest text-accentPrimary uppercase font-semibold block">
          // Open Protocol
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brandTextDark tracking-tight">Connect With Us</h1>
        <p className="text-brandTextMuted leading-relaxed font-light">
          Have queries about an upcoming workshop or looking to collaborate on a hardware hack? Use the channel to
          coordinate directly.
        </p>

        <div className="space-y-4 pt-4 border-t border-brandBorder">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-brandBorder text-accentPrimary">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Workspace Address</div>
              <div className="text-sm text-brandTextDark">Room 304, Advanced Technology Block</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-brandBorder text-accentPrimary">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Email</div>
              <div className="text-sm text-brandTextDark">contact@dakshya.club</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="lg:col-span-7">
        <div className="bg-white p-6 rounded-2xl border border-brandBorder shadow-sm">
          <div className="flex items-center justify-between border-b border-brandBorder pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accentPrimary/35" />
              <span className="text-xs font-mono text-accentPrimary uppercase tracking-widest font-semibold">
                Contact Stream
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Secure TLS Connection</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="space-y-1.5">
              <label className="text-[10px] text-slate-400 uppercase block font-bold">Your Name //</label>
              <input
                type="text"
                required
                placeholder="Alan Turing"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-slate-50 border border-brandBorder focus:border-accentPrimary rounded-lg px-4 py-2.5 outline-none text-brandTextDark transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-slate-400 uppercase block font-bold">Your Email //</label>
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
              <label className="text-[10px] text-slate-400 uppercase block font-bold">Message Content //</label>
              <textarea
                required
                rows={4}
                placeholder="Write message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-slate-50 border border-brandBorder focus:border-accentPrimary rounded-lg px-4 py-3 outline-none text-brandTextDark transition"
              />
            </div>

            {errors && (
              <motion.p variants={fadeUp} initial="hidden" animate="show" className="text-red-500 text-[11px]">
                Please fill out all fields.
              </motion.p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-lg bg-accentPrimary text-white font-bold hover:bg-accentPrimary/90 transition duration-300 uppercase tracking-wider text-xs flex items-center justify-center gap-2 disabled:opacity-80"
            >
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>{submitting ? "Transmitting..." : "Transmit Message"}</span>
            </button>
          </form>
        </div>
      </Reveal>

      <Toast open={toast} message="Message transmitted successfully!" onClose={() => setToast(false)} />
    </main>
  );
}
