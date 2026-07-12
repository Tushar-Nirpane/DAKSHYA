"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { springSoft } from "@/lib/motion";

export default function Modal({ open, onClose, children, maxWidth = "max-w-lg", title, icon }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={springSoft}
            onClick={(e) => e.stopPropagation()}
            className={`w-full ${maxWidth} bg-white rounded-2xl overflow-hidden border border-brandBorder shadow-2xl`}
          >
            {title && (
              <div className="p-6 border-b border-brandBorder flex items-center justify-between">
                <div className="flex items-center gap-2 text-accentPrimary font-mono">
                  {icon}
                  <span className="text-sm font-bold uppercase tracking-wider">{title}</span>
                </div>
                <button onClick={onClose} className="text-slate-400 hover:text-brandTextDark transition" aria-label="Close dialog">
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
