import CategoryCard from "./CategoryCard";
import { categoryData } from "./CategoryData";
import { univers } from "@/public/fonts/fonts";


export default function ShopByCategory() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
        <div className="px-6 py-12">
            <h1 className={`${univers.className} text-center text-2xl uppercase text-[#B3848F]`}>shop by category</h1>
        </div>

        <div className="
          w-full
          max-w-[1250px]
          px-6
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-5
        ">
            {categoryData.map((category) => (
                <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                video={category.video}
                hoverImage={category.hoverImage}/>
            ))}
        </div>
    </section>
  )
}
