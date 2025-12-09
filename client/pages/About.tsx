import Nav from "../components/layout/Nav"

function About() {
  const titleArray = "About".split("")

  return (
    <main className="about-container">
      <header>
        {titleArray.map((letter, idx) => (
          <h1 key={`${letter}-${idx}`}>{letter}</h1>
        ))}
      </header>

      <Nav />
      
      <section className="about-blurb-container">
        <div className="background-image" />
        <div className="text-container">
          <hr />
          <div className="text-chunk">
            <p>
              My name is Leo Walton-van den Brink -- I'm an artist from New Zealand. Welcome to my website, I'll be posting all my art, websites, and anything else I fancy here. This is a place for me to just make what I want.<br/> As someone who was born in a family of artists, I have been cursed to never really have any money, but at least I can make things look nice. Music is also a huge passion of mine: and if all is going well, you'll be able to find a little music making website here (still in development). 
            </p>
            {/* <img src="/Cat_2.png" alt="Hairless cat" /> */}
          </div>
          <hr />
          <div className="text-chunk">
            <p>
              I started learning web development in The Netherlands, learning some Python, then moving onto Javascript, CSS, HTMl, and eventually Typescript and Vue. After about 9 months of study, I moved back to New Zealand and finished my study at Dev Academy Aotearoa, with React. <br/>Learning became a huge focus for me during this time, learning everything: my music, my art, my coding, and also just life skills like cooking, house and car maintenance, all of it. 
            </p>
          </div>
          <hr />
          <div className="text-chunk">
            <p>
              I'm from the Kapiti Coast and Wellington region, love nature, and retro colours. Big Socialist, and advocate for humanity: which means, fuck Trump and the Right, Capitalism is awful, let's just try to love each other, please.
            </p>
          </div>
          <hr />
          <div className="text-chunk">
            <p>
              Here's a cool cat picture.
            </p>
          </div>
          <img src="/Cat_2.png" alt="cat" />
        </div>
      </section>
    </main>
  )
}

export default About