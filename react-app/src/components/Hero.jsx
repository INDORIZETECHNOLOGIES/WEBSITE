export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      {/* Sculptural ring */}
      <div className="hero-sculpture" aria-hidden="true">
        <div className="sculpture-ring ring-1"></div>
        <div className="sculpture-ring ring-2"></div>
        <div className="sculpture-ring ring-3"></div>
        <div className="ring-core"></div>
        <div className="ring-gem"></div>
      </div>
      <div className="hero-glow" aria-hidden="true"></div>
      {/* Locomotive Style Hero Layout */}
      <div className="loco-hero" id="loco-hero">

        {/* Full Bleed Video Background */}
        <div className="loco-video-wrapper">
          <video src="https://cdn.coverr.co/videos/coverr-typing-code-1568/1080p.mp4" className="loco-bg-media loco-real-video" autoPlay loop muted playsInline></video>
          <div className="loco-overlay"></div>
        </div>

        {/* Typography Content */}
        <div className="loco-content">
          <div className="loco-top-bar animate-fade-up">
            <span className="loco-badge">Next-Gen Technology</span>
            <span className="loco-tag">Scroll to Explore ↓</span>
          </div>

          {/* Canvas sits ONLY behind the title text */}
          <div className="loco-title-wrap">
            <canvas id="hero-particles" aria-hidden="true"></canvas>
            <h1 className="loco-title" id="loco-title">
              <span className="line-wrap"><span className="line-inner">The Smarter,</span></span>
              <span className="line-wrap"><span className="line-inner italic-text">AI-Powered</span></span>
              <span className="line-wrap"><span className="line-inner">Enterprise Platform.</span></span>
            </h1>
          </div>

          <div className="loco-footer-row animate-fade-up delay-2">
            <div className="loco-desc">
              Accelerate your digital transformation with our comprehensive suite of advanced AI models and process automation tools.
            </div>
            <div className="loco-actions">
              <a href="#contact" className="btn-primary loco-btn magnetic btn-ripple">Request a Demo <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f7f6f3" /></svg>
      </div>
    </section>
  );
}
