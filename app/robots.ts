import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
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
          '/dashboard',
          '/platform-preview/*',
        ],
      },
    ],
    sitemap: 'https://openheartsdating.com/sitemap.xml',
  }
}
