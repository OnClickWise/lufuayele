"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Reveal from "../animations/reveal"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b relative white:bg-white dark:bg-black">
      <div className="container mx-auto flex items-center justify-between py-4 px-5">

        
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link className="hover:text-[#C6A75E] hover:underline transition" href="/sobre">Sobre</Link>
          <Link className="hover:text-[#C6A75E] hover:underline  transition" href="/areas">Áreas</Link>
          <Link className="hover:text-[#C6A75E] hover:underline  transition" href="/projetos">Projetos</Link>
          <Link className="hover:text-[#C6A75E] hover:underline  transition" href="/contacto">Contacto</Link>
        </nav>

       
        <div className="hidden md:block">
          <Link href="/contacto">
            <Button className="hover:bg-amber-500 hover:text-black transition">
              Solicitar Proposta
            </Button>
          </Link>
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        </div>
      

     
      
      {isOpen && (
        <Reveal>
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-700 rounded shadow-xl z-50">
          <div className="flex flex-col p-6 gap-5 text-base font-medium">

            <Link onClick={() => setIsOpen(false)} href="/">Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/sobre">Sobre</Link>
            <Link onClick={() => setIsOpen(false)} href="/areas">Áreas</Link>
            <Link onClick={() => setIsOpen(false)} href="/projetos">Projetos</Link>
            <Link onClick={() => setIsOpen(false)} href="/contacto">Contacto</Link>
            
            <Link href="/contacto" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-4 hover:bg-amber-500 hover:text-black transition">
                Solicitar Proposta
              </Button>
            </Link>

          </div>
        </div></Reveal>
      )}
    </header>
  )
}