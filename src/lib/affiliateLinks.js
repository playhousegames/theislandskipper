/**
 * ============================================================
 * THE ISLAND SKIPPER — AFFILIATE LINKS CONFIG
 * ============================================================
 * Paste all your Amazon Associate links here in one place.
 * Every product on the site pulls its link from this file.
 *
 * HOW TO UPDATE:
 * 1. Log into Amazon Associates (associates.amazon.co.uk)
 * 2. Find the product on Amazon.co.uk
 * 3. Use the grey SiteStripe bar at the top → click "Text"
 * 4. Copy the short link (e.g. https://amzn.to/3xYzAbC)
 * 5. Paste it below, replacing the placeholder #
 * 6. Save, commit, push — Vercel redeploys automatically
 *
 * PRIORITY ORDER (do these first for fastest first 3 sales):
 *   1. unibond-aero-360        ~£12  easy impulse buy
 *   2. govino-wine-glass       ~£12  lifestyle purchase
 *   3. wacaco-minipresso-gr2   ~£55  high-intent buyer
 *   4. ecoair-dd1              ~£130 strong search traffic
 *   5. sperry-top-sider        ~£130 clothing commission
 *   6. musto-hpx-jacket        ~£595 biggest commission ~£27/sale
 * ============================================================
 */

export const LINKS = {

  // ── THE GALLEY ──────────────────────────────────────────
  // Article: Best 12V Espresso Makers
  'wacaco-minipresso-gr2':      'https://amzn.to/3QNlpzp',   // ~£55  → target: https://amzn.to/YOUR_LINK
  'wacaco-picopresso':          'https://amzn.to/4ufOUbV',   // ~£80  → target: https://amzn.to/YOUR_LINK
  'handpresso-auto-capsule':    '#',   // ~£120 → target: https://amzn.to/YOUR_LINK

  // Article: Best Nesting Cookware
  'sea-to-summit-cookset':      'https://amzn.to/4mFrdXV',   // ~£85  → target: https://amzn.to/YOUR_LINK
  'optimus-terra-cookset':      'https://amzn.to/4cwGHIN',   // ~£65  → target: https://amzn.to/YOUR_LINK
  'magma-cookware-7piece':      '#',   // ~£180 → target: https://amzn.to/YOUR_LINK

  // Article: Sundowner Kit / Unbreakable Glasses
  'sea-to-summit-wine-glass':   'https://amzn.to/3Ob8x5x',   // ~£18  → target: https://amzn.to/YOUR_LINK
  'govino-wine-glass':          'https://amzn.to/4euLrBi',   // ~£12  → target: https://amzn.to/YOUR_LINK  ← DO FIRST
  'riedel-swirl-stemless':      'https://amzn.to/4tYPkDl',   // ~£35  → target: https://amzn.to/YOUR_LINK

  // Article: Sailing Around Jersey
  'stanley-vacuum-flask':       'https://amzn.to/4e0ZazT',   // ~£40  → target: https://amzn.to/YOUR_LINK
  'plastimo-boarding-ladder':   '#',   // ~£85  → target: https://amzn.to/YOUR_LINK

  // ── THE CABIN ───────────────────────────────────────────
  // Article: Best Boat Dehumidifiers  ← HIGH PRIORITY
  'ecoair-dd1':                 'https://amzn.to/4temuyE',   // ~£130 → target: https://amzn.to/YOUR_LINK  ← DO FIRST
  'unibond-aero-360':           'https://amzn.to/4mzApwG',   // ~£12  → target: https://amzn.to/YOUR_LINK  ← DO FIRST
  'meaco-10l-dehumidifier':     'https://amzn.to/4tZ1vQw',   // ~£200 → target: https://amzn.to/YOUR_LINK

  // Article: Best LED Deck Lights
  'osculati-led-strip':         'https://amzn.to/4tUHJp4',   // ~£35  → target: https://amzn.to/YOUR_LINK
  'lopolight-anchor-light':     'https://amzn.to/4tUHJp4',   // ~£95  → target: https://amzn.to/YOUR_LINK
  'lunasea-underwater-light':   'https://amzn.to/4tUHJp4',   // ~£120 → target: https://amzn.to/YOUR_LINK

  // Article: How to Stop Boat Smelling Damp
  'spun-cloud-bedding':         '#',   // ~£75  → target: https://amzn.to/YOUR_LINK

  // ── DECK & DOCK ─────────────────────────────────────────
  // Article: Musto vs Gill vs Henri Lloyd  ← BIGGEST COMMISSIONS
  'musto-hpx-jacket':           'https://amzn.to/4vt85QG',   // ~£595 → target: https://amzn.to/YOUR_LINK  ← ~£27/sale
  'gill-os3-jacket':            'https://amzn.to/4sImRjZ',   // ~£320 → target: https://amzn.to/YOUR_LINK  ← ~£14/sale
  'henri-lloyd-fremantle':      'https://amzn.to/4vt85QG',   // ~£450 → target: https://amzn.to/YOUR_LINK  ← ~£20/sale

  // Article: Best Boat Shoes
  'sperry-top-sider-gold-cup':  'https://amzn.to/3OqGSh2',   // ~£130 → target: https://amzn.to/YOUR_LINK
  'sebago-docksides':           'https://amzn.to/3QNmKWX',   // ~£145 → target: https://amzn.to/YOUR_LINK
  'musto-dynamic-pro-shoe':     'https://amzn.to/3QNmKWX',   // ~£115 → target: https://amzn.to/YOUR_LINK

  // Article: Best Sailing Sunglasses
  'gill-corona-sunglasses':     'https://amzn.to/4vSq5V0',   // ~£65  → target: https://amzn.to/YOUR_LINK
  'oakley-holbrook-polarised':  'https://amzn.to/4vSq5V0',   // ~£140 → target: https://amzn.to/YOUR_LINK
  'musto-sunstone-sunglasses':  'https://amzn.to/4vSq5V0',   // ~£55  → target: https://amzn.to/YOUR_LINK

}

/**
 * Helper used by articles.js — returns the affiliate link
 * for a product key, falling back to '#' if not yet set.
 */
export function link(key) {
  return LINKS[key] || '#'
}
