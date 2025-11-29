import { Link } from "react-router-dom"

function Home() {
  const titleArray = "NervousBird Art".split("")

  return (
    <div className="home-container">
      <div className="title-container">
        {titleArray.map((letter, idx) => (
          <h1 key={`${letter}-${idx}`} className="letter">{letter}</h1>
        ))}
      </div>
      <section className="nav">
        <Link to="/portfolio" viewTransition>Portfolio .</Link>
        <Link to="/about" viewTransition>About .</Link>
        <Link to="/contact" viewTransition>Contact .</Link>
        <Link to="/websites" viewTransition>Websites .</Link>
      </section>
    </div>
  )
}

export default Home