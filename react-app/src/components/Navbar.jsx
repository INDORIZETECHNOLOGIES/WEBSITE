export default function Navbar() {
  return (
    <nav id="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#home" className="logo" id="logo-link" aria-label="IndorseTech Home">
          <div className="logo-icon-wrap">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="url(#lg1)" />
              <defs>
                <linearGradient id="lg1" x1="0" y1="0" x2="28" y2="28">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">Indorse<span className="logo-accent">Tech</span></span>
        </a>
        <ul className="nav-links" id="nav-links" role="list">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#solutions" className="nav-link">Solutions</a></li>
          <li><a href="#products" className="nav-link">Products</a></li>
          <li><a href="#stats" className="nav-link">Impact</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <a href="#contact" className="btn-nav magnetic btn-ripple" id="nav-cta">Get Started →</a>
        <button className="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
