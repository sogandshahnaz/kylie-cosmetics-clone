"use client";
import Image from "next/image"
import { univers } from "@/public/fonts/fonts"

type CategoryCardProps = {
    name: string;
    image: string;
    video?: string;
    hoverImage?: string;
}


export default function CategoryCard({name, image, video, hoverImage}: CategoryCardProps) {

  return (
    <div
    className="
      group
      relative
      overflow-hidden
      rounded-lg
      mb-6
      cursor-pointer
      w-full
      aspect-square
    "
  >
    {/* Main Image */}
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover"
    />

    {/* Hover Video */}
    {video && (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="
            hidden
            md:block
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-0
            transition-opacity
            duration-300
            md:group-hover:opacity-100
          "
        />
      )}

    {/* Hover Image */}
    {hoverImage && (
        <Image
          src={hoverImage}
          alt={name}
          fill
          className="
            hidden
            md:block
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-0
            transition-opacity
            duration-300
            md:group-hover:opacity-100
          "
        />
      )}

    {/* Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1
        className={`${univers.className} text-3xl uppercase`}
      >
        {name}
      </h1>
    </div>
  </div>
  )
}
