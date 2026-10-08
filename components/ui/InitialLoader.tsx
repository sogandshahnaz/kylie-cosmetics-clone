"use client"

import { useEffect, useState } from "react"
import { univers } from "@/public/fonts/fonts"

export default function InitialLoader() {
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)

      setTimeout(() => {
        setVisible(false)
      }, 400)
    }, 900)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#F8F1F4]
        transition-opacity
        duration-400
        ${loading ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="flex w-48 flex-col items-center">
        <p
          className={`${univers.className} text-center text-sm tracking-[0.25em] text-[#393939]`}
        >
          KYLIE COSMETICS
        </p>

        <div className="mt-5 h-px w-full overflow-hidden bg-[#dfd0d6]">
          <div
            className="
              h-full
              w-full
              origin-left
              animate-[loader_900ms_ease-in-out_forwards]
              bg-[#393939]
            "
          />
        </div>
      </div>
    </div>
  )
}