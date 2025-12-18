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

        {/* <svg viewBox="0 0 100 100">
          <path pathLength={1} stroke="black" strokeWidth={5} fill="none" />
        </svg> */}

        <div className="music-machine-container">
          <Link to={""}>
            <h3>Music Machine</h3>
            <p>A little site to make basic music.</p>
            <img src="" alt="" />
          </Link>
        </div>
        <div className="finances-container">
          <Link to={""}>
            <h3>Finances</h3>
            <p>Manage your finances - isn't that fun?!</p>
            <img src="" alt="" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Websites