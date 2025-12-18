import React, { useEffect, useState } from "react"
import { GalleryObject } from "../utils/image-libraries"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"

interface Props {
  galleryObjects: GalleryObject[]
}

function Carousel({ galleryObjects }: Props) {
  const [count, setCount] = useState(0)
 const [title, setTitle] = useState(galleryObjects[count]?.title || '')

  useEffect(() => {
    setCount(0)
    setTitle(galleryObjects[0].title)
  }, [galleryObjects])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    if(name === "forward") {
      const result = count + 1 > galleryObjects.length - 1 ? 0 : count + 1
      setCount(result)
      setTitle(galleryObjects[result].title)
      } else {
      const result = count - 1 < 0 ? galleryObjects.length - 1 : count - 1
      setCount(result)
      setTitle(galleryObjects[result].title)
    }
  }

  const handleCarousel = (idx: number) => {
    setCount(idx)
    setTitle(galleryObjects[idx].title)
  }

  return (
    <section className="portfolio-carousel-container">

      <div className="title-container">
        <div className="title">
          <h3 key={title} className="image-title" style={{ animation: `typing .6s steps(${title.length + 1}, end), blink-caret .5s step-end infinite`}}>
            {title}
          </h3>
        </div>
      </div>

      <div className="button-container">
        <button name="back" onClick={handleClick}><FaCaretLeft /></button>
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
      </div>

      <div className="carousel-element">
        <div className="carousel-image-container">
          <img key={galleryObjects[count]?.link} className="carousel-image" src={galleryObjects[count]?.link} alt={galleryObjects[count]?.description}></img>
        </div>
      </div>

      <hr />

      <div className="carousel-navigator-container">
        {galleryObjects?.map((image, idx) => (
          <button key={idx} className="carousel-preview-image" onClick={() => handleCarousel(idx)}>
            <img src={image.link} alt={image.description} />
          </button>
        ))}
      </div>

    </section>
  )
}

export default Carousel