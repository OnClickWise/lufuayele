"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/logo-dark.png"
        alt="LUFUAYELE Logotipo Oficial"
        width={160}
        height={50}
        className="block dark:hidden"
        priority
      />

      <Image
        src="/images/logo.png"
        alt="LUFUAYELE Logotipo Oficial"
        width={160}
        height={50}
        className="hidden dark:block"
        priority
      />
    </div>
  )
}