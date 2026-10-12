import { articles } from '@/lib/articles'
import { SITE_URL, STATIC_PAGES_UPDATED } from '@/lib/site'

// URLs have NO trailing slash — they must match the live URLs exactly,
// otherwise every sitemap entry is a redirect in Search Console.
export default function sitemap() {
  const staticDate = new Date(STATIC_PAGES_UPDATED)

  const staticPages = [
    { url: `${SITE_URL}`, lastModified: staticDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/galley`, lastModified: staticDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/cabin`, lastModified: staticDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/deck`, lastModified: staticDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const articleUrls = articles.map(article => ({
    url: `${SITE_URL}/articles/${article.id}`,
    lastModified: new Date(article.updated || article.published),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...articleUrls]
}
