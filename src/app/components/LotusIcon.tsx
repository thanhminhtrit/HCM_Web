interface LotusIconProps {
  className?: string;
}

export function LotusIcon({ className = "w-16 h-16" }: LotusIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lotus flower - Vietnamese heritage symbol */}
      {/* Center petal */}
      <ellipse cx="50" cy="60" rx="8" ry="20" fill="currentColor" opacity="0.9" />

      {/* Inner petals */}
      <ellipse cx="50" cy="60" rx="8" ry="18" fill="currentColor" opacity="0.7" transform="rotate(-30 50 60)" />
      <ellipse cx="50" cy="60" rx="8" ry="18" fill="currentColor" opacity="0.7" transform="rotate(30 50 60)" />
      <ellipse cx="50" cy="60" rx="8" ry="18" fill="currentColor" opacity="0.6" transform="rotate(-60 50 60)" />
      <ellipse cx="50" cy="60" rx="8" ry="18" fill="currentColor" opacity="0.6" transform="rotate(60 50 60)" />

      {/* Outer petals */}
      <ellipse cx="50" cy="60" rx="6" ry="22" fill="currentColor" opacity="0.4" transform="rotate(-90 50 60)" />
      <ellipse cx="50" cy="60" rx="6" ry="22" fill="currentColor" opacity="0.4" transform="rotate(90 50 60)" />
      <ellipse cx="50" cy="60" rx="6" ry="22" fill="currentColor" opacity="0.3" transform="rotate(-120 50 60)" />
      <ellipse cx="50" cy="60" rx="6" ry="22" fill="currentColor" opacity="0.3" transform="rotate(120 50 60)" />

      {/* Center circle */}
      <circle cx="50" cy="60" r="6" fill="currentColor" opacity="1" />
      <circle cx="50" cy="60" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
