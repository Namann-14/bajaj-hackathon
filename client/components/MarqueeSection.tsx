'use client'
import { motion } from "framer-motion"

export default function MarqueeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-8 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="relative overflow-hidden">
          {/* Left blur overlay */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, white 70%, transparent)'}}></div>
          {/* Right blur overlay */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, white 70%, transparent)'}}></div>
          <div className="flex whitespace-nowrap animate-marquee space-x-16 opacity-70 will-change-transform">
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Repair of knee joint</span>
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Paediatric surgery</span>
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Global Health Care</span>
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Return Journey</span>
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Cashless Settlement</span>
            {/* Duplicate for seamless loop */}
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Repair of knee joint</span>
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Paediatric surgery</span>
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Global Health Care</span>
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Return Journey</span>
            <span className="text-[28px] font-bold text-[#B0B7C3] tracking-tight" style={{fontFamily:'inherit'}}>Cashless Settlement</span>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 