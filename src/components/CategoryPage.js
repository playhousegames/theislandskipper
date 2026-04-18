import Link from 'next/link'
import Image from 'next/image'
import { getArticlesByCategory } from '@/lib/articles'

export default function CategoryPage({ silo, title, subtitle, description }) {
  const siloArticles = getArticlesByCategory(silo)
  return (
    <>
      <div className="category-hero">
        <div className="hero-tag">{subtitle}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-waves">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{width:'100%',height:'100%'}}>
            <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#f5f0e4"/>
          </svg>
        </div>
      </div>
      <div className="main">
        <div className="article-grid">
          {siloArticles.map(a => (
            <Link key={a.id} href={`/articles/${a.id}`} className="article-card">
              <div className="card-image">
                <Image src={a.image} alt={a.title} width={640} height={200} style={{objectFit:'cover',width:'100%',height:'100%'}}/>
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
    </>
  )
}
