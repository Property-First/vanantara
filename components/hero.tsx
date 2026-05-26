"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { EnquiryPopup } from "./enquiry-popup"

export function Hero() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
  {/* Desktop Image */}
  <Image
    src="/godrej_vantara_web.png"
    alt="Godrej Aveline luxury apartments"
    fill
    priority
    className="object-cover hidden md:block"
  />

  {/* Mobile Image */}
  <Image
    src="/vanantara (1).png"
    alt="Godrej Aveline luxury apartments"
    fill
    priority
    className="object-cover block md:hidden"
  />
</div>

       <div className="absolute bottom-30 left-1/2 -translate-x-1/2 z-10 w-full px-4">
  <div className="flex justify-center">
    <Button 
      size="lg" 
      className="bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg w-full sm:w-auto"
      onClick={() => setShowPopup(true)}
    >
      Enquire Now
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </div>
</div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </>
  )
}
