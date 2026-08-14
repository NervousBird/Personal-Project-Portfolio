import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav-container">
      <Link to="/" viewTransition>Home</Link>
      <Link to="/portfolio" viewTransition>Portfolio</Link>
      <Link to="/projects" viewTransition>Projects</Link>
      <Link to="/manga" viewTransition>Manga</Link>
      <Link to="/about" viewTransition>About</Link>
      <Link to="/contact" viewTransition>Contact</Link>
      <Link to="/websites" viewTransition>Websites</Link>
    </nav>
  )
}

export default Nav
