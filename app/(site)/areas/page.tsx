import BusinessSection from "@/components/areas/bussinessSection";
import { BusinessAreasCarousel } from "@/components/sections/business-areas";


export default function AreasPage() {
  return (
    <>
      <div className="container mx-auto pt-20 text-center">
        <h1 className="text-4xl text-[#0B1F3B] font-bold">Áreas de Negócio</h1>
      </div>

      <BusinessSection/>
    </>
  )
}