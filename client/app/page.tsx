'use client'
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import MarqueeSection from "@/components/MarqueeSection"
import ImportantConsiderationsSection from "@/components/ImportantConsiderationsSection"
import StepsSection from "@/components/StepsSection"
import ContactInfoSection from "@/components/ContactInfoSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FinalCTASection from "@/components/FinalCTASection"
import Footer from "@/components/Footer"

export default function InsuranceLanding() {
  const [openAccordion, setOpenAccordion] = useState(0);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <ImportantConsiderationsSection />
      <StepsSection />
      <ContactInfoSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}

