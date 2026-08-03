import fs from 'fs'

const vehicleCountRaw = `
愛知県,5356629
東京都,4432808
埼玉県,4211857
神奈川県,4066175
大阪府,3831648
北海道,3811535
千葉県,3727959
福岡県,3471280
兵庫県,3067626
静岡県,2920716
茨城県,2653590
広島県,1928850
長野県,1927432
新潟県,1842214
群馬県,1820336
栃木県,1756379
宮城県,1715577
岐阜県,1695449
福島県,1660328
岡山県,1563551
三重県,1535367
熊本県,1414753
鹿児島県,1372520
京都府,1345769
沖縄県,1206363
山口県,1075418
滋賀県,1062995
愛媛県,1033106
岩手県,1032958
青森県,1007963
長崎県,964996
宮崎県,961364
大分県,935864
山形県,932503
石川県,922552
富山県,904057
奈良県,842139
秋田県,804956
香川県,800008
山梨県,772975
和歌山県,762574
佐賀県,694081
福井県,673972
徳島県,623323
高知県,566662
島根県,557796
鳥取県,470646
`.trim().split('\n')

const perHouseholdRaw = `
群馬県,1.602
茨城県,1.565
栃木県,1.581
山梨県,1.532
富山県,1.660
長野県,1.567
福井県,1.715
福島県,1.543
岐阜県,1.553
三重県,1.443
山形県,1.654
石川県,1.474
徳島県,1.355
宮崎県,1.280
新潟県,1.531
佐賀県,1.502
鳥取県,1.449
香川県,1.329
大分県,1.282
岡山県,1.354
静岡県,1.383
岩手県,1.395
秋田県,1.380
山口県,1.240
島根県,1.396
鹿児島県,1.178
熊本県,1.310
沖縄県,1.285
和歌山県,0.904
青森県,1.221
滋賀県,1.361
高知県,1.129
宮城県,1.277
愛媛県,1.136
愛知県,1.248
北海道,0.998
長崎県,1.104
広島県,1.099
福岡県,1.059
奈良県,1.474
千葉県,0.955
埼玉県,0.948
兵庫県,0.899
京都府,0.810
神奈川県,0.689
大阪府,0.633
東京都,0.422
`.trim().split('\n')

const vehicleCount = Object.fromEntries(vehicleCountRaw.map((l) => {
  const [name, count] = l.split(',')
  return [name, Number(count)]
}))
const perHousehold = Object.fromEntries(perHouseholdRaw.map((l) => {
  const [name, val] = l.split(',')
  return [name, Number(val)]
}))

const srcPath = new URL('../src/data/prefectures.js', import.meta.url)
let src = fs.readFileSync(srcPath, 'utf8')

let missing = []
src = src.replace(/\{ slug: '([a-z]+)', name: '([^']+)', region: '([a-z]+)', note: '([^']*)' \}/g,
  (match, slug, name, region, note) => {
    const vc = vehicleCount[name]
    const ph = perHousehold[name]
    if (vc === undefined || ph === undefined) {
      missing.push(name)
      return match
    }
    return `{ slug: '${slug}', name: '${name}', region: '${region}', note: '${note}', vehicleCount: ${vc}, perHousehold: ${ph} }`
  })

fs.writeFileSync(srcPath, src)
console.log('merged. missing:', missing)
