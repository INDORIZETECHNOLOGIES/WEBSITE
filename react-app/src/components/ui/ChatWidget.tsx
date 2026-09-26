"use client";

import { useState, useRef, useEffect } from "react";
import { sendEmail } from "@/lib/email";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [infoCollected, setInfoCollected] = useState(false);
  const [messages, setMessages] = useState<{ text: string; type: "agent" | "user"; time: string }[]>([
    { text: "👋 Hi there! I'm from the Indorse support team. How can I help you today?", type: "agent", time: "Just now" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const hp = (form.elements.namedItem("chat-hp") as HTMLInputElement).value;
    if (hp) return; // bot

    const msgInput = form.elements.namedItem("message") as HTMLInputElement;
    const message = msgInput.value.trim();
    if (!message) return;

    let name = "Visitor";
    let email = "";

    if (!infoCollected) {
      const nameInput = form.elements.namedItem("name") as HTMLInputElement;
      const emailInput = form.elements.namedItem("email") as HTMLInputElement;
      name = nameInput?.value.trim() || "Visitor";
      email = emailInput?.value.trim() || "";
      if (name || email) setInfoCollected(true);
    }

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { text: message, type: "user", time }]);
    msgInput.value = "";

    try {
      await sendEmail({ from_name: name, from_email: email, company: "N/A", interest: "Live Chat", message: `[LIVE CHAT] ${message}` });
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for reaching out! 🎉 Our team has received your message and will reply to your email shortly.", type: "agent", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      }, 1000);
    } catch (err) {
      console.error(err);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Our chat is currently experiencing issues. Please use the contact form or email us directly.", type: "agent", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat FAB */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          display: isOpen ? "none" : "flex",
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "var(--accent)",
          color: "var(--bg-primary)",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
          boxShadow: "var(--shadow-lg)",
          zIndex: 100,
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>

      {/* Chat Widget */}
      <div
        style={{
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "360px",
          height: "500px",
          maxHeight: "calc(100vh - 48px)",
          background: "var(--bg-elevated)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-xl)",
          zIndex: 101,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ background: "var(--bg-secondary)", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", background: "var(--bg-elevated)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", border: "1px solid var(--border)" }}>💬</div>
            <div>
              <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>Indorse Support</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", background: "#10b981", borderRadius: "50%" }} />
                Online · Replies in minutes
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "1.2rem" }}>✕</button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", background: "var(--bg-primary)" }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.type === "user" ? "flex-end" : "flex-start", maxWidth: "80%" }}>
              <div style={{ background: msg.type === "user" ? "var(--accent)" : "var(--bg-elevated)", color: msg.type === "user" ? "var(--bg-primary)" : "var(--text-primary)", padding: "12px 16px", borderRadius: "var(--radius)", border: msg.type === "user" ? "none" : "1px solid var(--border)", fontSize: "0.875rem", lineHeight: 1.5 }}>
                {msg.text}
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "4px", textAlign: msg.type === "user" ? "right" : "left" }}>
                {msg.time}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} style={{ padding: "16px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
          <input type="text" name="chat-hp" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          
          {!infoCollected && (
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <input type="text" name="name" placeholder="Name" required style={{ flex: 1, padding: "8px 12px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontSize: "0.875rem", outline: "none" }} />
              <input type="email" name="email" placeholder="Email" required style={{ flex: 1, padding: "8px 12px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontSize: "0.875rem", outline: "none" }} />
            </div>
          )}
          
          <div style={{ display: "flex", gap: "8px" }}>
            <input type="text" name="message" placeholder="Type a message..." required style={{ flex: 1, padding: "12px 16px", background: "var(--bg-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-primary)", fontSize: "0.875rem", outline: "none" }} />
            <button type="submit" style={{ padding: "0 16px", background: "var(--accent)", color: "var(--bg-primary)", borderRadius: "var(--radius-sm)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"></path></svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
