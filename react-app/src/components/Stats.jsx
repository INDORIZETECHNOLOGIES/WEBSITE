export default function Stats() {
  return (
    <section className="section stats-section" id="stats" aria-labelledby="stats-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Our Impact</div>
          <h2 className="section-title" id="stats-heading">Results That <span className="gradient-text-animated">Speak for Themselves</span></h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card reveal-scale" id="stat-card-1">
            <div className="stat-icon" aria-hidden="true">🏢</div>
            <div className="stat-value"><span className="stat-big counter" data-target="500">0</span><span className="stat-sfx">+</span></div>
            <div className="stat-label-big">Enterprises Served</div>
            <div className="stat-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><div className="stat-bar-fill" style={{ '--w': '85%' }}></div></div>
          </div>
          <div className="stat-card reveal-scale delay-1" id="stat-card-2">
            <div className="stat-icon" aria-hidden="true">⭐</div>
            <div className="stat-value"><span className="stat-big counter" data-target="98">0</span><span className="stat-sfx">%</span></div>
            <div className="stat-label-big">Client Satisfaction Rate</div>
            <div className="stat-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"><div className="stat-bar-fill" style={{ '--w': '98%' }}></div></div>
          </div>
          <div className="stat-card reveal-scale delay-2" id="stat-card-3">
            <div className="stat-icon" aria-hidden="true">🤖</div>
            <div className="stat-value"><span className="stat-big counter" data-target="12">0</span><span className="stat-sfx">+</span></div>
            <div className="stat-label-big">AI Products Deployed</div>
            <div className="stat-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><div className="stat-bar-fill" style={{ '--w': '70%' }}></div></div>
          </div>
          <div className="stat-card reveal-scale delay-3" id="stat-card-4">
            <div className="stat-icon" aria-hidden="true">🌐</div>
            <div className="stat-value"><span className="stat-big counter" data-target="4">0</span><span className="stat-sfx">+</span></div>
            <div className="stat-label-big">Industry Verticals</div>
            <div className="stat-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><div className="stat-bar-fill" style={{ '--w': '60%' }}></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
