"use client"
import {Button2} from "@/components/ui/Button"
import { LipCategoryDetails } from "../lipKits/LipKitDetails"
import LipCategories from "./LipCategories"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRef } from "react"


export default function LipCategorySection() {

  const sliderRef = useRef<HTMLDivElement>(null);

  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    setIsStart(slider.scrollLeft <= 5);

    setIsEnd(
      slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5
    );
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const card = slider.querySelector("article");

    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 20;

    slider.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const card = slider.querySelector("article");

    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 20;

    slider.scrollBy({
      left: -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="m-12">
        <div ref={sliderRef}
        onScroll={handleScroll}
         className="flex overflow-hidden gap-5 items-center">
            {LipCategoryDetails.map((category) => (
                <LipCategories 
                key={category.id}
                image={category.image}
                name={category.name}/>
            ))}
  

            {/* ARROWS */}
            <div className="absolute left-2 flex">
              <button onClick={scrollLeft}
              disabled={isStart}
              className="flex items-center justify-center h-8 w-8 rounded-full border border-[#e0dedf]">
                <ArrowLeft width={20}
                className="text-[#A8A3A5]"/>
              </button>
            </div>

            <div className="absolute right-2 flex">
              <button onClick={scrollRight}
              disabled={isEnd}
              className="flex items-center justify-center h-8 w-8 rounded-full border border-[#e0dedf]">
                <ArrowRight width={20}
                className="text-[#A8A3A5]"/>
              </button>
            </div>

        </div>

           
            <div className="flex justify-center mt-20">
              <Button2>shop all</Button2>
            </div>
        
    </section>
  )
}
