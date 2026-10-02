import { useYourPoints } from "@/data/rewards"
import RewardUsePointsCard from "./RewardUsePointsCard"
import { univers } from "@/public/fonts/fonts"

export default function RewardUsePoints() {
  return (
    <section className='h-190 py-20'>
      <div className='flex flex-col justify-center items-center'>
        <h3 className={`${univers.className} text-3xl uppercase mb-2`}>how to use your points</h3>
        <p>apply points at checkout for an exclusive discount.</p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {useYourPoints.map((points) => (
            <RewardUsePointsCard
              key={points.id}
              points={points}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
