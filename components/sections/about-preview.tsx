"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function AboutPreview() {
  const features = [
    "Atuação multissetorial estruturada",
    "Gestão profissional e estratégica",
    "Compromisso com qualidade e inovação",
    "Desenvolvimento sustentável e impacto económico",
  ]

  return (
    <section className="py-16 md:py-24 bg-background transition-colors">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* IMAGEM (Mobile primeiro) */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] order-1 lg:order-2">
            <Image
              src="/images/edicifi.jpg"
              alt="Edifício da Lufuayele Group"
              fill
              priority
              className="object-cover rounded-2xl shadow-xl"
            />

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* CONTEÚDO */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
              Sobre o Grupo
            </span>

            {/* Título */}
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Estrutura Multissetorial com Visão Estratégica
            </h2>

            {/* Texto */}
            <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Atuamos em sectores estratégicos como agro, logística,
              tecnologia, saúde e eventos corporativos, oferecendo
              soluções integradas com excelência operacional e
              compromisso sustentável.
            </p>

            {/* Lista */}
            <ul className="mt-8 space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-[2px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Botão */}
            <div className="mt-10">
              <Button
                size="lg"
                className="px-8 hover:scale-[1.03] transition-transform"
              >
                Saiba Mais Sobre Nós
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}