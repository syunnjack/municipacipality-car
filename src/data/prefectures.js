export const REGIONS = [
  { id: 'hokkaido', name: '北海道地方' },
  { id: 'tohoku', name: '東北地方' },
  { id: 'kanto', name: '関東地方' },
  { id: 'chubu', name: '中部地方' },
  { id: 'kinki', name: '近畿地方' },
  { id: 'chugoku', name: '中国地方' },
  { id: 'shikoku', name: '四国地方' },
  { id: 'kyushu', name: '九州・沖縄地方' },
]

export const PREFECTURES = [
  { slug: 'hokkaido', name: '北海道', region: 'hokkaido', note: '積雪・寒冷地のため4WDやスタッドレスタイヤ装着車の需要が高く、下回りの防錆・凍結によるダメージ確認が査定の重要ポイントになります。' },

  { slug: 'aomori', name: '青森県', region: 'tohoku', note: '豪雪地帯が多く、四駆・スタッドレス装着歴が査定でプラス評価されやすい地域です。' },
  { slug: 'iwate', name: '岩手県', region: 'tohoku', note: '広い県土で走行距離が伸びやすく、年式・距離のバランスを踏まえた複数社比較が有効です。' },
  { slug: 'miyagi', name: '宮城県', region: 'tohoku', note: '仙台市を中心に人口が集中し、需要の高いコンパクトカー・ミニバンの取引が活発です。' },
  { slug: 'akita', name: '秋田県', region: 'tohoku', note: '積雪地域のため4WD需要が根強く、雪道走行に強い車種が査定で評価されやすい傾向があります。' },
  { slug: 'yamagata', name: '山形県', region: 'tohoku', note: '内陸部と沿岸部で気候差があり、下回りの錆や凍結損傷の有無が査定に影響します。' },
  { slug: 'fukushima', name: '福島県', region: 'tohoku', note: '会津・中通り・浜通りで気候が異なり、地域ごとに需要される装備(4WD等)が変わります。' },

  { slug: 'ibaraki', name: '茨城県', region: 'kanto', note: '首都圏へのアクセスが良く、通勤用のコンパクトカーやミニバンの需要が安定しています。' },
  { slug: 'tochigi', name: '栃木県', region: 'kanto', note: '製造業が盛んで社用車としての軽自動車・商用バンの取引も多い地域です。' },
  { slug: 'gunma', name: '群馬県', region: 'kanto', note: '自動車関連産業が集積しており、車への関心・整備意識が高い層が多い地域です。' },
  { slug: 'saitama', name: '埼玉県', region: 'kanto', note: '東京都心へのベッドタウンとしてファミリー向けミニバン・コンパクトSUVの需要が高い地域です。' },
  { slug: 'chiba', name: '千葉県', region: 'kanto', note: '海沿いエリアでは潮風による下回りの錆に注意が必要で、査定時に確認されるポイントです。' },
  { slug: 'tokyo', name: '東京都', region: 'kanto', note: '駐車場事情からコンパクトカーの需要が高く、都心部では実走行距離が少ない車も多い傾向です。' },
  { slug: 'kanagawa', name: '神奈川県', region: 'kanto', note: '横浜・川崎の都市部と湘南エリアでは求められる車種傾向が異なり、輸入車の流通も比較的多い地域です。' },

  { slug: 'niigata', name: '新潟県', region: 'chubu', note: '有数の豪雪地帯で4WD・スタッドレス装着が一般的なため、雪道対応車の査定評価が高くなりやすい地域です。' },
  { slug: 'toyama', name: '富山県', region: 'chubu', note: '持ち家率・車保有率が高く、1世帯あたりの車両保有台数が多い地域として知られています。' },
  { slug: 'ishikawa', name: '石川県', region: 'chubu', note: '金沢市を中心に人口が集中し、コンパクトカーからミニバンまで幅広い需要があります。' },
  { slug: 'fukui', name: '福井県', region: 'chubu', note: '車が生活必需品として世帯保有率が高く、軽自動車の需要が特に安定しています。' },
  { slug: 'yamanashi', name: '山梨県', region: 'chubu', note: '山間部が多く、積雪期の走破性を重視した4WD需要が見られる地域です。' },
  { slug: 'nagano', name: '長野県', region: 'chubu', note: '標高差・気候差が大きく、地域によって4WD需要や冬季装備の有無が査定に影響します。' },
  { slug: 'gifu', name: '岐阜県', region: 'chubu', note: '飛騨地方の山間部と美濃地方の平野部で車の使われ方が大きく異なる地域です。' },
  { slug: 'shizuoka', name: '静岡県', region: 'chubu', note: '東西に長く、東部・中部・西部で気候・生活スタイルが異なり幅広い車種需要があります。' },
  { slug: 'aichi', name: '愛知県', region: 'chubu', note: '自動車産業の中心地で車への関心・保有率が高く、査定サービスの競争も活発な地域です。' },

  { slug: 'mie', name: '三重県', region: 'kinki', note: '製造業が盛んで通勤用車両の需要が安定しており、沿岸部では防錆状態も査定ポイントです。' },
  { slug: 'shiga', name: '滋賀県', region: 'kinki', note: '京阪神のベッドタウンとして、ファミリー層向けの車の取引が多い地域です。' },
  { slug: 'kyoto', name: '京都府', region: 'kinki', note: '市街地は道幅が狭く小型車の需要が高い一方、郊外ではミニバン需要も見られます。' },
  { slug: 'osaka', name: '大阪府', region: 'kinki', note: '人口密度が高く車の入れ替わりも早いため、査定サービス間の価格競争が活発なエリアです。' },
  { slug: 'hyogo', name: '兵庫県', region: 'kinki', note: '神戸の都市部から日本海側の豪雪地域まで県内で気候差が大きく、車種需要も多様です。' },
  { slug: 'nara', name: '奈良県', region: 'kinki', note: '大阪・京都へのベッドタウンとして、通勤用コンパクトカーの需要が高い地域です。' },
  { slug: 'wakayama', name: '和歌山県', region: 'kinki', note: '沿岸部が多く、潮風による下回りの錆の有無が査定で確認されやすい地域です。' },

  { slug: 'tottori', name: '鳥取県', region: 'chugoku', note: '積雪地域もあり4WD需要がある一方、人口あたりの車保有率が全国有数の高さです。' },
  { slug: 'shimane', name: '島根県', region: 'chugoku', note: '公共交通が限られる地域が多く、生活必需品として車の需要が非常に安定しています。' },
  { slug: 'okayama', name: '岡山県', region: 'chugoku', note: '晴れの日が多い気候で、車の外装コンディションが比較的良好に保たれやすい地域です。' },
  { slug: 'hiroshima', name: '広島県', region: 'chugoku', note: '自動車メーカーの拠点があり、車への関心が高く整備歴のしっかりした車が多い地域です。' },
  { slug: 'yamaguchi', name: '山口県', region: 'chugoku', note: '沿岸部と山間部が混在し、地域によって求められる車種の傾向が分かれます。' },

  { slug: 'tokushima', name: '徳島県', region: 'shikoku', note: '公共交通の便が限られるエリアが多く、軽自動車を含む車の生活依存度が高い地域です。' },
  { slug: 'kagawa', name: '香川県', region: 'shikoku', note: '面積が狭くコンパクトな生活圏のため、小回りの利く軽自動車・コンパクトカーの人気が高い地域です。' },
  { slug: 'ehime', name: '愛媛県', region: 'shikoku', note: '沿岸部の潮風対策と、山間部での走破性の両方が求められる地域です。' },
  { slug: 'kochi', name: '高知県', region: 'shikoku', note: '山間部が多く、走行性能や維持のしやすさを重視した車選びが行われる地域です。' },

  { slug: 'fukuoka', name: '福岡県', region: 'kyushu', note: '九州最大の都市圏で車の流通量も多く、査定サービスの選択肢が豊富な地域です。' },
  { slug: 'saga', name: '佐賀県', region: 'kyushu', note: '公共交通が限られ、生活の足として軽自動車・コンパクトカーの需要が高い地域です。' },
  { slug: 'nagasaki', name: '長崎県', region: 'kyushu', note: '坂道や狭い道が多い地形のため、小型で取り回しの良い車の人気が高い地域です。' },
  { slug: 'kumamoto', name: '熊本県', region: 'kyushu', note: '自動車関連企業の進出もあり、ファミリー向け車種の需要が安定している地域です。' },
  { slug: 'oita', name: '大分県', region: 'kyushu', note: '温暖な気候で車の外装コンディションが保たれやすく、査定でも評価されやすい傾向です。' },
  { slug: 'miyazaki', name: '宮崎県', region: 'kyushu', note: '日照時間が長く、紫外線による塗装の劣化状況が査定確認のポイントになります。' },
  { slug: 'kagoshima', name: '鹿児島県', region: 'kyushu', note: '離島部を含む地域特性があり、車種によって流通性・査定額に差が出やすい地域です。' },
  { slug: 'okinawa', name: '沖縄県', region: 'kyushu', note: '潮風と高温多湿な気候により下回りの錆・ゴム部品の劣化が進みやすく、査定でチェックされる重要ポイントです。' },
]

export function getPrefectureBySlug(slug) {
  return PREFECTURES.find((p) => p.slug === slug)
}

export function getPrefecturesByRegion(regionId) {
  return PREFECTURES.filter((p) => p.region === regionId)
}
