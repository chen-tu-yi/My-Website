import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const profile = {
  name: 'CHEN TU-YI',
  role: 'Machine Learning & Software Engineer',
  intro: '我是陳圖億，中山大學資訊工程系學生，目前在台達電擔任軟體開發實習生。專注於機器學習、資料分析與系統開發，喜歡把真實問題整理成可以落地的解法。',
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
    type: 'Machine Learning / Smart Manufacturing',
    description: '分析工廠的採購、庫存與生產資料，預估物料何時到貨、未來需要多少，以及哪些訂單可能缺料，協助現場人員提早調整採購與生產安排。',
    result: '平均誤差約 1.12 天',
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
    description: '測試視覺模型面對未曾訓練過的工業瑕疵、醫療影像與數位病理時，能否正確找出目標；並比較不同文字描述方式，找出更穩定的使用方法。',
    result: '跨 3 種專業影像場域',
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
    description: '依照成長股的趨勢與價格收斂型態，建立美股資料蒐集和篩選流程；再利用股價位置、成交量與產業強度等資訊，嘗試找出可能突破的股票。',
    result: '條件篩選＋模型研究',
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
            <div className="hero-intro">
              <span>{profile.role}</span>
              <p>{profile.intro}</p>
            </div>
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
