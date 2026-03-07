"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Cta() {

  const whatsappNumber = "244923019166"

  const whatsappMessage =
    "Olá, gostaria de mais informações sobre os serviços da LUFUAYELE GROUP."

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative py-20 md:py-28 bg-primary text-white overflow-hidden">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_70%)]" />

      <div className="container relative mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <span className="text-xs uppercase tracking-widest text-white/70">
            Parcerias & Projetos
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Vamos Construir o Próximo
            <span className="block">Grande Projeto Juntos</span>
          </h2>

          <p className="mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
            A LUFUAYELE está preparada para atender projetos
            empresariais e institucionais com eficiência,
            estrutura operacional e compromisso com resultados.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold"
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base border-white text-white hover:bg-white hover:text-primary flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </Button>
            </a>

          </div>

          <p className="mt-8 text-xs sm:text-sm text-white/60">
            Projetos empresariais • Fornecimento institucional • Soluções integradas
          </p>

        </motion.div>

      </div>
    </section>
  )
}