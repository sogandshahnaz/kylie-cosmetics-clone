"use client"
import { Button2 } from "@/components/ui/Button";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaTiktok, FaInstagram  } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {

    const [email, setEmail] = useState('');
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return (
    <section
      className="
        flex
        flex-col
        justify-center
        items-center
        w-full
        min-h-[550px]
        bg-[#F8F1F4]
        px-6
        py-12
      "
    >
      {/* Newsletter */}
      <div className="w-full max-w-[700px]">
        <h1 className="text-xl font-bold text-black">
          sign up for updates:
        </h1>

        <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-stretch md:items-center">
          <input
            type="email"
            placeholder="email address"
            className="
              border
              border-black
              text-[#393939]
              py-2
              pl-2
              w-full
              md:w-[550px]
              rounded-sm
              outline-0
              my-3
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button2 disabled={!isValidEmail}>
            submit
          </Button2>
        </div>

        <p className="text-sm text-[#393939]">
          by signing up you agree to our{" "}
          <span className="underline">terms</span>.
        </p>
      </div>

      {/* Social Icons */}
      <div
        className="
          flex
          w-[220px]
          md:w-55
          text-3xl
          justify-between
          mt-16
          text-[#996C74]
        "
      >
        <Link href="/facebook">
          <FaFacebookF />
        </Link>

        <Link href="/instagram">
          <FaInstagram />
        </Link>

        <Link href="/twitter">
          <FaTwitter />
        </Link>

        <Link href="/tiktok">
          <FaTiktok />
        </Link>
      </div>

      {/* Main Links */}
      <div
        className="
          flex
          w-full
          max-w-[900px]
          justify-center
          text-[#393939]
          mt-12
        "
      >
        <ul
          className="
            flex
            flex-wrap
            justify-center
            gap-x-5
            gap-y-3
            text-center
          "
        >
          <Link href="/contact-us">
            <li>contact us</li>
          </Link>

          <Link href="/faq">
            <li>faq</li>
          </Link>

          <Link href="/shipping">
            <li>shipping</li>
          </Link>

          <Link href="/order-tracking">
            <li>order tracking</li>
          </Link>

          <Link href="/gift-card-balance">
            <li>gift card balance</li>
          </Link>
        </ul>
      </div>

      {/* Legal Links */}
      <div
        className="
          flex
          flex-col
          items-center
          w-full
          max-w-[900px]
          justify-center
          text-[#393939]
          mt-12
        "
      >
        <ul
          className="
            flex
            flex-wrap
            justify-center
            gap-x-5
            gap-y-3
            underline
            text-sm
            text-center
          "
        >
          <Link href="/privacy-policy">
            <li>privacy policy</li>
          </Link>

          <Link href="/terms">
            <li>terms</li>
          </Link>

          <Link href="/accessibility">
            <li>accessibility</li>
          </Link>

          <Link href="/set-my-cookie-choices">
            <li>set my cookie choices</li>
          </Link>

          <Link href="/cookie-policy">
            <li>cookie policy</li>
          </Link>
        </ul>

        <p className="text-xs mt-3">
          © 2026 coty operations
        </p>
      </div>
    </section>
  )
}
