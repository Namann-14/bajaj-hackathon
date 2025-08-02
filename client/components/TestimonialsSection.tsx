'use client'
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-48 bg-[#18323a] relative overflow-visible rounded-[32px]"
    >
      {/* Plus/star grid decorations */}
      <svg className="absolute left-8 top-4 z-10" width="80" height="80" fill="none" viewBox="0 0 80 80">
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
      <svg className="absolute right-8 bottom-4 z-10" width="80" height="80" fill="none" viewBox="0 0 80 80">
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
      <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Testimonial Card Stack */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex flex-col items-center"
        >
          {/* Blurred/ghosted cards */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[380px] h-[140px] bg-white/10 rounded-2xl blur-sm z-0"></div>
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[340px] h-[120px] bg-white/10 rounded-2xl blur-sm z-0"></div>
          {/* Main testimonial card */}
          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 w-[400px] max-w-full">
            <div className="flex items-center mb-4">
              <img src="/placeholder-user.jpg" alt="Claim Process" className="w-12 h-12 rounded-full mr-3" />
              <div>
                <div className="font-bold text-gray-900">Claim Process</div>
                <div className="text-xs text-gray-400">Required Documents</div>
              </div>
            </div>
            <div className="text-3xl text-teal-500 mb-2">“</div>
            <div className="text-gray-700 mb-4">Cashless settlement letter, first consultation letter, and implant invoice/sticker (if applicable) are needed for your claim.</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" /></svg>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Right: Section Title and Secondary Testimonial */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center items-start"
        >
          <h2 className="text-4xl font-extrabold mb-2 tracking-tight relative inline-block text-white">
            Claim Process Steps<br />
            <span className="relative inline-block">
              &nbsp;
              <span className="block absolute left-1/2 -translate-x-1/2 mt-2" style={{bottom: '-10px'}}>
                <svg width="260" height="18" viewBox="0 0 260 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14 Q130 24 256 8" stroke="#14b8a6" strokeWidth="5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </span>
          </h2>
          <p className="text-gray-300 text-base max-w-md mb-6 mt-4">
            1. Review your policy<br />2. Contact Bajaj Allianz<br />3. Gather documents<br />4. Submit claim
          </p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" /></svg>
            ))}
          </div>
          <div className="flex items-center mt-2">
            <img src="/placeholder-user.jpg" alt="Contact" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <div className="font-bold text-white">Contact</div>
              <div className="text-xs text-gray-400">bagichelp@bajajallianz.co.in</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 