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
          '/platform-preview/verify',
          '/platform-preview/matches',
          '/platform-preview/profiles',
          '/platform-preview/dating',
          '/account-suspended',
          '/verify',
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
