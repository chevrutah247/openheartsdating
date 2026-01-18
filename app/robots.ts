import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/dashboard/*',
          '/admin',
          '/admin/*',
          '/messages',
          '/messages/*',
          '/profile/edit',
          '/api/*',
          '/_next/*',
        ],
      },
    ],
    sitemap: 'https://openheartsdating.com/sitemap.xml',
  }
}
