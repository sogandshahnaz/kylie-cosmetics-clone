import { univers } from "@/public/fonts/fonts"
import Button from "../ui/Button"

export default function MoodStones() {
  return (
    <section className="relative md:h-[600px]">
      <div
        className=" bg-cover bg-center
        h-[400px]
        md:absolute md:inset-0 md:h-full
        "
         style={{backgroundImage: "url('/images/moodStoneBg.jpg')"}}
      />

        <div className="
        relative
        text-center
        items-center
        mt-10
        md:absolute inset-0 flex flex-col justify-center md:w-65 md:ml-15">
            <div className={`${univers.className} text-[#B3848F]`}>
                <h1 className="text-sm">NOW AVAILABLE</h1>
                <h1 className="md:text-3xl text-2xl my-1">MOOD STONES</h1>
            </div>
            <p className="text-[#393939] md:text-xl w-80"> the new fragrance trio <br className="hidden md:block" />
            from kylie jenner, inspired by the immersive power of scent. </p>

            <div className="mt-5">
                <Button>shop now</Button>
            </div>
        </div>

    </section>
  )
}
