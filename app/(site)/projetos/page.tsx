import Reveal from "@/components/animations/reveal";
import ProjetoCont from "@/components/projetos/conteudo";
import { ProjetosHero } from "@/components/projetos/hero";


export default function ProjetosPage() {
  return (
    <div className="container mx-auto text-center  py-20">
     <Reveal delay={0.2} initialY={120}>
      <ProjetosHero/>
      </Reveal>
      
      <ProjetoCont/>
    </div>
  )
}