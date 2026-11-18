"use client";

import { motion } from "framer-motion";
import { Telescope, Sigma, Atom, Milestone, Landmark } from "lucide-react";
import { timeline } from "@/lib/scholars";

const tagIcon = {
  falak: Telescope,
  riyadiyat: Sigma,
  fizya: Atom,
  hikma: Landmark,
};

const tagName = {
  falak: "فلك",
  riyadiyat: "رياضيات",
  fizya: "فيزياء",
  hikma: "بيت الحكمة",
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <Milestone className="h-7 w-7 text-gold" aria-hidden="true" />
          </div>
          <h2 className="font-amiri text-4xl font-bold md:text-5xl">
            <span className="gold-text">خط الزمن العباسي</span>
          </h2>
          <p className="mt-3 leading-8 text-muted-foreground">
            خمسة قرون متتالية من العبقرية — من بيت الحكمة ببغداد إلى مراصد الشرق،
            وانتهاءً بسقوط بغداد الذي رحّل العلم غرباً
          </p>
        </motion.div>

        <div className="relative">
          {/* الخط الذهبي العمودي */}
          <div
            className="absolute right-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:right-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = tagIcon[item.tag as keyof typeof tagIcon];
              const leftSide = i % 2 === 0;
              return (
                <motion.li
                  key={item.year}
                  className="relative flex items-start gap-5 md:items-center md:gap-0"
                  initial={{ opacity: 0, x: leftSide ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* العقدة الذهبية */}
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-night glow-gold md:absolute md:right-1/2 md:translate-x-1/2">
                    <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  </span>

                  {/* البطاقة — تناوب يمين/يسار على الشاشات الكبيرة */}
                  <div
                    className={`mr-1 flex-1 rounded-xl border border-gold/25 bg-card/80 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-gold/60 md:mx-16 md:w-[calc(50%-4rem)] md:flex-none ${
                      leftSide ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <span className="font-amiri text-2xl font-bold text-gold-text">
                      {item.year}
                    </span>
                    <span className="mr-3 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[11px] font-bold text-gold-light">
                      {tagName[item.tag as keyof typeof tagName]}
                    </span>
                    <p className="mt-2 text-sm leading-7 text-foreground/85">{item.text}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
