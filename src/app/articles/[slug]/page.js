import Link from 'next/link'
import Image from 'next/image'
import { articles, getArticle } from '@/lib/articles'
import ArticleBody from '@/components/ArticleBody'
import { notFound } from 'next/navigation'

export const revalidate = 0

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.id }))
}

export async function generateMetadata({ params }) {
  const article = getArticle(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — The Island Skipper`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  const related = articles
    .filter(a => a.silo === article.silo && a.id !== article.id)
    .slice(0, 3)

  const siloPath = `/${article.silo}`

  return (
    <div className="article-wrapper">
      <Link href={siloPath} className="back-link">
        ← Back to {article.siloLabel}
      </Link>

      <span className="article-silo-label">{article.siloLabel}</span>
      <h1>{article.title}</h1>
      <p className="article-subtitle">{article.subtitle}</p>

      <div className="article-meta">
        <span>{article.date}</span>
        <span>{article.readTime}</span>
        <span>TheIslandSkipper.com</span>
      </div>

      <Image
        src={article.image}
        alt={article.title}
        width={740}
        height={420}
        className="article-hero-image"
        priority
      />

      <ArticleBody body={article.body} />

      {related.length > 0 && (
        <div style={{marginTop:'4rem',paddingTop:'2rem',borderTop:'1px solid rgba(26,39,68,0.1)'}}>
          <div className="section-header" style={{marginBottom:'1.5rem'}}>
            <span className="section-divider" style={{flex:0,width:'30px'}}/>
            <h2 style={{fontSize:'1.2rem'}}>More from {article.siloLabel}</h2>
            <div className="section-divider"/>
          </div>
          <div className="article-grid">
            {related.map(a => (
              <Link key={a.id} href={`/articles/${a.id}`} className="article-card">
                <div className="card-image">
                  <Image src={a.image} alt={a.title} width={400} height={200} style={{objectFit:'cover',width:'100%',height:'100%'}}/>
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
    </div>
  )
}
