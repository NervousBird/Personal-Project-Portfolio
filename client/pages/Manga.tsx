import PageHeader from "../components/Header"
import Nav from "../components/layout/Nav"
import MangaReader from "../components/MangaReader"
import React, { useState } from "react"
import { mangaLibrary } from "../utils/manga-libraries.ts"



function Manga() {
  var [currentManga, setCurrentManga] = useState(mangaLibrary["kitty"])


  function handleManga(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("working", e.target)
    const { name } = e.target as HTMLButtonElement
    setCurrentManga(mangaLibrary[name])
  }

  return (
    <main className="manga-container">
      <PageHeader title={"Manga"} />
      <Nav />
      <section className="manga-categories-container">
        <div className="manga-buttons-container kitty-manga">
          <button className="kitty-button" name="kitty" onClick={handleManga}>Kitty The Tiger</button>
        </div>
        <div className="manga-buttons-container other-manga">
          <button className="other-button strike-through" name="other" onClick={handleManga}>Other Comic</button>
        </div>
      </section>

      <MangaReader manga={currentManga.pages} />

    </main>
  )
}

export default Manga
