import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">

        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />

        <h1 className="text-3xl font-bold mb-4">
          Thank You!
        </h1>

        <p className="text-muted-foreground mb-8">
          Your enquiry has been submitted successfully.  
          Our team will contact you shortly.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
        >
          Back to Home
        </Link>

      </div>
    </div>
  )
}