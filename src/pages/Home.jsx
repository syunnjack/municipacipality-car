import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PromoBanner from '../components/PromoBanner'
import { REGIONS, getPrefecturesByRegion } from '../data/prefectures'

export default function Home() {
  return (
    <div className="page">
      <Seo
        title="全国車買取ナビ｜都道府県・市区町村別の車査定情報"
        description="全国47都道府県の車買取・車査定情報を地域別に紹介。地域ごとの気候や需要傾向を踏まえた愛車の高価買取のコツをまとめています。"
        path="/"
      />
      <section className="hero">
        <h1>全国車買取ナビ</h1>
        <p>都道府県別の車買取・車査定情報全国の車買取業者・車査定サービスを都道府県別に紹介しています。愛車を少しでも高く売りたい方は地域別情報をご活用ください。</p>
      </section>

      <section className="guide">
        <h2>車買取で損をしないための基本</h2>
        <ul>
          <li>1社だけでなく複数社に査定を依頼して価格を比較する</li>
          <li>車検証・自賠責保険証明書・整備記録簿など必要書類を事前に準備する</li>
          <li>年式・走行距離だけでなく、地域特有の需要(4WD・スタッドレス装着歴など)も評価対象になる</li>
          <li>下回りの錆や外装の劣化は査定前に写真で状態を確認しておく</li>
        </ul>
      </section>

      <PromoBanner />

      {REGIONS.map((region) => (
        <section key={region.id} className="region-section">
          <h2>{region.name}</h2>
          <ul className="prefecture-list">
            {getPrefecturesByRegion(region.id).map((pref) => (
              <li key={pref.slug}>
                <Link to={`/${pref.slug}/`}>{pref.name}の車買取・車査定情報</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
