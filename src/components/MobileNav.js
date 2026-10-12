'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the menu after navigating
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
      {open && (
        <ul id="mobile-nav-menu" className="mobile-nav-menu">
          {links.map(l => (
            <li key={l.href}><Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link></li>
          ))}
        </ul>
      )}
    </div>
  )
}
