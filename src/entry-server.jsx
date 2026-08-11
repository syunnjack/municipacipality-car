import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export function render(routePath) {
  return renderToString(
    <StaticRouter location={routePath}>
      <App />
    </StaticRouter>,
  )
}
