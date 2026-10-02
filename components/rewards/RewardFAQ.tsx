"use client"
import { rewardFaq } from "@/data/rewards"
import { useState } from "react"
import { univers } from "@/public/fonts/fonts";
import { Plus, Minus } from "lucide-react";

export default function RewardFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-20">
        <div className="mx-auto max-w-4xl">
        <h2 className={`${univers.className} mb-10 text-center text-3xl font-semibold uppercase text-[#b3848f]`}>
          FAQ
        </h2>

        <div>
          {rewardFaq.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="border-b border-[#e7dae2]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-base font-semibold text-[#b3848f]">
                    {faq.question}
                  </span>

                  <div className="relative w-5 h-5">
                    <Plus
                        size={20}
                        className={`absolute inset-0 text-[#b3848f] transition-all duration-200 
                        cursor-pointer   
                        ${
                        isOpen
                            ? "rotate-45 opacity-0"
                            : "rotate-0 opacity-100"
                        }`}
                    />

                    <Minus
                        size={20}
                        className={`absolute inset-0 text-[#b3848f] transition-all duration-300 
                        cursor-pointer  
                        ${
                        isOpen
                            ? "rotate-0 opacity-100"
                            : "rotate-[-45deg] opacity-0"
                        }`}
                    />
                </div>
                
                </button>

                {isOpen && (
                  <div className="pb-6 pr-8 text-[#393939] text-[16px] leading-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        </div>
    </section>
  )
}
