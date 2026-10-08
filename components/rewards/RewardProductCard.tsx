import Image from "next/image"
import type { RewardProduct } from "@/types/rewards"

type RewardProductProps = {
    product: RewardProduct
}

export default function RewardProductCard({product} : RewardProductProps) {
  return (
    <article className="group overflow-hidden rounded-md border border-[#dadada] bg-white">
    <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 639px) 85vw, (max-width: 1023px) 45vw, 23vw"
        className="object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex h-28 flex-col items-center px-3 py-4 text-center font-extrabold text-[#272727] sm:h-30 sm:px-4">
      <h3 className="line-clamp-2 text-base leading-tight sm:text-lg lg:text-xl">
        {product.name}
      </h3>

      <p className="mt-auto text-sm sm:text-bas">
        {product.points} points
      </p>
    </div>
  </article>
  )
}
