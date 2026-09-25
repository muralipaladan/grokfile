export function Emblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
      <path
        d="M32 10c.4 6 2.2 10.5 6.8 14.2C43.2 27.8 46 32.4 46 38.2 46 45 39.8 50 32 50S18 45 18 38.2c0-5.8 2.8-10.4 7.2-14C29.8 20.5 31.6 16 32 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 38.5c2.4 3.4 5.2 5 8 5s5.6-1.6 8-5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="33" r="2.2" fill="currentColor" />
    </svg>
  );
}
