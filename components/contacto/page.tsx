"use client";

import { useState } from "react";
import Icons from "./icons";

export function Contacto() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Email enviado com sucesso! Verifique seu email de confirmação.");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus(`Erro: ${data.error}`);
      }
    } catch {
      setStatus("Erro ao enviar email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-6">
      
      
      <div className="w-full lg:w-1/2">
        <Icons />
      </div>

      
      <div className="w-full lg:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl font-bold text-[#0B1F3B] mb-6">Envie sua mensagem</h2>
          
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border text-slate-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent"
            required
          />
          
          <input
            type="text"
            placeholder="Assunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 border text-slate-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent"
            required
          />
          
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full p-3 border text-slate-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent resize-none"
            required
          />
          
          <button
            type="submit"
            className={`
              w-full 
              px-4 
              py-3 
              bg-[#C6A75E] 
              text-[#0B1F3B] 
              font-semibold 
              rounded-lg
              hover:bg-[#0B1F3B] 
              hover:text-white 
              transition-all 
              duration-300
              ${loading ? "opacity-70 cursor-not-allowed" : ""}
            `}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
          
          {status && (
            <p className={`mt-4 text-center p-3 rounded-lg ${
              status.includes("sucesso") 
                ? "bg-green-100 text-green-700" 
                : "bg-red-100 text-red-700"
            }`}>
              {status}
            </p>
          )}
        </form>
      </div>

    </main>
  );
}