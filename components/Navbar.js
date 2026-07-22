"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Cpu, Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { springSoft } from "@/lib/motion";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workshops", label: "Workshops" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-brandBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accentPrimary to-accentSecondary flex items-center justify-center shadow-md relative overflow-hidden">
              <div className="absolute inset-0.5 bg-white rounded-[6px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-accentPrimary transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </div>
            <div>
              <span className="font-mono text-2xl font-black tracking-wider text-brandTextDark">DAKSHYA</span>
              <span className="block text-[9px] font-mono tracking-widest text-goldHighlight uppercase font-semibold">
                Tech &amp; Robotics Club
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 transition duration-200 ${
                    active ? "text-brandTextDark font-semibold" : "text-brandTextMuted hover:text-brandTextDark"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-accentPrimary"
                      transition={springSoft}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              as="a"
              href="/workshops"
              className="px-6 py-2.5 rounded-lg bg-accentPrimary hover:bg-accentPrimary/90 text-white font-mono font-medium shadow-sm transition-colors duration-300 uppercase text-xs tracking-wider"
            >
              Explore Workshops
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden p-2 text-brandTextMuted hover:text-brandTextDark transition duration-200 focus:outline-none"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={springSoft}
            className="md:hidden bg-white border-b border-brandBorder py-4 px-6 absolute top-20 left-0 w-full shadow-lg"
          >
            <nav className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={pathname === link.href ? "text-brandTextDark font-bold py-2" : "text-brandTextMuted hover:text-brandTextDark py-2 transition duration-200"}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/workshops"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-2.5 rounded-lg bg-accentPrimary text-white font-mono font-medium hover:bg-accentPrimary/90 transition duration-300 uppercase text-xs tracking-wider"
              >
                Explore Workshops
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
