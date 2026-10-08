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
        <div className="absolute inset-0 animate-pulse bg-[#f3e9ed]" />
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