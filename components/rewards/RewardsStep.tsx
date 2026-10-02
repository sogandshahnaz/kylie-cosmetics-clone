import { RewardStep as RewardStepType } from "@/types/rewards"
import { univers } from "@/public/fonts/fonts"

type Props = {
    step: RewardStepType
}

export default function RewardsStep({step}: Props) {
  return (
    <div className="flex flex-col items-center text-center justify-center bg-white h-45 rounded-md">
        <div className={`${univers.className} text-[#B3849D] text-3xl font-extrabold`}>
            <h1>{step.number}</h1>
            <h1>{step.title}</h1>
        </div>
        
        <p className="mt-2 text-xl text-[#393939]">{step.desc}</p>
    </div>
  )
}
