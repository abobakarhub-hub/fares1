import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HouseOfWisdom from "@/components/HouseOfWisdom";
import Chapters from "@/components/Chapters";
import FieldSection from "@/components/FieldSection";
import Timeline from "@/components/Timeline";
import MoonNames from "@/components/MoonNames";
import ArabicWords from "@/components/ArabicWords";
import AmazingFacts from "@/components/AmazingFacts";
import Legacy from "@/components/Legacy";
import Creator from "@/components/Creator";
import { Footer } from "@/components/Footer";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { fields } from "@/lib/scholars";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col cosmic-bg">
      {/* طبقة النجوم الثابتة */}
      <div className="star-layer" aria-hidden="true" />

      <Navbar />

      <main className="relative z-[1] flex-1">
        <Hero />
        <OrnamentDivider />

        <Creator />
        <OrnamentDivider />

        <HouseOfWisdom />
        <OrnamentDivider />

        <Chapters />
        <OrnamentDivider />

        {fields.map((field, i) => (
          <div key={field.id}>
            <FieldSection field={field} num={i} />
            <OrnamentDivider />
          </div>
        ))}

        <Timeline />
        <OrnamentDivider />

        <MoonNames />
        <OrnamentDivider />

        <ArabicWords />
        <OrnamentDivider />

        <AmazingFacts />
        <OrnamentDivider />

        <Legacy />
      </main>

      <Footer />
    </div>
  );
}
