import LipKitCollection from "@/components/home/LipKitCollection";
import MoodStones from "@/components/home/MoodStones";
import PlumperSection from "@/components/home/PlumperSection";
import VirtualSection from "@/components/home/VirtualSection";
import WhatsInMyBag from "@/components/home/WhatsInMyBag";
import LipCategorySection from "@/components/products/lipCategories/LipCategorySection";
import LipKitSection from "@/components/products/lipKits/LipKitSection";
import MoodStoneSection from "@/components/products/moodStones/MoodStoneSection";
import ShopByCategory from "@/components/products/shopByCategory/ShopByCategory";
import Button from "@/components/ui/Button";
import { univers } from "@/public/fonts/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F8F1F4]"> 
      <section className="relative min-h-screen text-[#393939] cursor-pointer"> 
         <div className="absolute inset-0 bg-cover bg-center" 
           style={{ backgroundImage: "url('/images/background.jpg')", }} />
           <div className="absolute bg-black w-full sm:hidden h-full md:hidden lg:hidden">
            <Image
            src='/images/bgSmallScreen.webp'
            alt="background small screen"
            fill
            className="object-cover"
           />
           </div>
           

           <div className="sm:inline absolute left-16 top-1/2 -translate-y-1/2 w-100 hidden">
              <p className={`${univers.className} text-[#B3848F] text-sm`}>JUST DROPPED</p>
              <h1 className={`${univers.className} text-[#B3848F] text-3xl my-1.5`}>PLUMP IN A KIT</h1>
              <p className="w-60 text-lg my-4">the iconic lip kit now in plumping formulas with a lightweight, matte finish.</p>
              <Button>shop now</Button>
           </div>
      </section> 

        {/* 4 LIP KITS */}
        <LipKitSection/>

        {/* THE PLUMPER */}
        <PlumperSection/>

        {/* LIP KIT COLLECTION */}
        <LipKitCollection/>

        {/* <LipCategorySection/> */}
        <WhatsInMyBag/>

        <MoodStones/>

        {/* <MoodStoneSection/> */}

        <ShopByCategory/>

        <VirtualSection/>
      </main>
  );
}
