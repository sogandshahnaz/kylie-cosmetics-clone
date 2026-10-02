import MoodStoneCards from "./MoodStoneCards"
import { MoodStoneDetails } from "./MoodStoneDetails"

export default function MoodStoneSection() {
  return (
    <section className="flex justify-center items-center min-h-[530px]">
        <div className="flex overflow-hidden px-6">

            <div className="flex gap-5 justify-center h-100  rounded-lg">

                {MoodStoneDetails.map((product) => (
                <MoodStoneCards
                key={product.id}
                {...product}
                />
            ))}

        </div>
        </div>
    </section>
  )
}
