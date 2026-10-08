import { RewardUsePoints } from "@/types/rewards"
import { univers } from "@/public/fonts/fonts"

type Props = {
  points: RewardUsePoints
}

export default function RewardUsePointsCard({points} : Props) {
  return (
    <div className="flex min-h-72 w-full flex-col items-center justify-center rounded-md border border-[#E7DAE2] bg-[#F8F1F4] px-6 py-10 text-center sm:min-h-80 sm:px-10 lg:min-h-96">
    <div className="max-w-md">
      <h3
        className={`${univers.className} text-2xl uppercase text-[#393939] sm:text-3xl`}
      >
        {points.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#393939] sm:text-base">
        {points.desc}
      </p>
    </div>
  </div>
  )
}
