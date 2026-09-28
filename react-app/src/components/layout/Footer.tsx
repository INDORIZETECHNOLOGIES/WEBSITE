"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", paddingTop: "64px", paddingBottom: "32px", marginTop: "120px", background: "var(--bg-secondary)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "64px" }}>
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "16px" }}>
              <Image src="/brand-logo.png" alt="Indorse Technologies" width={160} height={36} style={{ objectFit: 'contain' }} />
            </Link>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", maxWidth: "250px", marginBottom: "24px" }}>
              Production software for regulated Indian markets.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "16px", color: "var(--text-primary)" }}>Platform</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <li><a href="https://20fourr.com" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>20fourr (Flagship)</a></li>
              <li><Link href="/#product" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>Case Study</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "16px", color: "var(--text-primary)" }}>Company</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <li><Link href="/engineering" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>Engineering</Link></li>
              <li><Link href="/company" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>About Us</Link></li>
              <li><Link href="/careers" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>Careers</Link></li>
              <li><Link href="/#contact" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "16px", color: "var(--text-primary)" }}>Contact</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <li><a href="tel:+918669039635" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>+91 86690 39635</a></li>
              <li><a href="mailto:arpitrautela01@indorsetech.com" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>Email Us</a></li>
            </ul>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: "24px", fontSize: "0.875rem", color: "var(--text-muted)" }}>
          <p>© {new Date().getFullYear()} Indorse Technologies Pvt. Ltd.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--text-secondary)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>Privacy</Link>
            <Link href="/terms" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--text-secondary)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
