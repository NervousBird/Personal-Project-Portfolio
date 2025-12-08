import React, { useEffect, useState } from "react"
import { GalleryObject } from "../utils/image-libraries"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"

interface Props {
  galleryObjects: GalleryObject[]
}

function Carousel({ galleryObjects }: Props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
  }, [galleryObjects])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    if(name === "forward") {
      const result = count + 1 > galleryObjects.length - 1 ? 0 : count + 1
      setCount(result)
    } else {
      const result = count - 1 < 0 ? galleryObjects.length - 1 : count - 1
      setCount(result)
    }
  }

  const handleCarousel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLImageElement
    setCount(Number(id))
  }

  return (
    <section className="portfolio-carousel-container">
      <div className="title-container">
        <h3>{galleryObjects[count]?.title}</h3>
      </div>
      <div className="button-container">
        <button name="back" onClick={handleClick}><FaCaretLeft /></button>
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
      </div>

      <div className="carousel-element">
        <div className="carousel-image-container">
          {/* <CSSTransition timeout={200} classNames="my-images"> */}
            <img src={galleryObjects[count]?.link} alt={galleryObjects[count]?.description}></img>
            {/* {illustrationsObject.map((image, idx) => (
              (idx) === count && <img key={idx} src={image.link} alt={image.description} />
              )
            )} */}
          {/* </CSSTransition> */}
        </div>
      </div>

      <div className="carousel-navigator-container">
        {galleryObjects?.map((image, idx) => (
          <button key={idx} className="carousel-preview-image" onClick={handleCarousel}>
            <img id={idx} src={galleryObjects[idx].link} alt={galleryObjects[idx].description} />
          </button>
        ))}
      </div>
    </section>
  )
}

export default Carousel