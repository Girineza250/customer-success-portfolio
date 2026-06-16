export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-10 py-5 bg-black/92 backdrop-blur-lg border-b border-gray-700">
        <div className="font-black text-lg text-yellow-300" style={{ letterSpacing: '-0.02em' }}>Girineza Honoré</div>
        <div className="text-xs text-gray-500 border border-gray-700 px-3 py-1 rounded-full">Customer Success · LadX Application</div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-start px-10 pt-32 pb-20 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-0.5 bg-yellow-300"></div>
          <span className="text-xs font-semibold tracking-widest text-yellow-300 uppercase">Work Samples & Achievements</span>
        </div>
        <h1 className="text-6xl font-black leading-tight mb-7 max-w-2xl" style={{ letterSpacing: '-0.03em' }}>
          Owning the<br/><span className="text-yellow-300">customer journey</span><br/>end to end.
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mb-12 leading-relaxed">
          Three real examples of how I have resolved issues fast, built systems that stop repeat problems,
          tracked feedback, and kept customers satisfied across enterprise tech, BPO, and team leadership.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
          <span>📍 Kigali, Rwanda</span>
          <span>📧 honoregirineza35@gmail.com</span>
          <span>📞 +250 789 092 774</span>
          <a href="https://ai-product-portfolio-tau-navy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 underline hover:no-underline">↗ Full Portfolio</a>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-gray-900 border-y border-gray-700 px-10 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-10 md:gap-20">
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-300 mb-2">95%+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Customer Satisfaction Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-300 mb-2">30%</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Reduction in Resolution Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-300 mb-2">4+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Years Owning Customer Experiences</div>
          </div>
        </div>
      </div>

      {/* WORK SAMPLES */}
      <section className="max-w-4xl mx-auto px-10 py-20">
        <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-3">Work Samples</div>
        <h2 className="text-3xl font-bold mb-12 pb-5 border-b border-gray-700" style={{ letterSpacing: '-0.02em' }}>Three examples that tell the story.</h2>

        {/* CASE 1 */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 mb-7 relative overflow-hidden hover:border-gray-600 transition">
          <div className="absolute top-0 left-0 w-1 h-full bg-yellow-300"></div>
          <div className="text-xs font-bold text-yellow-300 mb-3 tracking-widest uppercase">Case 01</div>
          <h3 className="text-2xl font-bold mb-2">Building SOPs & Knowledge Bases That Fixed Root Causes</h3>
          <div className="text-sm text-gray-500 mb-7 pb-5 border-b border-gray-700">CCI – Customer Contact International · Team Lead · Feb 2021 – Jun 2022</div>

          <div className="grid grid-cols-2 gap-7 mb-7">
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">The Problem</div>
              <p className="text-sm text-gray-300 leading-relaxed">The team was handling the same customer complaints every day with no consistent resolution path. Agents solved issues from scratch each time — long handling times, inconsistent outcomes, and customers calling back with the same problem a week later.</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">What I Built</div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>→ A structured knowledge base with step-by-step resolution guides for every top recurring issue type</li>
                <li>→ SOPs for escalation: when to escalate, who to escalate to, what information to include</li>
                <li>→ A daily feedback logging system feeding weekly reports to management</li>
                <li>→ A customer follow-up process so escalated cases were closed with the client — not just internally</li>
              </ul>
            </div>
          </div>

          <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">Outcomes</div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">↓ 30% average resolution time</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">95%+ CSAT sustained</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">Repeat complaints declined</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">Team consistency improved</span>
          </div>
        </div>

        {/* CASE 2 */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 mb-7 relative overflow-hidden hover:border-gray-600 transition">
          <div className="absolute top-0 left-0 w-1 h-full bg-yellow-300"></div>
          <div className="text-xs font-bold text-yellow-300 mb-3 tracking-widest uppercase">Case 02</div>
          <h3 className="text-2xl font-bold mb-2">End-to-End Enterprise Client Experience — Microsoft 365</h3>
          <div className="text-sm text-gray-500 mb-7 pb-5 border-b border-gray-700">Microsoft 365 · Technical Support Engineer (SCIM) · Jan 2025 – Present</div>

          <div className="grid grid-cols-2 gap-7 mb-7">
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">The Context</div>
              <p className="text-sm text-gray-300 leading-relaxed">Managing end-to-end customer success for enterprise clients on Microsoft 365 SCIM deployments — environments where any service disruption has immediate, serious business impact. Zero tolerance for issues falling through the cracks.</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">How I Managed It</div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>→ Every case tracked in ZenDesk from first contact to client sign-off — nothing closed until the client confirmed resolution</li>
                <li>→ Recurring pain points logged, analysed, and escalated to engineering with clear documentation — fixed at product level, not just case by case</li>
                <li>→ Multilingual support delivered across time zones, adapting to each client's technical level</li>
                <li>→ Resolution guides built and maintained for the wider team — reducing future handling time</li>
              </ul>
            </div>
          </div>

          <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">Outcomes</div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">High CSAT across global client base</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">Zero critical disruptions</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">Recurring issues reduced</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">Team knowledge base built</span>
          </div>
        </div>

        {/* CASE 3 */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 mb-7 relative overflow-hidden hover:border-gray-600 transition">
          <div className="absolute top-0 left-0 w-1 h-full bg-yellow-300"></div>
          <div className="text-xs font-bold text-yellow-300 mb-3 tracking-widest uppercase">Case 03</div>
          <h3 className="text-2xl font-bold mb-2">High-Volume Multilingual Customer Ownership — Airtel Rwanda</h3>
          <div className="text-sm text-gray-500 mb-7 pb-5 border-b border-gray-700">ISON BPO Ltd · Customer Care Agent · Feb 2018 – May 2020</div>

          <div className="grid grid-cols-2 gap-7 mb-7">
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">The Context</div>
              <p className="text-sm text-gray-300 leading-relaxed">Frontline customer support for Airtel Rwanda — mobile money, SIM provisioning, and network troubleshooting — hundreds of interactions per week across English, French, Kinyarwanda, and Kiswahili.</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">How I Owned It</div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>→ Every interaction logged in CRM with full case history, resolution steps, and follow-up notes</li>
                <li>→ Communication adapted naturally across languages and customer types — from technical issues to billing disputes</li>
                <li>→ Recurring complaint patterns flagged to team leads with enough detail to act on</li>
                <li>→ Contributed to process improvements that reduced repeat contacts on specific issue types</li>
              </ul>
            </div>
          </div>

          <div className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-widest">Outcomes</div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">Top-rated agent for CSAT</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">Top first-call resolution</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">4-language support delivered</span>
            <span className="bg-yellow-300/10 border border-yellow-300/25 text-yellow-300 text-xs px-3 py-1 rounded-full">Process improvements flagged</span>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-4xl mx-auto px-10 py-20">
        <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-3">My Approach</div>
        <h2 className="text-3xl font-bold mb-12 pb-5 border-b border-gray-700" style={{ letterSpacing: '-0.02em' }}>How I think about customer success.</h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-7">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-bold mb-3">Own it completely</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Every case I touch is mine until the customer confirms it is resolved. I do not pass things on and forget about them.</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-7">
            <div className="text-2xl mb-3">🔁</div>
            <h3 className="font-bold mb-3">Fix root causes, not symptoms</h3>
            <p className="text-sm text-gray-400 leading-relaxed">If the same problem keeps coming back, that is a system failure. I track patterns and push for fixes that actually stop the repeat.</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-7">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-bold mb-3">Report clearly, act fast</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Leadership needs visibility. I track feedback, compile it into clear reports, and flag what needs to change before it becomes a bigger problem.</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-7">
            <div className="text-2xl mb-3">🌍</div>
            <h3 className="font-bold mb-3">Communicate across contexts</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Fluent in English, French, Kinyarwanda, and Kiswahili. I adapt to whoever I am talking to — from a technical admin to a first-time user.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-700 px-10 py-10 text-center">
        <p className="text-sm text-gray-400">
          Girineza Honoré · Applying for Customer Success Manager — Full Time ·{' '}
          <a href="mailto:honoregirineza35@gmail.com" className="text-yellow-300 hover:underline">honoregirineza35@gmail.com</a>
        </p>
        <p className="text-sm text-gray-400 mt-2">
          <a href="https://ai-product-portfolio-tau-navy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">↗ Full Portfolio</a>
        </p>
      </footer>
    </div>
  )
}
