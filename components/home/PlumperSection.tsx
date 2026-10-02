import Image from "next/image"
import { univers } from "@/public/fonts/fonts"
import Button from "../ui/Button"

export default function PlumperSection() {
  return (
    <section className="md:grid md:grid-cols-2 h-[700px]">
        {/* LEFT IMAGE */}
        <div className="relative">
            <Image 
            src='/images/plumperLeft.jpg' 
            alt="plumper background" 
            fill
            className="object-cover cursor-pointer"/>
        </div>

        {/* RIGHT CONTENT */}

        <div className="flex flex-col items-center justify-center px-10">
            <div className="relative h-[320px] w-[300px]">
                <Image
                src='/images/plumperRight.jpg'
                alt="plumper content"
                fill
                className="object-contain"/>
            </div>

            <div className="flex flex-col items-center text-center w-100 mt-8">
                <h2 className={`${univers.className} text-[#B3848F] text-3xl w-60`}>THE PLUMPER, THE BETTER</h2>

            <p className="text-xl text-[#393939] mt-2 mb-5">featuring a lip liner and liquid lip, the <b className="text-gray-800">plumping matte lip kit</b> effortlessly sculpts, blurs, and offers full coverage payoff with a soft, diffused finish.</p>

                 <div>
                     <Button>shop now</Button>
                </div>
            </div>
        </div>
    </section>
  )
}
