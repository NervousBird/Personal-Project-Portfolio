import React, { ChangeEvent, useState } from "react"
import Nav from "../components/layout/Nav"

const backgroundImageStyle = [
  {backgroundImage: `url('/website_illustrations.png')`},
  {backgroundImage: `url('/website_portraits.png')`},    
  {backgroundImage: `url('/website_landscapes.png')`},
]

function Portfolio() {
  // Call to API to load images from host (instead of hosting it all locally)
  const [background, setBackground] = useState(backgroundImageStyle[0])
  const titleArray = "Portfolio".split("")


  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target
    setBackground(backgroundImageStyle[Number(name)])
  }

  return (
    <main className="portfolio-container">
      <header>
        {titleArray.map((letter, idx) => (
          <h1 key={`${letter}-${idx}`}>{letter}</h1>
        ))}
      </header>
      <div className="nav-container">
        <Nav />
      </div>
      <section 
        className="portfolio-categories-container"
        style={background}>
        <div>
          <button name="0" onClick={handleNavClick}>Illustrations</button>
          <button name="1" onClick={handleNavClick}>Portraits</button>
          <button name="2" onClick={handleNavClick}>Landscapes</button>
        </div>
      </section>
      <section className="portfolio-carosel-container">
        
      </section>
    </main>
  )
}

export default Portfolio