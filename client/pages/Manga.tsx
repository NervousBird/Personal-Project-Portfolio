import PageHeader from "../components/Header"
import Nav from "../components/layout/Nav"
import MangaReader from "../components/MangaReader"


function Manga() {

  return (
    <main className="manga-container">
      <PageHeader title={"Manga"} />
      <Nav />
      <section className="manga-categories-container">
        <div className="manga-buttons-container">
          <button name="0">Kitty The Tiger</button>
        </div>
      </section>
      
      <MangaReader />

    </main>
  )
}

export default Manga
