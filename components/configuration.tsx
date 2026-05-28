"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { EnquiryPopup } from "./enquiry-popup"

const configurations = [
  { type: "2BHK ", area: "1288 sq.ft", price: "₹1.28 Cr*" },
  { type: "3BHK + 2T ", area: "1650 sq.ft", price: "On Request" },
  { type: "3BHK + 3T", area: "1980 sq.ft ", price: "On Request" },
  { type: "4.5BHK", area: "2900 sq.ft", price: "On Request" },
]

export function Configuration() {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
    <section id="configuration" className="py-4 lg:py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Configuration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a range of thoughtfully designed floor plans, each crafted to maximize space, light, and comfort.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5 hover:bg-primary/5">
                  <TableHead className="text-foreground font-semibold">Type</TableHead>
                  <TableHead className="text-foreground font-semibold">Area</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {configurations.map((config, index) => (
                  <TableRow key={index} className="hover:bg-primary/5 transition-colors">
                    <TableCell className="font-medium">{config.type}</TableCell>
                    <TableCell className="text-muted-foreground">{config.area}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="link" onClick={() => setShowPopup(true)} className="text-primary hover:text-accent p-0 h-auto">
                        {config.price}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 text-center">
            <Button onClick={() => setShowPopup(true)} className="bg-primary hover:bg-accent text-primary-foreground px-8">
              Get Detailed Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    <EnquiryPopup open={showPopup} onOpenChange={setShowPopup} />
    </>
  )
}
