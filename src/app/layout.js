import './globals.css'
import Link from 'next/link'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import MobileNav from '@/components/MobileNav'
import { SITE_URL, SITE_NAME } from '@/lib/site'

const NAV_LINKS = [
  { href: '/galley', label: 'The Galley' },
  { href: '/cabin', label: 'The Cabin' },
  { href: '/deck', label: 'Deck & Dock' },
  { href: '/#kits', label: 'Starter Kits' },
  { href: '/about', label: 'About' },
]

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'The Island Skipper — Life Afloat from Jersey',
  description: 'Gear reviews, galley guides and life afloat — written by a sailor based in Jersey, Channel Islands. Honest kit guides for sailors who actually sail.',
  verification: {
    google: 'ZciSZHcAlpqm2yeg57UlRJ-C7ybpSRc14zFFM8LIl8E',
  },
  // No site-wide canonical here: each page sets its own via `alternates`.
  // (A canonical in the root layout is inherited by every page and points them all at the homepage.)
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_GB',
    type: 'website',
  },
}

function AnchorLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" stroke="#c8a96e" strokeWidth="0.8" opacity="0.4"/>
      <line x1="18" y1="6" x2="18" y2="30" stroke="#c8a96e" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="18" cy="7" r="2.5" fill="none" stroke="#c8a96e" strokeWidth="1.5"/>
      <line x1="12" y1="12" x2="24" y2="12" stroke="#c8a96e" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M18 30 Q11 28 10 23" fill="none" stroke="#c8a96e" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M18 30 Q25 28 26 23" fill="none" stroke="#c8a96e" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="18" cy="3" r="1.2" fill="#c8a96e" opacity="0.6"/>
      <circle cx="18" cy="33" r="1.2" fill="#c8a96e" opacity="0.3"/>
      <circle cx="3" cy="18" r="1.2" fill="#c8a96e" opacity="0.3"/>
      <circle cx="33" cy="18" r="1.2" fill="#c8a96e" opacity="0.3"/>
    </svg>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="rope-line" />
        <nav>
          <Link href="/" className="nav-logo">
            <AnchorLogo />
            <div className="nav-logo-text">
              <span className="brand">The Island Skipper</span>
              <span className="sub">Jersey · Channel Islands</span>
            </div>
          </Link>
          <ul className="nav-links">
            {NAV_LINKS.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
          <MobileNav links={NAV_LINKS} />
        </nav>

        <main>{children}</main>

        <footer>
          <div className="footer-inner">
            <div className="footer-brand">
              <h3>The Island Skipper</h3>
              <p>Gear, grub and life afloat — reviewed from Jersey, Channel Islands. Honest kit guides for sailors who actually sail.</p>
            </div>
            <div className="footer-col">
              <h4>The Silos</h4>
              <ul>
                <li><Link href="/galley">The Galley</Link></li>
                <li><Link href="/cabin">The Cabin</Link></li>
                <li><Link href="/deck">Deck &amp; Dock</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Starter Kits</h4>
              <ul>
                <li><Link href="/articles/best-boat-dehumidifiers-jersey">No-Soggy-Bed Kit</Link></li>
                <li><Link href="/articles/best-12v-espresso-makers-boats">Morning at Anchor Kit</Link></li>
                <li><Link href="/articles/best-unbreakable-wine-glasses-boats">Sundowner Kit</Link></li>
                <li><Link href="/articles/sailing-around-jersey-gear-guide">Dried-Out Kit</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Jersey</h4>
              <ul>
                <li><Link href="/about">About the Skipper</Link></li>
                <li><Link href="/articles/sailing-around-jersey-gear-guide">Sailing Jersey</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 TheIslandSkipper.com · Jersey, Channel Islands</span>
            <span className="affiliate-notice">This site contains affiliate links. As an Amazon Associate I earn from qualifying purchases. All opinions are my own — only gear I&apos;d actually use afloat.</span>
          </div>
        </footer>
        {/* US visitors: rewrite Amazon UK *search* links to amazon.com with the US tag.
            Product (/dp/) links are left alone — UK ASINs often 404 on amazon.com. */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}if(tz.indexOf('America/')!==0&&tz.indexOf('US/')!==0)return;function go(){document.querySelectorAll('a[href^="https://www.amazon.co.uk/s?"]').forEach(function(a){a.href=a.href.replace('https://www.amazon.co.uk/','https://www.amazon.com/').replace('tag=seoulfultea-21','tag=jerseyreviews-20');});}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',go):go();}());` }} />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
