import React, { useEffect, useState } from "react"
import Nav from "../components/layout/Nav"
import PageHeader from "../components/Header"
import KittyTheTiger from "../components/KittyTheTiger"
import Hilltops from "../components/Hilltops"

function Projects() {
  const [project, setProject] = useState("kitty")

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const { name } = e.target as HTMLButtonElement
    setProject(name)
  }

  return (
    <main className="projects-container">
      <PageHeader title={"Projects"} />
      <Nav />

      <div className="projects-buttons-container">
        <button onClick={handleClick} name="kitty" className={project === "kitty" ? "" : "fuzzy"}>
          <img src={"/kittythetiger/kittyproject.jpg"} />
        </button>
        <button onClick={handleClick} name="hilltops" className={project === "hilltops" ? "" : "fuzzy"}>
          <img src={"/kittythetiger/wip.jpg"} />
        </button>
      </div>

      <section className="projects-display-container">
        {/* {project === "none" && <div className="end">None</div>} */}
        {project === "kitty" && <KittyTheTiger />}
        {project === "hilltops" && <Hilltops />}
      </section>
    </main>
  )
}

export default Projects
