import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"
import React, { useState, useEffect } from "react"
import { kittyPages } from "../utils/kitty-the-tiger.ts"

interface Props {
  manga: Manga[]
}

type Manga = {
  page: number
  image: string
  alt: string
}

function MangaReader({ manga }: Props) {
  // NOTE: use localstorage to save users position in the manga
  const [page, setPage] = useState(0)
  const [maxPage, setMaxPage] = useState(manga.length - 1)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    if(name === "back") {
      const result = page - 1 < 0 ? 0 : page - 1
      setPage(result)
    }
    if(name === "forward") {
      const result = page + 1 > maxPage ? maxPage : page + 1
      setPage(result)
    }
  }

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLButtonElement
    setPage(Number(name) | Number(value))
  }

  useEffect(() => {
    setPage(0)
  }, [manga])

  return (
    <div className="manga-reader-container">

      <span>Chapters</span>
      <div>
        <select>
          {/* NOTE: this needs to be updated to reflect the manga chapters (probably adding a new item to the dictionary item) */}
          {manga.map((pageInfo, idx) => (
            <option key={idx}>{pageInfo.page}</option>
          ))}
        </select>
      </div>

      <span>Pages</span>
      <div className="page-container">
        <button name="back" onClick={handleClick}><FaCaretLeft /></button>
        {manga.map((pageInfo, idx) => (
          <button
            name={`${pageInfo.page}`}
            key={pageInfo.page}
            className={page === pageInfo.page ? "active" : ""}
            onClick={handleNavigate}
          >
            {pageInfo.page}
          </button>
        ))}
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
        <select onChange={handleNavigate} value={page}>
          {manga.map((pageInfo, idx) => (
            <option
              key={idx}
              value={`${pageInfo.page}`}
            >
              {pageInfo.page}
            </option>
          ))}
        </select>
      </div>

      {manga[page] &&
      <div className="manga-page-container">
        <button name="back" onClick={handleClick}><FaCaretLeft /></button>
        <img key={page} src={manga[page].image} alt={manga[page].alt} />
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
      </div>
      }

      <div className="page-container">
        <button name="back" onClick={handleClick}><FaCaretLeft /></button>
        {manga.map((pageInfo, idx) => (
          <button
            name={`${pageInfo.page}`}
            key={pageInfo.page}
            className={page === pageInfo.page ? "active" : ""}
            onClick={handleNavigate}
          >
            {pageInfo.page}
          </button>
        ))}
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
        <select onChange={handleNavigate} value={page}>
          {manga.map((pageInfo, idx) => (
            <option
              key={idx}
              value={`${pageInfo.page}`}
            >
              {pageInfo.page}
            </option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default MangaReader
