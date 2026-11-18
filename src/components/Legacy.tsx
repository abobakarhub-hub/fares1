"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, BookOpen, Landmark } from "lucide-react";
import GoldenOrb from "./GoldenOrb";
import { totalAchievements } from "@/lib/scholars";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-amiri text-5xl font-bold gold-text md:text-6xl">
      {value}
      {suffix}
    </span>
  );
}

export default function Legacy() {
  return (
    <section id="legacy" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* الكرة الذهبية ثلاثية الأبعاد */}
          <motion.div
            className="mx-auto aspect-square w-full max-w-[420px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
          >
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 rounded-full bg-gold/[0.07] blur-2xl"
                aria-hidden="true"
              />
              <GoldenOrb />
            </div>
          </motion.div>

          {/* الإرث والإحصائيات */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <Crown className="h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="font-amiri text-4xl font-bold md:text-5xl">
                <span className="gold-text">إرثٌ لا يُطفأ</span>
              </h2>
            </div>
            <p className="leading-8 text-muted-foreground">
              لم يكن العصر العباسي مجرد فترة زمنية، بل كان نهضة عمرية؛ حيث جمع المأمون
              علماء بغداد في بيت الحكمة فتُرجمت المعرفة وأُرصدت السماء وحُلّت المعضلات،
              ثم عبرت هذه المعرفة من بغداد إلى طليطلة والأندلس لتشعل نهضة أوروبا.
              أسماءُ الحوارزمي على مفاتيح الحواسيب، وكلماتُ ابن
              الهيثم على كل مصوّر رقمي، وجداولُ البتّاني والفرغاني في كل تقويم شمسي دقيق.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                { v: 9, s: "", label: "أعلام أسطوريين" },
                { v: 3, s: "", label: "مجالات علمية كبرى" },
                { v: totalAchievements, s: "+", label: "إنجاز علمي موثّق" },
                { v: 5, s: "", label: "قرون دامت الخلافة العباسية" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gold/25 bg-card/70 px-5 py-6 text-center transition-colors duration-300 hover:border-gold/50 glow-gold"
                >
                  <Counter target={stat.v} suffix={stat.s} />
                  <p className="mt-2 text-sm font-bold text-foreground/75">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold/20 bg-night-2/60 px-6 py-4">
              <Landmark className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-sm leading-7 text-foreground/75">
                تشتق كلمة «الخوارزمية» (Algorithm) من اسم الخوارزمي، وكلمة «الجبر»
                (Algebra) من كتابه، وشهد الفلكيون الأوروبيون بقيمة أعمال الفرغاني والبتّاني والصوفي
                قبل أن يشهدوا بقيمة أعمالهم الخاصين — فهم التلاميذ، وهؤلاء الأساتذة.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4 text-gold" aria-hidden="true" />
              جميع البيانات التاريخية في هذا الموقع مبنية على مصادر علمية معتمدة.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
