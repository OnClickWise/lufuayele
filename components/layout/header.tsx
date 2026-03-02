"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="w-full border-b ">
      <div className="container mx-auto flex items-center justify-between py-4">
        
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link className="hover:underline" href="/sobre">Sobre</Link>
          <Link className="hover:underline" href="/areas">Áreas</Link>
          <Link className="hover:underline" href="/projetos">Projetos</Link>
          <Link className="hover:underline" href="/contacto">Contacto</Link>
        </nav>

        <Link href="/contacto"><Button className="hover:bg-amber-500 hover:text-black">Solicitar Proposta</Button></Link>
      </div>
    </header>
  )
}