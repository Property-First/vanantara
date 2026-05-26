import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-serif font-bold text-primary">Godrej</span>
              <span className="text-sm text-background/70 ml-2">Aveline</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Luxury 3, 3.5 & 4.5 BHK residences in Yelahanka, North Bengaluru. Starting ₹2.45 Cr+
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#overview" className="hover:text-primary transition-colors">Overview</a></li>
              <li><a href="#configuration" className="hover:text-primary transition-colors">Configuration</a></li>
              <li><a href="#amenities" className="hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>+91 8971140300</li>
              {/* <li>info@godrejproperties.com</li> */}
              <li>Yelahanka, Bengaluru</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background">Legal</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link className="hover:text-primary transition-colors" href="/privacy-policy">Privacy Policy</Link> </li>
              <li><Link className="hover:text-primary transition-colors" href="/terms-conditions">Terms & Conditions</Link></li>
              {/* <li><a href="#" className="hover:text-primary transition-colors">RERA Information</a></li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <p className="text-xs text-background/40 leading-relaxed">
            <strong>Disclaimer:</strong> The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized affiliate partner. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. Project RERA: PRM/KA/RERA/1251/309/PR/020326/008501 (Marketed By - Authorised Channel Partner)
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-background/10 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Godrej Properties. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
