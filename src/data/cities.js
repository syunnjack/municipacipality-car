// Major cities only — prefectural capitals + ordinance-designated cities + other
// large population centers. Deliberately NOT exhaustive (1,700+ municipalities)
// to avoid thin/duplicate "doorway page" content.
export const CITIES = [
  { slug: 'sapporo', name: '札幌市', pref: 'hokkaido', note: '政令指定都市で道内最大の人口を抱え、積雪期の4WD需要と都市部特有の駐車場事情の両方が査定に影響します。', population: 1964034 },
  { slug: 'hakodate', name: '函館市', pref: 'hokkaido', note: '港町特有の潮風による下回りの錆対策と、坂道の多い地形への対応力が求められる地域です。', population: 230498 },
  { slug: 'asahikawa', name: '旭川市', pref: 'hokkaido', note: '道内屈指の寒冷地で、厳冬期の始動性能や防寒装備の状態が査定でチェックされます。', population: 305701 },

  { slug: 'aomori-city', name: '青森市', pref: 'aomori', note: '日本有数の豪雪都市として知られ、4WD・除雪対応車の需要が根強い地域です。', population: 256180 },
  { slug: 'morioka', name: '盛岡市', pref: 'iwate', note: '内陸性気候で寒暖差が大きく、年間を通した車のコンディション管理が査定評価に関わります。', population: 278636 },
  { slug: 'sendai', name: '仙台市', pref: 'miyagi', note: '東北最大の政令指定都市で人口が集中し、コンパクトカー・ミニバンの流通量が多い地域です。', population: 1096951 },
  { slug: 'akita-city', name: '秋田市', pref: 'akita', note: '日本海側気候で積雪が多く、スタッドレスタイヤ・4WD装着歴が査定でプラス評価されます。', population: 293588 },
  { slug: 'yamagata-city', name: '山形市', pref: 'yamagata', note: '盆地特有の寒暖差があり、夏冬双方の使用環境が車の状態に影響しやすい地域です。', population: 235685 },
  { slug: 'fukushima-city', name: '福島市', pref: 'fukushima', note: '内陸性気候で、県内でも比較的雪の少ないエリアとして知られています。', population: 265803 },
  { slug: 'koriyama', name: '郡山市', pref: 'fukushima', note: '県内有数の商業都市で交通の要衝でもあり、車の流通・買取需要が安定しています。', population: 313125 },
  { slug: 'iwaki', name: 'いわき市', pref: 'fukushima', note: '沿岸部に位置し、太平洋側特有の気候で比較的温暖なエリアです。', population: 306495 },

  { slug: 'mito', name: '水戸市', pref: 'ibaraki', note: '県庁所在地として交通の要衝であり、通勤用車両の需要が安定しています。', population: 265773 },
  { slug: 'tsukuba', name: 'つくば市', pref: 'ibaraki', note: '研究学園都市として計画的な街並みが特徴で、比較的新しい車の流通が多い地域です。', population: 268991 },
  { slug: 'utsunomiya', name: '宇都宮市', pref: 'tochigi', note: '製造業が盛んで、通勤・業務用車両の需要が高い地域です。', population: 511733 },
  { slug: 'maebashi', name: '前橋市', pref: 'gunma', note: '内陸性気候で寒暖差が大きく、車の年間コンディション管理が重要になる地域です。', population: 324554 },
  { slug: 'takasaki', name: '高崎市', pref: 'gunma', note: '交通の結節点として知られ、車の流通量・需要ともに県内有数です。', population: 363801 },
  { slug: 'saitama-city', name: 'さいたま市', pref: 'saitama', note: '政令指定都市で人口が多く、ファミリー向けミニバンの需要が特に高い地域です。', population: 1345016 },
  { slug: 'kawaguchi', name: '川口市', pref: 'saitama', note: '東京都心へのアクセスが良く、通勤用コンパクトカーの需要が安定しています。', population: 592007 },
  { slug: 'chiba-city', name: '千葉市', pref: 'chiba', note: '政令指定都市で沿岸部を含み、潮風による下回りの状態確認が査定ポイントです。', population: 994970 },
  { slug: 'funabashi', name: '船橋市', pref: 'chiba', note: '東京都心への通勤圏として人口が多く、車の入れ替わりも比較的早い地域です。', population: 650635 },
  { slug: 'tokyo-23', name: '東京23区', pref: 'tokyo', note: '駐車場事情から小型車の需要が高く、都心部では実走行距離が少ない車も多い傾向です。' },
  { slug: 'hachioji', name: '八王子市', pref: 'tokyo', note: '多摩地域最大の都市で、都心部とは異なりファミリー向け車種の需要も見られます。', population: 574087 },
  { slug: 'yokohama', name: '横浜市', pref: 'kanagawa', note: '日本最大の市で人口・車両流通量ともに非常に多く、査定サービスの競争が活発なエリアです。', population: 3754840 },
  { slug: 'kawasaki', name: '川崎市', pref: 'kanagawa', note: '東京都心への通勤圏として人口密度が高く、コンパクトカーの需要が高い地域です。', population: 1561132 },
  { slug: 'sagamihara', name: '相模原市', pref: 'kanagawa', note: '政令指定都市で都市部と山間部が混在し、幅広い車種の需要が見られます。', population: 712105 },

  { slug: 'niigata-city', name: '新潟市', pref: 'niigata', note: '政令指定都市かつ豪雪地帯で、4WD・スタッドレス装着車の査定評価が高くなりやすい地域です。', population: 759618 },
  { slug: 'toyama-city', name: '富山市', pref: 'toyama', note: '車の世帯保有率が高く、1世帯で複数台所有するケースも多い地域です。', population: 402133 },
  { slug: 'kanazawa', name: '金沢市', pref: 'ishikawa', note: '歴史的な街並みで道幅が狭い区域もあり、小回りの利く車の需要が見られます。', population: 454071 },
  { slug: 'fukui-city', name: '福井市', pref: 'fukui', note: '世帯あたりの車保有率が全国でも高い水準で、軽自動車の需要が特に安定しています。', population: 252068 },
  { slug: 'kofu', name: '甲府市', pref: 'yamanashi', note: '盆地特有の寒暖差があり、山間部への走行を考慮した車選びが行われる地域です。', population: 183630 },
  { slug: 'nagano-city', name: '長野市', pref: 'nagano', note: '標高があり冬季の積雪もあるため、4WD・冬季装備の有無が査定に影響します。', population: 357112 },
  { slug: 'matsumoto', name: '松本市', pref: 'nagano', note: '山岳観光の拠点で、悪路走破性を重視した車選びが見られる地域です。', population: 232347 },
  { slug: 'gifu-city', name: '岐阜市', pref: 'gifu', note: '濃尾平野に位置し、通勤・商業用車両の需要が安定している地域です。', population: 389011 },
  { slug: 'shizuoka-city', name: '静岡市', pref: 'shizuoka', note: '政令指定都市で温暖な気候のため、車の外装コンディションが保たれやすい地域です。', population: 659620 },
  { slug: 'hamamatsu', name: '浜松市', pref: 'shizuoka', note: '輸送機器産業の集積地で、車への関心・整備意識が高い層が多い地域です。', population: 765750 },
  { slug: 'nagoya', name: '名古屋市', pref: 'aichi', note: '政令指定都市で自動車産業の中心地でもあり、車両流通・査定サービスの競争が非常に活発です。', population: 2345892 },
  { slug: 'toyota-city', name: '豊田市', pref: 'aichi', note: '自動車産業の企業城下町として、車への関心・整備歴の管理意識が高い地域です。', population: 412230 },
  { slug: 'okazaki', name: '岡崎市', pref: 'aichi', note: '製造業が盛んな地域で、通勤用車両の需要が安定しています。', population: 377608 },
  { slug: 'ichinomiya', name: '一宮市', pref: 'aichi', note: '繊維産業の街として知られ、ファミリー向け車種の需要も見られる地域です。', population: 368755 },

  { slug: 'tsu', name: '津市', pref: 'mie', note: '県庁所在地で、沿岸部と内陸部の両方の特性を持つ地域です。', population: 263923 },
  { slug: 'yokkaichi', name: '四日市市', pref: 'mie', note: '工業都市として発展し、業務用車両を含めた車の需要が安定している地域です。', population: 303909 },
  { slug: 'otsu', name: '大津市', pref: 'shiga', note: '京阪神のベッドタウンとして、通勤用コンパクトカーの需要が高い地域です。', population: 343051 },
  { slug: 'kyoto-city', name: '京都市', pref: 'kyoto', note: '市街地は道幅が狭く小型車の需要が高い一方、観光地特有の交通事情もあります。', population: 1431713 },
  { slug: 'osaka-city', name: '大阪市', pref: 'osaka', note: '政令指定都市で人口密度が高く、車の入れ替わりが早いため査定サービス間の競争が活発です。', population: 2808624 },
  { slug: 'sakai', name: '堺市', pref: 'osaka', note: '政令指定都市で製造業も盛んなため、業務用車両を含む幅広い需要があります。', population: 803333 },
  { slug: 'higashiosaka', name: '東大阪市', pref: 'osaka', note: '中小製造業が集積する地域で、商用車・軽自動車の需要が高い地域です。', population: 482618 },
  { slug: 'kobe', name: '神戸市', pref: 'hyogo', note: '政令指定都市で港町特有の潮風対策と、坂の多い地形への対応力が求められます。', population: 1497630 },
  { slug: 'himeji', name: '姫路市', pref: 'hyogo', note: '製造業が盛んな中核都市で、通勤用車両の需要が安定している地域です。', population: 518311 },
  { slug: 'nishinomiya', name: '西宮市', pref: 'hyogo', note: '阪神間のベッドタウンとして、ファミリー層向け車種の需要が高い地域です。', population: 482834 },
  { slug: 'nara-city', name: '奈良市', pref: 'nara', note: '大阪・京都へのベッドタウンとして、通勤用コンパクトカーの需要が高い地域です。', population: 338416 },
  { slug: 'wakayama-city', name: '和歌山市', pref: 'wakayama', note: '沿岸部に位置し、潮風による下回りの錆の有無が査定確認のポイントです。', population: 341947 },

  { slug: 'tottori-city', name: '鳥取市', pref: 'tottori', note: '積雪もある一方、車の世帯保有率が全国有数の高さで需要が安定しています。', population: 179366 },
  { slug: 'matsue', name: '松江市', pref: 'shimane', note: '公共交通が限られるエリアが多く、生活必需品としての車需要が非常に安定しています。', population: 193586 },
  { slug: 'okayama-city', name: '岡山市', pref: 'okayama', note: '政令指定都市で晴天率が高く、車の外装コンディションが良好に保たれやすい地域です。', population: 707916 },
  { slug: 'kurashiki', name: '倉敷市', pref: 'okayama', note: '製造業が盛んな地域で、通勤・業務用車両の需要が安定しています。', population: 462135 },
  { slug: 'hiroshima-city', name: '広島市', pref: 'hiroshima', note: '政令指定都市で自動車メーカーの拠点があり、車への関心が高い地域です。', population: 1172423 },
  { slug: 'fukuyama', name: '福山市', pref: 'hiroshima', note: '製造業の集積地で、業務用車両を含めた車の需要が安定している地域です。', population: 439994 },
  { slug: 'yamaguchi-city', name: '山口市', pref: 'yamaguchi', note: '内陸部に位置し、県内でも比較的積雪の影響が少ない地域です。', population: 190438 },
  { slug: 'shimonoseki', name: '下関市', pref: 'yamaguchi', note: '港町として発展し、潮風による下回りの状態確認が査定ポイントになる地域です。', population: 237892 },

  { slug: 'tokushima-city', name: '徳島市', pref: 'tokushima', note: '公共交通の便が限られるエリアが多く、軽自動車を含む車の生活依存度が高い地域です。', population: 241075 },
  { slug: 'takamatsu', name: '高松市', pref: 'kagawa', note: '面積の狭い県の中心都市で、小回りの利く軽自動車・コンパクトカーの人気が高い地域です。', population: 407208 },
  { slug: 'matsuyama', name: '松山市', pref: 'ehime', note: '沿岸部の潮風対策が査定でチェックされやすく、県内最大の都市として車両流通量も多い地域です。', population: 497041 },
  { slug: 'kochi-city', name: '高知市', pref: 'kochi', note: '山間部を抱える県の中心都市で、走行性能や維持のしやすさを重視した車選びが見られます。', population: 309383 },

  { slug: 'fukuoka-city', name: '福岡市', pref: 'fukuoka', note: '政令指定都市で九州最大の都市圏、車の流通量も多く査定サービスの選択肢が豊富です。', population: 1663892 },
  { slug: 'kitakyushu', name: '北九州市', pref: 'fukuoka', note: '政令指定都市で工業都市として発展し、業務用車両を含む幅広い需要があります。', population: 904289 },
  { slug: 'saga-city', name: '佐賀市', pref: 'saga', note: '公共交通が限られ、生活の足として軽自動車・コンパクトカーの需要が高い地域です。', population: 227754 },
  { slug: 'nagasaki-city', name: '長崎市', pref: 'nagasaki', note: '坂道や狭い道が多い地形のため、小型で取り回しの良い車の人気が高い地域です。', population: 381738 },
  { slug: 'sasebo', name: '佐世保市', pref: 'nagasaki', note: '港町として発展し、坂の多い地形と潮風対策の両方が求められる地域です。', population: 226189 },
  { slug: 'kumamoto-city', name: '熊本市', pref: 'kumamoto', note: '政令指定都市で自動車関連企業の進出もあり、ファミリー向け車種の需要が安定しています。', population: 730854 },
  { slug: 'oita-city', name: '大分市', pref: 'oita', note: '温暖な気候で車の外装コンディションが保たれやすく、査定でも評価されやすい傾向です。', population: 470172 },
  { slug: 'miyazaki-city', name: '宮崎市', pref: 'miyazaki', note: '日照時間が長く、紫外線による塗装の劣化状況が査定確認のポイントになります。', population: 389799 },
  { slug: 'kagoshima-city', name: '鹿児島市', pref: 'kagoshima', note: '火山灰(桜島降灰)の影響で車の洗車・メンテナンス頻度が高くなりやすい地域です。', population: 580970 },
  { slug: 'naha', name: '那覇市', pref: 'okinawa', note: '潮風と高温多湿な気候により下回りの錆・ゴム部品の劣化が進みやすく、査定で重視されるポイントです。', population: 311073 },
]

export function getCityBySlug(slug) {
  return CITIES.find((c) => c.slug === slug)
}

export function getCitiesByPrefecture(prefSlug) {
  return CITIES.filter((c) => c.pref === prefSlug)
}
