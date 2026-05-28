import { NextResponse } from "next/server"

// Email sending function - works with Resend when API key is available
async function sendEmail(to: string[], subject: string, html: string, replyTo?: string) {
  const apiKey = process.env.RESEND_API_KEY
  
  
  if (!apiKey) {
    // Demo mode - log to console when no API key
    // console.log("=== EMAIL (Demo Mode) ===")
    // console.log("To:", to.join(", "))
    // console.log("Subject:", subject)
    // console.log("Reply-To:", replyTo || "N/A")
    // console.log("========================")
    return { success: true, demo: true }
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vaibhav Google Leads / Godrej Vanantara <info@preferredpartner.co>",
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Failed to send email")
  }

  return { success: true }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone} = body

     // ✅ Get IP address
    const forwardedFor = request.headers.get("x-forwarded-for")
    const realIp = request.headers.get("x-real-ip")

    const ip =
      forwardedFor?.split(",")[0] || // first IP if multiple
      realIp ||
      "Unknown"

    // console.log("User IP:", ip)

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Log the enquiry (always happens)
    // console.log("=== NEW ENQUIRY ===")
    // console.log("Name:", name)
    // console.log("Email:", email)
    // console.log("Phone:", phone)
    
    // console.log("Timestamp:", new Date().toISOString())
    // console.log("===================")

    // Send email to sales team
    const salesEmail = process.env.SALES_EMAIL?.split(",") || []
    await sendEmail(
      salesEmail,
      `New Enquiry from ${name} - Godrej Vanantara`,
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a67c52; border-bottom: 2px solid #a67c52; padding-bottom: 10px;">
            New Property Enquiry
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #a67c52;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}" style="color: #a67c52;">${phone}</a>
              </td>
            </tr>
           
           

            ${ip ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">IP Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${ip}</td>
            </tr>
            ` : ''}
          </table>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This enquiry was submitted via the Godrej Vanantara website.
          </p>
        </div>
      `,
      email
    )

    return NextResponse.json({ 
      success: true,
      message: "Enquiry submitted successfully" 
    })
  } catch (error) {
    console.error("Enquiry submission error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
