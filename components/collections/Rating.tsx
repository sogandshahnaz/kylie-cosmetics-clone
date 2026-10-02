import { Star } from "lucide-react";

type RatingProps = {
    rating?: number;
    reviews?: number;
};


export default function Rating({rating = 5, reviews= 0} : RatingProps) {
  return (
    <div className="flex items-center gap-[2px]">
        {Array.from({length: rating}).map(
            (_, index) => (
                <Star
                   key={index}
                   size={13}
                   strokeWidth={1.3}
                   fill="#393939"
                />
            )
        )}

        <span className="ml-1 text-[11px] text-neutral-600">
            ({reviews})
        </span>
    </div>
  )
}
