import Image from "next/image"
import { PageHero } from "@/components/sections/page-hero"

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre a LUFUAYELE GROUP"
        description="Um grupo empresarial comprometido com o desenvolvimento económico, inovação e excelência na prestação de serviços em múltiplos setores estratégicos."
        image="/images/banner-sobre.png"
      />

      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* CEO */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/ceo-quitini-miguel.png"
                alt="CEO Quitini Miguel"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg object-cover"
              />

              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Quitini Miguel
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  CEO & Fundador
                </p>
              </div>
            </div>
          </div>

          {/* Conteúdo institucional */}
          <div className="space-y-10">
            
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                Quem Somos
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A <strong>LUFUAYELE GROUP</strong> é um grupo empresarial
                multissetorial que atua nas áreas de comércio, indústria e
                prestação de serviços. A empresa tem como propósito contribuir
                para o desenvolvimento económico e social, oferecendo soluções
                inovadoras e eficientes para empresas, instituições públicas e
                clientes particulares.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Missão
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Oferecer produtos e serviços de alta qualidade que contribuam
                para o crescimento sustentável dos nossos clientes e parceiros.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Visão
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Ser uma referência empresarial em Angola e em África,
                reconhecida pela inovação, confiança e impacto positivo na
                sociedade.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Valores
              </h2>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Ética e transparência</li>
                <li>Excelência operacional</li>
                <li>Compromisso com resultados</li>
                <li>Inovação contínua</li>
                <li>Responsabilidade social</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Objetivos
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Expandir as operações do grupo, desenvolver novas áreas de
                negócio e fortalecer parcerias estratégicas que impulsionem o
                crescimento sustentável.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Parceiros
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Trabalhamos em colaboração com empresas, organizações e
                instituições que partilham da mesma visão de crescimento,
                inovação e impacto positivo no mercado.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}