import Image from "next/image"
import { Separator } from "../ui/separator"
import Reveal from "../animations/reveal"

export function AboutPage() {
  return (
    <section className="py-12 px-5 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0B1F3B] font-bold mb-4 text-center leading-tight">
          LUFUAYELE GROUP
        </h1>

        <h2 className="text-sm sm:text-base md:text-lg text-center text-muted-foreground mb-10">
          Excelência Operacional e Desenvolvimento Sustentável
        </h2>

        {/* Quem Somos */}
        <div className="pb-12">
          <h3 className="text-xl sm:text-2xl text-[#C6A75E] font-extrabold underline mb-6">
            Quem Somos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

            <Reveal initialX={-25}>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  A LUFUAYELE GROUP é um grupo empresarial multissetorial que opera
                  na interseção entre comércio, indústria e prestação de serviços.
                </p>
                <p>
                  Desde nossa fundação, movemo-nos pela convicção de que é possível
                  aliar alta performance empresarial ao compromisso genuíno com o
                  desenvolvimento sustentável.
                </p>
                <p>
                  Somos uma organização orientada por propósitos claros: entregar
                  resultados excepcionais sem jamais perder de vista nossa
                  responsabilidade com as pessoas e com o planeta.
                </p>
              </div>
            </Reveal>

            <Reveal initialX={25}>
              <Image
                src="/contrato.jpg"
                alt="Reunião corporativa"
                width={600}
                height={600}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </Reveal>

          </div>
        </div>

        <Separator />

        {/* Pilares */}
        <div className="py-12">
          <h3 className="text-xl sm:text-2xl text-[#C6A75E] font-extrabold underline mb-8">
            Nossos Pilares
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Indústria",
                text: "Nossas unidades industriais operam com os mais avançados padrões tecnológicos, garantindo eficiência, qualidade e sustentabilidade em cada processo produtivo."
              },
              {
                title: "Comércio",
                text: "Em um mercado que exige respostas rápidas, oferecemos soluções ágeis, estratégicas e alinhadas às necessidades específicas de cada cliente."
              },
              {
                title: "Serviços",
                text: "Acreditamos que um bom serviço vai além da entrega pontual — estamos falando de excelência, relacionamento e compromisso com resultados."
              }
            ].map((item, i) => (
              <Reveal key={i} initialY={40} delay={i * 0.2}>
                <div className="p-6 shadow-xl bg-[#0B1F3B] rounded-3xl hover:shadow-2xl transition duration-300">
                  <h4 className="font-bold text-[#C6A75E] mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Separator />

        {/* Identidade */}
        <div className="py-12">
          <h3 className="text-xl sm:text-2xl text-[#C6A75E] font-extrabold underline text-center mb-10">
            Nossa Identidade em Ação
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Excelência", text: "Não aceitamos o suficiente. Buscamos o extraordinário." },
              { title: "Sustentabilidade", text: "Pensamos no hoje sem comprometer o amanhã." },
              { title: "Inovação", text: "O novo não nos amedronta — nos move." },
              { title: "Integridade", text: "Nossa palavra é nosso contrato mais valioso." },
            ].map((item, i) => (
              <Reveal key={i} initialX={-30} delay={i * 0.2}>
                <div className="border-l-4 pl-6 border-[#0B1F3B] italic">
                  <h4 className="font-bold text-[#C6A75E] mb-2">{item.title}</h4>
                  <Separator className="my-2" />
                  <p className="text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Separator />

        {/* Impacto */}
        <div className="py-12">
          <h3 className="text-xl sm:text-2xl text-[#C6A75E] font-extrabold underline text-center mb-8">
            Impacto e Resultados
          </h3>

          <ul className="list-disc ml-5 sm:ml-6 space-y-3 text-base sm:text-lg md:text-xl text-[#0B1F3B]">
            {[
              "+500 Projetos realizados",
              "+50 Parcerias ativas",
              "3 Continentes com operações",
              "100% Compromisso com práticas sustentáveis"
            ].map((item, i) => (
              <Reveal key={i} initialX={-30} delay={i * 0.2}>
                <li>{item}</li>
              </Reveal>
            ))}
          </ul>

          <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Estes números representam mais do que estatísticas — representam vidas
            impactadas, comunidades fortalecidas e um futuro sendo construído com responsabilidade.
          </p>
        </div>

        <Separator />

       <div className="py-5"></div>
        <div className="py-12 px-5 sm:px-8 md:px-10 shadow-2xl bg-[#0B1F3B] rounded-3xl">
          <h3 className="text-xl sm:text-2xl text-[#C6A75E] font-extrabold underline text-center mb-6">
            Nossa Promessa
          </h3>
          <p className="leading-relaxed text-sm sm:text-base md:text-lg text-center text-white max-w-3xl mx-auto">
            Na LUFUAYELE GROUP, não entregamos apenas produtos ou serviços.
            Entregamos soluções que transformam realidades.
            Trabalhamos incansavelmente para que cada projeto, cada parceria e
            cada relação comercial seja um passo em direção a um mundo mais
            equilibrado, justo e próspero.
          </p>
        </div>

      </div>
    </section>
  )
}