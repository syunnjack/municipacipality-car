import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Prefecture from './pages/Prefecture'
import City from './pages/City'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:prefSlug/:citySlug/" element={<City />} />
      <Route path="/:slug/" element={<Prefecture />} />
    </Routes>
  )
}

export default App
