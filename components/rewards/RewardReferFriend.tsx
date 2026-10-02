import { univers } from "@/public/fonts/fonts"
import Image from "next/image"

export default function RewardReferFriend() {
  return (
    <div className="flex justify-between w-full h-130 mt-15 overflow-hidden">
        {/* LEFT SIDE */}
    <section className="w-1/2 bg-[#F8F1F4]">
        <div className="flex flex-col justify-center h-full px-10">
            <h3 className={`${univers.className} text-[#B3848F] text-xl uppercase`}>refer a friend</h3>
            <h1 className={`${univers.className} text-[#B3848F] text-3xl uppercase my-5`}>give 20%, get 20%</h1>
            <p className="text-[#393939] text-lg">give your friends 20% off their first order of $50 and get 20% for each successful referral.</p>

           <div className="flex flex-col mt-5">
             <input type="email" placeholder="your email address"
             className="border rounded-sm p-2 mb-5 text-sm"/>
            <button
            className="border rounded-sm p-2 text-sm text-[#393939]
            cursor-pointer
            hover:bg-[#505050]
            hover:border-[#505050]
            hover:text-white
            transition-colors"
            >next</button>
            </div> 
           
        </div>
    </section>

    {/* RIGHT SIDE */}
    <section className="relative w-1/2">
        <Image
            alt="refer a friend"
            src='/images/rewards/referFriend.jpg'
            fill
            className="object-cover"
        />
    </section>
    </div>
  )
}
