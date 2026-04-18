import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/articles'

function GalleyIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M22 8L22 36" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 14 Q22 10 30 14 L30 28 Q22 32 14 28 Z" fill="none" stroke="#c8a96e" strokeWidth="1.5"/>
      <circle cx="22" cy="8" r="2" fill="#c8a96e"/>
      <path d="M16 36L28 36" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CabinIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M8 28L8 38L36 38L36 28L22 16Z" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M16 38L16 30L28 30L28 38" fill="none" stroke="#c8a96e" strokeWidth="1.2"/>
      <circle cx="22" cy="34" r="1.5" fill="#c8a96e"/>
    </svg>
  )
}

function DeckIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M8 32 Q22 20 36 32" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 36L32 36" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 32L22 14" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 14L34 22L22 22Z" fill="none" stroke="#c8a96e" strokeWidth="1.2"/>
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <svg className="hero-bg-compass" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="1"/>
          <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="0.5"/>
          <line x1="200" y1="10" x2="200" y2="390" stroke="white" strokeWidth="0.5"/>
          <line x1="10" y1="200" x2="390" y2="200" stroke="white" strokeWidth="0.5"/>
          <line x1="55" y1="55" x2="345" y2="345" stroke="white" strokeWidth="0.3"/>
          <line x1="345" y1="55" x2="55" y2="345" stroke="white" strokeWidth="0.3"/>
        </svg>
        <div className="hero-tag">Est. Jersey, Channel Islands</div>
        <h1>Gear, Grub &amp; <em>Life Afloat</em><br/>from the Channel Islands</h1>
        <p>Honest kit reviews, galley guides, and cabin comforts — written by a sailor who actually lives with this stuff, anchored off St. Aubin&apos;s Bay.</p>
        <div className="hero-waves">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{width:'100%',height:'100%'}}>
            <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#f5f0e4"/>
          </svg>
        </div>
      </div>

      {/* SILO STRIP */}
      <div className="silos-strip">
        <Link href="/galley" className="silo-btn">
          <GalleyIcon />
          <h3>The Galley</h3>
          <p>Cooking &amp; provisioning</p>
        </Link>
        <Link href="/cabin" className="silo-btn">
          <CabinIcon />
          <h3>The Cabin</h3>
          <p>Comfort &amp; liveaboard</p>
        </Link>
        <Link href="/deck" className="silo-btn">
          <DeckIcon />
          <h3>Deck &amp; Dock</h3>
          <p>Apparel &amp; lifestyle</p>
        </Link>
      </div>

      <div className="main">
        {/* LATEST ARTICLES */}
        <div className="section-header">
          <span className="section-divider" style={{flex:0,width:'40px'}}/>
          <h2>Latest from the Log</h2>
          <div className="section-divider"/>
        </div>

        <div className="article-grid">
          {articles.map(a => (
            <Link key={a.id} href={`/articles/${a.id}`} className="article-card">
              <div className="card-image">
                <Image src={a.image} alt={a.title} width={640} height={200} style={{objectFit:'cover',width:'100%',height:'100%'}} />
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

        {/* STARTER KITS */}
        <div className="section-header" id="kits">
          <span className="section-divider" style={{flex:0,width:'40px'}}/>
          <h2>Skipper&apos;s Starter Kits</h2>
          <div className="section-divider"/>
        </div>

        <div className="kits-grid">
          <Link href="/articles/best-boat-dehumidifiers-jersey" className="kit-card">
            <div className="kit-number">01</div>
            <h3>The &ldquo;No-Soggy-Bed&rdquo; Kit</h3>
            <p>Dehumidifier, moisture-wicking sheets &amp; damp traps. Essential in Jersey&apos;s damp Atlantic climate.</p>
            <span className="kit-link">View the kit →</span>
          </Link>
          <Link href="/articles/best-12v-espresso-makers-boats" className="kit-card">
            <div className="kit-number">02</div>
            <h3>The &ldquo;Perfect Morning at Anchor&rdquo; Kit</h3>
            <p>Compact espresso maker, insulated mugs &amp; nesting pans. Sunrise over St. Aubin&apos;s Bay, sorted.</p>
            <span className="kit-link">View the kit →</span>
          </Link>
          <Link href="/articles/best-unbreakable-wine-glasses-boats" className="kit-card">
            <div className="kit-number">03</div>
            <h3>The &ldquo;Sundowner&rdquo; Kit</h3>
            <p>Unbreakable wine glasses, LED deck lights &amp; insulated bottle. Golden hour at anchor.</p>
            <span className="kit-link">View the kit →</span>
          </Link>
          <Link href="/articles/sailing-around-jersey-gear-guide" className="kit-card">
            <div className="kit-number">04</div>
            <h3>The &ldquo;Dried-Out&rdquo; Kit</h3>
            <p>Beach-landing gear, non-slip shoes &amp; boarding ladder. Built for Jersey&apos;s 12m tidal range.</p>
            <span className="kit-link">View the kit →</span>
          </Link>
        </div>

        {/* JERSEY BANNER */}
        <div className="jersey-banner">
          <div>
            <span style={{fontSize:'0.68rem',letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--rope)',display:'block',marginBottom:'0.5rem'}}>Written from 49°N</span>
            <h2>Gear reviewed where the tides actually matter</h2>
            <p>Jersey has one of the world&apos;s largest tidal ranges — up to 12 metres. Every kit review on this site is informed by real passages: St. Aubin&apos;s to Sark, drying out on Grève de Lecq, running the Race of Alderney. This isn&apos;t a content farm. It&apos;s a ship&apos;s log.</p>
          </div>
          <div className="jersey-stats">
            <div className="stat">
              <span className="stat-val">12m</span>
              <span className="stat-label">Tidal range</span>
            </div>
            <div className="stat">
              <span className="stat-val">49°N</span>
              <span className="stat-label">Our latitude</span>
            </div>
            <div className="stat">
              <span className="stat-val">3</span>
              <span className="stat-label">Island routes</span>
            </div>
            <div className="stat">
              <span className="stat-val">Real</span>
              <span className="stat-label">On-water kit</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
