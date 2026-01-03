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
          <Link target="_blank" to={"https://github.com/NervousBird/Music-Machine"}>
            <h3>Music Machine</h3>
            <p>A little site to make basic music.</p>
          </Link>
        </div>

        <div className="finances-container">
          <Link target="_blank" to={"https://github.com/NervousBird/Leo-Personal-Project-1"}>
            <h3>Finances</h3>
            <p>Manage your finances - isn't that fun?!</p>
          </Link>
        </div>

      </section>
    </main>
  )
}

export default Websites
