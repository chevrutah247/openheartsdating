import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], // блокируем служебные папки если будут
      },
    ],
    sitemap: 'https://openheartsdating.com/sitemap.xml',
  }
}