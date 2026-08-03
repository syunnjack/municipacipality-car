import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/Seo'
import { getPrefectureBySlug, REGIONS } from '../data/prefectures'
import { getCitiesByPrefecture } from '../data/cities'

export default function Prefecture() {
  const { slug } = useParams()
  const pref = getPrefectureBySlug(slug)

  if (!pref) {
    return <Navigate to="/" replace />
  }

  const regionName = REGIONS.find((r) => r.id === pref.region)?.name ?? ''
  const cities = getCitiesByPrefecture(pref.slug)

  return (
    <div className="page">
      <Seo
        title={`${pref.name}の車買取・車査定情報｜全国車買取ナビ`}
        description={`${pref.name}で車を売るなら知っておきたい査定のポイントを紹介。${pref.note}`}
        path={`/${pref.slug}/`}
      />
      <nav className="breadcrumb">
        <Link to="/">トップ</Link> &gt; {regionName} &gt; {pref.name}
      </nav>

      <h1>{pref.name}の車買取・車査定情報</h1>

      <section className="pref-note">
        <h2>{pref.name}で車を売る際のポイント</h2>
        <p>{pref.note}</p>
      </section>

      {cities.length > 0 && (
        <section className="region-section">
          <h2>{pref.name}の主要都市別ガイド</h2>
          <ul className="prefecture-list">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link to={`/${pref.slug}/${city.slug}/`}>{city.name}の車買取・車査定情報</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="pref-guide">
        <h2>査定額を上げるためにできること</h2>
        <ul>
          <li>洗車・車内清掃をしてから査定に出す</li>
          <li>複数の買取サービスに見積もりを依頼し、金額を比較する</li>
          <li>車検が残っている場合は査定前に伝える(残存期間も評価対象)</li>
          <li>純正パーツやオプション装備の有無を整理しておく</li>
        </ul>
      </section>

      <section className="pref-docs">
        <h2>査定に必要な主な書類</h2>
        <ul>
          <li>車検証(自動車検査証)</li>
          <li>自賠責保険証明書</li>
          <li>自動車税納税証明書</li>
          <li>印鑑登録証明書(名義変更が必要な場合)</li>
        </ul>
      </section>

      <nav className="breadcrumb">
        <Link to="/">&larr; 全国の一覧に戻る</Link>
      </nav>
    </div>
  )
}
