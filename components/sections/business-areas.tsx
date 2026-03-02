"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const areas = [
  {
    title: "Comércio & Distribuição",
    desc: "Produtos alimentares, hospitalares e industriais.",
  },
  {
    title: "Indústria & Construção",
    desc: "Empreitadas e instalações técnicas.",
  },
  {
    title: "Saúde & Farmacêutica",
    desc: "Medicamentos e equipamentos laboratoriais.",
  },
  {
    title: "Tecnologia",
    desc: "Software, telecomunicações e CCTV.",
  },
]

export function BusinessAreas() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#C6A75E] mb-3">
            Áreas Estratégicas
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Atuação Multissetorial
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border border-zinc-800 hover:border-[#C6A75E] transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="text-lg text-white group-hover:text-[#C6A75E] transition">
                  {area.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-white/70">
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