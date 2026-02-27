import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const areas = [
  {
    title: "Comércio & Distribuição",
    desc: "Produtos alimentares, hospitalares e industriais."
  },
  {
    title: "Indústria & Construção",
    desc: "Empreitadas e instalações técnicas."
  },
  {
    title: "Saúde & Farmacêutica",
    desc: "Medicamentos e equipamentos laboratoriais."
  },
  {
    title: "Tecnologia",
    desc: "Software, telecomunicações e CCTV."
  }
]

export function BusinessAreas() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Áreas de Atuação
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <Card key={area.title}>
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  {area.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}