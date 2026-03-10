"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const slides = [
  {
    title: "EVENTOS CORPORATIVOS",
    subtitle: "Experiências que fortalecem marcas e relações institucionais",
    description: [
      "Planejamento estratégico completo",
      "Produção e gestão executiva",
      "Coordenação integrada de fornecedores",
      "Execução com excelência operacional",
    ],
    image: "/images/banner3.png",
  },
  {
    title: "SAÚDE & MATERIAL HOSPITALAR",
    subtitle: "Compromisso com Qualidade e Vida",
    description: [
      "Fornecimento de materiais certificados",
      "Distribuição hospitalar estruturada",
      "Conformidade regulatória e segurança",
      "Atendimento institucional ágil",
    ],
    image: "/images/banner4.png",
  },
  {
    title: "TRANSPORTE & LOGÍSTICA",
    subtitle: "Eficiência que Move Negócios",
    description: [
      "Redução estratégica de custos logísticos",
      "Pontualidade e confiabilidade operacional",
      "Planejamento e otimização de rotas",
      "Monitoramento e controle em tempo real",
    ],
    image: "/images/banner5.png",
  },
  {
    title: "AGRO NEGÓCIOS",
    subtitle: "Produtividade, inovação e sustentabilidade",
    description: [
      "Gestão agrícola estratégica",
      "Soluções tecnológicas aplicadas ao campo",
      "Automação e análise de dados",
      "Aumento de produtividade sustentável",
    ],
    image: "/images/banner1.png",
  },

   {
    title: "TECNOLOGIA",
    subtitle: "Produtividade, inovação e sustentabilidade",
    description: [
      "Gestão agrícola estratégica",
      "Soluções tecnológicas aplicadas ao campo",
      "Automação e análise de dados",
      "Aumento de produtividade sustentável",
    ],
    image: "/images/banner2.png",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const whatsappNumber = "244923019166";

  const proposalLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, gostaria de solicitar uma proposta da LUFUAYELE GROUP.",
  )}`;

  const contactLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, gostaria de falar com um especialista da LUFUAYELE GROUP.",
  )}`;

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      {/* CAROUSEL */}

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-[80vh] sm:h-[85vh] flex items-center"
            >
              {/* IMAGE */}

              <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />

              {/* CONTENT */}

              <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16">
                <div className="max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                    {slide.subtitle}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    {slide.description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>

                  {/* CTA */}

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a href={proposalLink} target="_blank">
                      <Button size="lg">Solicitar Proposta</Button>
                    </a>

                    <a href={contactLink} target="_blank">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2"
                      >
                        <MessageCircle size={20} />
                        Falar no WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INDICATORS */}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-primary w-6" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
