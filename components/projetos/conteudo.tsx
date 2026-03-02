import Image from "next/image";
import Reveal from "../animations/reveal";

export default function ProjetoCont() {
  return (
    <main className="py-12 px-5 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Imagem */}
          <Reveal delay={0} initialX={-40}>
            <div>
              <Image
                src="/predio.jpg"
                alt="Projeto Modernidade e Eficiência"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </Reveal>

          {/* Conteúdo */}
          <div className="flex flex-col">
            
            <Reveal delay={0.2} initialX={40}>
              <h1 className="font-bold text-[#C6A75E] text-2xl sm:text-3xl md:text-4xl leading-tight mb-6">
                Modernidade e Eficiência
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="text-justify space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-700">

                <p>
                  Este projeto foi desenvolvido com o objetivo de unir tecnologia,
                  inovação e praticidade para oferecer uma solução moderna,
                  funcional e altamente eficiente. Cada etapa foi planejada
                  estrategicamente para garantir desempenho, organização e uma
                  experiência intuitiva para o usuário.
                </p>

                <p>
                  A modernidade está presente tanto no design quanto na estrutura
                  tecnológica, utilizando ferramentas atuais e boas práticas de
                  desenvolvimento. O layout foi pensado para ser responsivo,
                  acessível e visualmente atrativo, transmitindo profissionalismo
                  e confiança.
                </p>

                <p>
                  Já a eficiência se reflete na otimização de processos, na redução
                  de etapas desnecessárias e na automação de tarefas, proporcionando
                  mais agilidade, segurança e produtividade.
                </p>

                <p>
                  O resultado é uma solução inteligente que combina tecnologia e
                  estratégia, preparada para atender às demandas atuais e evoluir
                  junto com as necessidades do mercado.
                </p>

              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </main>
  );
}