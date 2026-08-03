import fs from 'fs'
import { PREFECTURES } from '../src/data/prefectures.js'
import { CITIES } from '../src/data/cities.js'

const urls = [
  '/',
  ...PREFECTURES.map((p) => `/${p.slug}/`),
  ...CITIES.map((c) => `/${c.pref}/${c.slug}/`),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>https://municipality-car.jp${u}</loc></url>`).join('\n')}
</urlset>
`

fs.writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml written with ${urls.length} URLs`)
