export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <div className="about-left reveal-left">
            <div className="section-label">About IndorseTech</div>
            <h2 className="section-title" id="about-heading">Empowering Your <span className="gradient-text-animated">Digital Journey</span></h2>
            <p className="section-desc">We streamline complex business operations by leveraging Process Automation, Technology Solutions, and Artificial Intelligence. Our commitment to continuous innovation ensures we consistently deliver transformative value to every client.</p>
            <p className="section-desc">Worldwide, leading enterprises trust IndorseTech's technology to develop and deploy intricate business processes — from onboarding to service requests across numerous industry applications.</p>
            <a href="#contact" className="btn-primary magnetic btn-ripple" id="about-cta">Partner With Us →</a>
          </div>
          <div className="about-right reveal-right">
            <div className="about-cards">
              <div className="about-card tilt-card card-shine reveal delay-1" id="about-card-1">
                <div className="about-card-icon" aria-hidden="true">⚙️</div>
                <h3>Process Automation</h3>
                <p>Boost productivity by automating complex business operations end-to-end.</p>
              </div>
              <div className="about-card tilt-card card-shine reveal delay-2" id="about-card-2">
                <div className="about-card-icon" aria-hidden="true">🚀</div>
                <h3>Continuous Innovation</h3>
                <p>Cutting-edge innovation drives exceptional results and stays ahead of the curve.</p>
              </div>
              <div className="about-card tilt-card card-shine reveal delay-1" id="about-card-3">
                <div className="about-card-icon" aria-hidden="true">🛠️</div>
                <h3>Technology Solutions</h3>
                <p>Tailored tech solutions built for complex enterprise-grade business needs.</p>
              </div>
              <div className="about-card tilt-card card-shine reveal delay-2" id="about-card-4">
                <div className="about-card-icon" aria-hidden="true">🧠</div>
                <h3>Artificial Intelligence</h3>
                <p>AI-enhanced insights for smarter, faster strategic decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
