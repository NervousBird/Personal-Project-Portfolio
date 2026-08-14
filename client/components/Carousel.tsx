import React, { useEffect, useState } from "react"
import { GalleryObject } from "../utils/image-libraries"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"

interface Props {
  galleryObjects: GalleryObject[]
}

function Carousel({ galleryObjects }: Props) {
  const [count, setCount] = useState(0)
  const [otherCounts, setOtherCounts] = useState({previous: galleryObjects.length - 1, next: 1})
  const [total, setTotal] = useState(galleryObjects.length)
  const [title, setTitle] = useState(galleryObjects[count]?.title || '')

  useEffect(() => {
    setCount(0)
    setTitle(galleryObjects[0].title)
    setTotal(galleryObjects.length)
  }, [galleryObjects])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    if(name === "forward") {
      const result = count + 1 > galleryObjects.length - 1 ? 0 : count + 1
      setCount(result)
      setTitle(galleryObjects[result].title)

      if(result === 0) {
        setOtherCounts({previous: galleryObjects.length - 1, next: result + 1})
      } else if (result === galleryObjects.length - 1) {
        setOtherCounts({previous: result - 1, next: 0})
      } else {
        setOtherCounts({previous: result - 1, next: result + 1})
      }

    } else {
      const result = count - 1 < 0 ? galleryObjects.length - 1 : count - 1
      setCount(result)
      setTitle(galleryObjects[result].title)

      if(result === 0) {
        setOtherCounts({previous: galleryObjects.length - 1, next: result + 1})
      } else if (result === galleryObjects.length - 1) {
        setOtherCounts({previous: result - 1, next: 0})
      } else {
        setOtherCounts({previous: result - 1, next: result + 1})
      }
    }
  }

  const handleCarousel = (idx: number) => {
    setCount(idx)
    setTitle(galleryObjects[idx].title)
    setTotal(galleryObjects.length)

    if(idx === 0) {
      setOtherCounts({previous: galleryObjects.length - 1, next: idx + 1})
    } else if (idx === galleryObjects.length - 1) {
      setOtherCounts({previous: idx - 1, next: 0})
    } else {
      setOtherCounts({previous: idx - 1, next: idx + 1})
    }
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
        <span className="amount-counter">{count + 1} / {total}</span>
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
      </div>

      <div className="carousel-element">
        <div className="carousel-preview-container">
          <button className="carousel-preview-image" onClick={() => handleCarousel(otherCounts.previous)}>
            <img key={galleryObjects[otherCounts.previous]?.link} className="carousel-image" src={galleryObjects[otherCounts.previous]?.link} alt={galleryObjects[otherCounts.previous]?.description}></img>
          </button>
        </div>
        <div className="carousel-image-container">
          <img key={galleryObjects[count]?.link} className="carousel-image" src={galleryObjects[count]?.link} alt={galleryObjects[count]?.description}></img>
        </div>
        <div className="carousel-preview-container">
          <button className="carousel-preview-image" onClick={() => handleCarousel(otherCounts.next)}>
            <img key={galleryObjects[otherCounts.next]?.link} className="carousel-image" src={galleryObjects[otherCounts.next]?.link} alt={galleryObjects[count]?.description}></img>
          </button>
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

      <hr />

    </section>
  )
}

export default Carousel
