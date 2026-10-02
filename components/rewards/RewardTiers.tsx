import RewardTierCard from "./RewardTierCard"
import { rewardTiers } from "@/data/rewards"
import { univers } from "@/public/fonts/fonts"

export default function RewardTiers() {
  return (
    <section className="px-5">
      <div className="mx-auto max-w-[1400px]">

        <h2 className={`${univers.className} text-center text-3xl font-medium uppercase text-[#393939]`}>
          VIP Tiers
        </h2>

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {rewardTiers.map((tier) => (
            <RewardTierCard
              key={tier.id}
              tier={tier}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
