"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Telescope, Sigma, Atom, Moon, Feather, BookOpen } from "lucide-react";

const links = [
  { href: "#dedication", label: "الإهداء", icon: Feather },
  { href: "#chapters", label: "الفصول", icon: BookOpen },
  { href: "#falak", label: "الفلك", icon: Telescope },
  { href: "#riyadiyat", label: "الرياضيات", icon: Sigma },
  { href: "#fizya", label: "الفيزياء", icon: Atom },
  { href: "#timeline", label: "خط الزمن", icon: null },
  { href: "#moon", label: "على القمر", icon: Moon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-night/80 backdrop-blur-md">
      {/* شريط تقدم القراءة الذهبي */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[2.5px] origin-right bg-gradient-to-l from-gold-light via-gold to-gold-deep"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4" aria-label="التنقل الرئيسي">
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="ornate-star scale-125" aria-hidden="true" />
          <span className="font-amiri text-2xl font-bold gold-text">علماء العرب</span>
        </a>

        {/* روابط سطح المكتب */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-bold text-foreground/80 transition-colors hover:bg-gold/10 hover:text-gold-light"
              >
                {l.icon && <l.icon className="h-4 w-4 text-gold" aria-hidden="true" />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* زر قائمة الجوال */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="فتح قائمة التنقل"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* قائمة الجوال */}
      {open && (
        <motion.ul
          className="space-y-1 border-t border-gold/15 bg-night/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-foreground/85 transition-colors hover:bg-gold/10 hover:text-gold-light"
              >
                {l.icon && <l.icon className="h-4 w-4 text-gold" aria-hidden="true" />}
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
