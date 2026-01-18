import { NextRequest, NextResponse } from 'next/server'

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { subject, title, excerpt, link } = await request.json()

    if (!subject || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create campaign in MailerLite
    const campaignResponse = await fetch('https://connect.mailerlite.com/api/campaigns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        name: `News: ${title}`,
        type: 'regular',
        emails: [{
          subject: subject,
          from_name: 'Open Hearts Dating',
          from: 'hello@openheartsdating.com',
          content: generateEmailHTML(title, excerpt, link)
        }]
      })
    })

    if (!campaignResponse.ok) {
      const error = await campaignResponse.json()
      console.error('MailerLite campaign error:', error)
      return NextResponse.json({ error: 'Failed to create campaign' }, { status: 500 })
    }

    const campaign = await campaignResponse.json()

    // Schedule campaign to send immediately to all subscribers
    const sendResponse = await fetch(`https://connect.mailerlite.com/api/campaigns/${campaign.data.id}/schedule`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        delivery: 'instant'
      })
    })

    if (!sendResponse.ok) {
      const error = await sendResponse.json()
      console.error('MailerLite send error:', error)
      return NextResponse.json({ error: 'Failed to send campaign' }, { status: 500 })
    }

    return NextResponse.json({ success: true, campaignId: campaign.data.id })

  } catch (error: any) {
    console.error('Newsletter send error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

function generateEmailHTML(title: string, excerpt: string, link: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Open Hearts Dating</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 14px;">News & Updates</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #333; margin: 0 0 20px; font-size: 28px; line-height: 1.3;">
                ${title}
              </h2>
              
              <p style="color: #666; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                ${excerpt}
              </p>
              
              <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="background: #667eea; border-radius: 8px;">
                    <a href="${link}" style="display: inline-block; padding: 15px 30px; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 16px;">
                      Read Full Article →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0 0 10px;">
                With love from the Open Hearts Dating Team ❤️
              </p>
              <p style="color: #999; font-size: 12px; margin: 0;">
                <a href="https://openheartsdating.com" style="color: #667eea;">Visit our website</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}
