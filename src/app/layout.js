import './globals.css'
import Link from 'next/link'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  title: 'The Island Skipper — Life Afloat from Jersey',
  description: 'Gear reviews, galley guides and life afloat — written by a sailor based in Jersey, Channel Islands. Honest kit for real sailors.',
  keywords: 'sailing gear, boat equipment, Jersey sailing, Channel Islands, boat galley, marine electronics',
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
    <head><GoogleAnalytics /></head>
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
            <li><Link href="/galley">The Galley</Link></li>
            <li><Link href="/cabin">The Cabin</Link></li>
            <li><Link href="/deck">Deck &amp; Dock</Link></li>
            <li><Link href="/#kits">Starter Kits</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
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
                <li><Link href="/galley">Island Routes</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 TheIslandSkipper.com · Jersey, Channel Islands</span>
            <span className="affiliate-notice">This site contains affiliate links. As an Amazon Associate I earn from qualifying purchases. All opinions are my own — only gear I&apos;d actually use afloat.</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
