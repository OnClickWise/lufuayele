import { Button } from "@/components/ui/button"
import Link from "next/link"

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
        <Link href="/contacto"><Button className="hover:bg-amber-500 hover:text-black transition" size="lg">Solicitar Proposta</Button></Link>
      </div>
    </section>
  )
}