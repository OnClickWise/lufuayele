"use client";

import { useState } from "react";

export function FormEmail() {
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
    <main className="mt-8 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl border rounded-xl shadow-lg p-6 space-y-5"
      >
        {/* EMAIL */}
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent"
            required
          />
        </div>

        {/* ASSUNTO */}
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Assunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent"
            required
          />
        </div>

        {/* MENSAGEM */}
        <div className="space-y-2">
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent resize-none"
            required
          />
        </div>

        {/* BOTÃO */}
        <button
          type="submit"
          disabled={loading}
          className={`
            w-full 
            px-4 
            py-3 
            hover:bg-slate-500
            font-semibold 
            rounded-lg
            transition-all 
            duration-300
            ${loading ? "opacity-70 cursor-not-allowed" : ""}
          `}
        >
          {loading ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {/* STATUS */}
        {status && (
          <p
            className={`text-center p-3 rounded-lg ${
              status.includes("sucesso")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </main>
  );
}