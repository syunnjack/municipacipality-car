import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/Seo'
import PromoBanner from '../components/PromoBanner'
import { getCityBySlug } from '../data/cities'
import { getPrefectureBySlug } from '../data/prefectures'

export default function City() {
  const { prefSlug, citySlug } = useParams()
  const city = getCityBySlug(citySlug)
  const pref = getPrefectureBySlug(prefSlug)

  if (!city || !pref || city.pref !== prefSlug) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page">
      <Seo
        title={`${city.name}の車買取・車査定情報｜全国車買取ナビ`}
        description={`${city.name}(${pref.name})で車を売るなら知っておきたい査定のポイント。${city.note}`}
        path={`/${pref.slug}/${city.slug}/`}
      />
      <nav className="breadcrumb">
        <Link to="/">トップ</Link> &gt; <Link to={`/${pref.slug}/`}>{pref.name}</Link> &gt; {city.name}
      </nav>

      <h1>{city.name}の車買取・車査定情報</h1>

      <section className="pref-note">
        <h2>{city.name}で車を売る際のポイント</h2>
        <p>{city.note}</p>
      </section>

      {city.population && (
        <section className="pref-stats">
          <h2>{city.name}の人口データ</h2>
          <table className="stats-table">
            <tbody>
              <tr>
                <th>人口</th>
                <td>{city.population.toLocaleString()}人</td>
              </tr>
            </tbody>
          </table>
          <p className="stats-source">
            {city.populationNote ?? (
              <>出典: <a href="https://uub.jp/rnk/c_j.html" target="_blank" rel="noopener noreferrer">都道府県市区町村「全国の市 人口ランキング」</a></>
            )}
          </p>
        </section>
      )}

      <PromoBanner heading={`${city.name}で車を売るなら`} />

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
        <Link to={`/${pref.slug}/`}>&larr; {pref.name}の一覧に戻る</Link>
      </nav>
    </div>
  )
}
