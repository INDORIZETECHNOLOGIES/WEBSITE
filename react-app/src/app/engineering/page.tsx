export default function Engineering() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "120px", minHeight: "100vh" }}>
      <div className="container">
        
        <div style={{ maxWidth: "800px", margin: "0 auto", marginBottom: "80px" }}>
          <div className="section-label">ENGINEERING</div>
          <h1 className="section-title">
            Built for <span className="text-accent">scale</span> and <span className="text-accent">compliance</span>.
          </h1>
          <p className="section-subtitle">
            We operate in environments where downtime means lost revenue and regulatory non-compliance means severe penalties. Here's how we build.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "64px" }}>
          
          <section>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "24px" }}>Core Technology Stack</h2>
            <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { name: "Node.js & Express", desc: "High-performance backend services powering our API layer." },
                { name: "TypeScript", desc: "End-to-end type safety for reliable, refactorable codebases." },
                { name: "MongoDB & Redis", desc: "Document storage for flexible schemas, paired with Redis for sub-millisecond caching." },
                { name: "Socket.IO", desc: "Real-time bidirectional communication for live duty tracking and messaging." },
                { name: "AWS Infrastructure", desc: "Scalable compute and storage, deployed across multiple availability zones." },
              ].map(item => (
                <div key={item.name} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "16px", paddingBottom: "16px", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--accent)" }}>{item.name}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "24px" }}>India-Specific Compliance Depth</h2>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--accent-muted)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "24px" }}>
                Building for the Indian enterprise market requires deep integration with domestic financial and regulatory systems. We have built robust modules for:
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "16px", color: "var(--text-primary)", fontSize: "0.875rem" }}>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)" }}>01.</span>
                  <div>
                    <strong style={{ display: "block", marginBottom: "4px" }}>Taxation (GST/TDS/TCS)</strong>
                    <span style={{ color: "var(--text-secondary)" }}>Automated computation engines that handle multi-state GST (CGST/SGST/IGST), source deduction, and generation of compliant B2B/B2C invoices.</span>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)" }}>02.</span>
                  <div>
                    <strong style={{ display: "block", marginBottom: "4px" }}>PSARA Verification</strong>
                    <span style={{ color: "var(--text-secondary)" }}>Workflows specifically designed for verifying state-by-state Private Security Agencies Regulation Act licences for 20fourr providers.</span>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)" }}>03.</span>
                  <div>
                    <strong style={{ display: "block", marginBottom: "4px" }}>Aadhaar & OTP Flows</strong>
                    <span style={{ color: "var(--text-secondary)" }}>Verifiable presence and check-ins using robust MFA and OTP delivery pipelines that handle the realities of telecom delivery rates.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "24px" }}>Security & Authentication</h2>
            <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px" }}>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
                We employ <strong>JWT/RS256</strong> asymmetric cryptography for secure token signing, strict Content Security Policies, and rate-limiting at the edge. All sensitive data is encrypted at rest and in transit.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
