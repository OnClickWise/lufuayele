import Image from "next/image";
import { Separator } from "../ui/separator";



export function AboutPage() {
  return (
    <section className="py-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          LUFUAYELE GROUP
        </h1>
          <h2 className="text-center">Excelência Operacional e Desenvolvimento Sustentável</h2>
          <div className="pb-5 pt-4">
        <h3 className="text-slate-800 text-xl font-extrabold underline">
          Quem Somos
        </h3>
        <div className="flex flex-col-2 gap-x-30">
        <p className="text-justify max-w-2xl pt-5">A LUFUAYELE GROUP é um grupo empresarial multissetorial que opera na interseção entre comércio, indústria e prestação de serviços. Desde nossa fundação, movemo-nos pela convicção de que é possível aliar alta performance empresarial ao compromisso genuíno com o desenvolvimento sustentável.

        Somos uma organização orientada por propósitos claros: entregar resultados excepcionais sem jamais perder de vista nossa responsabilidade com as pessoas e com o planeta.</p>
        <Image
        src="/contrato.jpg"
        alt="conversa"
        width={500}
        height={600}
        className="rounded"

        />
        </div>
          </div>

        <Separator/>

        <div className="pt-5">
          <h3 className="text-slate-800 text-xl pb-5 font-extrabold underline">
            Nossos Pilares
          </h3>
          <div className="flex flex-col-3">
           <div className="pr-3">
              <h3>Industria</h3>
              <p> Nossas unidades industriais operam com os mais avançados padrões tecnológicos, mas jamais perdem de vista seu papel na sociedade. Cada produto que fabricamos carrega consigo nosso compromisso com a eficiência e a sustentabilidade. </p>
            </div> 
            <div>
              <h3>Comércio</h3>
              <p>Em um mercado que exige respostas rápidas, oferecemos soluções ágeis sem comprometer a qualidade. Nossa rede comercial é desenhada para atender às necessidades mais complexas com precisão e confiabilidade.</p>
              </div>
            <div>
              <h3>Serviços</h3>
              <p>Acreditamos que um bom serviço vai além da entrega pontual. Por isso, oferecemos suporte estratégico que acompanha nossos clientes em toda sua jornada, garantindo resultados consistentes e parcerias duradouras.</p>
            </div>
          </div>
        </div>
        <Separator/>
       <div className="pt-5 flex justify-center">
          <h3 className="text-slate-800 pt-5 text-xl font-extrabold underline">
            Nossa Identidade em Ação
          </h3>
          </div>
          <div className="pb-5">
          <div className="mt-6 border-l-2 pl-6 italic max-w-67">
            <h3>Excelência</h3>
            <Separator/>
            <p> Não aceitamos o suficiente. Buscamos o extraordinário.</p>
          </div>
           <div className="mt-6 border-l-2 pl-6 italic max-w-67">
            <h3>Sustentabilidade</h3>
            <Separator/>
            <p> Pensamos no hoje sem comprometer o amanhã.</p>
          </div>
           <div className="mt-6 border-l-2 pl-6 italic max-w-67">
            <h3>Inovação</h3>
            <Separator/>
            <p> O novo não nos amedronta  —  nos move.</p>
          </div>
           <div className="mt-6 border-l-2 pl-6 italic max-w-67">
            <h3>Integridade</h3>
            <Separator/>
            <p> Nossa palavra é nosso contrato mais valioso.</p>
          </div>
          </div>
          <Separator/>
          <div className="py-10 ">
          <h3 className="text-slate-800 justify-center flex text-xl font-extrabold underline">
            Impacto e Resultados
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-2xl">
            <li>+500 Projetos realizados</li>
            <li>+50 Parcerias ativas</li>
            <li>3 Continentes com operações</li>
            <li>100% Compromisso com práticas sustentáveiss</li>
          </ul>
          <p>Estes números representam mais do que estatísticas — representam vidas impactadas, comunidades fortalecidas e um futuro sendo construído com responsabilidade.</p>
          </div>
          <Separator/>

           <div className="py-10 shadow-2xl px-2 rounded-4xl ">
          <h3 className="text-slate-800 justify-center flex text-xl font-extrabold underline">
            Nossa Promessa
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Na LUFUAYELE GROUP, não entregamos apenas produtos ou serviços. Entregamos soluções que transformam realidades.

            Trabalhamos incansavelmente para que cada projeto, cada parceria e cada relação comercial seja um passo em direção a um mundo mais equilibrado, justo e próspero.</p>
          </div>
      </div>
    </section>
  )
}