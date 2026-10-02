import Image from "next/image"
import type { RewardProduct } from "@/types/rewards"

type RewardProductProps = {
    product: RewardProduct
}

export default function RewardProductCard({product} : RewardProductProps) {
  return (
    <article className="group border border-[#dadada] rounded-md h-95">
        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain "
        />
      </div>

      <div className="mt-4 mb-3 text-center text-[#272727] font-extrabold">
        <h3 className="text-xl">
          {product.name}
        </h3>

        <p className="mt-2">
          {product.points} points
        </p>
      </div>
    </article>
  )
}
