import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 24px"
    }}>
      <div style={{
        fontSize: "8rem",
        fontWeight: 800,
        color: "var(--bg-elevated)",
        lineHeight: 1,
        marginBottom: "24px",
        fontFamily: "var(--font-mono)",
        userSelect: "none"
      }}>
        404
      </div>
      <h2 style={{
        fontSize: "2rem",
        fontWeight: 600,
        letterSpacing: "-0.03em",
        marginBottom: "16px",
        color: "var(--text-primary)"
      }}>
        System Not Found
      </h2>
      <p style={{
        fontSize: "1.125rem",
        color: "var(--text-secondary)",
        maxWidth: "500px",
        marginBottom: "40px"
      }}>
        The module or endpoint you requested is offline or does not exist in our directory.
      </p>
      
      <Link href="/" className="btn-primary" style={{ display: "inline-flex" }}>
        Return to Dashboard
      </Link>
    </div>
  );
}
