"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { springSoft } from "@/lib/motion";

export default function Toast({ open, message, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={springSoft}
          className="fixed bottom-6 right-6 z-50 max-w-md bg-white p-4 rounded-xl shadow-lg border border-brandBorder flex items-start gap-3"
          role="status"
        >
          <div className="p-1 rounded bg-green-50 text-green-600">
            <CheckCircle className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-mono uppercase tracking-widest text-brandTextDark font-bold">Transmit Success</h5>
            <p className="text-[11px] text-brandTextMuted font-mono mt-1">{message}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-brandTextDark transition ml-auto" aria-label="Dismiss">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
