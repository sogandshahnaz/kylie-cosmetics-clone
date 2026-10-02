import type { RewardEarnItem } from "@/types/rewards"
import Image from "next/image"
import { Button3 } from "../ui/Button"
import Link from "next/link"

type RewardEarnCardProps = {
    item: RewardEarnItem
}

export default function RewardEarnCard({item}: RewardEarnCardProps) {
  return (
    <article className="group flex min-h-[290px] flex-col items-center justify-center border border-[#E7DAE2] px-6 text-center
     hover:bg-[#F8F1F4]
         [&:nth-child(8n+2)]:bg-[#F8F1F4]
         [&:nth-child(8n+4)]:bg-[#F8F1F4]
         [&:nth-child(8n+5)]:bg-[#F8F1F4]
         [&:nth-child(8n+7)]:bg-[#F8F1F4]
    ">
        {/* Normal content */}
        <div className="flex flex-col items-center transition-opacity duration-200 group-hover:opacity-0">
             <Image
            src={item.image}
            alt={item.title}
            width={85}
            height={85}
        />
              <h3 className="text-[#393939] text-xl font-extrabold mt-5">{item.title}</h3>
             <p className="text-[#393939] text-sm">{item.desc}</p>
        </div>

         {/* Hover content */}
      <div
        className="
          absolute
          flex flex-col items-center
          opacity-0
          transition-opacity 
          group-hover:opacity-100
        "
      >
        <Button3>sign in</Button3>

        <p className="mt-4 text-[#393939] font-bold">
          already a member? 
          <Link href='/account'
          className="underline font-light ml-1 "
          >login
          </Link>
        </p>
      </div>
    </article>
  )
}
