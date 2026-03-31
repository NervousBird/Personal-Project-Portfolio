import { useEffect, useState } from "react"
import Nav from "../components/layout/Nav"
import WindowObject from "../components/Window"
import { useClickOutside, useClickWindow } from "../utils/utils"

function About() {
  const titleArray = "About".split("")
  const [time, setTime] = useState(new Date())
  const [about1, setAbout1] = useState({ minimise: false, open: true })
  const [about2, setAbout2] = useState({ minimise: false, open: true })
  const [about3, setAbout3] = useState({ minimise: false, open: true })
  const [start, setStart] = useState(false)
  const [focus, setFocus] = useState(1)

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 60000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  const handleAbout = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget
    const [action, id] = name.split(' ')

    const setters: { [key: string]: React.Dispatch<React.SetStateAction<{ minimise: boolean; open: boolean }>> } = {
      '1': setAbout1,
      '2': setAbout2,
      '3': setAbout3,
    }

    const setter = setters[id]
    if (!setter) return
    if(action === 'open') {
      setter({ minimise: false, open: true })
    }
    if(action === 'minimise') {
      setter({ minimise: true, open: true })
    }
    if(action === 'close') {
      setter({ minimise: false, open: false })
    }
    setFocus(Number(id))
    console.log(focus)
  }

  const handleStart = () => {
    setStart(!start)
  }

  const startMenuRef = useClickOutside(() => {
    setStart(false)
  })

  return (
    <main className="about-container">
      <header>
        {titleArray.map((letter, idx) => (
          <h1 key={`${letter}-${idx}`}>{letter}</h1>
        ))}
      </header>

      <Nav />

      <section className="about-desktop-container">

        <div className="desktop-container">
          <div className="icon-container">
            <button name="open 1" onDoubleClick={handleAbout} className="desktop-icon">
              <img src="/Cats_03.png" alt="cat" />
              <p>My Computer</p>
            </button>
            <button name="open 2" onDoubleClick={handleAbout} className="desktop-icon">
              <img src="/Cats_03.png" alt="cat" />
              <p>Documents</p>
            </button>
            <button name="open 3" onDoubleClick={handleAbout} className="desktop-icon">
              <img src="/Cats_03.png" alt="cat" />
              <p>Internet Explorer</p>
            </button>
          </div>

          <div className="window-container">
            {about1.open && !about1.minimise &&
              <WindowObject
                idx={1}
                state={about1}
                focus={focus}
                onHandleAbout={handleAbout}
                title={"brief-introduction-inprogress.txt"}
                content={"My name is Leo Walton-van den Brink -- I'm an artist from New Zealand. Welcome to my website, I'll be posting all my art, websites, and anything else I fancy here. This is a place for me to just make what I want. As someone who was born in a family of artists, I have been cursed to never really have any money, but at least I can make things look nice. Music is also a huge passion of mine: and if all is going well, you'll be able to find a little music making website here (still in development)."} />
            }

            {about2.open && !about2.minimise &&
              <WindowObject
                idx={2}
                state={about2}
                focus={focus}
                onHandleAbout={handleAbout}
                title={"history_01_final_final.txt"}
                content={"I started learning web development in The Netherlands, learning some python, then moving onto javascript, css, html, and eventually typescript and vue. After about 9 months of study, I moved back to New Zealand and finished my study at Dev Academy Aotearoa, with react. Learning became a huge focus for me during this time, learning everything: my music, my art, my coding, and also just life skills like cooking, house, and car maintenance - all of it."} />
            }

            {about3.open && !about3.minimise &&
              <WindowObject
                idx={3}
                state={about3}
                focus={focus}
                onHandleAbout={handleAbout}
                title={"extra_stuff_03.txt"}
                content={"I'm from the Kapiti Coast and Wellington region, love nature, and retro colours. Big Socialist, and advocate for humanity: which means, fuck Trump and the right, Capitalism is awful. Let's just try to love each other, please."} />
            }
          </div>
        </div>

        <span className="taskbar">
          <div className="start">
            <button onClick={handleStart} className="start-button">Start</button>
            {start &&
              <div ref={startMenuRef} className="start-window">
                <button name="open 1" onClick={handleAbout}>Cat Pictures</button>
                <button name="open 2" onClick={handleAbout}>Dog Pictures</button>
                <button name="open 3" onClick={handleAbout}>Bird Pictures</button>
                <button>Computer</button>
              </div>
            }
          </div>
          <div className="apps-container">
            <i className="bi bi-envelope"></i>
            <i className="bi bi-globe2"></i>
          </div>
          <div className="programs-container">
            {about1.open &&
              <button name="open 1" onClick={handleAbout} className="taskbar-icon-01">brief-introd...</button>
            }
            {about2.open &&
              <button name="open 2" onClick={handleAbout} className="taskbar-icon-02">history_01...</button>
            } 
            {about3.open &&
              <button name="open 3" onClick={handleAbout} className="taskbar-icon-03">extra_stuff...</button>
            }
          </div>
          <div className="info-container">
            <i className="bi bi-volume-up-fill"></i>
            <div>
              {time.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit', hour12: true })}
            </div>
          </div>
        </span>

      </section>
    </main>
  )
}

export default About
