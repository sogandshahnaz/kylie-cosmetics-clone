// import Image from "next/image"
import Button from "@/components/ui/Button"
import { univers } from "@/public/fonts/fonts"
import ImageWithLoader from "@/components/ui/ImageWithLoader"

type ProductCardProps = {
    name: string;
    image: string;
}

export default function LipKit({name, image}: ProductCardProps) {
  return (
    <article>
      <div className="relative h-[650px] w-full overflow-hidden cursor-pointer">
        <ImageWithLoader
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-8 left-0 flex w-full flex-col items-center gap-4">
             <h3 className={`${univers.className} text-3xl text-[#B3848F]`}>
            {name}
             </h3>

          <Button>
            Shop Now
          </Button>
        </div>

      </div>
    </article>
  )
}
