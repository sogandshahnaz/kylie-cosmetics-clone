import CollectionHeader from "./CollectionHeader"
import CollectionToolbar from "./CollectionToolbar"
import ProductGrid from "./ProductGrid"
import { univers } from "@/public/fonts/fonts"
import { collection } from "@/data/collection"
import { products } from "@/data/products"

type CollectionPageProps = {
    slug: string
}

export default function CollectionPage({slug} : CollectionPageProps) {
  return (
    <>
    <section className='
          relative
          mt-[80px]
          h-[220px]
          bg-cover
          bg-center
          sm:mt-[100px]
          sm:h-[300px]
          md:mt-[100px]
          md:h-[460px]
          lg:mt-[150px]'
     style={{
      backgroundImage: "url('/images/new page/newBg.webp')"
      }}>

        <div className='absolute inset-0 hidden items-end md:flex'>
            <h1 className={`
              ${univers.className}
              m-8
              text-3xl
              uppercase
              text-white
            `}>new</h1>
        </div>
    </section>

    <main className="min-h-screen bg-[#F8F1F4] px-3 sm:px-3 md:px-12">
       {/* MOBILE HEADER ROW */}
      <div className="flex items-center justify-between gap-4 py-4 md:hidden">
      <h1
            className={`
              ${univers.className}
              shrink-0
              text-xl
              uppercase
              text-[#B3848F]
              sm:text-2xl
              ml-1
            `}
          >
            new
          </h1>
          <CollectionHeader
           productCount={collection["kylie-cosmetics-new"].productCount}
           />
      </div>

        {/* DESKTOP HEADER */}

        <div className="hidden md:block">
        <CollectionHeader
           productCount={collection["kylie-cosmetics-new"].productCount}
           />
        </div>
      

      <ProductGrid
        products={products}
        featuredImage={collection["kylie-cosmetics-new"].featuredImage}
        featuredHref={collection["kylie-cosmetics-new"].featuredHref}
      />
    </main>
     </>
  )
}
