import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dating Platform — Accessible Dating for People with Disabilities',
  description: 'Discover our accessible dating platform designed specifically for people with disabilities. Join an inclusive dating community where everyone can find meaningful relationships and connections.',
  openGraph: {
    title: 'Dating Platform — Accessible Dating for People with Disabilities',
    description: 'Discover our accessible dating platform designed specifically for people with disabilities. Join an inclusive dating community where everyone can find meaningful relationships.',
  },
}

export default function DatingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Open Hearts Dating Platform',
    applicationCategory: 'DatingApplication',
    operatingSystem: 'Web',
    description: 'Accessible dating platform for people with disabilities',
    url: 'https://openheartsdating.com/dating',
    accessibilityFeature: [
      'screenReader',
      'alternativeText',
      'keyboardNavigation',
      'highContrast',
      'textToSpeech'
    ],
    accessibilityHazard: 'none',
    accessibilityAPI: 'ARIA',
    accessibilityControl: [
      'fullKeyboardControl',
      'fullMouseControl',
      'fullTouchControl'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero">
        <div className="container">
          <h1>Accessible Dating Platform for People with Disabilities</h1>
          <p>
            Our dating platform is being built from the ground up with accessibility and 
            inclusion as core principles. We're creating a space where people with disabilities 
            can connect, build relationships, and find love in an environment designed 
            specifically for their needs.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Why an Accessible Dating Website Matters</h2>
          <p>
            Traditional dating platforms often overlook the needs of people with disabilities. 
            From inaccessible interfaces to lack of understanding about disability-related needs, 
            many dating websites fail to provide an inclusive experience. At Open Hearts Dating, 
            we're changing that.
          </p>
          <p>
            Our accessible dating website will feature:
          </p>