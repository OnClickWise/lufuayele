import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-slate-900 text-white py-28">
      <div className="container mx-auto text-center max-w-4xl">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Soluções Integradas em Comércio,
          Indústria e Serviços
        </h1>

        <p className="mt-6 text-slate-300">
          Grupo empresarial multissetorial com foco em excelência,
          inovação e desenvolvimento sustentável.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Conheça as Áreas</Button>
          <Button variant="outline" size="lg">
            Fale Connosco
          </Button>
        </div>
      </div>
    </section>
  )
}