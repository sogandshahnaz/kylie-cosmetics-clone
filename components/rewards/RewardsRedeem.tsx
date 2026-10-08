"use client"
import RewardProductCard from "./RewardProductCard"
import { rewardProducts } from "@/data/rewards"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { univers } from "@/public/fonts/fonts"
import { useState, useEffect} from "react"

export default function RewardsRedeem() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  /*
   * Responsive items per view
   */
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  /*
   * Number of possible slides
   */
  const maxSlide = Math.max(
    rewardProducts.length - itemsPerView,
    0
  );

  /*
   * Keep current slide valid after resize
   */
  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  /*
   * Calculate card width based on visible cards
   */
  const cardWidth = `calc((100% - ${
    (itemsPerView - 1) * 16
  }px) / ${itemsPerView})`;

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <h2
          className={`${univers.className} text-center text-2xl font-medium uppercase text-[#393939] sm:text-3xl`}
        >
          Redeem points for Products
        </h2>

        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          {/* Carousel */}
          <div className="overflow-hidden px-8 sm:px-10 lg:px-12">
            <div
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentSlide} * (${cardWidth} + 16px)))`,
              }}
            >
              {rewardProducts.map((product) => (
                <div
                  key={product.id}
                  className="shrink-0"
                  style={{
                    width: cardWidth,
                  }}
                >
                  <RewardProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Pagination */}
  <div className="mt-6 flex justify-center gap-2 sm:hidden">
    {rewardProducts.map((product, index) => (
      <button
        key={product.id}
        type="button"
        onClick={() => setCurrentSlide(index)}
        aria-label={`Go to product ${index + 1}`}
        className={`h-2 w-2 rounded-full transition-all duration-300 ${
          currentSlide === index
            ? "w-5 bg-[#393939]"
            : "bg-[#c8c8c8]"
        }`}
      />
    ))}
  </div>

          {/* Previous */}
          <button
            type="button"
            onClick={previousSlide}
            disabled={currentSlide === 0}
            aria-label="Previous products"
            className="
             absolute
              left-0
              top-1/2
              z-10
              hidden
              -translate-y-1/2
              rounded-full
              border
              border-[#bebebe]
              bg-white
              p-1.5
              text-[#393939]
              transition-all
              duration-200
              hover:bg-[#f5f5f5]
              disabled:cursor-not-allowed
              disabled:opacity-30
              sm:block
              sm:p-2 
            "
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            aria-label="Next products"
            className="
               absolute
                right-0
                top-1/2
                z-10
                hidden
                -translate-y-1/2
                rounded-full
                border
                border-[#bebebe]
                bg-white
                p-1.5
                text-[#393939]
                transition-all
                duration-200
                hover:bg-[#f5f5f5]
                disabled:cursor-not-allowed
                disabled:opacity-30
                sm:block
                sm:p-2
            "
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
