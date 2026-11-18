"use client";

import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { amazingFacts } from "@/lib/scholars";

export default function AmazingFacts() {
  return (
    <section id="facts" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <Gem className="h-7 w-7 text-gold" aria-hidden="true" />
          </div>
          <h2 className="font-amiri text-4xl font-bold md:text-5xl">
            <span className="gold-text">أرقام مبهرة من العصر العباسي</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-muted-foreground">
            حقائق موثقة ستجعلك تُنصت لهذه الأسماء باحترام جديد
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amazingFacts.map((f, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-b from-card to-night-2 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 glow-gold"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
            >
              <span
                className="pointer-events-none absolute -top-8 -left-8 select-none font-amiri text-[7rem] leading-none text-gold/[0.07]"
                aria-hidden="true"
              >
                {["١", "٢", "٣", "٤", "٥", "٦"][i]}
              </span>
              <p className="font-amiri text-5xl font-bold gold-text md:text-6xl">
                {f.big}
              </p>
              <div className="gold-line mx-auto my-4 w-2/3" />
              <p className="text-sm leading-7 text-foreground/80">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
