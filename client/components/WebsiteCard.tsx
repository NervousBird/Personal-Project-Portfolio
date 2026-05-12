import { Link } from "react-router"
import { useState } from 'react'

interface Props {
  classTitle: string
  title: string,
  blurb: string,
  about: string,
  github: string,
  website: string,
  status: boolean,
}

function WebsiteCard({ classTitle, title, blurb, about, github, website, status }: Props) {
  const [toggle, setToggle] = useState(true)

  const handleExpand = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(!toggle)
  }

  return (
    <div className={classTitle}>
      <div className="main-card">
        <h3>{title}</h3>
        <p>{blurb}</p>
        {!status && <p>in progress</p>}
        <button onClick={handleExpand}>{toggle ? "expand" : "shrink"}</button>
      </div>
      <div className={toggle ? "info-card expand" : "info-card"} style={toggle ? {height: "0px"} : {height: "200px"}}>
        <p>{about}</p>
        <Link target="_blank" to={github}>GitHub Repo</Link>
        {website != "" &&
          <Link target="_blank" to={website}>Website</Link>
        }
      </div>
    </div>
  )
}

export default WebsiteCard
