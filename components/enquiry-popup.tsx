"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

interface EnquiryPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EnquiryPopup({ open, onOpenChange }: EnquiryPopupProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry")
      }

      // setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: ""})
      router.push("/thankyou")
      // Reset after 3 seconds
      setTimeout(() => {
        // setIsSubmitted(false)
        onOpenChange(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
     <DialogContent className="sm:max-w-md bg-card max-h-[90vh] overflow-y-auto">
        
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-foreground">
                Register Your Interest
              </DialogTitle>
              <DialogDescription>
                Fill in your details and our team will get in touch with you shortly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="popup-name">Full Name *</FieldLabel>
                  <Input
                    id="popup-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-background"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="popup-email">Email Address *</FieldLabel>
                  <Input
                    id="popup-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="bg-background"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="popup-phone">Phone Number *</FieldLabel>
                  <Input
                    id="popup-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="bg-background"
                  />
                </Field>

                

               
              </FieldGroup>

              {error && (
                <p className="text-sm text-destructive mt-2">{error}</p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full mt-6 bg-primary hover:bg-accent text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting this form, you agree to our privacy policy and consent to receive communications.
              </p>
            </form>
          </>
        
      </DialogContent>
    </Dialog>
  )
}
