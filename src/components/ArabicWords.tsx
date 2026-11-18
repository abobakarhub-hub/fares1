"use client";

import { motion } from "framer-motion";
import { Languages, MoveLeft } from "lucide-react";
import { arabicWords } from "@/lib/scholars";

export default function ArabicWords() {
  return (
    <section id="words" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <Languages className="h-7 w-7 text-gold" aria-hidden="true" />
          </div>
          <h2 className="font-amiri text-4xl font-bold md:text-5xl">
            <span className="gold-text">كلماتهم في لغة العالم</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-muted-foreground">
            عربيةُ الأصل، عايشةً اليوم في كل حاسوب ومرصد ومعمل — تُلفظ في كل لغات الأرض
            دون أن يعلم أغلب المتكلمين بها من أين أتت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {arabicWords.map((w, i) => (
            <motion.div
              key={w.latin}
              className="group relative overflow-hidden rounded-xl border border-gold/25 bg-card/70 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 glow-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl font-black tracking-wide text-gold-text" dir="ltr">
                  {w.latin}
                </span>
                <span className="flex items-center gap-1.5 text-gold">
                  <span className="hidden text-sm text-muted-foreground sm:inline">من</span>
                  <MoveLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
                  <span className="font-amiri text-2xl font-bold text-gold-light">
                    {w.arabic}
                  </span>
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-foreground/80">{w.note}</p>
              <span className="mt-3 inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold text-gold-light">
                {w.field}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
