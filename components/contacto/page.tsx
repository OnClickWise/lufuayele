"use client";

import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 border rounded shadow">
      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Assunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className={`w-full px-4 py-2 bg-slate-600 text-white rounded ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
      {status && <p className="mt-2 text-center">{status}</p>}
    </form>
  );
}