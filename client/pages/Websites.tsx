import { Link } from "react-router"
import Nav from "../components/layout/Nav"

function Websites() {
  const titleArray = "Websites".split("")

  return (
    <main className="websites-container">
      <header>
        {titleArray.map((letter, idx) => (
          <h1 key={`${letter}-${idx}`}>{letter}</h1>
        ))}
      </header>

      <Nav />

      <section className="websites">
        <div className="music-machine-container">
          <Link to={""}>
            <h3>Music Machine</h3>
            <img src="" alt="" />
          </Link>
        </div>
        <div className="finances-container">
          <Link to={""}>Finances</Link>
        </div>
      </section>
    </main>
  )
}

export default Websites