export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title" id="contact-heading">Ready to <span className="gradient-text-animated">Elevate Your Business?</span></h2>
            <p className="section-desc">Let's explore how IndorseTech can support your digital transformation journey. Our experts are ready to build a solution tailored for you.</p>
            <div className="contact-info-list">
              <a href="tel:+918669039635" className="cinfo-card" id="contact-phone" aria-label="Call us">
                <div className="cinfo-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" /></svg></div>
                <div><div className="cinfo-label">Call Us</div><div className="cinfo-value">+91 86690 39635</div></div>
              </a>
              <a href="mailto:arpitrautela01@indorsetech.com" className="cinfo-card" id="contact-email" aria-label="Email us">
                <div className="cinfo-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
                <div><div className="cinfo-label">Email Us</div><div className="cinfo-value">arpitrautela01@indorsetech.com</div></div>
              </a>
              <button className="cinfo-card" id="open-chat-btn" type="button" aria-label="Open live chat">
                <div className="cinfo-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                <div><div className="cinfo-label">Live Chat</div><div className="cinfo-value">Chat with our support team <span className="online-dot" aria-label="Online">●</span></div></div>
              </button>
            </div>
          </div>
          <div className="contact-right reveal delay-2">
            <form className="contact-form" id="contact-form" noValidate aria-label="Contact form">
              <h3 className="form-title">Send Us a Message</h3>
              {/* Honeypot: hidden from humans, bots fill this in */}
              <input type="text" name="website" id="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }} />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="f-name">Full Name <span aria-hidden="true">*</span></label>
                  <input type="text" id="f-name" name="name" placeholder="John Doe" required autoComplete="name" maxLength="100" />
                </div>
                <div className="form-group">
                  <label htmlFor="f-email">Email Address <span aria-hidden="true">*</span></label>
                  <input type="email" id="f-email" name="email" placeholder="john@company.com" required autoComplete="email" maxLength="200" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="f-company">Company</label>
                <input type="text" id="f-company" name="company" placeholder="Your Company Name" autoComplete="organization" maxLength="150" />
              </div>
              <div className="form-group">
                <label htmlFor="f-interest">Area of Interest</label>
                <select id="f-interest" name="interest" defaultValue="">
                  <option value="">Select a solution...</option>
                  <option>Process Automation</option>
                  <option>Artificial Intelligence</option>
                  <option>Social Media Solutions</option>
                  <option>Healthcare Technology</option>
                  <option>Commute &amp; Logistics</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="f-message">Message <span aria-hidden="true">*</span></label>
                <textarea id="f-message" name="message" rows="4" placeholder="Tell us about your project..." required maxLength="2000"></textarea>
              </div>
              <div id="form-error" className="form-error" role="alert" aria-live="assertive" style={{ display: 'none' }}></div>
              <button type="submit" className="btn-primary btn-full" id="form-submit-btn">
                <span id="btn-text">Send Message</span>
                <svg id="btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                <span id="btn-spinner" style={{ display: 'none' }} aria-live="polite">⏳ Sending…</span>
              </button>
            </form>
            <div className="form-success" id="form-success" style={{ display: 'none' }} role="status" aria-live="polite">
              <div className="success-icon" aria-hidden="true">✅</div>
              <h3>Message Sent!</h3>
              <p>Thank you! We've received your message and will respond within 24 hours.</p>
              <button className="btn-secondary" id="reset-form-btn" style={{ marginTop: '16px' }}>Send Another →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
