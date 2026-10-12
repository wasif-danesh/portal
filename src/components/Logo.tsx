export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 38" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-g" x1="6" y1="8" x2="32" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset=".5" stopColor="#6366f1" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect
        x=".5"
        y=".5"
        width="37"
        height="37"
        rx="10.5"
        stroke="url(#logo-g)"
        strokeOpacity=".5"
      />
      <path
        d="M8 12.5 13.5 26.5 19 15l5.5 11.5L30 12.5"
        stroke="url(#logo-g)"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
