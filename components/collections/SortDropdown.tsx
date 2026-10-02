"use client";
import '../../app/globals.css'

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const sortOptions = [
    'featured',
    'newest',
    'best selling',
    'price: high to low',
    'price: low to high',
    'a-z',
    'z-a'
];

export default function SortDropdown() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('featured');

  return (
    <div className="relative">
        <button
        onClick={() => setOpen(!open)}
        className={`
          flex
          h-8
          md:w-44
          w-26
          items-center
          justify-between
          rounded-md
          border
          border-black
          px-2
          text-sm
          text-[#393939]
          cursor-pointer
          ${open ? 'rounded-b-xs' : 'rounded-md'}`}
        >
            <span>{selected}</span>

            <ChevronDown
          size={25}
          strokeWidth={1.5}
          className={`
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />
        </button>

        {open && (
          <div className="
          absolute
          z-50
          w-44
          h-60 
          overflow-y-scroll
          custom-scrollbar
          border
          border-black
          p-1
          shadow-lg
          rounded-b-md
          bg-white
        ">
          {sortOptions.map((option) => (
            <button 
            key={option}
            onClick={() => {
              setSelected(option)
              setOpen(false);
            }}
            className={`
            w-full
            rounded
            px-4
            py-3
            text-left
            text-sm
            hover:bg-[#EFD7E5]
            cursor-pointer
             ${selected === option ? "bg-[#EFD7E5]" : ""}
            `}>
              {option}
            </button>
          ))}
        </div>
        )}
    </div>
  )
}
