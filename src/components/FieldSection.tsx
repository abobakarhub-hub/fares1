"use client";

import { motion } from "framer-motion";
import { Telescope, Sigma, Atom, Quote } from "lucide-react";
import ScholarCard from "./ScholarCard";
import type { Field } from "@/lib/scholars";

const iconMap = {
  telescope: Telescope,
  sigma: Sigma,
  atom: Atom,
};

export default function FieldSection({ field, num }: { field: Field; num: number }) {
  const Icon = iconMap[field.icon];

  return (
    <section id={field.id} className="relative scroll-mt-24 py-20">
      {/* رقم المجال العملاق في الخلفية */}
      <span
        className="pointer-events-none absolute top-6 right-4 select-none font-amiri text-[9rem] leading-none text-gold/[0.05] md:right-10 md:text-[14rem]"
        aria-hidden="true"
      >
        {["١", "٢", "٣"][num]}
      </span>

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* رأس القسم */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="gold-line w-16" aria-hidden="true" />
            <span className="pulse-ring flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 glow-gold">
              <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
            </span>
            <span className="gold-line w-16" aria-hidden="true" />
          </div>

          <h2 className="font-amiri text-5xl font-bold md:text-6xl">
            <span className="gold-text">{field.name}</span>
          </h2>
          <p className="mt-2 text-lg font-bold text-gold-light/90">{field.subtitle}</p>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
            {field.description}
          </p>
        </motion.div>

        {/* بطاقات العلماء */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {field.scholars.map((scholar, i) => (
            <ScholarCard key={scholar.id} scholar={scholar} index={i} />
          ))}
        </div>

        {/* الأثر العالمي أسفل القسم */}
        <motion.div
          className="mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-xl border border-gold/20 bg-night-2/60 px-6 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <Quote className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <p className="font-amiri text-lg leading-8 text-gold-light/90">
            {field.impact}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
