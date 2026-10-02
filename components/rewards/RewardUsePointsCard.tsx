import { RewardUsePoints } from "@/types/rewards"
import { univers } from "@/public/fonts/fonts"

type Props = {
  points: RewardUsePoints
}

export default function RewardUsePointsCard({points} : Props) {
  return (
    <div className="flex flex-col items-center text-center justify-center bg-[#F8F1F4] h-110 w-108 rounded-md border border-[#E7DAE2]">
      <div>
        <h3 className={`${univers.className} text-3xl uppercase`}>{points.title}</h3>
        <p className="text-[#393939] mt-3">{points.desc}</p>
      </div>
    </div>
  )
}
