import Image from "next/image";

export default function Projetos(){
    return(
        <div>
            <Image
            src="/predio.jpg"
            alt="predio"   
            width={600}
            height={600}
            className="rounded-2xl w-full h-auto object-cover"/>
        </div>
    )
}