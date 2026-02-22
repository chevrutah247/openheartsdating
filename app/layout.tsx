import './globals.css'
import type { Metadata, Viewport } from 'next'
import Navigation from './components/Navigation'
import StructuredData from './components/StructuredData'
import AccessibilityWidget from './components/AccessibilityWidget'
import SiteFooter from './components/SiteFooter'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E8607C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://openheartsdating.com'),
  title: {
    default: 'Open Hearts Dating — Inclusive Dating for People with Disabilities',
    template: '%s | Open Hearts Dating',
  },
  description: 'The first accessible dating platform built for people with disabilities. Find love without barriers. Verified, safe, and 100% accessible. Join our nonprofit community today.',
  keywords: [
    'accessible dating',
    'disability dating',
    'inclusive dating app',
    'dating for people with disabilities',
    'accessible dating platform',
    'disability friendly dating',
    'nonprofit dating app',
    'safe dating platform',
    'screen reader dating app',
    'WCAG dating',
    'wheelchair dating',
    'blind dating app accessible',
    'deaf dating app',
    'chronic illness dating',
  ],
  authors: [{ name: 'Open Hearts Dating', url: 'https://openheartsdating.com' }],
  creator: 'Open Hearts Dating',
  publisher: 'Open Hearts Dating',
  alternates: {
    canonical: 'https://openheartsdating.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://openheartsdating.com',
    siteName: 'Open Hearts Dating',
    title: 'Open Hearts Dating — Inclusive Dating for People with Disabilities',
    description: 'The first accessible dating platform built for people with disabilities. Find love without barriers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Hearts Dating — Building Love Without Barriers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Hearts Dating — Inclusive Dating for People with Disabilities',
    description: 'The first accessible dating platform built for people with disabilities. Find love without barriers.',
    images: ['/og-image.jpg'],
    creator: '@openheartsdating',
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
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" translate="no" className="notranslate">
      <head>
        <meta name="google" content="notranslate" />
        <StructuredData />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <AccessibilityWidget />
        <SiteFooter />
      </body>
    </html>
  )
}
