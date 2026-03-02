"use client";

import Image from "next/image";

export default function Logo(){
  return (
    <div className="relative h-10 sm:h-12 md:h-14 w-[180px] sm:w-[220px]">
     <Image
  src="/logo.jpg"
  alt="LUFUAYELE GROUP"
  fill
  priority
  className="object-contain rounded-xl dark:hidden"
/>

<Image
  src="/logodark.jpg"
  alt="LUFUAYELE GROUP"
  fill
  priority
  className="object-contain hidden dark:block"
/>
    </div>
  )
}