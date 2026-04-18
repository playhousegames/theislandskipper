export default function ArticleBody({ body }) {
  return (
    <div className="article-body">
      {body.map((block, i) => {
        if (block.type === 'p') return <p key={i}>{block.text}</p>
        if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
        if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>
        if (block.type === 'list') return (
          <ul key={i}>
            {block.items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        )
        if (block.type === 'callout') return (
          <div key={i} className="callout">
            <strong>{block.title}</strong>
            <p>{block.text}</p>
          </div>
        )
        if (block.type === 'product') return (
          <div key={i} className="product-box">
            <div className="product-name">{block.name}</div>
            <div className="product-verdict">{block.verdict}</div>
            <div className="product-price">{block.price} · Amazon UK</div>
            <a className="affiliate-btn" href={block.link} target="_blank" rel="noopener noreferrer nofollow">
              Check price on Amazon →
            </a>
          </div>
        )
        return null
      })}
    </div>
  )
}
