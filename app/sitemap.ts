import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://openheartsdating.com'

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/mission', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/news', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/join', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/signup', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/donate', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/trust', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/when-we-launch', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/volunteer', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/support', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/newsletter', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/forum', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/jobs', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/safety', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ethics', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/why-verification', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platform-preview', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platform-preview/safety-architecture', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/platform-preview/why-verification', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/login', priority: 0.3, changeFrequency: 'monthly' as const },
  ]

  const newsArticles = [
    { slug: 'gofundme-campaign', date: '2026-01-19' },
    { slug: 'job-board-launch', date: '2026-01-17' },
    { slug: 'forum-launch', date: '2026-01-16' },
    { slug: 'volunteer-program', date: '2026-01-15' },
    { slug: 'verification-launch', date: '2026-01-14' },
    { slug: 'mvp-launch', date: '2026-01-13' },
    { slug: 'profile-editing-launch', date: '2026-01-13' },
    { slug: 'early-access-open', date: '2026-01-12' },
    { slug: 'why-accessibility', date: '2026-01-12' },
    { slug: 'numbers-behind-need', date: '2026-01-11' },
    { slug: 'building-in-public', date: '2026-01-10' },
    { slug: 'welcome', date: '2026-01-01' },
  ]

  const mainPages = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const newsPages = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [...mainPages, ...newsPages]
}
