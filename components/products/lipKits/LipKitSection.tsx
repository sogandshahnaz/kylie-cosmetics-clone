import { lipKitDetails } from "./LipKitDetails"
import LipKit from "./LipKit"

export default function LipKitSection() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {lipKitDetails.map((product) => (
          <LipKit
            key={product.id}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </section>
  )
}
