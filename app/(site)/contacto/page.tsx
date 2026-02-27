"use client";

import { Contacto } from "@/components/contacto/page";



export default function ContactoPage() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contato</h1>
      <Contacto />
    </div>
  );
}