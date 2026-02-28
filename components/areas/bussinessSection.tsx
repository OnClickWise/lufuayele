import BusinessItem from "./bussinessItem"

const units = [
  {
    title: "Comércio & Destribuição",
    description:[
      "Bens Alimentares",
      "Produtos Hospitalares",
      "Material Escolar",
      "Lubrificantes",
      "Cosméticos" ],
    icon: "truck",
    image: "/forlufu/empilhadeira.jpg",
    slug: "comercio-logistica",
  },
  {
    title: "Saúde & Farmacêutica",
    description:[
      "Medicamentos",
      "Equipamentos Laboratoriais",
      "Produtos Hospitalares",
      "Serviços de Saúde"
    ],
    icon: "health",
    image: "/forlufu/saude.jpg",
    slug: "saude",
  },
  {
    title: "Industria & Construção",
    description:[
      "Construção Civil",
      "Materiais Industriais",
      "Fiscalização de Obra",
      "Instalações Elétricas"
    ],
    icon: "wrench",
    image: "/forlufu/construcao.jpg",
    slug: "servicos-tecnicos",
  },
  {
    title: "Energia & Recursos Naturais",
    description:[
      "Derivados do Petróleo",
      "Gás de Cozinha",
      "Exploração Mineira",
      "Bombas de Combustível"
    ],
    icon: "zap",
    image: "/forlufu/combustivel.jpg",
    slug: "servicos-tecnicos",
  },
  {
    title: "Agro & Pescas",
    description:[
      "Agricultura",
      "Pecuária",
      "Avicultura",
      "Aquicultura",
      "Transformação de Pescado"
    ],
    icon: "leaf",
    image: "/forlufu/planta.jpg",
    slug: "agro",
  },
  {
    title: "Tecnologia & Serviços Técnicos",
    description:[
      "Desenvolvimento de Software",
      "CCTV",
      "Telecomunicações",
      "Tratamento de Água",
      "Ar Condicionado"
    ],
    icon: "cpu",
    image: "/forlufu/data.jpg",
    slug: "tecnologia",
  },
  
  {
    title: "Hotelaria, Turimos & Eventos",
    description:[
      "Catering",
      "Hotelaria",
      "Ginásio",
      "Eventos Culturais",
      "Agência de viagens"
    ],
    icon: "hotel",
    image: "/forlufu/hoel.jpg",
    slug: "hotelaria",
  },
  
  
  
  
]

export default function BusinessSection() {
  return (
    <>
    
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 space-y-28">
        {units.map((unit, index) => (
          <BusinessItem
            key={unit.title}
            {...unit}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
    </>
  )
}
