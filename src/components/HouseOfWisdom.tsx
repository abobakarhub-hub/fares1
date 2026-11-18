"use client";

import { motion } from "framer-motion";
import { BookOpen, Library, Telescope, Globe2 } from "lucide-react";

const pillars = [
  { icon: BookOpen, label: "ترجمة أرسطو وإقليدس وبطليموس من اليونانية والسريانية والفارسية" },
  { icon: Library, label: "مكتبة عظيمة ومرصد ومركز بحث علمي في آنٍ واحد" },
  { icon: Telescope, label: "رعاية الخلفاء العباسيين: هارون الرشيد أَسّسها والمأمون بلغ ذروتها" },
  { icon: Globe2, label: "من صلبه خرج الخوارزمي وثابت بن قُرّة والفَرْغاني" },
];

export default function HouseOfWisdom() {
  return (
    <section id="hikma" className="relative scroll-mt-24 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          className="overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-night-2 to-card glow-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="border-b border-gold/25 bg-gradient-to-l from-gold-deep/30 via-gold/10 to-transparent px-6 py-5 text-center">
            <h2 className="font-amiri text-4xl font-bold md:text-5xl">
              <span className="gold-text">بيت الحكمة</span>
            </h2>
            <p className="mt-2 font-bold text-gold-light/90">
              قلب العصر العباسي النابض • بغداد، على ضفاف دجلة
            </p>
          </div>

          <div className="px-6 py-6">
            <p className="mx-auto max-w-3xl text-center leading-8 text-foreground/85">
              أسّسه الخليفة هارون الرشيد وبلغ ذروته في عهد المأمون؛ فكان جامعةً ومكتبةً
              ومرصدًا ومركزَ ترجمةٍ أعظمَ ما عرفته القرون الوسطى. هنا اجتمع علماء من كل
              أمة ولغة، وهنا وُلدت الخوارزمية والجبر، ومن هنا انطلقت الزيجات الفلكية التي
              عمّرت السماء سبعة قرون.
            </p>

            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-gold/20 bg-night/40 px-4 py-3.5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <p.icon className="h-4.5 w-4.5 text-gold" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-7 text-foreground/85">{p.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
