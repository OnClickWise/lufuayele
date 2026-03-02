import Image from "next/image";
import Reveal from "../animations/reveal";

export default function ProjetoCont(){
    return(
        <main>
           
        <div className="grid grid-cols-2 py-10">
             <Reveal delay={0} initialX={-40}>
        <div className="px-5">
            <Image
            src="/predio.jpg"
            alt="predio"
            width={400}
            height={300}
            className="rounded"
            />
        </div>
        </Reveal><div className="flex flex-col pr-80">
        <Reveal delay={0.2} initialX={70}>
        <h1 className="font-bold text-[#C6A75E] text-2xl">Modernidade e Eficiência</h1>
        </Reveal>
        <Reveal delay={0.8}>
        <div className=" text-justify pt-5">
        <p className="py-2">Este projeto foi desenvolvido com o objetivo de unir tecnologia, inovação e praticidade para oferecer uma solução moderna, funcional e altamente eficiente. Cada etapa foi planejada estrategicamente para garantir desempenho, organização e uma experiência intuitiva para o usuário.</p>

        <p className="py-2">A modernidade está presente tanto no design quanto na estrutura tecnológica, utilizando ferramentas atuais e boas práticas de desenvolvimento. O layout foi pensado para ser responsivo, acessível e visualmente atrativo, transmitindo profissionalismo e confiança.</p>

        <p className="py-2">Já a eficiência se reflete na otimização de processos, na redução de etapas desnecessárias e na automação de tarefas, proporcionando mais agilidade, segurança e produtividade. O sistema foi estruturado para garantir escalabilidade, fácil manutenção e alto desempenho.</p>

        <p className="py-2">O resultado é uma solução inteligente que combina tecnologia e estratégia, preparada para atender às demandas atuais e evoluir junto com as necessidades do mercado. </p>
        </div>
        </Reveal></div>
        </div>
        </main>
    )
}