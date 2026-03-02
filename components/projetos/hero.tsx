import Image from "next/image"

export function ProjetosHero() {
  return (
    <section className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden">

      {/* Background */}
      <Image
        src="/predio.jpg"
        alt="Projetos e Parcerias"
        fill
        priority
        className="object-cover rounded-2xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
          Projetos e Parcerias
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl">
          Conheça nossas iniciativas que unem inovação, estratégia e excelência operacional.
        </p>

      </div>
    </section>
  )
}