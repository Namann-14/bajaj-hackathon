'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white fixed top-0 z-50 shadow-none border-0 w-full">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Left nav */}
          <nav className="flex items-center space-x-8 text-base font-medium">
            <Link href="#" className="text-gray-700 hover:text-black transition">Coverage</Link>
            <Link href="#" className="text-gray-700 hover:text-black transition">Claim Process</Link>
            <Link href="#" className="text-gray-700 hover:text-black transition">Contact</Link>
          </nav>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <Link href='/'>
            <span className="font-extrabold text-2xl tracking-tight select-none">
              Bajaj<span className="text-teal-500">Allianz</span>
            </span>
            </Link>
          </div>
          {/* Right nav */}
          <div className="flex items-center space-x-6 text-base font-medium">
            <Link href="#" className="text-gray-700 hover:text-black transition">Policy Details</Link>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-semibold text-base shadow-none">Get Help</Button>
          </div>
        </div>
      </div>
    </header>
  )
} 