export function Differentiators() {
  const items = [
    "Estrutura Multissetorial",
    "Capacidade Operacional Integrada",
    "Parcerias Estratégicas",
    "Compromisso com Sustentabilidade"
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Diferenciais
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item) => (
            <div
              key={item}
              className="border p-6 rounded-lg font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}