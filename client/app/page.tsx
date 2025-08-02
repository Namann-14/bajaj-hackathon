'use client'
import React, { useState, useEffect } from "react"
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
  
  useEffect(() => {
    // Handle hash navigation when arriving from another page
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100); // Small delay to ensure page is fully loaded
    }
  }, []);

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

