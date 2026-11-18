import { OrnamentDivider } from "./OrnamentDivider";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-gold/20 bg-night/90 backdrop-blur-sm">
      <OrnamentDivider />
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="ornate-star" aria-hidden="true" />
              <span className="font-amiri text-2xl font-bold gold-text">علماء العرب</span>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              موقع أسطوري يحيي ذكرى أعظم علماء العصر العباسي في الفلك والرياضيات والفيزياء،
              بتجربة تفاعلية ثلاثية الأبعاد.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-amiri text-lg font-bold text-gold-light">المجالات</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-muted-foreground transition-colors hover:text-gold" href="#falak">الفلك — سيّدو النجوم</a></li>
              <li><a className="text-muted-foreground transition-colors hover:text-gold" href="#riyadiyat">الرياضيات — لغة الكون</a></li>
              <li><a className="text-muted-foreground transition-colors hover:text-gold" href="#fizya">الفيزياء — أساتذة الضوء</a></li>
              <li><a className="text-muted-foreground transition-colors hover:text-gold" href="#timeline">خط الزمن العباسي</a></li>
              <li><a className="text-muted-foreground transition-colors hover:text-gold" href="#moon">أسماؤهم على القمر</a></li>
              <li><a className="text-muted-foreground transition-colors hover:text-gold" href="#words">كلماتهم في لغة العالم</a></li>
              <li><a className="text-muted-foreground transition-colors hover:text-gold" href="#dedication">الإهداء والشكر</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-amiri text-lg font-bold text-gold-light">الأعلام التسعة</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              الصوفي • البتّاني • الفَرْغاني — الخوارزمي • ثابت بن قُرّة • الخيام —
              ابن الهيثم • البيروني • الخزيني
            </p>
          </div>
        </div>

        <div className="gold-line my-6" />
        <p className="text-center text-sm">
          صُمِّم وطُوِّر بشغفٍ بواسطة{" "}
          <span className="font-amiri text-lg font-bold gold-text">فارس بريكات</span>
          {" "}— طالب القسم ٢ع٣ • ثانوية محمد الصالح بلعباس
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          صُنع بحبٍّ للعلم العربي العريق في العصر العباسي • تجربة 3D تعمل بأفضل شكل على المتصفحات الحديثة
        </p>
      </div>
    </footer>
  );
}
