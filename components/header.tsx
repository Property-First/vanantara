"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { EnquiryPopup } from "./enquiry-popup"


const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Configuration", href: "#configuration" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
           <Image
        src="/6.png"
        alt="Logo"
        width={160}
        height={60}
        priority
      />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="tel:+918971140300" className="hidden sm:flex items-center gap-2 text-sm text-foreground/80">
            <Phone className="h-4 w-4" />
            <span>+91 89711 40300</span>
          </Link>
          <Button onClick={() => setShowPopup(true)} className="hidden sm:flex bg-primary hover:bg-accent text-primary-foreground">
            Enquire Now
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent text-foreground h-10 w-10" >
              {/* <Button variant="ghost" size="icon"  className="lg:hidden"> */}
                <Menu className="h-5 w-5" />
              {/* </Button> */}
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col gap-4 p-16 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button onClick={() => setShowPopup(true)} className="mt-4 bg-primary hover:bg-accent text-primary-foreground">
                  Enquire Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
<EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </>
    
  )
}
