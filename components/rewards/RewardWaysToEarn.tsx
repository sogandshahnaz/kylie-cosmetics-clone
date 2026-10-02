import RewardEarnCard from "./RewardEarnCard"
import { rewardWaysToEarn } from "@/data/rewards"
import { univers } from "@/public/fonts/fonts"

export default function RewardWaysToEarn() {
  return (
    <section className="px-22 py-7">
        <div className="mx-auto max-w-[1500px]">
            <h2 className={`${univers.className} uppercase text-center text-3xl text-[#393939]`}>ways to earn points</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {rewardWaysToEarn.map((item) => (
                <RewardEarnCard
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    </section>
  )
}
