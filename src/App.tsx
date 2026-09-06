import { useState } from 'react'
import './App.css'

const offerings = [
  { number: '01', title: 'Farm-fresh eggs', text: 'Simple, versatile, and a little bit of sunshine for your everyday table.', icon: 'egg' },
  { number: '02', title: 'Poultry & livestock', text: 'Care for our animals is at the heart of the farm, every single day.', icon: 'sun' },
  { number: '03', title: 'Seasonal goodness', text: 'A connection to the land and the changing rhythms of the Indian seasons.', icon: 'leaf' },
]

function NatureIcon({ kind = 'leaf' }: { kind?: string }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {kind === 'egg' ? <path d="M37 29c0 10-6 15-13 15s-13-5-13-15S18 4 24 4s13 15 13 25Z" /> : kind === 'sun' ? <><circle cx="24" cy="24" r="10" /><path d="M24 2v6m0 32v6M2 24h6m32 0h6M8 8l5 5m22 22 5 5M8 40l5-5M35 13l5-5" /></> : <><path d="M38 7C14 5 6 17 13 30c13 9 28-1 25-23Z" /><path d="M8 41 30 18M19 29v-9m0 9h10" /></>}
  </svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="announcement">Rooted in nature. Raised with care. <span>From our farm, with love.</span></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="RamDhara Farms home">
          <span className="brand-mark"><img src="/images/ramdhara-logo.png" alt="" /></span>
          <span className="brand-name">RamDhara <small>F A R M S</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation">{menuOpen ? 'Close ✕' : 'Menu ☰'}</button>
        <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#offerings" onClick={() => setMenuOpen(false)}>From the farm</a>
          <a href="#values" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <span>↗</span></a>
        </nav>
      </header>
      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A little closer to nature</p>
            <h1>Good things<br />begin with<br /><em>good roots.</em></h1>
            <p className="hero-description">Welcome to RamDhara Farms. A little corner of India where we celebrate the land, care for our animals, and cherish the simple goodness of farm life.</p>
            <a className="button" href="#offerings">Explore our farm <span>↗</span></a>
            <div className="hero-note"><NatureIcon /><span>Indian roots.<br /><strong>Heartfelt care.</strong></span></div>
          </div>
        </section>
        <div className="values-strip"><span><NatureIcon /> Rooted in nature</span><i>✳</i><span><NatureIcon kind="sun" /> Raised with care</span><i>✳</i><span><NatureIcon kind="egg" /> Simple, honest goodness</span></div>
        <section id="story" className="story section-wrap">
          <div><p className="eyebrow">Our story</p><h2>A love for the land.<br />A way of <em>life.</em></h2></div>
          <div className="story-copy"><p>For us, a farm is more than a place. It’s a relationship with the soil beneath our feet, the animals in our care, and the people around our table.</p><p>RamDhara brings that spirit to life — with Indian roots, thoughtful care, and a belief that the simplest things deserve our greatest attention.</p><a className="text-link" href="#values">Discover what matters to us <span>↗</span></a></div>
        </section>
        <section id="offerings" className="offerings section-wrap">
          <div className="section-heading"><div><p className="eyebrow">From our farm</p><h2>Everyday goodness.<br /><em>Naturally.</em></h2></div><p>From the first light to the last chore,<br />care goes into everything we do.</p></div>
          <div className="offering-grid">{offerings.map(item => <article className="offering" key={item.number}><div className="card-top"><NatureIcon kind={item.icon} /><span>{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p><a className="text-link" href="#contact">Enquire about availability <span>↗</span></a></article>)}</div>
        </section>
        <section id="values" className="approach section-wrap"><div className="approach-symbol"><NatureIcon /></div><p className="eyebrow">The RamDhara way</p><h2>When we care for nature,<br /><em>goodness follows.</em></h2><p>Respect for the land. Attention to our animals.<br />A thoughtful approach to every day on the farm.</p><div className="principles"><span>01 &nbsp; Care comes first</span><span>02 &nbsp; Follow the seasons</span><span>03 &nbsp; Stay close to our roots</span></div></section>
        <section id="contact" className="contact section-wrap"><div><p className="eyebrow">Let’s connect</p><h2>Good relationships<br />start with <em>hello.</em></h2></div><div><p>Interested in what’s growing at RamDhara?<br />We look forward to sharing more of our farm with you.</p><div className="contact-note"><NatureIcon /><span>Our contact details are coming soon.<br />Come back to connect with the farm.</span></div></div></section>
      </main>
      <footer><a className="footer-brand" href="#home">RamDhara <span>FARMS</span></a><p>Rooted in nature, raised with care.</p><span>© {new Date().getFullYear()} RamDhara Farms</span><a href="#home">Back to top ↑</a></footer>
    </>
  )
}
export default App
