import { Link } from "react-router"
import { useState } from 'react'
import Nav from "../components/layout/Nav"
import WebsiteCard from "../components/WebsiteCard.tsx"

function Websites() {
  const titleArray = "Websites".split("")
  const [toggle, setToggle] = useState(true)

  const handleExpand = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(!toggle)
  }

  return (
    <main className="websites-container">
      <header>
        {titleArray.map((letter, idx) => (
          <h1 key={`${letter}-${idx}`}>{letter}</h1>
        ))}
      </header>

      <Nav />

      <section className="websites">

        <WebsiteCard
          classTitle={"music-machine-container"}
          title={"Musics!"}
          blurb={"A little site to make basic music."}
          about={"Create and play litte tunes in the browser!"}
          github={"https://github.com/NervousBird/Music-Machine"}
          website={""}
          status={false}
        />

        <WebsiteCard
          classTitle={"finances-container"}
          title={"Finances"}
          blurb={"Manage your finances - isn't that fun?"}
          about={"Manage your own finances in a simple app, hosted on your own machine."}
          github={"https://github.com/NervousBird/cute-finances"}
          website={""}
          status={false}
        />

      </section>
    </main>
  )
}

export default Websites
