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
        
      </section>
    </main>
  )
}

export default Websites