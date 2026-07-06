export default function Solutions() {
  return (
    <section className="section solutions-section" id="solutions" aria-labelledby="solutions-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Our Solutions</div>
          <h2 className="section-title" id="solutions-heading">Business Technology <span className="gradient-text-animated">Solutions</span></h2>
          <p className="section-subtitle">Explore how our digital transformation platform can revolutionize your industry</p>
        </div>
        <div className="solutions-grid">
          <article className="solution-card tilt-card card-shine reveal" id="sol-social">
            <div className="sol-icon-wrap"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
            <span className="sol-tag">Social</span>
            <h3>Social Media</h3>
            <p>Revolutionizing growth with AI-powered, automated social media management at scale.</p>
            <ul className="sol-features" aria-label="Features"><li>Social Media Manager</li><li>Hyper Local Interest Communities</li></ul>
          </article>
          <article className="solution-card tilt-card card-shine reveal delay-1" id="sol-logistics">
            <div className="sol-icon-wrap"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></div>
            <span className="sol-tag">Logistics</span>
            <h3>Commute &amp; Logistics</h3>
            <p>Streamlining commute and supply chains with cutting-edge mobility software solutions.</p>
            <ul className="sol-features" aria-label="Features"><li>Metro / Bus Ticketing Solutions</li><li>Route Optimization Engine</li></ul>
          </article>
          <article className="solution-card tilt-card card-shine reveal delay-2" id="sol-ai">
            <div className="sol-icon-wrap"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg></div>
            <span className="sol-tag sol-tag-ai">AI</span>
            <h3>Artificial Intelligence</h3>
            <p>Empowering your future with innovative AI software solutions across every domain.</p>
            <ul className="sol-features" aria-label="Features"><li>Chat Support Agent for Businesses</li><li>Paralegal &amp; Document Review</li><li>Courtroom Scribe</li><li>Call Center AVI Voice Agent</li></ul>
          </article>
          <article className="solution-card tilt-card card-shine reveal delay-3" id="sol-health">
            <div className="sol-icon-wrap"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
            <span className="sol-tag sol-tag-health">Healthcare</span>
            <h3>Healthcare</h3>
            <p>Improving healthcare delivery with purpose-built, compliant digital solutions.</p>
            <ul className="sol-features" aria-label="Features"><li>Medical Scribe Solution</li><li>Medical Essentials Delivery for Providers</li></ul>
          </article>
        </div>
      </div>
    </section>
  );
}
