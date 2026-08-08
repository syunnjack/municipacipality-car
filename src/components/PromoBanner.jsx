import { PROMOS } from '../data/promos'

export default function PromoBanner({ heading = '提携している査定・買取サービス' }) {
  return (
    <section className="promo-banner" aria-label="広告">
      <div className="promo-heading">
        <span className="promo-pr">PR</span>
        <h2>{heading}</h2>
      </div>
      <div className="promo-list">
        {PROMOS.map((promo) => (
          <a
            key={promo.id}
            href={promo.href}
            rel="nofollow noopener sponsored"
            target="_blank"
          >
            <img src={promo.image} width={promo.width} height={promo.height} alt={promo.alt} />
          </a>
        ))}
      </div>
      {PROMOS.map((promo) => (
        <img
          key={`${promo.id}-pixel`}
          src={promo.pixel}
          width="1"
          height="1"
          alt=""
          aria-hidden="true"
          className="promo-pixel"
        />
      ))}
    </section>
  )
}
