import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const { allowed, resetIn } = checkRateLimit(ip, 'contact')
    if (!allowed) {
      return NextResponse.json(
        { error: `Too many messages. Please try again in ${Math.ceil(resetIn / 60000)} minutes.` },
        { status: 429 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }
    const resend = new Resend(apiKey)

    const { name, email, subject, message, honeypot } = await request.json()

    // Honeypot check - if filled, silently reject
    if (honeypot) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    if (message.length < 20) {
      return NextResponse.json({ error: 'Message must be at least 20 characters' }, { status: 400 })
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message is too long' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Open Hearts Contact <onboarding@resend.dev>',
      to: ['contact@openheartsdating.com'],
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: var(--primary);">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Subject</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${subject}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 8px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Contact form email error:', error)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
