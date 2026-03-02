import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rotate-45" />
      <Image
      src="/logo.jpg"
      alt="logo"
      height={200}
      width={200}
      className="rounded-4xl"/>
    </div>
  )
}