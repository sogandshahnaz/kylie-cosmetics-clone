import { univers } from "@/public/fonts/fonts"
import Button from "../ui/Button"

export default function VirtualSection() {
  return (
    <section className="relative h-[600px]">
      
      {/* Desktop Background */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-[url('/images/virtualMainBg.webp')]
          max-md:hidden
        "
      />

      {/* Mobile Background */}
      <div
        className="
          absolute
          mx-5
          my-15
          rounded-xl
          inset-0
          bg-cover
          bg-center
          bg-[url('/images/virtualMobileBg.webp')]
          md:hidden
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          h-full
          flex
          justify-center
          items-center
          text-center
        "
      >
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            w-[300px]

            max-md:w-full
            max-md:max-w-[400px]
            max-md:rounded-md
            max-md:px-6
            max-md:py-10
          "
        >
          <h1
            className={`${univers.className} uppercase text-[#B3848F] text-2xl mb-3 md:text-3xl`}
          >
            virtual <br /> try-on
          </h1>

          <p className="text-xl text-[#393939] my-5 hidden md:block">
            try on lipsticks, blushes, & more to discover your new fave shade.
          </p>

          <Button>discover now</Button>
        </div>
      </div>

    </section>
  )
}
