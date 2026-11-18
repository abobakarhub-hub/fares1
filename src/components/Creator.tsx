"use client";

import { useCallback, useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Feather, GraduationCap, PenTool, ScrollText } from "lucide-react";

/* بطاقة تميل مع حركة الماوس — بروح البطاقات ثلاثية الأبعاد في الموقع */
function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 9}deg)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "rotateY(0deg) rotateX(0deg)";
  }, []);

  return (
    <div className="scene-3d h-full">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`tilt-3d h-full ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

/* شريط عناوين تراثي مزخرف بنجمة ثمانية */
function HeritageRibbon({ text }: { text: string }) {
  return (
    <div className="mb-7 flex items-center justify-center gap-3">
      <span className="ornate-star scale-90 opacity-80" aria-hidden="true" />
      <span className="text-xs font-bold text-gold-light">{text}</span>
      <span className="ornate-star scale-90 opacity-80" aria-hidden="true" />
    </div>
  );
}

/* ختم دوّار: حلقتان ذهبيتان متقطعتان تحيطان بمحراب ذهبي مدبب يحتضن القلم */
function SealRing() {
  return (
    <div
      className="float-slow relative mx-auto h-44 w-44 md:h-52 md:w-52"
      role="img"
      aria-label="ختم على شكل محراب ذهبي مدبب داخل حلقات دوّارة، لصانع الموقع فارس بريكات"
    >
      <div className="pulse-ring absolute inset-0 rounded-full border border-gold/40 glow-gold" aria-hidden="true" />
      {/* حلقة خارجية متقطعة تدور مع عقارب الساعة */}
      <svg
        viewBox="0 0 200 200"
        className="animate-spin-slower absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="none"
          stroke="#d4a53f"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          strokeDasharray="3 9"
          strokeLinecap="round"
        />
      </svg>
      {/* حلقة داخلية تدور بعكس الاتجاه */}
      <svg
        viewBox="0 0 200 200"
        className="animate-spin-reverse absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="76"
          fill="none"
          stroke="#b8860b"
          strokeOpacity="0.55"
          strokeWidth="1"
          strokeDasharray="16 7"
        />
      </svg>
      {/* جواهر نجمية على محيط الختم */}
      <span className="ornate-star absolute -translate-x-1/2" style={{ top: "2%", left: "50%" }} aria-hidden="true" />
      <span className="ornate-star absolute scale-90 -translate-x-1/2" style={{ bottom: "2%", left: "50%" }} aria-hidden="true" />
      <span className="ornate-star absolute scale-90 -translate-y-1/2" style={{ top: "50%", left: "2%" }} aria-hidden="true" />
      <span className="ornate-star absolute scale-90 -translate-y-1/2" style={{ top: "50%", right: "2%" }} aria-hidden="true" />
      {/* محراب ذهبي ذو قوس مدبب يحيط بالقلم */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M68,146 L68,92 C68,72 76,62 84,54 C92,46 96,40 100,30 C104,40 108,46 116,54 C124,62 132,72 132,92 L132,146"
          fill="none"
          stroke="#d4a53f"
          strokeOpacity="0.85"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M60,146 L140,146"
          stroke="#d4a53f"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="100" cy="26" r="2.4" fill="#d4a53f" fillOpacity="0.9" />
      </svg>
      <PenTool
        className="absolute left-1/2 top-[46%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-gold drop-shadow-[0_0_12px_rgba(212,165,63,0.85)] md:h-10 md:w-10"
        aria-hidden="true"
      />
    </div>
  );
}

export default function Creator() {
  return (
    <section id="dedication" className="relative scroll-mt-24 overflow-hidden py-20">
      {/* نسيج هندسي إسلامي بنجمة ثمانية */}
      <div className="islamic-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* هالة ضوئية ذهبية خلف القسم */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-3xl"
        aria-hidden="true"
      />
      {/* زخارف نجمية عائمة */}
      <span className="ornate-star float-slow absolute right-[12%] top-24 scale-150 opacity-40" aria-hidden="true" />
      <span
        className="ornate-star float-slow absolute bottom-28 left-[10%] scale-125 opacity-30"
        style={{ animationDelay: "-2.5s" }}
        aria-hidden="true"
      />
      <span
        className="ornate-star float-slow absolute left-[20%] top-40 opacity-25"
        style={{ animationDelay: "-4s" }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* العنوان */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <Feather className="h-7 w-7 text-gold" aria-hidden="true" />
          </div>
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-bold text-gold-light">
            <span className="ornate-star scale-90" aria-hidden="true" />
            على نهجِ كتبِ التراث
            <span className="ornate-star scale-90" aria-hidden="true" />
          </p>
          <h2 className="font-amiri text-4xl font-bold md:text-5xl">
            <span className="gold-text">الإهداء وصانع الموقع</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-muted-foreground">
            كما كان أهلُ العلم يفتتحون كتبَهم بالإهداء والشكر، فها نحن نفتتح هذه
            المنظومة على سنّتهم
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* بطاقة صانع الموقع — بروح فتح المخطوطة المذهّبة */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <TiltCard className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-card to-night-2 p-8 text-center glow-gold md:p-12">
              {/* إطار داخلي بنمط المخطوطة */}
              <div className="pointer-events-none absolute inset-2.5 rounded-2xl border border-gold/15" aria-hidden="true" />
              <span className="ornate-star absolute right-5 top-5 opacity-70" aria-hidden="true" />
              <span className="ornate-star absolute left-5 top-5 opacity-70" aria-hidden="true" />
              <span className="ornate-star absolute bottom-5 right-5 opacity-50" aria-hidden="true" />
              <span className="ornate-star absolute bottom-5 left-5 opacity-50" aria-hidden="true" />

              <HeritageRibbon text="فتحُ الكتاب" />
              <SealRing />

              <h3 className="mt-6 font-amiri text-5xl font-bold gold-text md:text-6xl">
                فارس بريكات
              </h3>
              <p className="mt-2 text-sm font-bold text-gold-light">
                صانع الموقع ومصمم التجربة التفاعلية
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
                <span className="flex items-center gap-1.5 rounded-full border border-gold/35 bg-gold/10 px-3.5 py-1.5 font-bold text-gold-light">
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  طالب القسم ٢ع٣
                </span>
                <span className="rounded-full border border-gold/35 bg-gold/10 px-3.5 py-1.5 font-bold text-gold-light">
                  ثانوية محمد الصالح بلعباس
                </span>
              </div>

              <div className="gold-line mx-auto my-6 w-2/3" />

              <p className="text-sm leading-8 text-foreground/80">
                طالبٌ شغوفٌ بعلومِ الأولين؛ جمع في هذه المنظومة بين إرثِ علماء العصر
                العباسي وجماليات العصر الرقمي — كما زان أهلُ التراث كتبَهم بالتذهيب
                والزخرفة، زانَ هذا الموقعَ بالنجوم الذهبية والبطاقات التي تميل وتنقلب
                بين يديك؛ ليخرج العلمُ مبهِرًا كما كان في عصره الذهبي.
              </p>
            </TiltCard>
          </motion.div>

          {/* بطاقة الشكر — بروح رسائل التلاميذ لأساتذتهم */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <TiltCard className="relative flex flex-col overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-card to-night-2 p-8 glow-gold md:p-12">
              {/* إطار داخلي بنمط المخطوطة */}
              <div className="pointer-events-none absolute inset-2.5 rounded-2xl border border-gold/15" aria-hidden="true" />
              <span className="ornate-star absolute right-5 top-5 opacity-70" aria-hidden="true" />
              <span className="ornate-star absolute left-5 top-5 opacity-70" aria-hidden="true" />
              <span className="ornate-star absolute bottom-5 right-5 opacity-50" aria-hidden="true" />
              <span className="ornate-star absolute bottom-5 left-5 opacity-50" aria-hidden="true" />

              <div
                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
                aria-hidden="true"
              />

              <HeritageRibbon text="رسالةُ الشكر" />

              <div className="text-center">
                <div className="pulse-ring mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <ScrollText
                    className="h-7 w-7 text-gold drop-shadow-[0_0_10px_rgba(212,165,63,0.7)]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-amiri text-3xl font-bold gold-text md:text-4xl">
                  شكر خاص وتقدير
                </h3>
                <p className="mt-1 text-xs font-bold text-gold-light">
                  إلى من غرست فينا حب الحروف والعلم
                </p>
              </div>

              <div className="gold-line my-6" />

              <div className="text-center">
                <p className="font-amiri text-2xl font-bold text-foreground md:text-3xl">
                  أستاذة اللغة العربية
                </p>
                <p className="mt-2 text-sm text-gold-light">
                  قسم ٢ع٣ • ثانوية محمد الصالح بلعباس
                </p>
              </div>

              {/* مقولة مأثورة عن الشكر */}
              <p className="heritage-quote mt-6 rounded-lg px-4 py-2.5 text-center text-xs font-bold text-gold-light">
                وفي المأثور: من لم يشكر المخلوقَ، لم يشكر الخالق
              </p>

              <p className="mt-5 text-center text-sm leading-8 text-foreground/80">
                كما كان تلاميذُ العلماء يفتتحون كتبَهم بذكر مَن قرّبهم من العلم،
                فنفتتح هذه المنظومة بشكر أستاذتنا الغالية؛ التي زرعت فينا حبَّ اللغة
                العربية وأدركتنا أن هذا التراث العظيم كان لغةً قبل أن يكون علمًا.
                ثمرةُ عطفها وتوجيهها ما تقرؤه في هذه الصفحات، وإلى فضلها يشير هذا
                الكلامُ بكل فخر.
              </p>

              <p className="mt-auto pt-6 text-end font-amiri text-lg text-gold-light">
                كتبها تلميذها — فارس بريكات
              </p>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
