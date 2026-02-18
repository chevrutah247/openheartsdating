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
          '/profile/create',
          '/profile/blocked',
          '/profiles',
          '/account-suspended',
          '/verify',
          '/api/*',
        ],
      },
    ],
    sitemap: 'https://openheartsdating.com/sitemap.xml',
  }
}
