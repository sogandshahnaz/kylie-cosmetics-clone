import Image from "next/image"
import { Button2 } from "../ui/Button"
import { univers } from "@/public/fonts/fonts"

export default function WhatsInMyBag() {
  return (
    <section className="flex justify-center items-center w-full py-10 md:min-h-[500px]">
      <div
        className="
          flex flex-col
          w-full
          max-w-[1252px]
          rounded-md
          overflow-hidden
          md:flex-row
          md:h-[450px]
        "
      >
        {/* Image */}
        <div
          className="
            relative
            w-full
            h-[300px]
            order-1
            md:w-1/2
            md:h-full
            md:order-2
          "
        >
          <Image
            src="/images/whatsInMyBag.webp"
            alt="what's in my bag"
            fill
            className="object-cover cursor-pointer"
          />
        </div>

        {/* Content */}
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            w-full
            bg-white
            text-center
            px-6
            py-10
            order-2
            md:w-1/2
            md:h-full
            md:order-1
          "
        >
          <h1
            className={`${univers.className} text-[#B3848F] md:text-3xl text-xl uppercase font-extrabold`}
          >
            what's in <br className="hidden md:block" /> kris & kylie's bag
          </h1>

          <p className="text-[#393939] my-5 max-w-[420px]">
            as seen in kylie's latest video, discover the staples kris and
            kylie are carrying in their bags this fall.
          </p>

          <Button2>shop now</Button2>
        </div>
      </div>
    </section>
  )
}
