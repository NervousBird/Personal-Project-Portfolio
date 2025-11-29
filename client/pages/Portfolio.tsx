import React, { useState } from "react"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"
import Nav from "../components/layout/Nav"

const backgroundImageStyle = [
  {backgroundImage: `url('/website_illustrations.png')`},
  {backgroundImage: `url('/website_portraits.png')`},    
  {backgroundImage: `url('/website_landscapes.png')`},
]

function Portfolio() {
  // Call to API to load images from host (instead of hosting it all locally) have each image it's own call so user doesn't have to wait for them all to load
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

      <hr></hr>
      <h3>Gallery</h3>
      <hr></hr>
      
      <section className="portfolio-carousel-container">
        <h3>Title</h3>
        <div className="carousel-element">
          <button><FaCaretLeft /></button>
          <div className="carousel-image-container">
            <img src="/MyWebsiteMockup.png" alt="image-temp"></img>
          </div>
          <button><FaCaretRight /></button>
        </div>
        <div>
          <button>+</button>
        </div>
      </section>

    </main>
  )
}

export default Portfolio