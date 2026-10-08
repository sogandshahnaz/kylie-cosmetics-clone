import Image from "next/image";
import Link from "next/link";

type FeaturedCardProps = {
  image: string;
  href: string;
};

export default function FeaturedCard({
    image,
    href,
  }: FeaturedCardProps) {
  return (
    <Link
    href={href}
    className="
      group
      relative
      block
      min-h-0
      overflow-hidden
      rounded-lg
      lg:row-span-2
    "
  >
    <div
      className="
        relative
        h-full
        min-h-[450px]
        bg-[#f3e9ed]
        sm:min-h-[500px]
        lg:min-h-[600px]
      "
    >
      <Image
        src={image}
        alt="Kylie Cosmetics"
        fill
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          33vw
        "
        className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-[1.02]
        "
      />
    </div>
  </Link>
  )
}
