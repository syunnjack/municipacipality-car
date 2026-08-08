// vite build outputs a single dist/index.html shared by every client-side
// route. Seo.jsx only sets <title>/description/canonical/OG tags inside a
// useEffect, so any request that doesn't execute JS (link-preview bots,
// crawlers that skip the render pass) sees identical metadata for all ~120
// prefecture/city pages. This copies dist/index.html per route and swaps in
// the same title/description each page already computes client-side, so the
// raw HTML is correct without touching the React app itself.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { PREFECTURES } from '../src/data/prefectures.js'
import { CITIES } from '../src/data/cities.js'

const SITE_URL = 'https://municipality-car.jp'
const distDir = path.resolve('dist')
const template = await readFile(path.join(distDir, 'index.html'), 'utf8')

function renderPage({ title, description, routePath }) {
  const canonical = `${SITE_URL}${routePath}`
  let html = template
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  )
  const headTags = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonical}" />`,
  ].join('\n    ')
  html = html.replace('</head>', `    ${headTags}\n  </head>`)
  return html
}

async function writePage(routePath, html) {
  const dir = path.join(distDir, routePath)
  await mkdir(dir, { recursive: true })
  await writeFile(path.join(dir, 'index.html'), html)
}

// Home page: same content as the template, just adds canonical/OG tags.
await writePage(
  '/',
  renderPage({
    title: '全国車買取ナビ｜都道府県・市区町村別の車査定情報',
    description:
      '全国47都道府県の車買取・車査定情報を地域別に紹介。地域ごとの気候や需要傾向を踏まえた愛車の高価買取のコツをまとめています。',
    routePath: '/',
  }),
)

for (const pref of PREFECTURES) {
  await writePage(
    `/${pref.slug}/`,
    renderPage({
      title: `${pref.name}の車買取・車査定情報｜全国車買取ナビ`,
      description: `${pref.name}で車を売るなら知っておきたい査定のポイントを紹介。${pref.note}`,
      routePath: `/${pref.slug}/`,
    }),
  )
}

for (const city of CITIES) {
  const pref = PREFECTURES.find((p) => p.slug === city.pref)
  await writePage(
    `/${city.pref}/${city.slug}/`,
    renderPage({
      title: `${city.name}の車買取・車査定情報｜全国車買取ナビ`,
      description: `${city.name}(${pref?.name ?? ''})で車を売るなら知っておきたい査定のポイント。${city.note}`,
      routePath: `/${city.pref}/${city.slug}/`,
    }),
  )
}

console.log(`Prerendered ${1 + PREFECTURES.length + CITIES.length} pages with per-page metadata.`)
