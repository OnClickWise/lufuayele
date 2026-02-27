"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

export function BusinessAreasCarousel() {
  return (
    <section className="py-20 bg-slate-50 relative -mt-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Áreas de Atuação
        </h2>

        {/* Carousel */}
        <div className="relative">
          <Carousel className="w-full max-w-4xl mx-auto"
            opts={{
    align: "start",
    loop: true,
  }}>
            <CarouselContent>
              {areas.map((area, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600">{area.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left top-1/2 -translate-y-1/2 z-10">
              ←
            </CarouselPrevious>
           
            <CarouselNext className="absolute right top-1/2 -translate-y-1/2 z-10">
              →
            </CarouselNext>
            
          </Carousel>
        </div>
      </div>
    </section>
  )
}