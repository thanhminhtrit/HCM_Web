interface BronzeDrumIconProps {
  className?: string;
}

export function BronzeDrumIcon({ className = "w-12 h-12" }: BronzeDrumIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Đông Sơn bronze drum pattern - concentric circles with radiating star */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="2" opacity="0.8" />

      {/* Central star */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const x1 = 50 + 8 * Math.cos((angle * Math.PI) / 180);
        const y1 = 50 + 8 * Math.sin((angle * Math.PI) / 180);
        const x2 = 50 + 48 * Math.cos((angle * Math.PI) / 180);
        const y2 = 50 + 48 * Math.sin((angle * Math.PI) / 180);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.25"
          />
        );
      })}

      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}
