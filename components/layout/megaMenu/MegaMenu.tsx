"use client";

import Image from "next/image";
import Link from "next/link";
import { univers } from "@/public/fonts/fonts";

type MegaMenuProps = {
  menu: MenuItem | null;
};

export type MenuItem = {
    title: string;
    href: string;
    columns?: {
      image: string;
      title: string;
      links?: {
        title: string;
        href: string
      }[]
    }[];
  
    featured?: {
      image: string;
      title: string;
      href: string;
    }[];
}; 

export default function MegaMenu({ menu }: MegaMenuProps) {
  if (!menu || (!menu.columns?.length && !menu.featured?.length)) {
    return null;
  } 

  return (
    <div className="absolute left-1/2 top-full w-screen -translate-x-1/2 bg-white">
      <div className="mx-auto flex max-w-[1400px] gap-12 px-16 py-8">

        {/* COLUMNS */}
        <div className="flex flex-1 gap-5">
          {menu.columns?.map((column) => (
            <div key={column.title}>
                 <Image src={column.image} width={130} height={130} alt={column.title}
                 className="rounded-sm cursor-pointer"/>
              <h3 className="text-[#A06674] text-xl font-bold my-3">
                {column.title}
              </h3>

              <ul className="space-y-3 w-30">
                {column.links?.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FEATURED IMAGE */}

        
     {menu.featured && (
         <div
    className={`flex shrink-0 flex-col gap-4 ${
      menu.featured.length > 1 ? "w-[320px]" : "w-[320px]"
    }`}
  >
    {menu.featured.map((item) => (
      <Link key={item.title} href={item.href} className="block">
        <div
          className={`relative overflow-hidden ${
            menu.featured!.length > 1
              ? "aspect-[5.5/3]"
              : "aspect-[2.7/3]"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="rounded-sm object-cover"
          />
          {menu.featured!.length > 1 && (
            <div className="absolute inset-0 flex justify-center items-center p-4">
              <h1 className={`${univers.className} text-2xl font-bold text-white w-20 text-center`}>{item.title}</h1>
            </div>
          )}
        </div>
      </Link>
    ))}
  </div>
)}
      </div>
    </div>
  );
}