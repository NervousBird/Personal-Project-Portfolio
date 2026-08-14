import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/layout/App'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import Manga from "./pages/Manga"
import About from './pages/About'
import Contact from './pages/Contact'
import Websites from './pages/Websites'


export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/manga" element={<Manga />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/websites" element={<Websites />} />
  </Route>
)
