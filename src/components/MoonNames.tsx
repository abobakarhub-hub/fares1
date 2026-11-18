"use client";

import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import { fields } from "@/lib/scholars";

const sideLabel = { near: "الوجه المرئي للقمر", far: "الجانب البعيد للقمر" };

/** قمر CSS زخرفي بفوهات محسوسة */
function MoonGraphic() {
  const dots = [
    { top: "22%", right: "30%", size: 46, o: 0.5 },
    { top: "38%", right: "18%", size: 28, o: 0.4 },
    { top: "52%", right: "40%", size: 60, o: 0.45 },
    { top: "66%", right: "26%", size: 34, o: 0.5 },
    { top: "28%", right: "58%", size: 30, o: 0.4 },
    { top: "58%", right: "62%", size: 44, o: 0.42 },
    { top: "74%", right: "46%", size: 26, o: 0.4 },
    { top: "44%", right: "12%", size: 22, o: 0.45 },
  ];
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[340px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-gold/[0.06] blur-3xl" />
      <div className="absolute inset-0 rounded-full border border-gold/25 bg-gradient-to-br from-[#e9dcc0] via-[#c9b68a] to-[#8f7a55] shadow-[inset_-30px_-20px_60px_rgba(0,0,0,0.45),0_0_70px_rgba(212,165,63,0.25)]">
        {dots.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-black/20 blur-[2px]"
            style={{
              top: d.top,
              right: d.right,
              width: d.size,
              height: d.size,
              opacity: d.o,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function MoonNames() {
  const craters = fields
    .flatMap((f) => f.scholars)
    .filter((s) => s.crater);

  return (
    <section id="moon" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <Moon className="h-7 w-7 text-gold" aria-hidden="true" />
          </div>
          <h2 className="font-amiri text-4xl font-bold md:text-5xl">
            <span className="gold-text">أسماؤهم منقوشة على القمر</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-muted-foreground">
            اعترف الاتحاد الفلكي الدولي بأثرهم الخالد، فكتب أسماءهم على ثمانية من فوهات
            القمر — تشهد عليها ليلة بعد ليلة منذ قرون
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1 }}
            className="float-slow"
          >
            <MoonGraphic />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {craters.map((s, i) => (
              <motion.div
                key={s.id}
                className="rounded-xl border border-gold/25 bg-card/70 px-4 py-4 transition-colors duration-300 hover:border-gold/60 glow-gold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-amiri text-xl font-bold text-gold-text">
                    {s.name}
                  </span>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-gold-light">
                    {s.crater!.latin}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  فوهة قمرية تحمل اسمه — {sideLabel[s.crater!.side]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
