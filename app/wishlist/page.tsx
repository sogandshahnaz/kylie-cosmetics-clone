import { Button2 } from "@/components/ui/Button"
import { univers } from "@/public/fonts/fonts"

export default function page() {
  return (
    <section className="w-full h-[650px] bg-white
    flex justify-center items-center text-center">
        <div>
            <h1 className={`${univers.className} uppercase text-3xl text-[#b3848f] mb-20`}>wishlist</h1>
            <p className="text-[#393939] mb-5 tracking-wide">seems like you have no items on your wishlist yet!</p>
            <Button2>continue shopping</Button2>
        </div>
    </section>
  )
}
