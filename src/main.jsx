import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const profile = {
  name: 'CHEN TU-YI',
  role: 'Machine Learning & Software Engineer',
  intro: '我從真實資料裡找出問題，用模型做出判斷，再把結果變成真正能被使用的系統。',
  location: 'Kaohsiung, Taiwan',
  email: 'chentuyi1210@gmail.com',
  availability: 'OPEN TO ML / SOFTWARE OPPORTUNITIES',
}

const projects = [
  {
    number: '01',
    year: '2026',
    title: '智慧工廠決策系統',
    english: 'Smart Factory Decision Support',
    type: 'Machine Learning / Industrial AI',
    description: '整合 ERP、採購、製令與庫存資料，建立 Lead Time 與需求預測管線，將缺料風險、JIT 採購時點與製程瓶頸轉成可執行的決策。',
    result: 'Test MAPE 8.07%',
    color: 'ocean',
    mark: '智',
    href: 'https://github.com/chen-tu-yi/C1',
  },
  {
    number: '02',
    year: '2025',
    title: '跨域視覺模型研究',
    english: 'Grounding DINO Generalization',
    type: 'Computer Vision / Research',
    description: '以 Grounding DINO 評估工業瑕疵、醫療影像與數位病理等未知領域，分析正負提示詞與 zero-shot prompt design 對模型泛化能力的影響。',
    result: '3 unseen domains',
    color: 'alpine',
    mark: '視',
    href: 'https://github.com/chen-tu-yi',
  },
  {
    number: '03',
    year: '2025',
    title: '量化交易研究',
    english: 'VCP Trading Research',
    type: 'Data Engineering / Quant Research',
    description: '將 VCP 型態、相對強度、均線、波動與成交量轉成可計算特徵，以時間序列切分驗證 XGBoost 模型，避免 look-ahead bias。',
    result: 'Time-series validated',
    color: 'coast',
    mark: '勢',
    href: 'https://github.com/chen-tu-yi/trading-project-Stan',
  },
]

const experience = [
  { period: '2026.07 — NOW', company: 'Delta Electronics', role: 'Software Development Intern', note: 'Spring · JPA · SQL · Manufacturing systems' },
  { period: '2025 — 2026', company: 'Industry–Academia Project', role: 'Machine Learning Engineer', note: '45K+ records · XGBoost · ERP analytics' },
  { period: '2026', company: 'ICASI / Sustainability Conference', role: 'Oral Presenter · Best Paper Award', note: 'Smart manufacturing decision support' },
  { period: '2023 — NOW', company: 'National Sun Yat-sen University', role: 'B.S. in Computer Science', note: 'ML · Computer vision · Optimization' },
]

const skills = ['Python / Java / SQL', 'Machine Learning', 'Feature Engineering', 'Computer Vision', 'XGBoost / scikit-learn', 'Spring / REST API', 'ERP / Database Design', 'Optimization / MILP', 'React / Vue', 'Model Evaluation', 'Data Visualization', 'System Integration']

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
            <span className="line"><span>FROM DATA</span></span>
            <span className="line offset"><span>TO <em>decisions</em></span></span>
            <span className="line"><span>THAT WORK.</span></span>
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
                  <a href={project.href} target="_blank" rel="noreferrer" className="project-open" aria-label={`查看 ${project.title}`}><Arrow diagonal /></a>
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
            <p className="big-copy">從資料看見<span>「問題」</span>，<br />用模型走向<span>「決策」</span>，<br />再讓系統真正落地。</p>
          </div>
          <div className="about-grid" data-reveal>
            <div className="portrait" role="img" aria-label="個人照片預留位置">
              <div className="portrait-shape"><span>YOUR<br />PHOTO<br />HERE</span></div>
              <span className="photo-note">REPLACE WITH YOUR PORTRAIT ↗</span>
            </div>
            <div className="bio">
              <p>嗨，我是 <strong>陳圖億</strong>，目前就讀中山大學資訊工程學系，也在台達電製造支援系統整合部門實習。我的工作橫跨資料分析、Machine Learning、最佳化與系統開發。</p>
              <p>我曾連續兩個暑假到潛店打工換宿。那段經驗讓我學會在陌生環境快速適應、主動補位，也能和不同背景的人合作。潛水讓我習慣在未知裡保持冷靜，爬山則提醒我把長路拆成下一個可以完成的步驟。</p>
              <p>我希望把預測再往前推一步，讓模型真正參與決策與行動，持續往智慧製造、Autonomous Systems、Robotics 與 Physical AI 發展。</p>
              <a className="text-link" href="#experience">查看完整經歷 <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <p className="eyebrow" data-reveal>03 / EXPERIENCE</p>
          <div className="experience-wrap">
            <h2 data-reveal>MY<br />JOURNEY</h2>
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
            <p>HAVE A HARD PROBLEM IN MIND?</p>
            <h2>LET'S SOLVE<br /><em>SOMETHING</em><br />REAL.</h2>
          </div>
          <a className="email-link" href={`mailto:${profile.email}`} data-reveal>
            <span>{profile.email}</span><Arrow diagonal />
          </a>
          <footer>
            <span>© 2026 {profile.name}</span>
            <div><a href="https://github.com/chen-tu-yi" target="_blank" rel="noreferrer">GITHUB</a><a href="https://github.com/chen-tu-yi/icasi-paper" target="_blank" rel="noreferrer">ICASI PAPER</a></div>
            <a href="#top">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
