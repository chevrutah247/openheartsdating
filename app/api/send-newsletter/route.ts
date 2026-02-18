import { NextRequest, NextResponse } from 'next/server'

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { subject, title, excerpt, link } = await request.json()

    if (!subject || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(135deg, var(--primary) 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Open Hearts Dating</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #333; margin: 0 0 20px;">${title}</h2>
              <p style="color: #666; font-size: 16px; line-height: 1.6;">${excerpt}</p>
              <table cellpadding="0" cellspacing="0" style="margin: 30px auto;">
                <tr>
                  <td style="background: var(--primary); border-radius: 8px;">
                    <a href="${link}" style="display: inline-block; padding: 15px 30px; color: #ffffff; text-decoration: none; font-weight: bold;">Read More</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f9fafb; padding: 20px; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">With love, Open Hearts Dating Team</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    // Create campaign
    const campaignRes = await fetch('https://connect.mailerlite.com/api/campaigns', {
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
          content: htmlContent
        }]
      })
    })

    if (!campaignRes.ok) {
      const err = await campaignRes.json()
      console.error('Campaign error:', err)
      return NextResponse.json({ error: 'Failed to create campaign', details: err }, { status: 500 })
    }

    const campaign = await campaignRes.json()

    // Send immediately
    const sendRes = await fetch(`https://connect.mailerlite.com/api/campaigns/${campaign.data.id}/schedule`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({ delivery: 'instant' })
    })

    if (!sendRes.ok) {
      const err = await sendRes.json()
      console.error('Send error:', err)
      return NextResponse.json({ error: 'Failed to send', details: err }, { status: 500 })
    }

    return NextResponse.json({ success: true, campaignId: campaign.data.id })

  } catch (error: any) {
    console.error('Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
