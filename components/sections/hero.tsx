import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
   <section className="relative py-32 text-white overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="/hero.jpg"
      className="w-full h-full object-cover"
      alt=""
    />
    <div className="absolute inset-0 bg-black/75" />
  </div>

  <div className="relative container mx-auto text-center max-w-4xl">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Soluções Integradas em Comércio,
      Indústria e Serviços
    </h1>

    <p className="mt-6 text-white/80">
      Grupo empresarial multissetorial com foco em excelência,
      inovação e desenvolvimento sustentável.
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <Link href="/areas"><Button className="bg-[#C6A75E] text-black hover:bg-[#b8954f]">
        Áreas de Atuação
      </Button></Link>
      <Link href="contacto"><Button className="bg-[#C6A75E] text-black hover:bg-[#b8954f]">
        Entre em Contato!
      </Button></Link>
    </div>
  </div>
</section>
  )
}