"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card mt-24">
      {/* CONTAINER */}

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* EMPRESA */}

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              LUFUAYELE GROUP
            </h3>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Grupo empresarial multissetorial com atuação em comércio,
              indústria, tecnologia, logística e serviços estratégicos.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-3 mt-6">
              <SocialIcon>
                <Facebook size={18} />
              </SocialIcon>

              <SocialIcon>
                <Instagram size={18} />
              </SocialIcon>

              <SocialIcon>
                <Linkedin size={18} />
              </SocialIcon>
            </div>
          </div>

          {/* NAVEGAÇÃO */}

          <div>
            <h4 className="font-semibold text-foreground mb-5">Navegação</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <FooterLink href="/">Início</FooterLink>
              </li>

              <li>
                <FooterLink href="/sobre">Sobre a Empresa</FooterLink>
              </li>

              <li>
                <FooterLink href="/areas">Áreas de Atuação</FooterLink>
              </li>

              <li>
                <FooterLink href="/projetos">Projetos</FooterLink>
              </li>

              <li>
                <FooterLink href="/galeria">Galeria</FooterLink>
              </li>

              <li>
                <FooterLink href="/contacto">Contacto</FooterLink>
              </li>
            </ul>
          </div>

          {/* SERVIÇOS */}

          <div>
            <h4 className="font-semibold text-foreground mb-5">Serviços</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Comércio & Distribuição</li>
              <li>Construção & Infraestruturas</li>
              <li>Saúde & Equipamentos</li>
              <li>Tecnologia & Sistemas</li>
              <li>Logística & Transporte</li>
              <li>Agroindústria</li>
            </ul>
          </div>

          {/* CONTACTO */}

          <div>
            <h4 className="font-semibold text-foreground mb-5">Contacto</h4>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />

                <a
                  href="https://wa.me/244923019166"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  WhatsApp: +244 923 019 166
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                contacto@lufuayele.com
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                Cuito — Bié • Angola
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:px-16 py-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} LUFUAYELE GROUP. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-6">
            <a className="hover:text-primary transition">
              Política de Privacidade
            </a>

            <a className="hover:text-primary transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* COMPONENTES AUXILIARES */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="hover:text-primary transition">
      {children}
    </Link>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition cursor-pointer">
      {children}
    </div>
  );
}
