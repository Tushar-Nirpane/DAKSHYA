import Link from "next/link";
import { Cpu, Linkedin, Github, Twitter, Instagram } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Club" },
  { href: "/workshops", label: "Workshops" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Core Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brandBorder bg-white py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
        <div className="md:col-span-6 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-accentPrimary to-accentSecondary flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="font-mono text-xl font-black text-brandTextDark">DAKSHYA</span>
          </Link>
          <p className="text-xs text-brandTextMuted max-w-sm leading-relaxed font-light">
            Empowering student engineers with hands-on labs, hardware workshops, PCB routing, and high-performance
            programming.
          </p>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h5 className="text-xs font-mono uppercase tracking-widest text-brandTextDark font-bold">// Navigation</h5>
          <ul className="space-y-2 text-xs font-mono text-brandTextMuted">
            {NAV.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accentPrimary transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h5 className="text-xs font-mono uppercase tracking-widest text-brandTextDark font-bold">// Socials</h5>
          <div className="flex items-center gap-3 text-brandTextMuted">
            <a href="#" className="hover:text-accentPrimary transition" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-accentPrimary transition" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-accentPrimary transition" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-accentPrimary transition" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-brandBorder flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-brandTextMuted uppercase tracking-widest">
        <span>&copy; 2026 DAKSHYA Technical Club. All rights reserved.</span>
        <span>Secure HTTPS Connection</span>
      </div>
    </footer>
  );
}
