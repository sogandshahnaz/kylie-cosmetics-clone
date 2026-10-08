import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"
import Rating from "./Rating"

type ProductCardProps = {
    product: Product
    priority?: boolean
}

export default function ProductCard({product, priority = false} : ProductCardProps) {
  return (
    <Link
    href={product.href}
    className="group block w-full overflow-hidden rounded-lg border border-[#e7dae2] bg-white"
  >
    <article>
      {/* PRODUCT IMAGE */}
      <div
        className="
          group
          relative
          aspect-[0.78]
          overflow-hidden
          rounded-t-lg
          bg-[#f3e9ed]
          sm:aspect-square
        "
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
          className="object-cover transition-opacity duration-300"
        />

        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />
        )}

        {/* SHADES */}
        {product.shades && (
          <span
            className="
              absolute
              left-2
              top-2
              text-xs
              font-medium
              text-[#393939]
              drop-shadow
              sm:left-4
              sm:top-3
              sm:text-sm
            "
          >
            +{product.shades} shades
          </span>
        )}

        {/* BADGE */}
        {product.badge && (
          <span
            className="
              absolute
              right-2
              top-2
              rounded-md
              bg-[#F8F1F4]
              px-2
              py-1.5
              text-[10px]
              text-[#393939]
              sm:right-3
              sm:top-3
              sm:px-3
              sm:py-2
              sm:text-xs
            "
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* PRODUCT INFO */}
      <div className="px-2.5 py-2.5 sm:px-3 sm:py-3">
        {product.rating ? (
          <Rating
            rating={product.rating}
            reviews={product.reviews}
          />
        ) : null}

        <div className="mt-0.5 flex items-start justify-between gap-2 font-extrabold">
          <p className="mt-1 min-w-0 text-sm text-[#202020] sm:text-base">
            {product.brand}
          </p>

          <span className="shrink-0 text-sm sm:text-base">
            {product.price}
          </span>
        </div>

        <h2 className="line-clamp-2 text-sm leading-5 text-[#393939] sm:text-base">
          {product.name}
        </h2>
      </div>
    </article>
  </Link>
  )
}
