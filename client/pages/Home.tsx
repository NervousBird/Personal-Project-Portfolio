import { Link } from "react-router"

function Home() {
  const titleArray = "NervousBird Art".split("")

  return (
    <div className="home-container">
      {/* <h1>NervousBird Art</h1> */}
      <div className="title-container">
        {titleArray.map((letter, idx) => (
          <h1 key={idx} className='letter'>{letter}</h1>
        ))}
      </div>
      <section className="nav">
        <Link to='/portfolio' viewTransition>Portfolio .</Link>
        <Link to='/about' viewTransition>About .</Link>
        <Link to='/contact' viewTransition>Contact .</Link>
        <Link to='/websites' viewTransition>Websites .</Link>
      </section>
    </div>
  )
}

export default Home