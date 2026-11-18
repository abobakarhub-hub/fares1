"use client";

import { motion } from "framer-motion";
import { ChevronDown, Telescope, Sigma, Atom, Sparkles } from "lucide-react";
import CosmicScene from "./CosmicScene";

const chips = [
  { icon: Telescope, label: "الفلك", href: "#falak" },
  { icon: Sigma, label: "الرياضيات", href: "#riyadiyat" },
  { icon: Atom, label: "الفيزياء", href: "#fizya" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* المشهد ثلاثي الأبعاد */}
      <CosmicScene />

      {/* طبقات تعتيم للقراءة */}
      <div className="pointer-events-none absolute inset-0 bg-night/35" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-night to-transparent"
        aria-hidden="true"
      />

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-night/60 px-5 py-2 text-sm font-bold text-gold-light backdrop-blur-sm glow-gold"
        >
          <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
          العصر الذهبي للعلم • ٧٥٠ – ١٢٥٨م
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-amiri text-7xl font-bold leading-[1.15] md:text-[7.5rem]"
        >
          <span className="gold-text">عُلماءُ العَرَب</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-foreground/85 md:text-xl"
        >
          حين كانت السماء كتاباً مفتوحاً، والأرض معملاً للتجربة…
          <br className="hidden md:block" />
          تسعة أعلام من العصر العباسي صنعوا في{" "}
          <span className="font-bold text-gold-light">الفلك</span> و{" "}
          <span className="font-bold text-gold-light">الرياضيات</span> و{" "}
          <span className="font-bold text-gold-light">الفيزياء</span> إرثاً يضيء العالم إلى اليوم
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#falak"
            className="rounded-xl bg-gradient-to-l from-gold-deep via-gold to-gold-light px-8 py-3.5 text-base font-bold text-night shadow-lg shadow-gold/25 transition-transform duration-300 hover:scale-105"
          >
            استكشف الأعلام التسعة
          </a>
          <a
            href="#timeline"
            className="rounded-xl border border-gold/40 bg-night/50 px-8 py-3.5 text-base font-bold text-gold-light backdrop-blur-sm transition-colors duration-300 hover:bg-gold/10"
          >
            رحلة الخط الزمني
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {chips.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-center gap-2 rounded-full border border-gold/25 bg-night/40 px-5 py-2.5 text-sm font-bold text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:text-gold-light"
            >
              <c.icon className="h-4.5 w-4.5 text-gold transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
              {c.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* مؤشر التمرير */}
      <motion.a
        href="#falak"
        aria-label="مرر للأسفل لاستكشاف المحتوى"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.8 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-gold/80"
      >
        <ChevronDown className="h-8 w-8" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
