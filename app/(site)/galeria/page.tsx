"use client"

import { PageHero } from "@/components/sections/page-hero"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react"

export default function GaleriaPage() {

  const images = [
    "/images/galery/galeria1.jpeg",
    "/images/galery/galeria2.jpeg",
    "/images/galery/galeria3.jpeg",
    "/images/galery/galeria4.jpeg",
    "/images/galery/galeria5.jpeg",
    "/images/galery/galeria6.jpeg",
    "/images/galery/galeria7.jpeg",
    "/images/galery/galeria8.jpeg",
    "/images/galery/galeria9.jpeg",
    "/images/galery/galeria10.jpeg",
    "/images/galery/galeria11.jpeg",
    "/images/galery/galeria12.jpeg",
    "/images/galery/galeria13.jpeg",
    "/images/galery/galeria14.jpeg",
    "/images/galery/galeria15.jpeg",
    "/images/galery/galeria16.jpeg",
    "/images/galery/galeria17.jpeg",
    "/images/galery/galeria18.jpeg",
    "/images/galery/galeria19.jpeg",
    "/images/galery/galeria20.jpeg",
    "/images/galery/galeria21.jpeg",
    "/images/galery/galeria22.jpeg",
    "/images/galery/galeria23.jpeg",
    "/images/galery/galeria24.jpeg",
    "/images/galery/galeria25.jpeg",
    "/images/galery/galeria26.jpeg",
    "/images/galery/galeria27.jpeg",
    "/images/galery/galeria28.jpeg",
    "/images/galery/galeria29.jpeg",
    "/images/galery/galeria30.jpeg",
    "/images/galery/galeria31.jpeg",
    "/images/galery/galeria32.jpeg",
    "/images/galery/galeria33.jpeg",
  ]

  const videos = [
    {
      title: "Apresentação Institucional",
      url: "https://www.youtube.com/embed/8QyNE9ZtkHQ",
      thumb: "/images/galery/galeria1.jpeg"
    },
    {
      title: "Projetos de Infraestrutura",
      url: "https://www.youtube.com/embed/8QyNE9ZtkHQ",
      thumb: "/images/galery/galeria2.jpeg"
    },
    {
      title: "Atividades do Grupo",
      url: "https://www.youtube.com/embed/8QyNE9ZtkHQ",
      thumb: "/images/galery/galeria3.jpeg"
    }
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const carouselRef = useRef<HTMLDivElement>(null)

  /* AUTOPLAY */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(prev => (prev + 1) % images.length)

    }, 5000)

    return () => clearInterval(interval)

  }, [])

  function nextImage() {
    setCurrentImage(prev => (prev + 1) % images.length)
  }

  function prevImage() {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length)
  }

  return (

    <main>

      <PageHero
        title="Galeria"
        description="Conheça alguns dos projetos, infraestruturas e atividades desenvolvidas pela LUFUAYELE GROUP."
        image="/images/galery/Galeria.png"
      />

      {/* GALERIA */}

      <section className="py-24 relative overflow-hidden">

        {/* BACKGROUND BLUR */}

        <div
          className="absolute inset-0 opacity-20 blur-3xl scale-110"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="relative container mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-3xl font-bold">
              Galeria de Fotos
            </h2>

            <p className="text-muted-foreground mt-2">
              Explore alguns momentos e projetos da empresa
            </p>

          </div>

          {/* IMAGEM DESTAQUE */}

          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden border border-border bg-black/30 backdrop-blur-lg"
          >

            <div
              className="flex items-center justify-center h-[600px] cursor-zoom-in"
              onClick={() => setFullscreen(true)}
            >

              <Image
                src={images[currentImage]}
                alt="Imagem"
                width={1400}
                height={900}
                className="max-h-full max-w-full object-contain"
              />

            </div>

            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
            >
              <ChevronRight size={24} />
            </button>

          </motion.div>

          {/* CAROUSEL */}

          <div className="overflow-hidden mt-12">

            <motion.div
              ref={carouselRef}
              drag="x"
              dragConstraints={{ left: -1200, right: 0 }}
              className="flex gap-6 cursor-grab"
            >

              {images.map((img, index) => (

                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  onClick={() => setCurrentImage(index)}
                  className={`relative min-w-[200px] h-[120px] rounded-xl overflow-hidden cursor-pointer
                  ${currentImage === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"}`}
                >

                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                  />

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>

      {/* FULLSCREEN */}

      <AnimatePresence>

        {fullscreen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          >

            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-8 right-8 text-white"
            >
              <X size={34} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-10 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            <Image
              src={images[currentImage]}
              alt=""
              width={1600}
              height={900}
              className="max-h-[90vh] object-contain"
            />

            <button
              onClick={nextImage}
              className="absolute right-10 text-white"
            >
              <ChevronRight size={40} />
            </button>

          </motion.div>

        )}

      </AnimatePresence>

      {/* VIDEOS */}

      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold">
              Vídeos
            </h2>

            <p className="text-muted-foreground">
              Conteúdos institucionais e atividades
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* VIDEO */}

            <div className="lg:col-span-2">

              <div className="rounded-2xl overflow-hidden border border-border">

                <iframe
                  key={currentVideo}
                  src={videos[currentVideo].url}
                  className="w-full h-[440px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

              <h3 className="text-xl font-semibold mt-4">
                {videos[currentVideo].title}
              </h3>

            </div>

            {/* PLAYLIST */}

            <div className="space-y-4">

              {videos.map((video, index) => (

                <div
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`flex gap-4 p-3 rounded-xl cursor-pointer border hover:bg-muted transition
                  ${currentVideo === index ? "border-primary bg-muted" : "border-border"}`}
                >

                  <div className="relative w-[120px] h-[70px] rounded-md overflow-hidden">

                    <Image
                      src={video.thumb}
                      alt=""
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">

                      <Play size={18} className="text-white" />

                    </div>

                  </div>

                  <div className="flex items-center">

                    <p className="text-sm font-medium">
                      {video.title}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}