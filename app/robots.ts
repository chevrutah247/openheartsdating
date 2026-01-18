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
          '/cdn-cgi/*',
          '*.php',
          '*.php*',
        ],
      },
    ],
    sitemap: 'https://openheartsdating.com/sitemap.xml',
  }
}