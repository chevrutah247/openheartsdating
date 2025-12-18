import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://openheartsdating.com'),
  title: {
    default: 'Open Hearts Dating — Inclusive Dating Platform for People with Disabilities',
    template: '%s | Open Hearts Dating'
  },
  description: 'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities. Join our accessible dating community and find meaningful relationships.',
  keywords: [
    'inclusive dating platform',
    'dating for people with disabilities',
    'accessible dating website',
    'nonprofit dating platform',
    'disability dating community',
    'accessible dating',
    'inclusive dating',
    'disability dating site'
  ],
  authors: [{ name: 'Open Hearts Dating' }],
  creator: 'Open Hearts Dating',
  publisher: 'Open Hearts Dating',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://openheartsdating.com',
    siteName: 'Open Hearts Dating',
    title: 'Open Hearts Dating — Inclusive Dating Platform for People with Disabilities',
    description: 'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities. Join our accessible dating community and find meaningful relationships.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Hearts Dating - Inclusive Dating Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Hearts Dating — Inclusive Dating Platform for People with Disabilities',
    description: 'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

