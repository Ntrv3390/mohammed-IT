import { AiEffect } from "./components/AiEffect";
import { CallToAction } from "./components/CallToAction";
import { Heading } from "./components/Heading";
import { Hero } from "./components/Hero";
import { MacbookScrollWrapper } from "./components/MacbookScrollWrapper";
import { ServicesDemo } from "./components/ServicesDemo";
import { SpotlightPreview } from "./components/SpotlightPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <SpotlightPreview />
      <AiEffect />
      <Heading />
      <ServicesDemo mainHeading="Gloval Valves" secondHeading="Valve Manufacturing Company" imgUrl="gloval.webp" />
      <ServicesDemo mainHeading="Safal Pile Works" secondHeading="Construction Company" imgUrl="safal.webp"  />
      <ServicesDemo mainHeading="PDF Ninja" secondHeading="AI Chat with PDF SaaS" imgUrl="pdf.webp"  />
      <ServicesDemo mainHeading="Shades The Boutique" secondHeading="Women&apos;s Clothing" imgUrl="shades.webp"  />
      <MacbookScrollWrapper />
      <CallToAction />
    </>
  );
}
