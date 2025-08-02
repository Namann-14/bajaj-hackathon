'use client'
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = (sectionId: string) => {
    // If we're on the home page, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If we're on another page, navigate to home page with hash
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header className="bg-white fixed top-0 z-50 shadow-none border-0 w-full">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Left nav */}
          <nav className="flex items-center space-x-8 text-base font-medium">
            <button 
              onClick={() => navigateToSection('coverage')}
              className="text-gray-700 hover:text-black transition cursor-pointer"
            >
              Coverage
            </button>
            <button 
              onClick={() => navigateToSection('claim-process')}
              className="text-gray-700 hover:text-black transition cursor-pointer"
            >
              Claim Process
            </button>
            <button 
              onClick={() => navigateToSection('contact')}
              className="text-gray-700 hover:text-black transition cursor-pointer"
            >
              Contact
            </button>
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
            <button 
              onClick={() => navigateToSection('policy-details')}
              className="text-gray-700 hover:text-black transition cursor-pointer"
            >
              Policy Details
            </button>
            <Link href="/chat">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-semibold text-base shadow-none">
                Chat Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 