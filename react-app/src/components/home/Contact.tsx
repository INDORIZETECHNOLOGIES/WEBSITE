"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/email";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const hp = (form.elements.namedItem("hp-field") as HTMLInputElement).value;
    if (hp) return; // bot

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await sendEmail({ from_name: name, from_email: email, company: company || "N/A", message });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      // Fallback mailto
      const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`;
      window.location.href = `mailto:arpitrautela01@indorsetech.com?subject=Website Inquiry&body=${encodeURIComponent(body)}`;
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: "120px 0", background: "var(--bg-primary)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px" }}>
          
          <div>
            <div className="section-label">GET IN TOUCH</div>
            <h2 className="section-title">Ready to build?</h2>
            <p className="section-subtitle" style={{ marginBottom: "40px" }}>
              Let's explore how Indorse Technologies can support your engineering needs.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <a href="tel:+918669039635" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "24px", background: "var(--bg-elevated)", borderRadius: "var(--radius)", border: "1px solid var(--border)", transition: "border-color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--border)")}>
                <div style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", borderRadius: "50%", color: "var(--accent)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "4px" }}>Call Us</div>
                  <div style={{ fontSize: "1.125rem", color: "var(--text-primary)", fontWeight: 500 }}>+91 86690 39635</div>
                </div>
              </a>
              <a href="mailto:arpitrautela01@indorsetech.com" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "24px", background: "var(--bg-elevated)", borderRadius: "var(--radius)", border: "1px solid var(--border)", transition: "border-color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--accent)")} onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--border)")}>
                <div style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", borderRadius: "50%", color: "var(--accent)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "4px" }}>Email Us</div>
                  <div style={{ fontSize: "1.125rem", color: "var(--text-primary)", fontWeight: 500 }}>arpitrautela01@indorsetech.com</div>
                </div>
              </a>
            </div>
          </div>

          <div style={{ background: "var(--bg-secondary)", padding: "40px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)" }}>
            {success ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "24px" }}>✅</div>
                <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "16px" }}>Message Sent!</h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>We've received your message and will respond shortly.</p>
                <button onClick={() => setSuccess(false)} style={{ padding: "12px 24px", background: "var(--bg-elevated)", color: "var(--text-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-pill)", cursor: "pointer" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <input type="text" name="hp-field" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "8px" }}>Full Name *</label>
                  <input type="text" name="name" required style={{ width: "100%", padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontSize: "1rem", outline: "none" }} onFocus={(e) => (e.target.style.borderColor = "var(--accent)")} onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                </div>
                
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "8px" }}>Email Address *</label>
                  <input type="email" name="email" required style={{ width: "100%", padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontSize: "1rem", outline: "none" }} onFocus={(e) => (e.target.style.borderColor = "var(--accent)")} onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                </div>
                
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "8px" }}>Company</label>
                  <input type="text" name="company" style={{ width: "100%", padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontSize: "1rem", outline: "none" }} onFocus={(e) => (e.target.style.borderColor = "var(--accent)")} onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                </div>
                
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "8px" }}>Message *</label>
                  <textarea name="message" rows={4} required style={{ width: "100%", padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontSize: "1rem", outline: "none", resize: "vertical" }} onFocus={(e) => (e.target.style.borderColor = "var(--accent)")} onBlur={(e) => (e.target.style.borderColor = "var(--border)")}></textarea>
                </div>

                {error && <div style={{ color: "#ef4444", fontSize: "0.875rem" }}>{error}</div>}

                <button type="submit" disabled={loading} style={{ width: "100%", padding: "16px", background: "var(--text-primary)", color: "var(--bg-primary)", fontWeight: 600, fontSize: "1rem", borderRadius: "var(--radius-sm)", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, transition: "background 0.2s" }} onMouseOver={(e) => { if (!loading) e.currentTarget.style.background = "var(--text-secondary)" }} onMouseOut={(e) => { if (!loading) e.currentTarget.style.background = "var(--text-primary)" }}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
