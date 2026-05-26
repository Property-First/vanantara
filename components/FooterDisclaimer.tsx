export function FooterDisclaimer() {
  return (
    <section className="bg-muted/30 text-muted-foreground text-sm py-10 border-t border-border">
      <div className="container mx-auto px-4 space-y-6">

        {/* PROJECT DETAILS */}
        <div className="space-y-2">
          <p>
            <strong className="text-foreground">Project RERA:</strong>{" "}
            Godrej Vanantara - Bannerghatta - PRM/KA/RERA/1251/310/PR/130526/008653
          </p>

          <p>
            <strong className="text-foreground">Marketed By:</strong>{" "}
            Authorised Channel Partner
          </p>
        </div>

        {/* BULLET LIST */}
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Agent Registration No.:</strong>{" "}
            PRM/KA/RERA/1251/310/AG/241022/005199
          </li>

          <li>
            <strong className="text-foreground">Site Address:</strong>{" "}
            Godrej Vanantara, Bannerghatta, Bangalore, Karnataka
          </li>

          <li>
            <strong className="text-foreground">Corporate Office:</strong>{" "}
            ART ARCADE, NO.107, 3RD FLOOR, 80 FT ROAD, KORAMANGALA 4TH BLOCK,
            BENGALURU, BENGALURU URBAN, KARNATAKA - 560034
          </li>
        </ul>

        {/* DISCLAIMER */}
        <p className="leading-relaxed text-xs lg:text-sm">
          Disclaimer: The information provided on this website is intended
          exclusively for informational purposes and should not be construed
          as an offer of services. This site is managed by a RERA authorized
          affiliate partner / real estate agent (for multiple real estate
          developers) namely Property First Realty LLP registered under
          Karnataka RERA. The pricing information presented on this website is subject
          to alteration without advance notification, and the assurance of
          property availability cannot be guaranteed. The images showcased on
          this website are for representational purposes only and may not
          accurately reflect the actual properties. We may share your data with
          Maharashtra Real Estate Regulatory Authority (RERA) registered
          developers for further processing as necessary.

          Additionally, we may send updates and information to the mobile number
          or email address registered with us. All rights reserved. The content,
          design, and information on this website are protected by copyright and
          other intellectual property rights. Any unauthorized use or reproduction
          of the content may violate applicable laws. For accurate and up-to-date
          information regarding services, pricing, availability, and any other
          details, it is recommended to contact us directly through the provided
          contact information on this website. Thank you for visiting our website.
        </p>

        {/* LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
          <a
            href="/privacy-policy"
            target="_blank"
            className="hover:text-primary underline"
          >
            Disclaimer & Privacy Policy
          </a>

          <span>|</span>

          <a
            href="/terms-conditions"
            target="_blank"
            className="hover:text-primary underline"
          >
            Terms & Condition
          </a>
        </div>

      </div>
    </section>
  )
}