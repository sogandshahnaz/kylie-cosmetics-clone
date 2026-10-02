import Image from "next/image"
import { Star } from "lucide-react"
import Button from "@/components/ui/Button";

type MoodStoneCardProps = {
    name: string;
    image: string;
    rating?: number;
    reviews?: number;
    price: string;
    desc: string;
}


export default function MoodStoneCards({name, image, rating, reviews, price, desc} : MoodStoneCardProps) {
  return (
    <article className="relative w-[300] h-[400] shrink-0 rounded-lg overflow-hidden bg-white border border-gray-200 text-[#393939]">
        <div>
            <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="object-cover"/>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-white py-2 px-3 cursor-pointer rounded-sm text-xs">new</span>
        </div>

        <div className="mt-4 px-4">
        <div className="mt-2 flex items-center gap-0.5">

          {rating ? (
            Array.from({length: 5}).map((_, index) => (
            <Star
            key={index}
            size={14}
            fill={index < (rating ?? 0) ? "currentColor" : "none"}/>
          ))
          ) : ''}

          <div className="text-xs text-gray-500 ml-0.5">
            {reviews ? (
              <span>({reviews})</span>
            ) : ''}
          </div>
            </div>

            <div className="flex items-center justify-between font-extrabold">
                  <h3>{name}</h3>

                <span className="mt-2 text-sm">
                  {price}
                </span>
           </div>
            

        {/* Description */}
        <p className="text-sm text-gray-500">
          {desc}
        </p>
        </div>
    </article>
  )
}
