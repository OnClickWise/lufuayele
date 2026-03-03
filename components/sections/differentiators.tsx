
export function Differentiators() {
  const items = [
    {
      title: "Estrutura Multissetorial",
      desc: "Atuação integrada em diversos segmentos estratégicos."
    },
    {
      title: "Capacidade Operacional Integrada",
      desc: "Execução eficiente com recursos próprios e parceiros qualificados."
    },
    {
      title: "Parcerias Estratégicas",
      desc: "Alianças sólidas que fortalecem nossa presença no mercado."
    },
    {
      title: "Compromisso Sustentável",
      desc: "Crescimento responsável com foco ambiental e social."
    }
  ]

  return (
    <section className="py-28 bg-[#0B1F3B] text-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#C6A75E] mb-3">
            Nossos Diferenciais
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Excelência que Nos Define
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {items.map((item, index) => (
            
            <div key={item.title} className="flex gap-6 group">
              
              <span className="text-5xl font-bold text-[#C6A75E] opacity-40 group-hover:opacity-100 transition">
                0{index + 1}
              </span>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>
                
              </div>
            
            </div>
          ))}
          
        </div>
          
      </div>
    </section>
  )
}