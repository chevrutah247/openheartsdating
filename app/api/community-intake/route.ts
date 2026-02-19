import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rate-limit'

type IntakeType = 'resource' | 'business' | 'product' | 'service'

const TYPE_LABEL: Record<IntakeType, string> = {
  resource: 'Community Resource',
  business: 'Disability-Owned Business',
  product: 'Marketplace Product Listing',
  service: 'Service Provider Listing',
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const { allowed, resetIn } = checkRateLimit(ip, 'contact')

    if (!allowed) {
      return NextResponse.json(
        { error: `Too many submissions. Try again in ${Math.ceil(resetIn / 60000)} minutes.` },
        { status: 429 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }

    const resend = new Resend(apiKey)

    const {
      type,
      name,
      email,
      title,
      description,
      organization,
      website,
      location,
      phone,
      honeypot,
    } = await request.json()

    if (honeypot) {
      return NextResponse.json({ success: true })
    }

    if (!type || !name || !email || !title || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const normalizedType = String(type) as IntakeType
    if (!['resource', 'business', 'product', 'service'].includes(normalizedType)) {
      return NextResponse.json({ error: 'Invalid submission type' }, { status: 400 })
    }

    if (String(description).trim().length < 20) {
      return NextResponse.json({ error: 'Description must be at least 20 characters' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Open Hearts Community <onboarding@resend.dev>',
      to: ['contact@openheartsdating.com'],
      replyTo: email,
      subject: `[Community Intake] ${TYPE_LABEL[normalizedType]} — ${title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #e8607c; margin-bottom: 16px;">New Community Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Type</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${TYPE_LABEL[normalizedType]}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Title</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${title}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Organization</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${organization || '-'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Website</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${website || '-'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Location</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${location || '-'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || '-'}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 14px; border-radius: 10px; background: #f9fafb;">
            <strong>Description:</strong>
            <p style="white-space: pre-wrap;">${description}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Community intake email error:', error)
      return NextResponse.json({ error: 'Failed to send submission' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Community intake error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
