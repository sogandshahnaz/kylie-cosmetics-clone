"use client"
import RewardProductCard from "./RewardProductCard"
import { rewardProducts } from "@/data/rewards"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { univers } from "@/public/fonts/fonts"
import { useState } from "react"

export default function RewardsRedeem() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(1)
    }

    const previousSlide = () => {
        setCurrentSlide(0)
    }

  return (
    <section className="h-150">
         <div className="mx-auto max-w-[1400px]">
        <h2 className={`${univers.className} text-center text-3xl font-medium uppercase text-[#393939]`}>
          Redeem points for Products
        </h2>
        <div className="relative mt-12">
            <div className="px-22">
            <div className="overflow-hidden">
             <div
          className="
                flex
                gap-4
                transition-transform
                duration-700
                ease-in-out
          "
          style={{
            transform: `translateX(-${currentSlide * 50}%)`,
          }}
        >
          {rewardProducts.map((product) => (
            <div
            key={product.id}
            className="   w-[calc((100%-48px)/4)] shrink-0"
          >
            <RewardProductCard product={product} />
          </div>
          ))}
        </div>
        </div>
    </div>

        <button
            type="button"
            onClick={previousSlide}
            disabled={currentSlide === 0}
            className="
              absolute
              left-5
              top-1/2
              z-10
              border
              border-[#bebebe]
              rounded-4xl
              p-1
              text-[#393939]
              -translate-y-1/2
              transition-opacity
              cursor-pointer
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <ArrowLeft/>

          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlide === 1}
            className="
              absolute
              right-5
              top-1/2
              z-10
              border
              border-[#bebebe]
              rounded-4xl
               p-1
               text-[#393939]
              -translate-y-1/2
              transition-opacity
              cursor-pointer
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <ArrowRight/>
          </button>
     </div>
      </div>
    </section>
  )
}
