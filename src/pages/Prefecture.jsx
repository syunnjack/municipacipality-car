import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/Seo'
import PromoBanner from '../components/PromoBanner'
import { getPrefectureBySlug, REGIONS, getVehicleCountRank, getPerHouseholdRank } from '../data/prefectures'
import { getCitiesByPrefecture } from '../data/cities'

export default function Prefecture() {
  const { slug } = useParams()
  const pref = getPrefectureBySlug(slug)

  if (!pref) {
    return <Navigate to="/" replace />
  }

  const regionName = REGIONS.find((r) => r.id === pref.region)?.name ?? ''
  const cities = getCitiesByPrefecture(pref.slug)
  const vehicleRank = getVehicleCountRank(pref.slug)
  const householdRank = getPerHouseholdRank(pref.slug)

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

      <section className="pref-stats">
        <h2>{pref.name}の自動車保有データ</h2>
        <table className="stats-table">
          <tbody>
            <tr>
              <th>自動車保有台数</th>
              <td>{pref.vehicleCount.toLocaleString()}台(全国{vehicleRank}位)</td>
            </tr>
            <tr>
              <th>世帯当たり普及台数</th>
              <td>{pref.perHousehold.toFixed(3)}台/世帯(全国{householdRank}位)</td>
            </tr>
          </tbody>
        </table>
        <p className="stats-source">
          出典:
          <a href="https://www.airia.or.jp/publish/statistics/number.html" target="_blank" rel="noopener noreferrer">一般財団法人 自動車検査登録情報協会「自動車保有台数」</a>
          (保有台数は2022年12月末時点、世帯当たり普及台数は2021年時点のデータ)
        </p>
      </section>

      <PromoBanner heading={`${pref.name}で車を売るなら`} />

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
