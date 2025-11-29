import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/portfolio" viewTransition>Portfolio</Link>
      <Link to="/about" viewTransition>About</Link>
      <Link to="/contact" viewTransition>Contact</Link>
      <Link to="/websites" viewTransition>Websites</Link>
    </nav>
  )
}

export default Nav