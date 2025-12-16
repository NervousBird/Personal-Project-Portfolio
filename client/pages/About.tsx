import { useEffect, useState } from "react"
import Nav from "../components/layout/Nav"
import { useClickOutside } from "../utils/utils"

function About() {
  const titleArray = "About".split("")
  const [time, setTime] = useState(new Date())
  const [about1, setAbout1] = useState({ minimise: false, open: true })
  const [about2, setAbout2] = useState({ minimise: false, open: true })
  const [about3, setAbout3] = useState({ minimise: false, open: true })
  const [start, setStart] = useState(false)

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 60000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  const handleAbout1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement
    if (name === 'open') setAbout1({ minimise: false, open: true })
    if (name === 'minimise') setAbout1({ minimise: true, open: true })
    if (name === 'close') setAbout1({ minimise: false, open: false })
  }

  const handleAbout2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement
    if (name === 'open') setAbout2({ minimise: false, open: true })
    if (name === 'minimise') setAbout2({ minimise: true, open: true })
    if (name === 'close') setAbout2({ minimise: false, open: false })
  }

  const handleAbout3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement
    if (name === 'open') setAbout3({ minimise: false, open: true })
    if (name === 'minimise') setAbout3({ minimise: true, open: true })
    if (name === 'close') setAbout3({ minimise: false, open: false })
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
            <button name="open" onDoubleClick={handleAbout1} className="desktop-icon">
              <img src="/Cats_03.png" alt="cat" />
              <p>My Computer</p>
            </button>
            <button name="open" onDoubleClick={handleAbout2} className="desktop-icon">
              <img src="/Cats_03.png" alt="cat" />
              <p>Documents</p>
            </button>
            <button name="open" onDoubleClick={handleAbout3} className="desktop-icon">
              <img src="/Cats_03.png" alt="cat" />
              <p>Internet Explorer</p>
            </button>
          </div>

          <div className="window-container">
            {about1.open && !about1.minimise &&
              <div key={`about1${about1}`} className="about-window"> 
                <div className="top-bar">
                  <p>brief-introduction-inprogress.txt</p>
                  <div className="buttons">
                    <button name="minimise" onClick={handleAbout1}>-</button> 
                    <button name="close" onClick={handleAbout1}>x</button>
                  </div>
                </div>
                <p>
                  Hi.
                </p>
                <p>
                  My name is Leo Walton-van den Brink -- I'm an artist from New Zealand. Welcome to my website, I'll be posting all my art, websites, and anything else I fancy here. This is a place for me to just make what i want.<br/> As someone who was born in a family of artists, I have been cursed to never really have any money, but at least I can make things look nice. Music is also a huge passion of mine: and if all is going well, you'll be able to find a little music making website here (still in development). 
                </p>
              </div>
            }
            {about2.open && !about2.minimise &&
              <div key={`about2${about2}`} className="about-window"> 
                <div className="top-bar">
                  <p>history_01_final_final.txt</p>
                  <div className="buttons">
                    <button name="minimise" onClick={handleAbout2}>-</button> 
                    <button name="close" onClick={handleAbout2}>x</button>
                  </div>
                </div>
                <p>
                  I started learning web development in The Netherlands, learning some python, then moving onto javascript, css, html, and eventually typescript and vue. After about 9 months of study, I moved back to New Zealand and finished my study at Dev Academy Aotearoa, with react. <br/>Learning became a huge focus for me during this time, learning everything: my music, my art, my coding, and also just life skills like cooking, house, and car maintenance - all of it.
                </p>
              </div>
            }
            {about3.open && !about3.minimise &&
              <div key={`about3${about3}`} className="about-window"> 
                <div className="top-bar">
                  <p>extra_stuff_03.txt</p>
                  <div className="buttons">
                    <button name="minimise" onClick={handleAbout3}>-</button> 
                    <button name="close" onClick={handleAbout3}>x</button>
                  </div>
                </div>
                <p>
                  I'm from the Kapiti Coast and Wellington region, love nature, and retro colours. Big Socialist, and advocate for humanity: which means, fuck Trump and the right, Capitalism is awful. Let's just try to love each other, please.
                </p>
              </div>
            }
          </div>
        </div>

        <span className="taskbar">
          <div className="start">
            <button onClick={handleStart} className="start-button">Start</button>
            {start && 
              <div ref={startMenuRef} className="start-window">
                <span>Cat Pictures</span>
                <span>Dog Pictures</span>
                <span>Bird Pictures</span>
                <span>Computer</span>
              </div>
            }
          </div>
          <div className="apps-container">
            <i className="bi bi-envelope"></i>
            <i className="bi bi-globe2"></i>
          </div>
          <div className="programs-container">
            {about1.open &&
              <button name="open" onClick={handleAbout1} className="taskbar-icon-01">brief-introd...</button>
            }
            {about2.open &&
              <button name="open" onClick={handleAbout2} className="taskbar-icon-02">history_01...</button>
            } 
            {about3.open &&
              <button name="open" onClick={handleAbout3} className="taskbar-icon-03">extra_stuff...</button>
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
      
      {/* <section className="about-blurb-container">
        <div className="background-image" />
        <div className="text-container">
          <div className="text-chunk">
            <p>
              hi.
            </p>
            <p>
              my name is leo walton-van den brink -- i'm an artist from new zealand. welcome to my website, i'll be posting all my art, websites, and anything else i fancy here. this is a place for me to just make what i want.<br/> as someone who was born in a family of artists, i have been cursed to never really have any money, but at least i can make things look nice. music is also a huge passion of mine: and if all is going well, you'll be able to find a little music making website here (still in development). 
            </p>
          </div>
          <div className="text-chunk">
            <p>
              i started learning web development in the netherlands, learning some python, then moving onto javascript, css, html, and eventually typescript and vue. after about 9 months of study, i moved back to new zealand and finished my study at dev academy aotearoa, with react. <br/>learning became a huge focus for me during this time, learning everything: my music, my art, my coding, and also just life skills like cooking, house and car maintenance, all of it. 
            </p>
          </div>
          <div className="text-chunk">
            <p>
              i'm from the kapiti coast and wellington region, love nature, and retro colours. big socialist, and advocate for humanity: which means, fuck trump and the right, capitalism is awful, let's just try to love each other, please.
            </p>
          </div>
          <div className="text-chunk">
            <p>
              here's a cool cat drawing.
            </p>
          </div>
          <img src="/cats_03.png" alt="cat" />
        </div>

        <div className="">

        </div>
      </section> */}
    </main>
  )
}

export default About