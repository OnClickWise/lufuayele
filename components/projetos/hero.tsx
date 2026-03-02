
import Image from "next/image"


export function ProjetosHero() {
  return (
    <>
    <section className="relative h-[300px] w-full rounded overflow-hidden">
      
      <Image
        src="/predio.jpg"
        alt="Projeto"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay opcional */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <h1 className="text-4xl font-bold">
          Projetos e Parcerias
        </h1>
      </div>
    
    </section>
    </>
  )
}