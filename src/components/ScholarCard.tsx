"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Sparkles, RotateCcw, Landmark } from "lucide-react";
import type { Scholar } from "@/lib/scholars";

export default function ScholarCard({
  scholar,
  index,
}: {
  scholar: Scholar;
  index: number;
}) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  // إمالة ثلاثية الأبعاد تتبع مؤشر الفأرة
  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el || flipped) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${py * -10}deg) rotateY(${px * 10}deg) scale(1.025)`;
  }, [flipped]);

  const handleLeave = useCallback(() => {
    const el = tiltRef.current;
    if (el) el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  }, []);

  const toggle = useCallback(() => setFlipped((v) => !v), []);

  return (
    <motion.div
      className="scene-3d h-[560px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.14, ease: "easeOut" }}
    >
      <div
        ref={tiltRef}
        className="tilt-3d relative h-full w-full cursor-pointer"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`بطاقة العالم ${scholar.name} — اضغط لعرض الإنجازات`}
      >
        <div
          className="flip-3d relative h-full w-full rounded-2xl"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* ===== الوجه الأمامي ===== */}
          <div className="face-3d absolute inset-0 overflow-hidden rounded-2xl border border-gold/30 bg-card glow-gold">
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={scholar.image}
                alt={`صورة فنية للعالم ${scholar.name}`}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* تدرج يذيب الصورة في البطاقة */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
              {/* شارة المجال */}
              <div className="absolute top-3 right-3 rounded-full border border-gold/40 bg-night/70 px-3 py-1 text-xs font-bold text-gold-light backdrop-blur-sm">
                {scholar.title}
              </div>
              {/* شارة العصر العباسي */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-gold/40 bg-gradient-to-l from-gold-deep/80 to-gold/60 px-3 py-1 text-[11px] font-bold text-night shadow-md backdrop-blur-sm">
                <Landmark className="h-3 w-3" aria-hidden="true" />
                {scholar.dynasty}
              </div>
            </div>

            <div className="relative -mt-10 flex h-[calc(100%-13rem)] flex-col px-5 pb-4">
              <h3 className="font-amiri text-3xl font-bold leading-snug text-gold-text">
                {scholar.name}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  {scholar.years}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  {scholar.place}
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-foreground/85">
                {scholar.bio}
              </p>

              <div className="mt-auto pt-3">
                <div className="gold-line mb-3" />
                <div className="flex items-center justify-between text-xs text-gold-light/90">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    {scholar.achievements.length} إنجازات كبرى
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    اضغط لقلب البطاقة
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== الوجه الخلفي: الإنجازات ===== */}
          <div className="face-3d back-3d absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-b from-night-2 to-card glow-gold">
            <div className="border-b border-gold/20 bg-gradient-to-l from-gold-deep/25 via-gold/10 to-transparent px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="ornate-star" aria-hidden="true" />
                <h3 className="font-amiri text-2xl font-bold text-gold-text">
                  إنجازات {scholar.name}
                </h3>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {scholar.years} • {scholar.place}
              </p>
            </div>

            <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-4 text-sm leading-6 text-foreground/90 [scrollbar-width:thin]">
              {scholar.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
                    <Star className="h-3 w-3 text-gold" aria-hidden="true" />
                  </span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gold/20 px-5 py-3 text-center text-xs text-muted-foreground">
              <span className="flex items-center justify-center gap-1.5">
                <RotateCcw className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                اضغط مجدداً للعودة إلى السيرة
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
