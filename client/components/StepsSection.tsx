'use client'
import React, { useState } from "react"
import { motion } from "framer-motion"

export default function StepsSection() {
  const [openAccordion, setOpenAccordion] = useState(0);
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-2 tracking-tight relative inline-block">
            What You Should Do
            <span className="block absolute left-1/2 -translate-x-1/2 mt-2" style={{bottom: '-18px'}}>
              <svg width="260" height="18" viewBox="0 0 260 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14 Q130 24 256 8" stroke="#14b8a6" strokeWidth="5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-6">
            Follow these steps to ensure your knee surgery claim is processed smoothly with Bajaj Allianz General Insurance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#f8fafc] rounded-[28px] shadow-md border border-gray-100 px-8 py-10 flex flex-col h-full justify-stretch"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#14b8a6" fillOpacity="0.15"/><path d="M12 8v4" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#14b8a6"/></svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Steps to Take</span>
            </div>
            <div className="flex flex-col divide-y divide-gray-200 flex-grow">
              {/* First Accordion (open/closed) */}
              <div className="py-4">
                <button type="button" className={`flex items-center text-lg font-semibold focus:outline-none w-full ${openAccordion === 0 ? "text-teal-500" : "text-gray-300"}`} onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}>
                  <svg className="mr-3" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke={openAccordion === 0 ? "#14b8a6" : "#d1d5db"} strokeWidth="2" strokeLinecap="round"/></svg>
                  Review your policy document
                </button>
                {openAccordion === 0 && (
                  <div className="mt-2 text-gray-500 text-sm pl-8">
                    Understand your coverage, terms, and conditions for knee surgery and the 3-month policy duration.
                  </div>
                )}
              </div>
              {/* Second Accordion (open/closed) */}
              <div className="py-4">
                <button type="button" className={`flex items-center text-lg font-semibold focus:outline-none w-full ${openAccordion === 1 ? "text-teal-500" : "text-gray-300"}`} onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}>
                  <svg className="mr-3" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke={openAccordion === 1 ? "#14b8a6" : "#d1d5db"} strokeWidth="2" strokeLinecap="round"/></svg>
                  Contact Bajaj Allianz
                </button>
                {openAccordion === 1 && (
                  <div className="mt-2 text-gray-500 text-sm pl-8">
                    Confirm coverage, network hospitals, and pre-authorization process for knee surgery.
                  </div>
                )}
              </div>
              {/* Third Accordion (open/closed) */}
              <div className="py-4">
                <button type="button" className={`flex items-center text-lg font-semibold focus:outline-none w-full ${openAccordion === 2 ? "text-teal-500" : "text-gray-300"}`} onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}>
                  <svg className="mr-3" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke={openAccordion === 2 ? "#14b8a6" : "#d1d5db"} strokeWidth="2" strokeLinecap="round"/></svg>
                  Gather necessary documents
                </button>
                {openAccordion === 2 && (
                  <div className="mt-2 text-gray-500 text-sm pl-8">
                    Collect consultation letter, settlement letter, and implant invoice/sticker if needed.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          {/* Right: 2x2 Grid of Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-8 w-full"
          >
            {/* Step 1 */}
            <div className="rounded-[20px] bg-[#f8fafc] shadow-md border border-gray-100 p-6 flex flex-col">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#14b8a6" fillOpacity="0.15"/><path d="M12 8v4" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#14b8a6"/></svg>
                </div>
                <span className="text-lg font-bold text-gray-900">Review Policy</span>
              </div>
              <div className="text-gray-500 text-sm mb-4">Understand your coverage, terms, and conditions for knee surgery and the 3-month policy duration.</div>
              <a href="#" className="text-teal-500 text-sm font-semibold flex items-center mt-auto hover:underline">Learn More <svg className="ml-1" width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/></svg></a>
            </div>
            {/* Step 2 */}
            <div className="rounded-[20px] bg-[#f8fafc] shadow-md border border-gray-100 p-6 flex flex-col">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#14b8a6" fillOpacity="0.15"/><path d="M12 8v4" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#14b8a6"/></svg>
                </div>
                <span className="text-lg font-bold text-gray-900">Contact Bajaj Allianz</span>
              </div>
              <div className="text-gray-500 text-sm mb-4">Confirm coverage, network hospitals, and pre-authorization process for knee surgery.</div>
              <a href="#" className="text-teal-500 text-sm font-semibold flex items-center mt-auto hover:underline">Learn More <svg className="ml-1" width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/></svg></a>
            </div>
            {/* Step 3 */}
            <div className="rounded-[20px] bg-gradient-to-br from-[#6ee7b7] to-[#14b8a6] shadow-md border border-gray-100 p-6 flex flex-col text-white">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.15"/><path d="M12 8v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#fff"/></svg>
                </div>
                <span className="text-lg font-bold">Gather Documents</span>
              </div>
              <div className="opacity-90 text-sm mb-4">Collect consultation letter, settlement letter, and implant invoice/sticker if needed.</div>
              <a href="#" className="text-white text-sm font-semibold flex items-center mt-auto hover:underline">Learn More <svg className="ml-1" width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></a>
            </div>
            {/* Step 4 */}
            <div className="rounded-[20px] bg-[#f8fafc] shadow-md border border-gray-100 p-6 flex flex-col">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#14b8a6" fillOpacity="0.15"/><path d="M12 8v4" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#14b8a6"/></svg>
                </div>
                <span className="text-lg font-bold text-gray-900">Submit Claim</span>
              </div>
              <div className="text-gray-500 text-sm mb-4">Send all documents to Bajaj Allianz for claim processing.</div>
              <a href="#" className="text-teal-500 text-sm font-semibold flex items-center mt-auto hover:underline">Learn More <svg className="ml-1" width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/></svg></a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 