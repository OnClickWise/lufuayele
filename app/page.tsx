
import AboutPreview from "@/components/sections/about-preview";
import { BusinessAreas } from "@/components/sections/business-areas";
import { Cta } from "@/components/sections/cta";
import { Differentiators } from "@/components/sections/differentiators";
import { Hero } from "@/components/sections/hero";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutPreview />
      <BusinessAreas/>
      <Differentiators />
      <div className="py-5"></div>
      <Cta />
    </div>
  );
}
