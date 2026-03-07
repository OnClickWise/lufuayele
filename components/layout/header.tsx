"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Building2, Truck, Wrench, Cpu, Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* CONTAINER */}

      <div className="flex w-full h-16 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* LOGO */}

        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* DESKTOP NAV */}

        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavLink href="/">Home</NavLink>
              </NavigationMenuItem>

              {/* EMPRESA */}

              <NavigationMenuItem>
                <NavigationMenuTrigger>Empresa</NavigationMenuTrigger>

                <NavigationMenuContent className="bg-card border border-border rounded-xl shadow-lg">
                  <div className="w-[260px] p-6 space-y-3">
                    <DropdownLink href="/sobre" label="Sobre Nós" />
                    <DropdownLink href="/sobre#missao" label="Missão" />
                    <DropdownLink href="/sobre#visao" label="Visão" />
                    <DropdownLink href="/sobre#valores" label="Valores" />
                    <DropdownLink href="/sobre#parceiros" label="Parceiros" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SERVIÇOS */}

              <NavigationMenuItem>
                <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>

                <NavigationMenuContent className="bg-card border border-border rounded-xl shadow-lg">
                  <div className="grid grid-cols-2 gap-10 p-10 w-[720px]">
                    <Mega
                      icon={Building2}
                      title="Infraestrutura & Obras Públicas"
                    />
                    <Mega icon={Truck} title="Comércio & Fornecimento" />
                    <Mega icon={Wrench} title="Logística & Transporte" />
                    <Mega icon={Cpu} title="Tecnologia & Serviços Técnicos" />
                  </div>

                  <div className="border-t border-border p-6">
                    <Link
                      href="/areas"
                      className="text-primary font-semibold hover:underline"
                    >
                      Ver todas as unidades →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="/contacto">Contacto</NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ACTIONS */}

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="https://wa.me/244923019166?text=Olá%20gostaria%20de%20solicitar%20uma%20proposta"
            target="_blank"
            className="hidden md:block"
          >
            <Button className="rounded-full px-6 shadow-sm">
              Solicitar Proposta
            </Button>
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col space-y-6 px-6 py-8">
            <MobileLink href="/">Home</MobileLink>
            <MobileLink href="/sobre">Empresa</MobileLink>
            <MobileLink href="/areas">Serviços</MobileLink>
            <MobileLink href="/contacto">Contacto</MobileLink>

            <Link
              href="https://wa.me/244923019166"
              target="_blank"
              className="pt-2"
            >
              <Button className="w-full rounded-full">
                Solicitar Proposta
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-foreground hover:text-primary transition"
    >
      {children}
    </Link>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition"
    >
      {label}
    </Link>
  );
}

function Mega({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-primary" />

        <h4 className="font-semibold text-foreground">{title}</h4>
      </div>

      <ul className="space-y-2 text-sm text-muted-foreground">
        <li className="hover:text-primary transition cursor-pointer">
          Construção Civil
        </li>

        <li className="hover:text-primary transition cursor-pointer">
          Fornecimento
        </li>

        <li className="hover:text-primary transition cursor-pointer">
          Instalações
        </li>

        <li className="hover:text-primary transition cursor-pointer">
          Manutenção
        </li>
      </ul>
    </div>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-lg font-medium text-foreground hover:text-primary transition"
    >
      {children}
    </Link>
  );
}
