"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "160px",
        paddingBottom: "80px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: -1,
        }}
      />

      <div className="container" style={{ textAlign: "center", zIndex: 1 }}>
        <h1
          className="section-title"
          style={{
            maxWidth: "900px",
            margin: "0 auto 24px",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.03em",
          }}
        >
          We build and operate <span className="text-accent">production software</span> for regulated Indian markets.
        </h1>
        
        <p
          className="section-subtitle"
          style={{
            margin: "0 auto 40px",
            fontSize: "1.25rem",
            maxWidth: "700px",
            color: "var(--text-secondary)",
          }}
        >
          Our flagship, <strong>20fourr</strong>, is a PSARA-verified private-security marketplace processing real bookings with Razorpay payouts.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "80px" }}>
          <a
            href="https://20fourr.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 28px",
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              fontWeight: 600,
              borderRadius: "var(--radius-pill)",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 14px rgba(255, 255, 255, 0.1)",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 255, 255, 0.15)"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(255, 255, 255, 0.1)"; }}
          >
            View 20fourr →
          </a>
          <Link
            href="/#contact"
            style={{
              padding: "14px 28px",
              background: "var(--bg-elevated)",
              color: "var(--text-primary)",
              fontWeight: 600,
              borderRadius: "var(--radius-pill)",
              border: "1px solid var(--border)",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "var(--bg-elevated)")}
          >
            Talk to us
          </Link>
        </div>

        {/* Hero Mockup */}
        <div
          style={{
            position: "relative",
            maxWidth: "1000px",
            margin: "0 auto",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "var(--shadow-xl)",
            border: "1px solid var(--border)",
            background: "var(--bg-elevated)",
          }}
        >
          <Image
            src="/hero_mockup.jpg"
            alt="20fourr booking flow interface"
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
