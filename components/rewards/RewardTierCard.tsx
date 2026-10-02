import type { RewardTier } from "@/types/rewards"
import Image from "next/image"
import { univers } from "@/public/fonts/fonts"

type RewardTierCardProps = {
    tier: RewardTier
}

export default function RewardTierCard({tier} : RewardTierCardProps) {
  return (
    <article className="border border-[#E7DAE2] rounded-md text-[#393939]">

      <div className="flex flex-col items-center p-8 text-center">
        <Image
            src={tier.icon}
            alt="tier icon"
            width={120}
            height={120}
        />
        <h3 className={`${univers.className} uppercase text-2xl`}>
          {tier.name}
        </h3>

        <p className="mt-4 text-sm bg-[#F8F1F4] py-1 px-3 rounded-sm">
          {tier.spend}
        </p>

      </div>

      <div className="px-8 mb-5">
        <ul className="space-y-3 list-item">
          {tier.benefits.map((benefit) => (
            <li
            key={benefit}
            className="flex items-start  gap-2"
          >
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#EFD7E5]" />
      
            <span>
              {benefit}
            </span>
          </li>
          ))}
        </ul>
      </div>

    </article>
  )
}
