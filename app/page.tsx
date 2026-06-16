'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Girineza Honoré</div>
        <div className="nav-tag">Customer Success · LadX Application</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">Work Samples & Achievements</div>
        <h1>Owning the<br/><span>customer journey</span><br/>end to end.</h1>
        <p className="hero-sub">
          Three real examples of how I have resolved issues fast, built systems that stop repeat problems,
          tracked feedback, and kept customers satisfied — across enterprise tech, BPO, and team leadership.
        </p>
        <div className="hero-meta">
          <span>📍 Kigali, Rwanda</span>
          <span>📧 honoregirineza35@gmail.com</span>
          <span>📞 +250 789 092 774</span>
          <a href="https://ai-product-portfolio-tau-navy.vercel.app/" target="_blank" rel="noopener noreferrer">↗ Full Portfolio</a>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stats-inner">
          <div className="stat-item reveal">
            <div className="stat-num">95%+</div>
            <div className="stat-label">Customer Satisfaction Rating</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-num">30%</div>
            <div className="stat-label">Reduction in Resolution Time</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-num">4+</div>
            <div className="stat-label">Years Owning Customer Experiences</div>
          </div>
        </div>
      </div>

      {/* WORK SAMPLES */}
      <section className="section">
        <div className="section-eyebrow">Work Samples</div>
        <div className="section-title">Three examples that tell the story.</div>

        {/* CASE 1 */}
        <div className="case-card reveal">
          <div className="case-number">Case 01</div>
          <div className="case-title">Building SOPs & Knowledge Bases That Fixed Root Causes</div>
          <div className="case-meta">CCI – Customer Contact International · Team Lead · Feb 2021 – Jun 2022</div>

          <div className="case-grid">
            <div className="case-block">
              <div className="case-block-label">The Problem</div>
              <p>The team was handling the same customer complaints every day with no consistent resolution path. Agents solved issues from scratch each time — long handling times, inconsistent outcomes, and customers calling back with the same problem a week later.</p>
            </div>
            <div className="case-block">
              <div className="case-block-label">What I Built</div>
              <ul className="action-list">
                <li>A structured knowledge base with step-by-step resolution guides for every top recurring issue type</li>
                <li>SOPs for escalation: when to escalate, who to escalate to, what information to include</li>
                <li>A daily feedback logging system feeding weekly reports to management</li>
                <li>A customer follow-up process so escalated cases were closed with the client — not just internally</li>
              </ul>
            </div>
          </div>

          <div className="case-block-label">Outcomes</div>
          <div className="outcomes">
            <span className="outcome-pill">↓ 30% average resolution time</span>
            <span className="outcome-pill">95%+ CSAT sustained</span>
            <span className="outcome-pill">Repeat complaints declined</span>
            <span className="outcome-pill">Team consistency improved</span>
          </div>
        </div>

        {/* CASE 2 */}
        <div className="case-card reveal">
          <div className="case-number">Case 02</div>
          <div className="case-title">End-to-End Enterprise Client Experience — Microsoft 365</div>
          <div className="case-meta">Microsoft 365 · Technical Support Engineer (SCIM) · Jan 2025 – Present</div>

          <div className="case-grid">
            <div className="case-block">
              <div className="case-block-label">The Context</div>
              <p>Managing end-to-end customer success for enterprise clients on Microsoft 365 SCIM deployments — environments where any service disruption has immediate, serious business impact. Zero tolerance for issues falling through the cracks.</p>
            </div>
            <div className="case-block">
              <div className="case-block-label">How I Managed It</div>
              <ul className="action-list">
                <li>Every case tracked in ZenDesk from first contact to client sign-off — nothing closed until the client confirmed resolution</li>
                <li>Recurring pain points logged, analysed, and escalated to engineering with clear documentation — fixed at product level, not just case by case</li>
                <li>Multilingual support delivered across time zones, adapting to each client's technical level</li>
                <li>Resolution guides built and maintained for the wider team — reducing future handling time</li>
              </ul>
            </div>
          </div>

          <div className="case-block-label">Outcomes</div>
          <div className="outcomes">
            <span className="outcome-pill">High CSAT across global client base</span>
            <span className="outcome-pill">Zero critical disruptions</span>
            <span className="outcome-pill">Recurring issues reduced</span>
            <span className="outcome-pill">Team knowledge base built</span>
          </div>
        </div>

        {/* CASE 3 */}
        <div className="case-card reveal">
          <div className="case-number">Case 03</div>
          <div className="case-title">High-Volume Multilingual Customer Ownership — Airtel Rwanda</div>
          <div className="case-meta">ISON BPO Ltd · Customer Care Agent · Feb 2018 – May 2020</div>

          <div className="case-grid">
            <div className="case-block">
              <div className="case-block-label">The Context</div>
              <p>Frontline customer support for Airtel Rwanda — mobile money, SIM provisioning, and network troubleshooting — hundreds of interactions per week across English, French, Kinyarwanda, and Kiswahili.</p>
            </div>
            <div className="case-block">
              <div className="case-block-label">How I Owned It</div>
              <ul className="action-list">
                <li>Every interaction logged in CRM with full case history, resolution steps, and follow-up notes</li>
                <li>Communication adapted naturally across languages and customer types — from technical issues to billing disputes</li>
                <li>Recurring complaint patterns flagged to team leads with enough detail to act on</li>
                <li>Contributed to process improvements that reduced repeat contacts on specific issue types</li>
              </ul>
            </div>
          </div>

          <div className="case-block-label">Outcomes</div>
          <div className="outcomes">
            <span className="outcome-pill">Top-rated agent for CSAT</span>
            <span className="outcome-pill">Top first-call resolution</span>
            <span className="outcome-pill">4-language support delivered</span>
            <span className="outcome-pill">Process improvements flagged</span>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section approach-section">
        <div className="section-eyebrow">My Approach</div>
        <div className="section-title">How I think about customer success.</div>
        <div className="approach-grid">
          <div className="approach-card reveal">
            <div className="approach-icon">🎯</div>
            <h3>Own it completely</h3>
            <p>Every case I touch is mine until the customer confirms it is resolved. I do not pass things on and forget about them.</p>
          </div>
          <div className="approach-card reveal">
            <div className="approach-icon">🔁</div>
            <h3>Fix root causes, not symptoms</h3>
            <p>If the same problem keeps coming back, that is a system failure. I track patterns and push for fixes that actually stop the repeat.</p>
          </div>
          <div className="approach-card reveal">
            <div className="approach-icon">📊</div>
            <h3>Report clearly, act fast</h3>
            <p>Leadership needs visibility. I track feedback, compile it into clear reports, and flag what needs to change before it becomes a bigger problem.</p>
          </div>
          <div className="approach-card reveal">
            <div className="approach-icon">🌍</div>
            <h3>Communicate across contexts</h3>
            <p>Fluent in English, French, Kinyarwanda, and Kiswahili. I adapt to whoever I am talking to — from a technical admin to a first-time user.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>Girineza Honoré · Applying for Customer Success Manager — Full Time · <a href="mailto:honoregirineza35@gmail.com">honoregirineza35@gmail.com</a></p>
        <p style={{ marginTop: '8px' }}>
          <a href="https://ai-product-portfolio-tau-navy.vercel.app/" target="_blank" rel="noopener noreferrer">↗ Full Portfolio</a>
        </p>
      </footer>
    </>
  )
}
