import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ArticleBody from '@/components/ArticleBody'
import { articles, getArticle, getArticlesByCategory } from '@/lib/articles'
import { SITE_URL, SITE_NAME } from '@/lib/site'

// Pre-render every article at build time; unknown slugs are a hard 404.
// (Replaces the old `revalidate = 0`, which server-rendered every request.)
export const dynamicParams = false

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.id }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  const path = `/articles/${article.id}`
  return {
    title: `${article.title} — ${SITE_NAME}`,
    description: article.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: path,
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      publishedTime: article.published,
      modifiedTime: article.updated || article.published,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

const SILO_PATHS = { galley: '/galley', cabin: '/cabin', deck: '/deck' }

function structuredData(article) {
  const url = `${SITE_URL}/articles/${article.id}`
  const siloUrl = `${SITE_URL}${SILO_PATHS[article.silo]}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.excerpt,
      image: `${SITE_URL}${article.image}`,
      datePublished: article.published,
      dateModified: article.updated || article.published,
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: article.siloLabel, item: siloUrl },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  ]
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = getArticlesByCategory(article.silo).filter(a => a.id !== article.id)
  const hasProducts = article.body.some(b => b.type === 'product')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(article)) }}
      />
      <div className="article-wrapper">
        <Link href={SILO_PATHS[article.silo]} className="back-link">← Back to {article.siloLabel}</Link>
        <span className="article-silo-label">{article.siloLabel}</span>
        <h1>{article.title}</h1>
        <p className="article-subtitle">{article.subtitle}</p>
        <div className="article-meta">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
          <span>TheIslandSkipper.com</span>
        </div>
        {hasProducts && (
          <p className="article-disclosure">
            This guide contains affiliate links. As an Amazon Associate I earn from qualifying purchases, at no extra cost to you.
          </p>
        )}
        <Image
          src={article.image}
          alt={article.title}
          width={1480}
          height={840}
          sizes="(max-width: 780px) 100vw, 740px"
          priority
          className="article-hero-image"
        />
        <ArticleBody body={article.body} />
      </div>

      {related.length > 0 && (
        <div className="main" style={{ paddingTop: 0 }}>
          <div className="section-header">
            <span className="section-divider" style={{ flex: 0, width: '40px' }} />
            <h2>More from {article.siloLabel}</h2>
            <div className="section-divider" />
          </div>
          <div className="article-grid">
            {related.map(a => (
              <Link key={a.id} href={`/articles/${a.id}`} className="article-card">
                <div className="card-image">
                  <Image src={a.image} alt={a.title} width={640} height={400} sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  <span className={`card-silo-tag tag-${a.silo}`}>{a.siloLabel}</span>
                </div>
                <div className="card-body">
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <div className="card-meta">
                    <span>{a.date}</span>
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
