import React, { useRef, useState } from "react"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"
import { illustrationsObject } from "../utils/image-libraries"
import Nav from "../components/layout/Nav"
import { CSSTransition } from 'react-transition-group'

const backgroundImageStyle = [
  {backgroundImage: `url('/website_illustrations.png')`},
  {backgroundImage: `url('/website_portraits.png')`},    
  {backgroundImage: `url('/website_landscapes.png')`},
]

function Portfolio() {
  // Call to API to load images from host (instead of hosting it all locally) have each image it's own call so user doesn't have to wait for them all to load
  const [background, setBackground] = useState(backgroundImageStyle[0])
  const titleArray = "Portfolio".split("")
  const [count, setCount] = useState(3)

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    console.log(name)
    setBackground(backgroundImageStyle[Number(name)])
  }
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    if(name === "forward") {
      const result = count + 1 > illustrationsObject.length - 1 ? 0 : count + 1
      setCount(result)
    } else {
      const result = count - 1 < 0 ? illustrationsObject.length - 1 : count - 1
      setCount(result)
    }
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
        <div className="scrolling-text-container">
          <div className="scrolling-text">
            <h3>Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.</h3>
            <h3>Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.</h3>
          </div>
        </div>
      <hr></hr>
      
      <section className="portfolio-carousel-container">
        <div className="title-container">
          <h3>{illustrationsObject[count].title}</h3>
        </div>
        <div className="button-container">
          <button name="back" onClick={handleClick}><FaCaretLeft /></button>
          <button name="forward" onClick={handleClick}><FaCaretRight /></button>
        </div>
        <div className="carousel-element">
          <div className="carousel-image-container">
            {/* <CSSTransition timeout={200} classNames="my-images"> */}
              <img src={illustrationsObject[count].link} alt={illustrationsObject[count].description}></img>
              {/* {illustrationsObject.map((image, idx) => (
                (idx) === count && <img key={idx} src={image.link} alt={image.description} />
                )
              )} */}
            {/* </CSSTransition> */}
          </div>
        </div>
        <div className="carousel-navigator-container">
          <button>+</button>
        </div>
      </section>
    </main>
  )
}

export default Portfolio