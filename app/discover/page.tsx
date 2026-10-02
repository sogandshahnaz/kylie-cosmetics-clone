'use client'
import { useState } from "react"
import { univers } from "@/public/fonts/fonts"
import content from "./contentData";

export default function Page() {
    const [activeTab, setActiveTab] = useState<"cosmetics" | "fragrance" | "skin">( "cosmetics" );

  return (
    <>
     <section
  className="
    relative
    mt-[80px]
    h-[500px]
    bg-cover
    bg-center
    sm:h-[600px]
    md:mt-[100px]
    md:h-[400px]
    lg:mt-[150px]
  "
>
  {/* MOBILE IMAGE */}
  <div
    className="
      absolute
      inset-0
      bg-cover
      bg-center
      md:hidden
    "
    style={{
      backgroundImage:
        "url('/images/discoverSmallBg.webp')",
    }}
  />

  {/* DESKTOP IMAGE */}
  <div
    className="
      absolute
      inset-0
      hidden
      bg-cover
      bg-center
      md:block
    "
    style={{
      backgroundImage:
        "url('/images/discover page/aboutUswebp.webp')",
    }}
  />

  {/* TITLE */}
  <div
    className="
      relative
      z-10
      flex
      h-full
      items-end
      px-5
      pb-6
      sm:px-8
      sm:pb-8
      lg:px-25
      lg:pb-10
    "
  >
    <h1
      className={`
        ${univers.className}
        uppercase
        text-2xl
        text-white
        sm:text-3xl
        w-[200px]
      `}
    >
      about the brand
    </h1>
  </div>
</section>

      {/* =========================================
          CONTENT
          ========================================= */}

      <section
        className="
          flex
          min-h-[420px]
          flex-col
          items-center
          px-4
          pb-10
          sm:min-h-[450px]
          sm:px-6
          lg:min-h-[450px]
          lg:px-0
        "
      >
        {/* TABS */}

        <div
          className={`
            ${univers.className}
            mt-8
            flex
            flex-wrap
            justify-center
            gap-2
            text-base
            text-[#B3848F]
            sm:mt-10
            sm:gap-5
            sm:text-xl
            lg:gap-7
          `}
        >
          <button
            type="button"
            onClick={() => setActiveTab("cosmetics")}
            className={`
              cursor-pointer
              rounded-sm
              px-2
              py-1
              uppercase
              transition-colors
              ${
                activeTab === "cosmetics"
                  ? "bg-[#F8F1F4]"
                  : ""
              }
            `}
          >
            cosmetics
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("fragrance")}
            className={`
              cursor-pointer
              rounded-sm
              px-2
              py-1
              uppercase
              transition-colors
              ${
                activeTab === "fragrance"
                  ? "bg-[#F8F1F4]"
                  : ""
              }
            `}
          >
            fragrance
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("skin")}
            className={`
              cursor-pointer
              rounded-sm
              px-2
              py-1
              uppercase
              transition-colors
              ${
                activeTab === "skin"
                  ? "bg-[#F8F1F4]"
                  : ""
              }
            `}
          >
            skin
          </button>
        </div>

        {/* TEXT */}

        <div
          className="
            mt-8
            w-full
            max-w-[900px]
            text-[#393939]
            sm:mt-10
            lg:mt-15
          "
        >
          <p
            className="
              whitespace-pre-line
              text-sm
              leading-6
              sm:text-base
              sm:leading-6
            "
          >
            {content[activeTab].text}
          </p>
        </div>
      </section>
    </>
  )
}
