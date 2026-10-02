import RewardsStep from "./RewardsStep"
import { rewardSteps } from "@/data/rewards"
import { univers } from "@/public/fonts/fonts"

export default function RewardsHowItWorks() {
  return (
    <section className="py-16 bg-[#F8F1F4] h-90">
        <div className="mx-auto max-w-7xl">
            <h2 className={`${univers.className} text-center text-3xl font-medium uppercase text-[#393939]`}>how it works</h2>

            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
              {rewardSteps.map((step) => (
                  <RewardsStep
                    key={step.title}
                    step={step}
            />
          ))}
            </div>
        </div>
    </section>
  )
}
