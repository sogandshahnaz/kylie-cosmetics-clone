import RewardsStep from "./RewardsStep"
import { rewardSteps } from "@/data/rewards"
import { univers } from "@/public/fonts/fonts"

export default function RewardsHowItWorks() {
  return (
    <section className="bg-[#F8F1F4] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
            <h2 className={`${univers.className} text-center text-3xl font-medium uppercase text-[#393939]`}>how it works</h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:gap-8 md:mt-12 md:grid-cols-3 md:gap-6 lg:gap-8">
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
