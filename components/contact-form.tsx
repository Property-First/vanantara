"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { useRouter } from "next/navigation"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"


export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // message: "",
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
      // setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-4 lg:py-8 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className=" text-3xl md:text-4xl font-bold text-foreground mb-4">
              Register Your Interest
            </h2>
            <p className="text-muted-foreground">
              Fill in the form below and our team will get in touch with you shortly.
            </p>
          </div>

          
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 lg:p-12">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Full Name *</FieldLabel>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-background"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                  <Input 
                    id="email"
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
                  <FieldLabel htmlFor="phone">Phone Number *</FieldLabel>
                  <Input 
                    id="phone"
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
          
        </div>
      </div>
    </section>
  )
}
