'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const GA_ID = 'G-ZTT5MPJKPM'
const KEY = 'ts-analytics-consent' // 'granted' | 'denied'

function readConsent() {
  try { return window.localStorage.getItem(KEY) } catch { return null }
}
function writeConsent(value) {
  try { window.localStorage.setItem(KEY, value) } catch { /* storage blocked — banner will reappear next visit */ }
}

// GA4 only loads after the visitor accepts analytics cookies
// (Jersey DPJL 2018 / UK PECR). Declining keeps the site cookie-free.
export default function GoogleAnalytics() {
  const [consent, setConsent] = useState(undefined) // undefined = not read yet

  useEffect(() => { setConsent(readConsent()) }, [])

  const choose = value => { writeConsent(value); setConsent(value) }

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}
      {consent === null && (
        <div className="consent-banner" role="region" aria-label="Cookie consent">
          <p>We use Google Analytics cookies to see which guides are useful. Nothing is set unless you accept.</p>
          <div className="consent-actions">
            <button type="button" className="consent-btn consent-accept" onClick={() => choose('granted')}>Accept</button>
            <button type="button" className="consent-btn" onClick={() => choose('denied')}>Decline</button>
          </div>
        </div>
      )}
    </>
  )
}
