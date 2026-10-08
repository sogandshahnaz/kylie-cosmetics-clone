import { RewardStep as RewardStepType } from "@/types/rewards"
import { univers } from "@/public/fonts/fonts"

type Props = {
    step: RewardStepType
}

export default function RewardsStep({step}: Props) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded-md bg-white px-5 py-8 text-center sm:min-h-45 sm:px-6">
        <div className={`${univers.className} text-2xl font-extrabold text-[#B3849D] sm:text-3xl`}>
            <h1>{step.number}</h1>
            <h1>{step.title}</h1>
        </div>
        
        <p className="mt-2 text-base leading-relaxed text-[#393939] sm:text-lg md:text-xl">{step.desc}</p>
    </div>
  )
}
