import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const quoteData = await request.json()

    const emailContent = `
New Quote Request from Movira Industries LLP Rental Calculator

Equipment Details:
- Equipment: ${quoteData.equipment}
- Quantity: ${quoteData.quantity} units
- Duration: ${quoteData.duration} ${quoteData.durationType}

Pricing Breakdown:
- Subtotal: ₹${quoteData.subtotal.toLocaleString()}
${quoteData.durationDiscount > 0 ? `- Long-term Discount (5%): -₹${quoteData.durationDiscount.toLocaleString()}` : ""}
${quoteData.quantityDiscount > 0 ? `- Bulk Discount (3%): -₹${quoteData.quantityDiscount.toLocaleString()}` : ""}
- Total: ₹${quoteData.total.toLocaleString()}

Customer requested quote via rental calculator.
Please follow up for rental confirmation.
    `

    // - Resend, SendGrid, Nodemailer, etc.
    // For now, we'll simulate the email sending

    console.log("Quote request details:", {
      to: "mehtaabhishek281@gmail.com",
      subject: "New Equipment Rental Quote Request",
      content: emailContent,
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
    })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json({ success: false, message: "Failed to send quote request" }, { status: 500 })
  }
}
