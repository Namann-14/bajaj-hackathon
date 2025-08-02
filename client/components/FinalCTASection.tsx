'use client'
import { motion } from "framer-motion"

export default function FinalCTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 bg-transparent relative overflow-visible -mb-32 z-20"
    >
      <div className="max-w-[1100px] mx-auto relative z-20">
        <div className="rounded-[40px] bg-[#22d3b6] text-white flex flex-col md:flex-row items-center justify-between px-16 py-14 relative overflow-hidden shadow-2xl border-4 border-white">
          <div className="text-4xl font-extrabold leading-tight mb-6 md:mb-0">
            Need Help with Your Claim?<br />Contact Bajaj Allianz
          </div>
          <div className="flex flex-col items-end">
            <button className="bg-white text-teal-600 font-bold px-8 py-3 rounded-xl text-lg flex items-center mb-2 relative group shadow-md">
              Get Support
              <svg className="ml-2 w-6 h-6" fill="none" stroke="#14b8a6" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round"/></svg>
            </button>
            <div className="flex items-center mt-2">
              <img src="/placeholder-user.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0" />
              <img src="/placeholder-user.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2" />
              <img src="/placeholder-user.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2" />
              <span className="ml-3 text-white text-sm opacity-80">bagichelp@bajajallianz.co.in</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 