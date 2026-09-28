"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-bottom 0.3s ease",
        background: scrolled ? "var(--bg-secondary)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        <Link href="/" onClick={closeMenu} style={{ display: "flex", alignItems: "center" }}>
          <Image src="/brand-logo.png" alt="Indorse Technologies" width={180} height={40} style={{ objectFit: 'contain' }} priority />
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            gap: "32px",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--text-secondary)",
          }}
          className="desktop-nav"
        >
          <li>
            <Link href="/#product" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
              Product
            </Link>
          </li>
          <li>
            <Link href="/engineering" style={{ color: pathname === "/engineering" ? "var(--text-primary)" : "", transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseOut={(e) => (e.currentTarget.style.color = pathname === "/engineering" ? "var(--text-primary)" : "var(--text-secondary)")}>
              Engineering
            </Link>
          </li>
          <li>
            <Link href="/company" style={{ color: pathname === "/company" ? "var(--text-primary)" : "", transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseOut={(e) => (e.currentTarget.style.color = pathname === "/company" ? "var(--text-primary)" : "var(--text-secondary)")}>
              Company
            </Link>
          </li>
          <li>
            <Link href="/careers" style={{ color: pathname === "/careers" ? "var(--text-primary)" : "", transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseOut={(e) => (e.currentTarget.style.color = pathname === "/careers" ? "var(--text-primary)" : "var(--text-secondary)")}>
              Careers
            </Link>
          </li>
          <li>
            <Link href="/#contact" style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "var(--text-primary)")} onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
              Contact
            </Link>
          </li>
        </ul>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a
            href="https://20fourr.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              padding: "10px 20px",
              borderRadius: "var(--radius-pill)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.opacity = "0.9"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.opacity = "1"; }}
          >
            View 20fourr →
          </a>
        </div>
      </div>
    </nav>
  );
}
