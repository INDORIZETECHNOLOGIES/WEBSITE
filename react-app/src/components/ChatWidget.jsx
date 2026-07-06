export default function ChatWidget() {
  return (
    <>
      {/* ===== LIVE CHAT WIDGET ===== */}
      <div id="chat-widget" role="dialog" aria-label="Live chat" aria-modal="true" style={{ display: 'none' }}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar" aria-hidden="true">💬</div>
            <div>
              <div className="chat-title">IndorseTech Support</div>
              <div className="chat-status"><span className="online-dot" aria-hidden="true">●</span> Online · Replies in minutes</div>
            </div>
          </div>
          <button className="chat-close" id="chat-close-btn" type="button" aria-label="Close chat">✕</button>
        </div>
        <div className="chat-messages" id="chat-messages" aria-live="polite" aria-label="Chat messages">
          <div className="msg msg-agent">
            <div className="msg-bubble">👋 Hi there! I'm from the IndorseTech support team. How can I help you today?</div>
            <div className="msg-time">Just now</div>
          </div>
        </div>
        <form className="chat-form-wrap" id="chat-form" noValidate aria-label="Chat message form">
          {/* Chat honeypot */}
          <input type="text" name="url" id="chat-hp" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }} />
          <div className="chat-info-fields" id="chat-info-fields">
            <input type="text" id="chat-user-name" placeholder="Your Name" required autoComplete="name" maxLength="100" aria-label="Your name" />
            <input type="email" id="chat-user-email" placeholder="Your Email" required autoComplete="email" maxLength="200" aria-label="Your email" />
          </div>
          <div className="chat-msg-row">
            <input type="text" id="chat-message-input" placeholder="Type your message…" required maxLength="1000" aria-label="Chat message" />
            <button type="submit" className="chat-send-btn" aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" /></svg>
            </button>
          </div>
        </form>
      </div>

      {/* Chat FAB */}
      <button className="chat-fab" id="chat-fab" type="button" aria-label="Open live chat">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        <span className="chat-fab-badge" id="chat-fab-badge" aria-label="1 new message">1</span>
      </button>
    </>
  );
}
