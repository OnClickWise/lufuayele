import { AboutPreview } from "@/components/sections/about-preview";
import { BusinessAreasCarousel } from "@/components/sections/business-areas";
import { Cta } from "@/components/sections/cta";
import { Differentiators } from "@/components/sections/differentiators";
import { Hero } from "@/components/sections/hero";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutPreview />
      <BusinessAreasCarousel/>
      <Differentiators />
      <Cta />
    </div>
  );
}
