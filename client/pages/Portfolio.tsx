import React, { useState } from "react"
import { backgroundImageStyle, illustrationsObject, landscapesObject, portraitsObject, studiesObject } from "../utils/image-libraries"
import Nav from "../components/layout/Nav"
import Carousel from "../components/Carousel"
import PageHeader from "../components/Header"

    const galleryMap = [
      illustrationsObject,
      portraitsObject,
      landscapesObject,
      studiesObject,
    ]

function Portfolio() {
  // Call to API to load images from host (instead of hosting it all locally) have each image it's own call so user doesn't have to wait for them all to load
  const [gallery, setGallery] = useState(illustrationsObject)
  const [background, setBackground] = useState(backgroundImageStyle[0])

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    const galleryIndex = Number(name)

    setBackground(backgroundImageStyle[galleryIndex])
    setGallery(galleryMap[galleryIndex])
  }

  return (
    <main className="portfolio-container">
      <PageHeader title={"Portfolio"} />
      <Nav />
      <section
        key={background.backgroundImage}
        className="portfolio-categories-container"
        style={background}>
        <div>
          <button name="0" onClick={handleNavClick}>Illustrations</button>
          <button name="1" onClick={handleNavClick}>Portraits</button>
          <button name="2" onClick={handleNavClick}>Landscapes</button>
          <button name="3" onClick={handleNavClick}>Studies</button>
        </div>
      </section>
      <hr />
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          <h3>Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.</h3>
          <h3>Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.Gallery.</h3>
        </div>
      </div>
      <hr />
      <Carousel galleryObjects={gallery} />
    </main>
  )
}

export default Portfolio