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
 * 4. Copy the full link (dp/ASIN?tag=seoulfultea-21&linkCode=ll1)
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
  'wacaco-minipresso-gr2':      'https://www.amazon.co.uk/dp/B0D52XSWKB?tag=seoulfultea-21&linkCode=ll1',   // ~£55
  'wacaco-picopresso':          'https://www.amazon.co.uk/dp/B097DCNLL6?tag=seoulfultea-21&linkCode=ll1',   // ~£80
  'handpresso-auto-capsule':    '#',   // ~£120 → target: replace # with full amazon.co.uk URL

  // Article: Best Nesting Cookware
  'sea-to-summit-cookset':      'https://www.amazon.co.uk/dp/B0CWVRGLMD?tag=seoulfultea-21&linkCode=ll1',   // ~£85
  'optimus-terra-cookset':      'https://www.amazon.co.uk/dp/B01KJMZ4RW?tag=seoulfultea-21&linkCode=ll1',   // ~£65
  'magma-cookware-7piece':      '#',   // ~£180 → target: replace # with full amazon.co.uk URL

  // Article: Sundowner Kit / Unbreakable Glasses
  'sea-to-summit-wine-glass':   'https://www.amazon.co.uk/s?k=flexible+drinking+wine+glass+for+sailing&tag=seoulfultea-21',   // ~£18
  'govino-wine-glass':          'https://www.amazon.co.uk/dp/B075QPYS96?tag=seoulfultea-21&linkCode=ll1',   // ~£12  ← DO FIRST
  'riedel-swirl-stemless':      'https://www.amazon.co.uk/dp/B0009I6KSE?tag=seoulfultea-21&linkCode=ll1',   // ~£35

  // Article: Sailing Around Jersey
  'stanley-vacuum-flask':       'https://www.amazon.co.uk/dp/B000T21JFE?tag=seoulfultea-21&linkCode=ll1',   // ~£40
  'plastimo-boarding-ladder':   '#',   // ~£85  → target: replace # with full amazon.co.uk URL

  // ── THE CABIN ───────────────────────────────────────────
  // Article: Best Boat Dehumidifiers  ← HIGH PRIORITY
  'ecoair-dd1':                 'https://www.amazon.co.uk/dp/B07N2VDCRJ?tag=seoulfultea-21&linkCode=ll1',   // ~£130  ← DO FIRST
  'unibond-aero-360':           'https://www.amazon.co.uk/dp/B08JMFHLRB?tag=seoulfultea-21&linkCode=ll1',   // ~£12   ← DO FIRST
  'meaco-10l-dehumidifier':     'https://www.amazon.co.uk/s?k=sailing+dehumidifier&tag=seoulfultea-21',     // ~£200

  // Article: Best LED Deck Lights
  'osculati-led-strip':         'https://www.amazon.co.uk/s?k=sailing+deck+lights&tag=seoulfultea-21',      // ~£35
  'lopolight-anchor-light':     'https://www.amazon.co.uk/s?k=sailing+deck+lights&tag=seoulfultea-21',      // ~£95
  'lunasea-underwater-light':   'https://www.amazon.co.uk/s?k=sailing+deck+lights&tag=seoulfultea-21',      // ~£120

  // Article: How to Stop Boat Smelling Damp
  'spun-cloud-bedding':         '#',   // ~£75  → target: replace # with full amazon.co.uk URL

  // ── DECK & DOCK ─────────────────────────────────────────
  // Article: Musto vs Gill vs Henri Lloyd  ← BIGGEST COMMISSIONS
  'musto-hpx-jacket':           'https://www.amazon.co.uk/s?k=sailing+jackets&tag=seoulfultea-21',          // ~£595  ← ~£27/sale
  'gill-os3-jacket':            'https://www.amazon.co.uk/dp/B0CNWH5ZCV?tag=seoulfultea-21&linkCode=ll1',   // ~£320  ← ~£14/sale
  'henri-lloyd-fremantle':      'https://www.amazon.co.uk/s?k=sailing+jackets&tag=seoulfultea-21',          // ~£450  ← ~£20/sale

  // Article: Best Boat Shoes
  'sperry-top-sider-gold-cup':  'https://www.amazon.co.uk/dp/B0DGZ9QZSS?tag=seoulfultea-21&linkCode=ll1',  // ~£130
  'sebago-docksides':           'https://www.amazon.co.uk/s?k=Best+Boat+Shoes&tag=seoulfultea-21',          // ~£145
  'musto-dynamic-pro-shoe':     'https://www.amazon.co.uk/s?k=Best+Boat+Shoes&tag=seoulfultea-21',          // ~£115

  // Article: Best Sailing Sunglasses
  'gill-corona-sunglasses':     'https://www.amazon.co.uk/s?k=best+sailing+sunglasses&tag=seoulfultea-21',  // ~£65
  'oakley-holbrook-polarised':  'https://www.amazon.co.uk/s?k=best+sailing+sunglasses&tag=seoulfultea-21',  // ~£140
  'musto-sunstone-sunglasses':  'https://www.amazon.co.uk/s?k=best+sailing+sunglasses&tag=seoulfultea-21',  // ~£55

}

/**
 * Helper used by articles.js — returns the affiliate link
 * for a product key, falling back to '#' if not yet set.
 */
export function link(key) {
  return LINKS[key] || '#'
}
