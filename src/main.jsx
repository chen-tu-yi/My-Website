import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const profile = {
  name: 'LIN YU',
  role: 'Creative Developer & Product Designer',
  intro: '我把複雜的產品想法，做成清楚、有性格，而且真的好用的數位體驗。',
  location: 'Taipei, Taiwan',
  email: 'hello@linyu.design',
  availability: 'OPEN FOR SELECTED PROJECTS',
}

const projects = [
  {
    number: '01',
    year: '2026',
    title: '島嶼聲景',
    english: 'Island Soundscape',
    type: 'Interactive Web / Creative Code',
    description: '把臺灣各地的環境錄音轉譯成可探索的視覺地圖，讓聲音成為旅行的另一種入口。',
    result: '12K+ monthly visits',
    color: 'ocean',
    mark: '聲',
  },
  {
    number: '02',
    year: '2025',
    title: '分秒之間',
    english: 'Between Seconds',
    type: 'Product Design / Development',
    description: '為獨立工作者打造的時間管理產品，從研究、互動設計到前端實作完整落地。',
    result: 'Product of the Day',
    color: 'alpine',
    mark: '秒',
  },
  {
    number: '03',
    year: '2025',
    title: '共食計畫',
    english: 'Common Table',
    type: 'Brand System / Web Design',
    description: '重新設計社區共食平台，讓一頓飯成為鄰里連結與剩食循環的起點。',
    result: '42% signup uplift',
    color: 'coast',
    mark: '食',
  },
]

const experience = [
  { period: '2024 — NOW', company: 'Freelance / Independent', role: 'Creative Developer & Designer', note: 'Brand, product, interactive web' },
  { period: '2022 — 2024', company: 'Morrow Studio', role: 'Senior Product Designer', note: 'Led 4 product launches' },
  { period: '2020 — 2022', company: 'Blank Corp.', role: 'Frontend Developer', note: 'Design system & web products' },
]

const skills = ['Creative Direction', 'UI / UX Design', 'React', 'Motion Design', 'Design Systems', 'Prototyping', 'WebGL', 'Brand Strategy']

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [time, setTime] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('zh-TW', {
      timeZone: 'Asia/Taipei', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    }).format(new Date()))
    tick()
    const timer = setInterval(tick, 1000)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll', `${max > 0 ? (window.scrollY / max) * 100 : 0}%`)
    }
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => {
      clearInterval(timer)
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="scroll-progress" />
      <header className="site-header">
        <a className="logo" href="#top" aria-label="回到首頁">LY<span>®</span></a>
        <div className="header-meta">
          <span>{profile.location}</span>
          <span>{time} CST</span>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="主要導覽">
          <a href="#work" onClick={closeMenu}>作品</a>
          <a href="#about" onClick={closeMenu}>關於</a>
          <a href="#experience" onClick={closeMenu}>經歷</a>
          <a href="#contact" onClick={closeMenu}>聯絡</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="availability"><i /> {profile.availability}</div>
          <h1 id="hero-title">
            <span className="line"><span>IDEAS THAT</span></span>
            <span className="line offset"><span>MOVE <em>people</em></span></span>
            <span className="line"><span>&amp; PIXELS.</span></span>
          </h1>
          <div className="hero-bottom">
            <p>{profile.intro}</p>
            <a className="round-link" href="#work" aria-label="查看精選作品"><Arrow /></a>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>DIVE DEEP · CLIMB HIGH · </span>
            <b>✳</b>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <span key={copy}>DIVE BELOW THE SURFACE <b>〜</b> CLIMB ABOVE THE CLOUDS <b>△</b> MAKE IT MEMORABLE <b>✦</b> </span>
            ))}
          </div>
        </div>

        <section className="projects section" id="work">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>精選作品<br /><span>不是填滿版面，</span><br />而是留下印象。</h2>
          </header>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number} data-reveal>
                <div className={`project-visual ${project.color}`}>
                  <span className="project-mark">{project.mark}</span>
                  <span className="project-index">PROJECT / {project.number}</span>
                  <div className="orbit"><span /></div>
                  <a href="#contact" className="project-open" aria-label={`了解 ${project.title}`}><Arrow diagonal /></a>
                </div>
                <div className="project-copy">
                  <div className="project-topline"><span>{project.type}</span><span>{project.year}</span></div>
                  <h3>{project.title}<small>{project.english}</small></h3>
                  <p>{project.description}</p>
                  <div className="project-result"><span>OUTCOME</span><strong>{project.result}</strong></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-intro" data-reveal>
            <p className="eyebrow">02 / ABOUT</p>
            <p className="big-copy">我相信好的設計不只是<br />看起來<span>「對」</span>，更要讓人<br />感覺<span>「有意思」</span>。</p>
          </div>
          <div className="about-grid" data-reveal>
            <div className="portrait" role="img" aria-label="個人照片預留位置">
              <div className="portrait-shape"><span>YOUR<br />PHOTO<br />HERE</span></div>
              <span className="photo-note">REPLACE WITH YOUR PORTRAIT ↗</span>
            </div>
            <div className="bio">
              <p>嗨，我是 <strong>{profile.name}</strong>。目前在台北工作，橫跨產品設計與前端開發。我喜歡參與從「為什麼要做」到「真的上線」的完整過程。</p>
              <p>過去 6 年，我和新創團隊、文化組織與品牌合作，把模糊的需求整理成可以被理解、使用，也值得記住的體驗。</p>
              <a className="text-link" href="#experience">查看完整經歷 <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <p className="eyebrow" data-reveal>03 / EXPERIENCE</p>
          <div className="experience-wrap">
            <h2 data-reveal>WORK<br />HISTORY</h2>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-row" key={item.period} data-reveal>
                  <span className="period">{item.period}</span>
                  <div><h3>{item.company}</h3><p>{item.role}</p></div>
                  <span className="note">{item.note}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="skills" data-reveal>
            {skills.map((skill, index) => <span key={skill}>{String(index + 1).padStart(2, '0')} {skill}</span>)}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-heading" data-reveal>
            <p>HAVE A PROJECT IN MIND?</p>
            <h2>LET'S MAKE<br /><em>SOMETHING</em><br />MATTER.</h2>
          </div>
          <a className="email-link" href={`mailto:${profile.email}`} data-reveal>
            <span>{profile.email}</span><Arrow diagonal />
          </a>
          <footer>
            <span>© 2026 {profile.name}</span>
            <div><a href="#top">LINKEDIN</a><a href="#top">GITHUB</a><a href="#top">INSTAGRAM</a></div>
            <a href="#top">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
