import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://openheartsdating.com'
  
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/mission', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/news', priority: 0.8, changeFrequency: 'daily' as const },
    { path: '/join', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/volunteer', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/support', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/trust', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/forum', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/jobs', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/signup', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/login', priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
