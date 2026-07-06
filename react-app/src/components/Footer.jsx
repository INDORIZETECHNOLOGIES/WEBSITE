export default function Footer() {
  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="footer-top-bar" aria-hidden="true"></div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo" aria-label="IndorseTech">
              <div className="logo-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="url(#lg2)" />
                  <defs>
                    <linearGradient id="lg2" x1="0" y1="0" x2="28" y2="28">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="logo-text">Indorse<span className="logo-accent">Tech</span></span>
            </a>
            <p className="footer-tagline">Empowering enterprises worldwide through intelligent digital transformation.</p>
            <address className="footer-contact" style={{ fontStyle: 'normal' }}>
              <a href="tel:+918669039635">+91 86690 39635</a>
              <a href="mailto:arpitrautela01@indorsetech.com">arpitrautela01@indorsetech.com</a>
            </address>
          </div>
          <nav className="footer-nav-group" aria-label="Solutions links">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#solutions">Process Automation</a></li>
              <li><a href="#solutions">Artificial Intelligence</a></li>
              <li><a href="#solutions">Social Media</a></li>
              <li><a href="#solutions">Healthcare</a></li>
              <li><a href="#solutions">Commute &amp; Logistics</a></li>
            </ul>
          </nav>
          <nav className="footer-nav-group" aria-label="Products links">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Chat Support Agent</a></li>
              <li><a href="#products">AVI Voice Agent</a></li>
              <li><a href="#products">Medical Scribe</a></li>
              <li><a href="#products">Paralegal Doc Review</a></li>
              <li><a href="#products">Metro Ticketing</a></li>
            </ul>
          </nav>
          <nav className="footer-nav-group" aria-label="Company links">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#stats">Our Impact</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2025 IndorseTech. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
