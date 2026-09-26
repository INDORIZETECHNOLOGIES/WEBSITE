"use client";

import Link from "next/link";

export default function Company() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "120px", minHeight: "100vh" }}>
      <div className="container">
        
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="section-label">COMPANY</div>
          <h1 className="section-title">
            About <span className="text-accent">Indorse</span>.
          </h1>
          
          <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "40px", marginTop: "48px" }}>
            <h2 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "16px" }}>Who We Are</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "24px" }}>
              We are a dedicated engineering team based in India, focused on building robust, compliance-heavy software products for regulated industries.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", lineHeight: 1.7 }}>
              [ Placeholder for founding story, background, and specific team details to be added. ]
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--accent)", marginBottom: "8px" }}>Location</div>
              <div style={{ fontSize: "1.125rem", color: "var(--text-primary)" }}>India</div>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--accent)", marginBottom: "8px" }}>Contact</div>
              <div style={{ fontSize: "1.125rem", color: "var(--text-primary)" }}>arpitrautela01@indorsetech.com</div>
              <div style={{ fontSize: "1.125rem", color: "var(--text-primary)" }}>+91 86690 39635</div>
            </div>
          </div>

          <div style={{ marginTop: "64px", textAlign: "center" }}>
            <Link
              href="/#contact"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
                fontWeight: 600,
                borderRadius: "var(--radius-pill)",
                transition: "transform 0.2s, background 0.2s"
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "var(--text-secondary)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--text-primary)"; }}
            >
              Get in touch
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
