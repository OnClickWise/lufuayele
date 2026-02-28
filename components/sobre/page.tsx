import Image from "next/image"
import { Separator } from "../ui/separator"
import Reveal from "../animations/reveal"

export function AboutPage() {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          LUFUAYELE GROUP
        </h1>

        <h2 className="text-center text-muted-foreground mb-10">
          Excelência Operacional e Desenvolvimento Sustentável
        </h2>

        {/* Quem Somos */}
        <div className="pb-10">
          <h3 className="text-xl md:text-2xl font-extrabold underline mb-6">
            Quem Somos
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <Reveal initialX={-25}>
              <div className="space-y-4 text-left">
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
                alt="conversa"
                width={600}
                height={600}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </Reveal>

          </div>
        </div>

        <Separator />

        {/* Pilares */}
        <div className="py-10">
          <h3 className="text-xl md:text-2xl font-extrabold underline mb-8">
            Nossos Pilares
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Indústria",
                text: "Nossas unidades industriais operam com os mais avançados padrões tecnológicos..."
              },
              {
                title: "Comércio",
                text: "Em um mercado que exige respostas rápidas, oferecemos soluções ágeis..."
              },
              {
                title: "Serviços",
                text: "Acreditamos que um bom serviço vai além da entrega pontual..."
              }
            ].map((item, i) => (
              <Reveal key={i} initialY={40} delay={i * 0.2}>
                <div className="p-6 shadow-xl rounded-3xl hover:shadow-2xl transition">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Separator />

        {/* Identidade */}
        <div className="py-10">
          <h3 className="text-xl md:text-2xl font-extrabold underline text-center mb-10">
            Nossa Identidade em Ação
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Excelência", text: "Não aceitamos o suficiente. Buscamos o extraordinário." },
              { title: "Sustentabilidade", text: "Pensamos no hoje sem comprometer o amanhã." },
              { title: "Inovação", text: "O novo não nos amedronta — nos move." },
              { title: "Integridade", text: "Nossa palavra é nosso contrato mais valioso." },
            ].map((item, i) => (
              <Reveal key={i} initialX={-30} delay={i * 0.2}>
                <div className="border-l-4 pl-6 italic">
                  <h4 className="font-bold">{item.title}</h4>
                  <Separator className="my-2" />
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Separator />

        {/* Impacto */}
        <div className="py-10">
          <h3 className="text-xl md:text-2xl font-extrabold underline text-center mb-8">
            Impacto e Resultados
          </h3>

          <ul className="list-disc ml-6 space-y-3 text-lg md:text-xl">
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

          <p className="mt-6 text-muted-foreground">
            Estes números representam mais do que estatísticas — representam vidas
            impactadas, comunidades fortalecidas e um futuro sendo construído com responsabilidade.
          </p>
        </div>

        <Separator />

        {/* Promessa */}
        <div className="py-10 px-6 shadow-2xl rounded-3xl">
          <h3 className="text-xl md:text-2xl font-extrabold underline text-center mb-6">
            Nossa Promessa
          </h3>
          <p className="leading-7 text-center max-w-3xl mx-auto">
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