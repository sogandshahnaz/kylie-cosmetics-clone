import Button from "../ui/Button";
import { univers } from "@/public/fonts/fonts";

export default function LipKitCollection() {
  return (
    <section className="relative md:h-[600px]">
      
      {/* Image */}
      <div
        className="
          h-[400px]
          bg-cover
          bg-center
          md:absolute md:inset-0 md:h-full
        "
        style={{
          backgroundImage: "url('/images/lipKitCollectionBackground.jpg')",
        }}
      />

      {/* Content */}
      <div
        className="
          relative
          bg-[#F8F5F3]
          px-6 py-10
          md:absolute md:inset-0
          md:flex md:flex-col md:justify-center
          md:w-79 md:ml-15
          md:bg-transparent
          md:px-0 md:py-0
          flex
          flex-col
          text-center
          items-center
        "
      >
        <h1
          className={`${univers.className} w-full md:w-50 text-[#B3848F] md:text-3xl text-xl`}
        >
          THE LIP KIT COLLECTION
        </h1>

        <p className="md:text-xl text-[#393939] my-5">
          our best-selling & iconic lip kit collection includes 4 different
          finishes & 35 shades - all highly pigmented, long-lasting, and
          perfect for everyday wear.
        </p>

        <div>
          <Button>shop now</Button>
        </div>
      </div>
    </section>
  )
}
