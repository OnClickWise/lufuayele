import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactoPage() {
  return (
    <div className="container mx-auto py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Contacto</h1>

      <form className="space-y-6">
        <Input placeholder="Nome" />
        <Input placeholder="Email" type="email" />
        <Textarea placeholder="Mensagem" />
        <Button>Enviar Mensagem</Button>
      </form>
    </div>
  )
}