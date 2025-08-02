'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="pt-16 pb-20 bg-gradient-to-br from-teal-50 to-white relative overflow-hidden pt-48"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Headline and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-[48px] leading-[1.1] font-extrabold tracking-tight relative">
              Knee Surgery Coverage
              <br />
              for a 46-year-old Male
              <br />
              in Pune
            </h1>
            <p className="text-gray-600 text-lg max-w-lg">
              Bajaj Allianz General Insurance offers coverage for knee surgery under Global Health Care. Review your policy for specific terms, conditions, and exclusions related to your 3-month policy.
            </p>
            <div className="flex items-center space-x-6">
              <Button size="lg" className="relative bg-transparent shadow-none px-0 py-0 h-auto group">
                <span className="flex items-center text-lg font-semibold text-gray-900">
                  Review Policy Document
                  <span className="ml-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 group-hover:bg-teal-600 transition">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                </span>
              </Button>
            </div>
            <div className="flex space-x-12 pt-8">
              <div>
                <div className="text-4xl font-extrabold text-gray-900">3 Months</div>
                <div className="text-gray-500 text-base mt-1">Policy Duration</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-gray-900">Pune</div>
                <div className="text-gray-500 text-base mt-1">Treatment Location</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visuals and Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex items-center justify-center min-h-[480px]"
          >
            {/* Teal Accent Shape */}
            <div className="absolute -top-8 -right-8 w-[340px] h-[340px] bg-teal-100 rounded-[60px] z-0" style={{filter:'blur(2px)'}}></div>
            {/* Person Image */}
            <div className="rounded-3xl bg-gradient-to-br from-teal-400 to-teal-500 w-[340px] h-[420px] flex items-end justify-center relative shadow-xl z-10">
              <Image
                src="/hero-person.png"
                alt="Knee Surgery Illustration"
                width={300}
                height={400}
                className="relative z-10 rounded-3xl object-cover"
              />
            </div>
            {/* Floating Cards */}
            {/* Coverage Card */}
            <div className="absolute -top-10 -left-10 bg-white rounded-2xl shadow-xl p-5 w-56 border border-gray-100 z-20">
              <div className="text-xs text-gray-500 mb-1">Coverage</div>
              <div className="font-bold text-lg mb-2">Knee Surgery</div>
              <div className="text-xs text-gray-500">Covered under Global Health Care</div>
            </div>
            {/* Claim Process Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-5 w-64 border border-gray-100 z-20">
              <div className="text-sm font-semibold mb-2">Claim Process</div>
              <ul className="text-xs text-gray-600 mb-2 list-disc pl-4">
                <li>Cashless settlement letter or other Company settlement letter</li>
                <li>First consultation letter for the current ailment</li>
                <li>For implant surgery, invoice & sticker</li>
              </ul>
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm rounded-full">Start Claim</Button>
            </div>
            {/* Contact Card */}
            <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-xl p-5 w-64 border border-gray-100 z-20">
              <div className="text-xs text-gray-500 mb-1">Contact</div>
              <div className="font-semibold text-sm mb-2">Bajaj Allianz General Insurance</div>
              <div className="text-xs text-gray-500">bagichelp@bajajallianz.co.in<br/>1800-103-2529<br/>1800-22-5858</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 