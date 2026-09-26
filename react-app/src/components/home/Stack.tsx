"use client";

import Link from "next/link";

export default function Stack() {
  const stack = [
    "Node.js", "TypeScript", "Express", "MongoDB", "Redis", 
    "Socket.IO", "Razorpay", "AWS", "JWT/RS256", "MFA"
  ];

  return (
    <section id="engineering" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: "center" }}>
          <div className="section-label">ENGINEERING</div>
          <h2 className="section-title">
            How we <span className="text-accent">build</span>.
          </h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          
          <div style={{ marginBottom: "64px" }}>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "24px", textTransform: "uppercase" }}>The Stack</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              {stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    background: "var(--bg-elevated)",
                    padding: "8px 16px",
                    borderRadius: "var(--radius-pill)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--bg-secondary)", padding: "48px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", marginBottom: "48px" }}>
             <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--accent)", marginBottom: "16px", textTransform: "uppercase" }}>India-Specific Compliance Depth</h3>
             <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", lineHeight: 1.7, textAlign: "left" }}>
                Our systems handle complex regulatory requirements that most dev shops never touch. This includes automated <strong>GST/TDS/TCS computation</strong>, strict <strong>PSARA licence verification workflows</strong>, and <strong>Aadhaar-linked OTP flows</strong> for verifiable presence. We build for the real-world constraints of Indian enterprise.
             </p>
          </div>

          <Link
            href="/engineering"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "transparent",
              color: "var(--text-primary)",
              fontWeight: 600,
              borderRadius: "var(--radius-pill)",
              border: "1px solid var(--text-primary)",
              transition: "background 0.2s, color 0.2s"
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.color = "var(--bg-primary)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-primary)"; }}
          >
            Learn more about our Engineering →
          </Link>

        </div>
      </div>
    </section>
  );
}
