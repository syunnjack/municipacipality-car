import fs from 'fs'

const raw = `
札幌市,1964034
函館市,230498
旭川市,305701
青森市,256180
盛岡市,278636
仙台市,1096951
秋田市,293588
山形市,235685
福島市,265803
郡山市,313125
いわき市,306495
水戸市,265773
つくば市,268991
宇都宮市,511733
前橋市,324554
高崎市,363801
さいたま市,1345016
川口市,592007
千葉市,994970
船橋市,650635
八王子市,574087
横浜市,3754840
川崎市,1561132
相模原市,712105
新潟市,759618
富山市,402133
金沢市,454071
福井市,252068
甲府市,183630
長野市,357112
松本市,232347
岐阜市,389011
静岡市,659620
浜松市,765750
名古屋市,2345892
豊田市,412230
岡崎市,377608
一宮市,368755
津市,263923
四日市市,303909
大津市,343051
京都市,1431713
大阪市,2808624
堺市,803333
東大阪市,482618
神戸市,1497630
姫路市,518311
西宮市,482834
奈良市,338416
和歌山市,341947
鳥取市,179366
松江市,193586
岡山市,707916
倉敷市,462135
広島市,1172423
福山市,439994
山口市,190438
下関市,237892
徳島市,241075
高松市,407208
松山市,497041
高知市,309383
福岡市,1663892
北九州市,904289
佐賀市,227754
長崎市,381738
佐世保市,226189
熊本市,730854
大分市,470172
宮崎市,389799
鹿児島市,580970
那覇市,311073
`.trim().split('\n')

const population = Object.fromEntries(raw.map((l) => {
  const [name, pop] = l.split(',')
  return [name, Number(pop)]
}))

const srcPath = new URL('../src/data/cities.js', import.meta.url)
let src = fs.readFileSync(srcPath, 'utf8')

let missing = []
src = src.replace(/\{ slug: '([a-z0-9-]+)', name: '([^']+)', pref: '([a-z]+)', note: '([^']*)' \}/g,
  (match, slug, name, pref, note) => {
    const pop = population[name]
    if (pop === undefined) {
      missing.push(name)
      return match
    }
    return `{ slug: '${slug}', name: '${name}', pref: '${pref}', note: '${note}', population: ${pop} }`
  })

fs.writeFileSync(srcPath, src)
console.log('merged. missing:', missing)
