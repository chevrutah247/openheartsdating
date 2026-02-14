// Helper for sending notification emails
export async function sendNotificationEmail(
  to: string,
  type: 'new_match' | 'new_message' | 'account_warning' | 'account_suspended',
  data?: Record<string, string>
) {
  try {
    await fetch('/api/send-notification-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, type, data }),
    })
  } catch (err) {
    console.error('Failed to send notification email:', err)
  }
}
