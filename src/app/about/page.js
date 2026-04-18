export const metadata = { title: 'About — The Island Skipper', description: 'About The Island Skipper — a sailing gear review site written from Jersey, Channel Islands.' }
export default function AboutPage() {
  return (
    <div className="article-wrapper">
      <span className="article-silo-label">About this site</span>
      <h1>The Island Skipper</h1>
      <p className="article-subtitle">Written from 49°N, Jersey, Channel Islands</p>
      <div className="article-meta">
        <span>TheIslandSkipper.com</span>
        <span>Est. 2026</span>
      </div>
      <div className="article-body" style={{marginTop:'2rem'}}>
        <p>The Island Skipper is a sailing gear review site written from Jersey in the Channel Islands. The reviews are based on real use — real passages, real anchorages, real conditions.</p>
        <p>Jersey&apos;s 12-metre tidal range, the Race of Alderney, the damp Atlantic winters and the long summer evenings at anchor in St. Aubin&apos;s Bay all inform what gets reviewed here and how.</p>
        <h2>What we review — and what we don&apos;t</h2>
        <p>The Island Skipper covers sailing lifestyle gear: galley equipment, cabin comfort, clothing and apparel. We deliberately don&apos;t review safety equipment — lifejackets, harnesses, flares, EPIRBs — because those categories require hands-on testing to review responsibly. For safety gear, speak to your local chandlery.</p>
        <h2>Affiliate links</h2>
        <p>Some links on this site are affiliate links. If you buy through them, we earn a small commission at no extra cost to you. We only link to products we&apos;d genuinely recommend — and we always say when something hasn&apos;t been tested personally, rather than pretending otherwise.</p>
        <h2>The Channel Islands</h2>
        <p>Jersey sits 14 miles off the Normandy coast at 49°N. The Channel Islands are self-governing British Crown Dependencies — not quite England, not quite France, and entirely their own thing. The sailing is exceptional: strong tides, interesting passages, and on a clear summer evening, some of the most beautiful anchorages in northern Europe.</p>
      </div>
    </div>
  )
}
