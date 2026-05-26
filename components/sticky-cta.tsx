"use client"

import { useState } from "react"
import { Phone, MessageCircle, FileDown, X } from "lucide-react"
import Link from "next/link"
import { EnquiryPopup } from "./enquiry-popup"

export function StickyCTA() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-foreground border-t border-border">
        <div className="grid grid-cols-3 divide-x divide-background/10">
          <Link
            href="https://wa.me/918971140300?text=Hi%20I%20am%20interested%20in%20the%20Godrej%20Aveline%20project.%20Please%20share%20brochure,%20price%20details,%20floor%20plans,%20and%20site%20visit%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 text-background hover:bg-background/5 transition-colors"
          >
            <MessageCircle className="h-5 w-5 text-green-500 mb-1" />
            <span className="text-xs">WhatsApp</span>
          </Link>
          <Link
            href="tel:+918971140300"
            className="flex flex-col items-center justify-center py-3 text-background hover:bg-background/5 transition-colors"
          >
            <Phone className="h-5 w-5 text-primary mb-1" />
            <span className="text-xs">Call Us</span>
          </Link>
          <button
            onClick={() => setShowPopup(true)}
            className="flex flex-col items-center justify-center py-3 text-background hover:bg-background/5 transition-colors"
          >
            <FileDown className="h-5 w-5 text-primary mb-1" />
            <span className="text-xs">Enquire</span>
          </button>
        </div>
      </div>

      {/* Desktop floating CTA */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 gap-3">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-full font-medium shadow-lg transition-colors flex items-center gap-2"
        >
          Enquire Now
        </button>
        <Link
  href="https://wa.me/918971140300?text=Hi%20I%20am%20interested%20in%20the%20Godrej%20Vanantara%20project.%20Please%20share%20brochure,%20price%20details,%20floor%20plans,%20and%20site%20visit%20information."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
>
  <MessageCircle className="h-6 w-6" />
</Link>

<Link
  href="tel:+918971140300"
  
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
>
  <Phone className="h-6 w-6" />
</Link>
      </div>

      <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </>
  )
}
