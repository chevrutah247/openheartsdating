import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }
    const resend = new Resend(apiKey)

    const { to, type, reason } = await request.json()

    if (!to || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let subject = ''
    let html = ''

    if (type === 'approved') {
      subject = '✅ Your Identity Has Been Verified - Open Hearts Dating'
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #28a745; margin: 0;">✅ Verification Approved!</h1>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Great news! Your identity verification has been approved.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            You now have full access to all features on Open Hearts Dating. Your profile will display a verified badge, letting others know you are a trusted member of our community.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://openheartsdating.com/platform-preview/dating" 
               style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Start Connecting →
            </a>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for helping us build a safe and trusted community.
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          
          <p style="font-size: 14px; color: #666; text-align: center;">
            With love,<br/>
            <strong>The Open Hearts Dating Team</strong>
          </p>
        </div>
      `
    } else if (type === 'rejected') {
      subject = '❌ Verification Update - Open Hearts Dating'
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #dc3545; margin: 0;">Verification Not Approved</h1>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Unfortunately, we were unable to verify your identity based on the document you submitted.
          </p>
          
          ${reason ? `
          <div style="background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #721c24;">
              <strong>Reason:</strong> ${reason}
            </p>
          </div>
          ` : ''}
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            You can submit a new verification request with a different document. Please ensure:
          </p>
          
          <ul style="font-size: 16px; line-height: 1.8; color: #333;">
            <li>The document is a valid government-issued ID</li>
            <li>The photo is clear and readable</li>
            <li>All four corners are visible</li>
            <li>The document is not expired</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://openheartsdating.com/verify" 
               style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Try Again →
            </a>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            If you have questions, please contact our support team.
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          
          <p style="font-size: 14px; color: #666; text-align: center;">
            With love,<br/>
            <strong>The Open Hearts Dating Team</strong>
          </p>
        </div>
      `
    } else {
      return NextResponse.json({ error: 'Invalid email type' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Open Hearts Dating <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      html: html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })

  } catch (error: any) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
