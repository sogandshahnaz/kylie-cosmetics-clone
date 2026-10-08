import { useYourPoints } from "@/data/rewards"
import RewardUsePointsCard from "./RewardUsePointsCard"
import { univers } from "@/public/fonts/fonts"

export default function RewardUsePoints() {
  return (
    <section className="px-10 py-12 sm:px-6 sm:py-16 lg:px-20">
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
      <h3
        className={`${univers.className} mb-2 text-center text-2xl uppercase text-[#393939] sm:text-3xl`}
      >
        how to use your points
      </h3>

      <p className="text-center text-sm text-[#393939] sm:text-base">
        apply points at checkout for an exclusive discount.
      </p>

      <div className="mt-8 grid w-full grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 lg:gap-6">
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
