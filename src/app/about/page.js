export const metadata = { title: 'About — The Island Skipper', description: 'About The Island Skipper — sailing gear guides from a Jersey sailor working through his RYA qualifications.', alternates: { canonical: '/about' } }
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
        <p>I&apos;m Matthew, a Jersey sailor working my way up through the RYA qualifications. I&apos;ve done my Level 1, and this site is where I put everything I learn about the gear that makes life on the water easier and more enjoyable.</p>
        <p>I&apos;m not going to pretend to be a grizzled ocean skipper. The guides here are thoroughly researched: manufacturers&apos; specs, long-term owner reviews, and what you actually see on the pontoons and in the chandleries around St. Helier. Where I&apos;ve used something myself, I&apos;ll say so. Where I haven&apos;t, I&apos;ll say that too.</p>
        <p>What I can offer is the Jersey angle. Our 12-metre tides, drying harbours, the Race of Alderney, damp Atlantic winters and long summer evenings at anchor in St. Aubin&apos;s Bay all shape what gear makes sense here, and that&apos;s the lens for everything on this site.</p>
        <h2>What we cover — and what we don&apos;t</h2>
        <p>The Island Skipper covers sailing lifestyle gear: galley equipment, cabin comfort, clothing and footwear. We deliberately don&apos;t review safety equipment — lifejackets, harnesses, flares, EPIRBs — because those need hands-on, expert assessment to recommend responsibly. For safety gear, speak to your local chandlery or sailing school.</p>
        <h2>Affiliate links</h2>
        <p>Some links on this site are affiliate links. If you buy through them, I earn a small commission at no extra cost to you. That never decides what gets recommended, and I&apos;m always clear about whether a recommendation comes from my own use or from research.</p>
        <h2>The Channel Islands</h2>
        <p>Jersey sits around 14 miles off the Normandy coast at 49°N. The Channel Islands are self-governing British Crown Dependencies — not quite England, not quite France, and entirely their own thing. The sailing is exceptional: strong tides, interesting passages, and on a clear summer evening, some of the most beautiful anchorages in northern Europe.</p>
      </div>
    </div>
  )
}
