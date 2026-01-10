import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://openheartsdating.com',
      lastModified: new Date(),
    },
    {
      url: 'https://openheartsdating.com/mission',
      lastModified: new Date(),
    },
    {
      url: 'https://openheartsdating.com/dating',
      lastModified: new Date(),
    },
    {
      url: 'https://openheartsdating.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://openheartsdating.com/support',
      lastModified: new Date(),
    },
  ]
}

