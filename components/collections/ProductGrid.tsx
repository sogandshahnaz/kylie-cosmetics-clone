import ProductCard from "./ProductCard"
import FeaturedCard from "./FeaturedCard"
import type { Product } from "@/types/product"

type ProductGridProps = {
  products: Product[];
  featuredImage: string;
  featuredHref: string;
};

export default function ProductGrid({
  products,
  featuredImage,
  featuredHref,
}: ProductGridProps) {
  return (
    <section>
    {/* =========================================
        FIRST 4 PRODUCTS + FEATURED IMAGE
        ========================================= */}

    {/* MOBILE / TABLET */}
    <div className="grid grid-cols-2 gap-3 lg:hidden">
      {products.slice(0, 2).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          priority
        />
      ))}

      {/* FEATURED IMAGE */}
      <div className="col-span-2">
        <FeaturedCard
          image={featuredImage}
          href={featuredHref}
        />
      </div>

      {products.slice(2, 4).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

    {/* DESKTOP */}
    <div
      className="
        hidden
        gap-x-5
        gap-y-5
        lg:grid
        lg:grid-cols-[320px_320px_1fr]
      "
    >
      {products.slice(0, 2).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          priority
        />
      ))}

      {/* FEATURED IMAGE */}
      <FeaturedCard
        image={featuredImage}
        href={featuredHref}
      />

      {products.slice(2, 4).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

    {/* =========================================
        PRODUCT 5 ONWARD
        ========================================= */}

    <div
      className="
        mt-5
        grid
        grid-cols-2
        gap-3
        lg:grid-cols-4
      "
    >
      {products.slice(4, 12).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

    {/* =========================================
        VIDEO BANNER
        ========================================= */}

    <div className="mt-5 h-[250px] overflow-hidden rounded-md sm:h-[350px] lg:h-[400px]">
      <video
        src="/videos/newBannerVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
    </div>

    {/* =========================================
        REMAINING PRODUCTS
        ========================================= */}

    <div
      className="
        mt-5
        grid
        grid-cols-2
        gap-3
        lg:grid-cols-4
      "
    >
      {products.slice(12).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  </section>
  )
}
