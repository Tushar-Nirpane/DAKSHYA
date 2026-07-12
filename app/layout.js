import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "DAKSHYA | Technical & Robotics Club",
    template: "%s | DAKSHYA",
  },
  description:
    "DAKSHYA Technical & Robotics Club — hands-on labs, robotics workshops, hardware hacking, and skill-building events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jbmono.variable}`}>
      <body className="bg-brandBg text-brandTextMuted font-sans tech-grid min-h-screen relative overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
