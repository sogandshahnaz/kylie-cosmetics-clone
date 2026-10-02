"use client";
import { useEffect, useState } from "react";
import { Heart, User, Search, Handbag, Sparkle, Menu } from "lucide-react"
import { univers, universLight} from "@/public/fonts/fonts"
import Link from "next/link"
import { megaMenus } from "@/data/megaMenu";
import MegaMenu from "../megaMenu/MegaMenu";
import MobileMenu from "./MobileMenu";
export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const activeMenuData =
  megaMenus.find((menu) => menu.title === activeMenu) ?? null;

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full text-[#393939] transition-colors duration-300 lg:hover:bg-white pb-5
      ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      {/* TOP ROW */}
      <div className="relative flex w-full items-center justify-between px-5 lg:px-13 py-6">
        {/* LEFT SIDE - DESKTOP */}
         <div 
         className="hidden lg:flex shrink-0 gap-3">      
              <span className="cursor-pointer">bl</span> 
               <span className="cursor-pointer flex items-center justify-center w-6 h-6 border rounded-full"> € </span> 
          </div>

          {/* LEFT SIDE - MOBILE/TABLET */} 
          
          <div className="flex lg:hidden items-center gap-5"> 
            {/* BURGER */} 
            <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="cursor-pointer" > 
              <Menu strokeWidth={1} /> 
              </button> 
              {/* SEARCH */} 
              <button type="button" className="cursor-pointer" 
              > 
              <Search strokeWidth={1} /> 
              </button> 
            </div>

        <div className="absolute flex flex-col left-1/2 -translate-x-1/2 items-center">
          <Link href='/' className={`${univers.className} text-xl  text-[#393939]`}>
             KYLIE COSMETICS
          </Link>
          <span className={`${universLight.className} absolute text-xs font-extralight text-[#555555] top-6`}>
            KYLIE JENNER
            </span>
        </div>
        <ul className="flex lg:w-40 justify-between w-20">
            <li>
              <Link href='/wishlist'>
                <Heart strokeWidth={1}/>
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link href='/account'>
                <User strokeWidth={1}/>
              </Link>
            </li>
            <li className="hidden lg:block">
              <button type="button" className="cursor-pointer">
                <Search strokeWidth={1}/>
              </button>
            </li>
            <li>
              <Link href='/cart'>
                <Handbag strokeWidth={1}/>
              </Link>
            </li>
        </ul>
        </div>

      {/* MENU AREA */}
      <div
      onMouseLeave={() => setActiveMenu(null)} 
      className="relative">
        {/* BOTTOM ROW */}
        <div className="hidden lg:flex flex-col items-center ">

          <ul className="flex gap-3 items-center ">
            {megaMenus.map((menu) => (
              <li key={menu.title}
              onMouseEnter={() => setActiveMenu(menu.title)}
              onFocus={() => setActiveMenu(menu.title)}
              className="group relative"
              >
                {menu.title === 'fragrance' && (
                  <>
                  <Sparkle className="
                    absolute 
                    -right-1
                    h-4 
                    w-4
                    transition-opacity
                    duration-300
                    group-hover:opacity-0"
                    />

                 <Sparkle className="
                      absolute
                      -bottom-0 
                      -left-1
                      h-4 
                      w-4
                      transition-opacity
                      duration-300
                      group-hover:opacity-0"/>
                  </>
                )}
                <Link
          href={menu.href}
          className="
            block
            rounded-sm
            p-3
            transition-colors
            duration-200
            hover:bg-[#F8F1F4]
          "
        >
          {menu.title}
        </Link>
              </li>
            ))}

          </ul>
        </div>
           <MegaMenu menu={activeMenuData} />
        </div>

        {/* MOBILE MENU */}
        <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}/>
    </nav>
  )
}



// nav class = className={`fixed top-0 left-0 z-50 w-full text-[#393939] transition-colors duration-300 hover:bg-white pb-5 
//   ${isScrolled ? 'bg-white' : 'bg-transparent'}`}



{/* <li className="group relative">
            <Sparkle className="
            absolute
             -top-2 
             -right-1
             h-4 
             w-4
             transition-opacity
             duration-300
             group-hover:opacity-0"
             />
              <Link href='/fragrance'
              className="p-3 rounded-sm transition-colors duration-200 hover:bg-[#F8F1F4]">
              fragrance
              </Link>
              <Sparkle className="
            absolute
             -bottom-2 
             -left-1
             h-4 
             w-4
             transition-opacity
             duration-300
             group-hover:opacity-0"/>
            </li>
 */}