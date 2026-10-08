"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

export default function ImageWithLoader({
  className = "",
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="absolute inset-0">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#f3e9ed]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#d8c2ca] border-t-[#393939]" />
        </div>
      )}

      <Image
        {...props}
        className={`transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={(event) => {
          setLoaded(true)
          onLoad?.(event)
        }}
      />
    </div>
  )
}