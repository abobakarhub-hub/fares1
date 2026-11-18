"use client";

import { motion } from "framer-motion";
import { ScrollText, Telescope, Sigma, Lightbulb } from "lucide-react";

/* بيانات الفصول الأربعة — على نهج تقسيم كتب التراث */
const chapters = [
  {
    num: "١",
    label: "الفصل الأول",
    title: "سؤالُ الحبر: نهضةُ الترجمة",
    icon: ScrollText,
    intro: "كيف بدأ كل شيء: حبرٌ ينتقل من لغة إلى لغة، فيتغير وجهُ العالم.",
    items: [
      "أسّس هارون الرشيد بيتَ الحكمة، وبلغ المأمونُ ذروتَه حتى تُروى أنه كافأ المترجمين بوزنِ كتبِهم ذهبًا",
      "طلب المأمون مخطوطاتِ اليونان من قيصرِهم، فحُملت إلى بغداد في ظهورٍ حافلةٍ بالكتب",
      "وصلت صناعةُ الورق إلى بغداد من سمرقند، فورقت الكتبُ وانتشرت الدوائرُ العلمية في أسواقها",
      "ترجم «أمير المترجمين» حنين بن إسحاق عشراتِ كتب جالينوس وأرسطو، فصارت اللغةُ العربيةُ لغةَ العلم",
    ],
  },
  {
    num: "٢",
    label: "الفصل الثاني",
    title: "نجمٌ يُحفظ في اللوح: عصرُ الرصد",
    icon: Telescope,
    intro: "لمّا قاست بغدادُ السماءَ بالأدوات، صحّحت ما توارثته عن البابليين واليونان.",
    items: [
      "مرصد الشاماسية ببغداد من أوائل المراصد المنظمة في التاريخ؛ قاست فيه فرقُ الرصدِ الشمسَ والقمرَ بأدواتٍ مُعدةٍ لذلك",
      "زيج السند هند للخوارزمي: أولُ الزيجات الفلكية العربية، جمع حسابَ الهندِ بفلكِ بطليموس",
      "كتاب صور الكواكب الثابعة للصوفي (٩٦٤م): رسم فيه أكثرَ من ألف نجمٍ بأسماء عربية ما تزال في خرائط الفلك: الدبران، النسر الطائر، آخر النهر",
      "قاس البتاني السنةَ الشمسية فأخطأ دقائقَ معدودة، وحدّد انحرافَ محور الأرض على ٢٣°٣٥",
    ],
  },
  {
    num: "٣",
    label: "الفصل الثالث",
    title: "حين صار الحسابُ لغةً: ثورةُ الرياضيات",
    icon: Sigma,
    intro: "من الجبر إلى الخوارزميات: أسماءٌ عربية صارت مصطلحاتٍ في كل اللغات.",
    items: [
      "كتاب المختصر في حساب الجبر والمقابلة للخوارزمي: منه أخذ العالمُ لقبَ العلم Algebra",
      "كلمة Algorithm في كل حاسوبٍ اليوم هي اسمُ الخوارزمي وقد تشوّه في ألسنة اللاتين",
      "الأرقام ٠١٢٣٤٥٦٧٨٩ وصلت عبر بغداد من الهند، فحملها كتابُ الجمع والمفترق إلى الغرب",
      "حلّ الخيام المعادلاتِ من الدرجة الثالثة بتقاطع القطع المخروطية، ووضع الشكلَ الذي يُسمى اليوم بشكل الخيام",
    ],
  },
  {
    num: "٤",
    label: "الفصل الرابع",
    title: "الضوءُ لا يُصدَّق: ميلادُ المنهج التجريبي",
    icon: Lightbulb,
    intro: "حين قال ابن الهيثم «الحقُّ يُطلب بالتجربة»، تغيّر معنى العلمِ إلى اليوم.",
    items: [
      "كتاب المناظر لابن الهيثم: سبعُ مجلداتٍ أسست علمَ البصريات، ودروسُه تُدرَّس في الجامعات قرونًا",
      "وصفُ الغرفة المظلمة: كيف تدخل صورةُ الشمس من ثقبٍ صغير؛ فتأسست فكرةُ الكاميرا التي في جيبك",
      "فرض ابن الهيثم المنهجَ: اشتراطُ التحقق، وتكرارُ التجربة، والشكُّ في النقلِ قبل التصديق",
      "الخزيني في ميزان الحكمة ميّز المعادنَ بأوزانها النوعية، وصوغ بذرةَ فكرةِ الجذب التي أكملها نيوتن بعد قرون",
    ],
  },
];

export default function Chapters() {
  return (
    <section id="chapters" className="relative scroll-mt-24 overflow-hidden py-20">
      {/* زخرفة نجمية عائمة */}
      <span className="ornate-star float-slow absolute right-[8%] top-24 opacity-35" aria-hidden="true" />
      <span
        className="ornate-star float-slow absolute bottom-24 left-[9%] scale-125 opacity-25"
        style={{ animationDelay: "-3s" }}
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
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-bold text-gold-light">
            <span className="ornate-star scale-90" aria-hidden="true" />
            كتابٌ في أربعة فصول
            <span className="ornate-star scale-90" aria-hidden="true" />
          </p>
          <h2 className="font-amiri text-4xl font-bold md:text-5xl">
            <span className="gold-text">الفصول الأربعة</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-muted-foreground">
            كما فتح المُصنّفون كتبَهم بالفصول، فصّلنا حكايةَ العصر العباسي في أربعة
            فصول؛ كلُّ فصلٍ لائحةٌ من ألمع ما أثبته التاريخ
          </p>
        </motion.div>

        {/* بطاقات الفصول */}
        <div className="grid gap-8 lg:grid-cols-2">
          {chapters.map((ch, i) => (
            <motion.article
              key={ch.num}
              className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-card to-night-2 p-6 glow-gold md:p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.15 }}
            >
              {/* إطار داخلي بنمط المخطوطة */}
              <div className="pointer-events-none absolute inset-2.5 rounded-2xl border border-gold/15" aria-hidden="true" />

              {/* ترويسة الفصل */}
              <header className="mb-5 flex items-center gap-4">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-gold/10 font-amiri text-3xl font-bold text-gold glow-gold"
                  aria-hidden="true"
                >
                  {ch.num}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-gold-light">{ch.label}</p>
                  <h3 className="mt-0.5 font-amiri text-2xl font-bold leading-snug text-foreground md:text-3xl">
                    {ch.title}
                  </h3>
                </div>
                <ch.icon className="mr-auto h-7 w-7 shrink-0 text-gold/70" aria-hidden="true" />
              </header>

              <p className="mb-4 text-sm leading-7 text-gold-light/85">{ch.intro}</p>

              {/* اللائحة */}
              <ul className="space-y-3">
                {ch.items.map((item, j) => (
                  <motion.li
                    key={j}
                    className="flex items-start gap-3 rounded-xl border border-gold/15 bg-night/40 px-4 py-3"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + j * 0.1 }}
                  >
                    <span className="ornate-star mt-1.5 shrink-0" aria-hidden="true" />
                    <span className="text-sm leading-7 text-foreground/85">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
