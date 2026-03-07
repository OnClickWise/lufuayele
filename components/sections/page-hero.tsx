import Image from "next/image"

interface PageHeroProps {
  title: string
  description: string
  image?: string
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative py-24 bg-background border-b border-border overflow-hidden">

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}

        <div className="max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>

        </div>

        {/* IMAGEM */}

        {image && (
          <div className="relative h-[260px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}

      </div>

      {/* efeito decorativo moderno */}

      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

    </section>
  )
}