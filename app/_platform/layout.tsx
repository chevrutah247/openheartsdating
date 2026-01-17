import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Hearts Dating Platform',
  description: 'Secure, verified dating platform for people with disabilities.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
