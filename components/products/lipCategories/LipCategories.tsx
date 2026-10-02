import Image from "next/image"
import { univers } from "@/public/fonts/fonts"

type CategoryProps = {
    name: string;
    image: string
}


export default function LipCategories({name, image} : CategoryProps) {
  return (
    <div className="flex w-full h-screen">
      <article className="relative w-100 min-w-[calc((100%-40px)/3)] shrink-0 rounded-lg overflow-hidden">
        <Image
        src={image}
        alt={name}
        fill
        className="object-cover"/>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className={`${univers.className} text-2xl text-white`}>{name}</h1>
        </div>
      </article>
    </div>
  )
}
