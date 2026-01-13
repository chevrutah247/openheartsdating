import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://openheartsdating.com'),
  title: {
    default: 'Open Hearts Dating — Inclusive Dating Platform for People with Disabilities',
    template: '%s | Open Hearts Dating',
  },
  description:
    'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities. Join our accessible dating community and find meaningful relationships.',
  keywords: [
    'inclusive dating platform',
    'dating for people with disabilities',
    'accessible dating website',
    'nonprofit dating platform',
    'disability dating community',
    'accessible dating',
    'inclusive dating',
    'disability dating site',
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
    description:
      'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities.',
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
    description:
      'Open Hearts Dating is a nonprofit inclusive dating platform connecting people with disabilities.',
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
    google: 'nZ-Ls-Vfq0yn4m6KtG-tHJ9wEu04lDKZafqqSSN-FBU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Структурированные данные для Google
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Open Hearts Dating',
    description: 'Nonprofit accessible dating platform for people with disabilities',
    url: 'https://openheartsdating.com',
    logo: 'https://openheartsdating.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://openheartsdating.com/contact',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Open Hearts Dating',
    url: 'https://openheartsdating.com',
    description: 'Accessible and inclusive dating platform for people with disabilities',
    inLanguage: 'en-US',
  }

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WKKP8V5V5C"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WKKP8V5V5C');
            `,
          }}
        />

        {/* MailerLite Universal Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '2031376');
            `,
          }}
        />

        {/* Структурированные данные для SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        {/* Global Header */}
        <header className="header" role="banner">
          <div className="header-content">
            <div className="logo">
              <a href="/">Open Hearts Dating</a>
            </div>
            <nav aria-label="Main navigation">
              <ul className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/dating">Dating</a></li>
                <li><a href="/mission">Mission</a></li>
                <li><a href="/trust">Trust & Safety</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/volunteer">Volunteer</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                  <a 
                    href="https://gofund.me/2ce8664b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      background: '#22c55e',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      fontWeight: '600',
                      display: 'inline-block',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    💙 Donate
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main id="main-content" role="main">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="footer" role="contentinfo">
          <div className="footer-content">
            <nav aria-label="Footer navigation">
              <ul className="footer-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/dating">Dating</a></li>
                <li><a href="/mission">Mission</a></li>
                <li><a href="/trust">Trust & Safety</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <p>
              © {new Date().getFullYear()} Open Hearts Dating.  
              A nonprofit initiative for inclusive and ethical dating.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
