'use client'

import Link from "next/link";
import { X, User, Sparkle } from "lucide-react";
import { mobileMenu } from "@/data/mobileMenu";
import { univers } from "@/public/fonts/fonts";
import { useState } from "react";
import Image from "next/image";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};


export type MobileMenuItem = {
    title: string;
    href: string;
    columns?: {
      image: string;
      title: string;
      href?: string
    }[];
    featured?: {
      image: string;
      title: string;
      href: string;
    }[];
}; 

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {

  const [activeItem, setActiveItem] = useState<string>('cosmetics');
  const activeMenu = mobileMenu.find(
    (item) => item.title === activeItem);

  return (
    <div 
    className={`
      fixed
      inset-0
      z-[100]
      bg-white
      overflow-y-auto
      overflow-x-hidden
      xl:hidden
      transition-transform
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-4">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer"
          aria-label="Close menu"
        >
          <X
            size={30}
            strokeWidth={1}
          />
        </button>

         {/* RIGHT SIDE */}

         <div className="flex items-center gap-3">

            <span>
              bl
            </span>

            <span
              className="
                flex
                items-center
                justify-center
                w-6
                h-6
                border
                rounded-full
              "
            >
              €
            </span>

            <Link
              href="/account"
              onClick={onClose}
            >
              <User
                size={24}
                strokeWidth={1}
              />
            </Link>

            </div>    
      </div>

      {/* MAIN CATEGORIES */}
      <div className="px-9">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
          {mobileMenu.map((item) => {
            const isActive = activeItem === item.title;
            
            // REWARDS -> LINK
            if(item.title === "rewards"){
              return(
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={` 
                    ${univers.className} 
                    uppercase 
                    text-sm text-[#b38499] 
                    px-3 py-2 
                    cursor-pointer 
                    hover:bg-[#F8F1F4] 
                    rounded-sm `}
                >
                  {item.title}
                </Link>
              );
            }

            // OTHER CATEGORIES -> BUTTON
            return(
              <button 
              key={item.href} 
              type="button" 
              onClick={() => setActiveItem(item.title)} 
              className={` 
                ${univers.className} 
                uppercase text-sm text-[#b38499] 
                px-3 py-2 
                cursor-pointer 
                hover:bg-[#F8F1F4] 
                rounded-sm 
                ${isActive ? "bg-[#F8F1F4] text-black" : ""} `} > 
                {item.title} 
               </button>
            )
          })}
        </div>
      </div>
      
       {/* ACTIVE ITEM COLUMNS */}
       {activeMenu && (
  <div className="px-9 mt-8">

    {/* COLUMNS */}

    <div>
      {activeMenu.columns?.map((column) => (
        <Link
          key={column.title}
          href={column.href ? column.href : '#'}
          className="
            flex
            items-center
            gap-4
            py-3
            border-b
            border-[#e7dae2]
          "
        >
          {/* IMAGE */}

          <div className="relative w-13 h-13 shrink-0 overflow-hidden rounded-sm">
            <Image
              src={column.image}
              alt={column.title}
              fill
              sizes="52px"
              className="object-cover"
            />
          </div>

          {/* TITLE */}

          <span
            className="
              text-xl
              text-[#b38499]
              font-extrabold
            "
          >
            {column.title}
          </span>
        </Link>
      ))}
    </div>


    {/* FEATURED */}

    {activeMenu.featured && activeMenu.featured.length > 0 && (
      <div
      className={
        activeMenu.featured.length > 1
          ? "grid grid-cols-2 gap-4 mb-7"
          : ""
      }
      >
          {activeMenu.featured.map((featured) => (
              <Link
                key={featured.title}
                href={featured.href}
                onClick={onClose}
                className="block mt-8"
              >
                {/* FEATURED IMAGE */}
                <div
                  className={`relative overflow-hidden ${
                    activeMenu.featured!.length > 1
                      ? "aspect-[3/3]"
                      : "aspect-[2/2]"
                  }`}
                >
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="100vw"
                    className="rounded-sm object-cover"
                  />
                </div>
              </Link>
    ))}
      </div>
    )}

  </div>
)}
    </div>
  )
}

{/* <div className="relative w-full aspect-[2/2] overflow-hidden rounded-sm">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div> */}