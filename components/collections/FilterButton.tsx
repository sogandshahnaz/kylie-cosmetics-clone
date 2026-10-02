import { SlidersHorizontal } from "lucide-react"
import { Button2 } from "../ui/Button"
export default function FilterButton() {
  return (
    <button
      className="
        flex
        h-8
        md:w-36
        w-25
        items-center
        justify-center
        gap-2
        rounded-md
        border
        border-black
        text-sm
        text-[#393939]
        hover:bg-[#393939]
         hover:text-white 
         transition-colors 
         duration-200
         cursor-pointer
      "
    >
      <span>filter</span>

      <SlidersHorizontal
        size={16}
        strokeWidth={1.5}
      />
    </button>
    
  )
}
