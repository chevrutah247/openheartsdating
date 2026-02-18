export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://openheartsdating.com/#organization',
    name: 'Open Hearts Dating',
    alternateName: 'Open Hearts',
    url: 'https://openheartsdating.com',
    logo: 'https://openheartsdating.com/favicon.svg',
    description: 'Nonprofit accessible dating platform for people with disabilities. Building love without barriers for 1.3 billion people worldwide.',
    foundingDate: '2026',
    nonprofitStatus: 'Nonprofit',
    slogan: 'Building Love Without Barriers',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@openheartsdating.com',
      url: 'https://openheartsdating.com/contact',
    },
    sameAs: [
      'https://twitter.com/openheartsdating',
      'https://facebook.com/openheartsdating',
      'https://instagram.com/openheartsdating',
      'https://github.com/chevrutah247/openheartsdating',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://openheartsdating.com/#website',
    url: 'https://openheartsdating.com',
    name: 'Open Hearts Dating',
    description: 'The first accessible dating platform built for people with disabilities. Find love without barriers.',
    publisher: {
      '@id': 'https://openheartsdating.com/#organization',
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://openheartsdating.com/news?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Open Hearts Dating Platform',
    url: 'https://openheartsdating.com',
    description: 'The first truly accessible dating platform built for people with disabilities. Verified profiles, safe messaging, and inclusive community.',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript. Compatible with screen readers.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Accessibility-first design',
      'Screen reader compatible',
      'Verified profiles only',
      'Safe messaging system',
      'Inclusive community',
      'Trust-by-Design security',
      'WCAG 2.1 AA compliant',
    ],
    accessibilityAPI: 'ARIA',
    accessibilityControl: ['fullKeyboardControl', 'fullMouseControl'],
    accessibilityFeature: [
      'alternativeText',
      'largePrint',
      'highContrast',
      'readingOrder',
      'structuralNavigation',
      'tableOfContents',
      'audioDescription',
    ],
    accessibilityHazard: 'none',
    accessMode: ['textual', 'visual'],
    accessModeSufficient: ['textual', 'visual'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
    </>
  )
}
