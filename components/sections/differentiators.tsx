"use client"

import { motion } from "framer-motion"
import {
  Layers,
  Workflow,
  Handshake,
  Leaf,
} from "lucide-react"

const items = [
  {
    title: "Estrutura Multissetorial",
    desc: "Integração estratégica entre diferentes áreas de atuação, permitindo soluções completas e centralizadas para grandes projetos.",
    icon: Layers,
  },
  {
    title: "Capacidade Operacional Integrada",
    desc: "Equipa técnica qualificada e estrutura robusta para execução eficiente, segura e escalável.",
    icon: Workflow,
  },
  {
    title: "Parcerias Estratégicas",
    desc: "Rede consolidada de parceiros e fornecedores nacionais e internacionais que fortalecem nossa entrega.",
    icon: Handshake,
  },
  {
    title: "Compromisso com Sustentabilidade",
    desc: "Atuação responsável com foco em impacto positivo, eficiência operacional e desenvolvimento sustentável.",
    icon: Leaf,
  },
]

export function Differentiators() {
  return (
    <section className="py-16 md:py-24 bg-background">

      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center max-w-2xl mx-auto">

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Diferenciais Competitivos
          </span>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Estrutura, Estratégia e Capacidade de Execução
          </h2>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Atuamos com visão integrada, estrutura consolidada e foco em resultados,
            garantindo eficiência operacional e segurança contratual.
          </p>

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">

          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-6 sm:p-7
                           hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-white
                                  group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}