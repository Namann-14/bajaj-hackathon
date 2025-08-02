'use client'
import { motion } from "framer-motion"

export default function ImportantConsiderationsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-white relative overflow-visible"
    >
      {/* Top-right stars/crosses */}
      <svg className="absolute right-8 top-4 z-10" width="80" height="80" fill="none" viewBox="0 0 80 80">
        <g opacity="0.5">
          <g stroke="#14b8a6" strokeWidth="2">
            <line x1="10" y1="0" x2="10" y2="20"/><line x1="0" y1="10" x2="20" y2="10"/>
            <line x1="40" y1="0" x2="40" y2="20"/><line x1="30" y1="10" x2="50" y2="10"/>
            <line x1="70" y1="0" x2="70" y2="20"/><line x1="60" y1="10" x2="80" y2="10"/>
          </g>
          <g stroke="#f87171" strokeWidth="2">
            <line x1="10" y1="30" x2="10" y2="50"/><line x1="0" y1="40" x2="20" y2="40"/>
            <line x1="40" y1="30" x2="40" y2="50"/><line x1="30" y1="40" x2="50" y2="40"/>
            <line x1="70" y1="30" x2="70" y2="50"/><line x1="60" y1="40" x2="80" y2="40"/>
          </g>
          <g stroke="#a3e635" strokeWidth="2">
            <line x1="10" y1="60" x2="10" y2="80"/><line x1="0" y1="70" x2="20" y2="70"/>
            <line x1="40" y1="60" x2="40" y2="80"/><line x1="30" y1="70" x2="50" y2="70"/>
            <line x1="70" y1="60" x2="70" y2="80"/><line x1="60" y1="70" x2="80" y2="70"/>
          </g>
        </g>
      </svg>
      {/* Bottom-left stars/crosses */}
      <svg className="absolute left-8 bottom-4 z-10" width="80" height="80" fill="none" viewBox="0 0 80 80">
        <g opacity="0.5">
          <g stroke="#14b8a6" strokeWidth="2">
            <line x1="10" y1="0" x2="10" y2="20"/><line x1="0" y1="10" x2="20" y2="10"/>
            <line x1="40" y1="0" x2="40" y2="20"/><line x1="30" y1="10" x2="50" y2="10"/>
            <line x1="70" y1="0" x2="70" y2="20"/><line x1="60" y1="10" x2="80" y2="10"/>
          </g>
          <g stroke="#f87171" strokeWidth="2">
            <line x1="10" y1="30" x2="10" y2="50"/><line x1="0" y1="40" x2="20" y2="40"/>
            <line x1="40" y1="30" x2="40" y2="50"/><line x1="30" y1="40" x2="50" y2="40"/>
            <line x1="70" y1="30" x2="70" y2="50"/><line x1="60" y1="40" x2="80" y2="40"/>
          </g>
          <g stroke="#a3e635" strokeWidth="2">
            <line x1="10" y1="60" x2="10" y2="80"/><line x1="0" y1="70" x2="20" y2="70"/>
            <line x1="40" y1="60" x2="40" y2="80"/><line x1="30" y1="70" x2="50" y2="70"/>
            <line x1="70" y1="60" x2="70" y2="80"/><line x1="60" y1="70" x2="80" y2="70"/>
          </g>
        </g>
      </svg>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-2 tracking-tight relative inline-block">
            Important Considerations
            <span className="block absolute left-1/2 -translate-x-1/2 mt-2" style={{bottom: '-18px'}}>
              <svg width="260" height="18" viewBox="0 0 260 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14 Q130 24 256 8" stroke="#14b8a6" strokeWidth="5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-6">
            Please review your policy document for coverage, waiting periods, and exclusions related to knee surgery. Check if your hospital is in the Bajaj Allianz network for cashless treatment, or prepare for reimbursement if not.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Policy Details */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#e6f7f1] to-[#f8fafc] shadow-lg border border-[#e0f2f1] flex flex-col items-center text-center px-8 pt-8 pb-6 min-h-[390px]">
            <div className="text-2xl font-bold text-gray-900 mb-1">Policy Details</div>
            <div className="text-gray-500 text-base">Check your 3-month policy for specific coverage, waiting periods, and exclusions for knee surgery.</div>
          </div>
          {/* Card 2: Cashless vs. Reimbursement */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#e6f7f1] to-[#f8fafc] shadow-lg border border-[#e0f2f1] flex flex-col items-center text-center px-8 pt-8 pb-6 min-h-[390px]">
            <div className="text-2xl font-bold text-gray-900 mb-1">Cashless vs. Reimbursement</div>
            <div className="text-gray-500 text-base">Check if your hospital is in Bajaj Allianz's network for cashless treatment. Otherwise, pay upfront and seek reimbursement.</div>
          </div>
          {/* Card 3: Pre-authorization */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#e6f7f1] to-[#f8fafc] shadow-lg border border-[#e0f2f1] flex flex-col items-center text-center px-8 pt-8 pb-6 min-h-[390px]">
            <div className="text-2xl font-bold text-gray-900 mb-1">Pre-authorization</div>
            <div className="text-gray-500 text-base">Check if pre-authorization is required for knee surgery. Submit medical documents for approval before the procedure.</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 