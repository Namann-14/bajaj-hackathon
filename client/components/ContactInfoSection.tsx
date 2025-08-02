'use client'
import { motion } from "framer-motion"

export default function ContactInfoSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-white relative overflow-visible rounded-[32px]"
    >
      {/* Top-right plus/star grid */}
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
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-2 tracking-tight relative inline-block leading-tight">
            Bajaj Allianz Contact Information
            <span className="block absolute left-1/2 -translate-x-1/2 mt-2" style={{bottom: '-10px'}}>
              <svg width="320" height="18" viewBox="0 0 320 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14 Q160 24 316 8" stroke="#14b8a6" strokeWidth="5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-6">
            Use the following contact details for claims, questions, or submitting documents related to your knee surgery policy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-end">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center w-full md:w-1/3"
          >
            <div className="relative flex flex-col items-center mb-[-40px] z-10">
              {/* Orange burst */}
              <svg width="120" height="120" className="absolute left-1/2 -translate-x-1/2 top-0 z-0" style={{top: '-20px'}} viewBox="0 0 120 120" fill="none"><g><g><path d="M60 10L65 40L90 20L70 45L100 50L70 55L90 80L65 60L60 90L55 60L30 80L50 55L20 50L50 45L30 20L55 40Z" fill="#fbbf24"/></g></g></svg>
              <img src="/placeholder-user.jpg" alt="Address" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg relative z-10" />
            </div>
            <div className="bg-white rounded-[20px] shadow-md border border-gray-100 flex flex-col items-center text-center px-8 pt-16 pb-8 w-full" style={{marginTop: '-40px'}}>
              <div className="text-xl font-bold text-gray-900 mb-2">Address</div>
              <div className="text-gray-500 text-base mb-6">2nd Floor, Bajaj Finserv Building, Behind Weikfield IT park, Off Nagar Road, Viman Nagar Pune 411014</div>
            </div>
          </motion.div>
          {/* Toll-free Numbers Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center w-full md:w-1/3"
          >
            <div className="relative flex flex-col items-center mb-[-40px] z-10">
              {/* Teal plus */}
              <svg width="120" height="120" className="absolute left-1/2 -translate-x-1/2 top-0 z-0" style={{top: '-20px'}} viewBox="0 0 120 120" fill="none"><g><rect x="50" y="10" width="20" height="100" rx="10" fill="#14b8a6"/><rect x="10" y="50" width="100" height="20" rx="10" fill="#14b8a6"/></g></svg>
              <img src="/hero-person.png" alt="Toll-free Numbers" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg relative z-10" />
            </div>
            <div className="bg-white rounded-[20px] shadow-md border border-gray-100 flex flex-col items-center text-center px-8 pt-16 pb-8 w-full" style={{marginTop: '-40px'}}>
              <div className="text-xl font-bold text-gray-900 mb-2">Toll-free Numbers</div>
              <div className="text-gray-500 text-base mb-6">1800-103-2529<br/>1800-22-5858<br/>Sales: 1800 209 0144<br/>Service: 1800 209 5858</div>
            </div>
          </motion.div>
          {/* Email & Website Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center w-full md:w-1/3"
          >
            <div className="relative flex flex-col items-center mb-[-40px] z-10">
              {/* Yellow circle */}
              <svg width="120" height="120" className="absolute left-1/2 -translate-x-1/2 top-0 z-0" style={{top: '-20px'}} viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="50" fill="#fde68a"/></svg>
              <img src="/placeholder-user.jpg" alt="Email & Website" className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg relative z-10" />
            </div>
            <div className="bg-white rounded-[20px] shadow-md border border-gray-100 flex flex-col items-center text-center px-8 pt-16 pb-8 w-full" style={{marginTop: '-40px'}}>
              <div className="text-xl font-bold text-gray-900 mb-2">Email & Website</div>
              <div className="text-gray-500 text-base mb-6">bagichelp@bajajallianz.co.in<br/>www.bajajallianz.com</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 