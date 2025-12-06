import { Link } from "react-router-dom"

function Home() {
  const titleArray = "NervousBird Art".split("")

  return (
    <main className="home-container">
      <div className="woman-container">
        <img src={"/Website_woman.png"} alt="woman"></img>
      </div>
      <header className="title-container">
        {titleArray.map((letter, idx) => (
          <h1 key={`${letter}-${idx}`} className="letter">{letter}</h1>
        ))}
      </header>
      <section className="nav">
        <Link to="/portfolio" viewTransition>Portfolio .</Link>
        <Link to="/about" viewTransition>About .</Link>
        <Link to="/contact" viewTransition>Contact .</Link>
        <Link to="/websites" viewTransition>Websites .</Link>
      </section>
    </main>
  )
}

export default Home