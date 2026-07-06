export default function Preloader() {
  return (
    <div id="page-preloader" className="page-preloader" aria-hidden="true">
      <div className="preloader-logo">
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
          <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="url(#pl-grad)" />
          <defs>
            <linearGradient id="pl-grad" x1="0" y1="0" x2="28" y2="28">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
        <span className="preloader-logo-text">Indorse<span className="preloader-logo-accent">Tech</span></span>
      </div>
      <div className="preloader-bar"><div className="preloader-bar-fill"></div></div>
    </div>
  );
}
