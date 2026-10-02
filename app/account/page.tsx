import { univers } from "@/public/fonts/fonts"
import { Button2 } from "@/components/ui/Button"
import Link from "next/link"

export default function Page() {
  return (
    <section className="flex h-[650px] bg-[#F8F1F4]">
        <div className="mt-[150px] w-full flex justify-center items-end">
            <div className="flex flex-col text-center">
              <h1 className={`${univers.className} uppercase text-[#B3848F] text-3xl`}>login</h1>  
              <div className="flex flex-col gap-4 text-sm mt-5">
                <input type="email" 
                className="bg-white w-100 p-2.5 rounded-sm outline-0"
                placeholder="email"/>
                <input type="password" 
                className="bg-white w-100 p-2.5 rounded-sm outline-0"
                placeholder="password"/>
              </div>
              <p className="ml-75 mt-2">
                <a href="" className="text-sm text-[#393939] underline">forgot password?</a>
              </p>

              <div className="w-90 flex text-[#393939] mt-5 mb-3 text-left">
                <span className="text-sm">by logging in, you agree to our <Link href='/terms' className="underline">terms</Link>, <Link href='/privacy-policy' className="underline">privacy policy</Link>, and <Link href='/rewards' className="underline">rewards program terms</Link></span>
              </div>
              <Button2>log in</Button2>

              <div className="flex flex-col text-[#393939] text-sm mt-7">
                <span>dont have an account yet?</span>
                <Link href='/create-account' className="underline">create account</Link>
              </div>
            </div>
        </div>
    </section>
  )
}
