export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container mx-auto py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-bold text-lg">LUFUAYELE GROUP</h3>
          <p className="text-sm text-slate-400 mt-2">
            Soluções integradas em comércio, indústria e serviços.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <a href="/sobre"><li className="hover:underline">Sobre</li></a>
            <a href="/areas"><li className="hover:underline">Áreas</li></a>
            <a href="/projetos"><li className="hover:underline">Projetos</li></a>
            <a href="/contacto"><li className="hover:underline">Contacto</li></a>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <p className="text-sm text-slate-400">
            contacto@lufuayele.com
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LUFUAYELE GROUP. Todos os direitos reservados.
      </div>
    </footer>
  )
}