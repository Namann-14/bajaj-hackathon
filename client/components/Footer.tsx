'use client'
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#18323a] text-white pt-32 pb-0 rounded-t-[32px]"
    >
      <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-3 gap-12 pb-12">
        {/* Logo and Contact */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="font-extrabold text-2xl tracking-tight select-none">
              Bajaj<span className="text-teal-500">Allianz</span>
            </span>
          </div>
          <p className="text-gray-400 mb-6 text-sm">2nd Floor, Bajaj Finserv Building, Behind Weikfield IT park, Off Nagar Road, Viman Nagar Pune 411014</p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a2 2 0 0 1 .84-1.63l8-5.2a2 2 0 0 1 2.32 0l8 5.2a2 2 0 0 1 .84 1.63z"/><path d="M6 9V7a6 6 0 0 1 12 0v2"/></svg>
              <span>(267) 739-6240</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
              <span>bagichelp@bajajallianz.co.in</span>
            </div>
          </div>
        </div>
        {/* Quick Menu */}
        <div>
          <div className="font-bold text-lg mb-4">Quick Menu</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Coverage</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Claim Process</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Policy Details</a>
          </div>
        </div>
        {/* Subscribe */}
        <div>
          <div className="font-bold text-lg mb-4">Contact</div>
          <div className="flex mb-6">
            <input type="email" placeholder="Email for Newsletter" className="flex-1 px-4 py-2 bg-transparent border border-teal-400 rounded-l-md focus:outline-none focus:border-teal-500 text-white placeholder:text-gray-400" />
            <button className="bg-teal-500 hover:bg-teal-600 rounded-r-md px-4 py-2 font-bold flex items-center justify-center"><svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round"/></svg></button>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></a>
            <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg></a>
            <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" /></svg></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center text-sm px-8">
        <p className="text-gray-400">© Copyright 2021. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">License</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </motion.footer>
  )
} 