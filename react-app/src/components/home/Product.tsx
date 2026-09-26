"use client";

import Image from "next/image";

export default function Product() {
  return (
    <section id="product" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: "center" }}>
          <div className="section-label">FLAGSHIP PRODUCT</div>
          <h2 className="section-title">
            <span className="text-accent">20fourr</span> Private security, booked in minutes.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "64px", maxWidth: "1000px", margin: "0 auto" }}>

          {/* Problem & Solution */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ background: "var(--bg-elevated)", padding: "40px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "16px", textTransform: "uppercase" }}>The Problem</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", lineHeight: 1.6 }}>
                Hiring private security in India means calling 10 agencies, comparing unverified quotes, and hoping the guard who shows up has a valid PSARA licence.
              </p>
            </div>

            <div style={{ background: "var(--bg-elevated)", padding: "40px", borderRadius: "var(--radius-lg)", border: "1px solid var(--accent-muted)" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--accent)", marginBottom: "16px", textTransform: "uppercase" }}>What 20fourr Does</h3>
              <p style={{ color: "var(--text-primary)", fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "16px" }}>
                A dual-sided marketplace where every provider is PSARA-verified. Browse, compare, book, and pay — in one session, fully compliant with Indian law.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.5 }}>
                Engineered with dedicated portals to manage the complex lifecycles of both <strong>clients</strong> (booking & billing) and <strong>providers</strong> (individuals/agencies registering services).
              </p>
            </div>
          </div>

          {/* Proof Points */}
          <div>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "24px", textTransform: "uppercase", textAlign: "center" }}>Proof Points</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              {[
                { title: "PSARA Verified", desc: "Every security provider undergoes rigorous PSARA licence checks." },
                { title: "OTP Check-in", desc: "Guards check-in/out via Aadhaar-linked OTP for real-time tracking." },
                { title: "Itemized GST", desc: "Automated billing with base, fee, surcharges, and proper GST lines." },
                { title: "Razorpay Payouts", desc: "Instant and secure settlements to providers via Razorpay API." },
                { title: "Rating System", desc: "Two-way ratings and dispute resolution for accountability." }
              ].map((point, i) => (
                <div key={i} style={{ background: "var(--bg-primary)", padding: "24px", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--accent)", marginBottom: "8px" }}>{point.title}</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "center" }}>
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border)" }}>
              <Image
                src="/phone_mockup.jpg"
                alt="20fourr Mobile Booking Flow"
                width={600}
                height={1200}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border)" }}>
              <Image
                src="/duty_ticket.jpg"
                alt="20fourr Duty Ticket Timeline"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", marginTop: "24px" }}>
            <a
              href="https://20fourr.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--accent)",
                fontWeight: 600,
                fontSize: "1rem",
                borderBottom: "1px solid var(--accent)",
                paddingBottom: "4px",
                transition: "opacity 0.2s"
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Main Site (20fourr.com) ↗
            </a>
            <a
              href="https://client.20fourr.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "1rem",
                borderBottom: "1px solid var(--text-primary)",
                paddingBottom: "4px",
                transition: "opacity 0.2s"
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Client Portal ↗
            </a>
            <a
              href="https://provider.20fourr.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "1rem",
                borderBottom: "1px solid var(--text-primary)",
                paddingBottom: "4px",
                transition: "opacity 0.2s"
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Provider Portal ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
