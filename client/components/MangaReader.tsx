import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"
import React, { useState } from "react"
import { kittyPages } from "../utils/kitty-the-tiger.ts"

function MangaReader() {
  const [page, setPage] = useState(0)
  const [maxPage, setMaxPage] = useState(kittyPages.length - 1)

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

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    setPage(Number(name))
  }

  return (
    <div className="manga-reader-container">
      <span>Pages</span>
      <div className="page-container">
        <button name="back" onClick={handleClick}><FaCaretLeft /></button>
        {kittyPages.map((pageInfo, idx) => (
          <button
            name={pageInfo.page}
            key={pageInfo.page}
            className={page === pageInfo.page ? "active" : ""}
            onClick={handleNavigate}
          >
            {pageInfo.page}
          </button>
        ))}
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
      </div>

      {kittyPages[page] &&
      <div className="manga-page-container">
        <button name="back" onClick={handleClick}><FaCaretLeft /></button>
        <img key={page} src={kittyPages[page].image} alt={kittyPages[page].alt} />
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
      </div>
      }

      <div className="page-container">
        <button name="back" onClick={handleClick}><FaCaretLeft /></button>
        {kittyPages.map((pageInfo, idx) => (
          <button
            name={pageInfo.page}
            key={pageInfo.page}
            className={page === pageInfo.page ? "active" : ""}
            onClick={handleNavigate}
          >
            {pageInfo.page}
          </button>
        ))}
        <button name="forward" onClick={handleClick}><FaCaretRight /></button>
      </div>

    </div>
  )
}

export default MangaReader
