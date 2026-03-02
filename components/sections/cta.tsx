import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Cta() {
  return (
    <section className="py-28 bg-gradient-to-r from-[#0B1F3B] via-[#081528] to-black text-white">
      <div className="max-w-4xl mx-auto text-center px-6">

        <p className="text-sm uppercase tracking-widest text-[#C6A75E] mb-4">
          Vamos Construir o Futuro Juntos
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Pronto para iniciar uma parceria estratégica?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          A LUFUAYELE GROUP está preparada para desenvolver soluções
          personalizadas que impulsionam resultados com excelência,
          inovação e responsabilidade.
        </p>

        <Link href="/contacto">
          <Button 
            size="lg"
            className="bg-[#C6A75E] text-black font-semibold px-8 py-6 hover:bg-[#b8954f] transition-all duration-300"
          >
            Solicitar Proposta
          </Button>
        </Link>

      </div>
    </section>
  )
}