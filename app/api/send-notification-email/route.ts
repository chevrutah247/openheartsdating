import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }
    const resend = new Resend(apiKey)

    const { to, type, data } = await request.json()
    if (!to || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let subject = ''
    let html = ''

    switch (type) {
      case 'new_match':
        subject = '💕 You Have a New Match! — Open Hearts Dating'
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #667eea; text-align: center;">💕 New Match!</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333; text-align: center;">
              Great news! Someone liked you back and you have a new match${data?.matchName ? ` with <strong>${data.matchName}</strong>` : ''}!
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://openheartsdating.com/messages"
                 style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Send a Message →
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 14px; color: #666; text-align: center;">
              The Open Hearts Dating Team
            </p>
          </div>
        `
        break

      case 'new_message':
        subject = '💬 New Message — Open Hearts Dating'
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #667eea; text-align: center;">💬 New Message</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333; text-align: center;">
              ${data?.senderName ? `<strong>${data.senderName}</strong> sent you a message` : 'You have a new message'}!
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://openheartsdating.com/messages"
                 style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Read Message →
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 14px; color: #666; text-align: center;">
              The Open Hearts Dating Team
            </p>
          </div>
        `
        break

      case 'account_warning':
        subject = '⚠️ Account Warning — Open Hearts Dating'
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #f59e0b; text-align: center;">⚠️ Account Warning</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Your account has received a warning due to reported behavior that violates our community guidelines.
            </p>
            ${data?.reason ? `<div style="background: #fef3c7; border: 1px solid #fbbf24; padding: 15px; border-radius: 8px; margin: 20px 0;"><strong>Details:</strong> ${data.reason}</div>` : ''}
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Please review our <a href="https://openheartsdating.com/trust" style="color: #667eea;">Trust & Safety guidelines</a>. Repeated violations may result in account suspension.
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 14px; color: #666; text-align: center;">
              The Open Hearts Dating Team
            </p>
          </div>
        `
        break

      case 'account_suspended':
        subject = '🚫 Account Suspended — Open Hearts Dating'
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #ef4444; text-align: center;">Account Suspended</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Your account has been suspended due to violations of our community guidelines.
            </p>
            ${data?.reason ? `<div style="background: #fef2f2; border: 1px solid #fca5a5; padding: 15px; border-radius: 8px; margin: 20px 0;"><strong>Reason:</strong> ${data.reason}</div>` : ''}
            ${data?.until ? `<p style="font-size: 16px; color: #333;">Suspension ends: <strong>${data.until}</strong></p>` : '<p style="font-size: 16px; color: #333;">This suspension is permanent.</p>'}
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              If you believe this is an error, contact us at <a href="mailto:contact@openheartsdating.com" style="color: #667eea;">contact@openheartsdating.com</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 14px; color: #666; text-align: center;">
              The Open Hearts Dating Team
            </p>
          </div>
        `
        break

      default:
        return NextResponse.json({ error: 'Invalid email type' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Open Hearts Dating <onboarding@resend.dev>',
      to: [to],
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Notification email error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
