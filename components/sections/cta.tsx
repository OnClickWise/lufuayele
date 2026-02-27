import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="bg-slate-900 text-white py-20 text-center">
      <h2 className="text-3xl font-bold">
        Pronto para trabalhar connosco?
      </h2>

      <p className="mt-4 text-slate-300">
        Entre em contacto e solicite uma proposta personalizada.
      </p>

      <div className="mt-6">
        <Button size="lg">Solicitar Proposta</Button>
      </div>
    </section>
  )
}