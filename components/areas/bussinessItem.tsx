"use client"

import Image from "next/image"
import {
  Cpu,
  Truck,
  Hotel,
  HeartPulse,
  Leaf,
  Wrench,
  Zap
} from "lucide-react"
import Reveal from "../animations/reveal"

interface BusinessItemProps {
  title: string
  description: string[]
  icon: string
  image: string
  slug: string
  reverse?: boolean
}

export default function BusinessItem({
  title,
  description,
  icon,
  image,
  slug,
  reverse = false,
}: BusinessItemProps) {
  const iconMap = {
    cpu: Cpu,
    truck: Truck,
    hotel: Hotel,
    health: HeartPulse,
    leaf: Leaf,
    wrench: Wrench,
    zap: Zap
  }

  const Icon = iconMap[icon as keyof typeof iconMap]

  return (
    <Reveal duration={2} delay={0.3}><div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Imagem */}
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative w-full h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="space-y-6">
        
        {/* Cabeçalho */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {Icon && <Icon size={28} className="bg-[#0B1F3B] p-0.5 rounded text-[#C6A75E]" />}
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold">
            {title}
          </h3>
        </div>

        {/* Descrição */}
       <ul className="list-disc ml-6 space-y-2 text-muted-foreground text-lg leading-relaxed max-w-xl">
  {description.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

      </div>
    </div></Reveal>
  )
}
