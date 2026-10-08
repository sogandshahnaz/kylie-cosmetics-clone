import RewardFAQ from "@/components/rewards/RewardFAQ"
import RewardReferFriend from "@/components/rewards/RewardReferFriend"
import RewardsHowItWorks from "@/components/rewards/RewardsHowItWorks"
import RewardsRedeem from "@/components/rewards/RewardsRedeem"
import RewardTiers from "@/components/rewards/RewardTiers"
import RewardUsePoints from "@/components/rewards/RewardUsePoints"
import RewardWaysToEarn from "@/components/rewards/RewardWaysToEarn"
import { Button3, Button4 }  from "@/components/ui/Button"
import { univers } from "@/public/fonts/fonts"
import Image from "next/image"

export default function page() {
  return (
    <main className="w-full overflow-x-hidden">
       <section 
       className=' relative
    mt-[70px]
    h-[795px]
   

    sm:mt-[80px]
    sm:h-[580px]

    md:mt-[80px]
    md:h-[560px]
    md:bg-cover
    md:bg-center

    lg:mt-[150px]
    lg:h-[500px]
    lg:bg-cover
    lg:bg-center

    xl:mt-[150px]'
        style={{backgroundImage: "url('/images/rewards/mainBg.jpg')"}}>

          <Image
            src='/images/rewards/mobileBg.jpg'
            alt="bg"
            width={600}
            height={900}
            className="md:hidden 
            sm:h-full
            sm:w-full
            overflow-hidden"
          /> 

            <div 
            className='absolute lg:inset-0 flex flex-col items-center justify-center text-center 
            lg:w-[45.5%] 
            lg:bg-[#473B34] 
            lg:h-125 
              bottom-0
              left-0
              top-auto
              w-full
              h-65
              bg-[#524845]/90
              md:bottom-0
              md:left-0
              md:top-auto
              md:h-60
              md:w-full 
              md:bg-[#524845]/90
              md:justify-center
            '>
               <h1 className={`${univers.className} text-white lg:text-5xl uppercase mb-2
               text-4xl
               w-90
               md:text-4xl
               md:w-90
               `}>
                kylie cosmetics rewards
                </h1>
                <p className="text-white text-sm">get rewarded each time you shop plus additional perks.</p>

                <div className="relative z-10 mt-3 flex gap-3">
                  <Button4>join now</Button4>
                  <Button3>sign in</Button3>
              </div>

              </div>

        </section>
        <section>
          <RewardsHowItWorks/>
          <RewardWaysToEarn/>
          <RewardUsePoints/>
          <RewardsRedeem/>
          <RewardTiers/>
          <RewardReferFriend/>
          <RewardFAQ/>
        </section>
    </main>
  )
}
