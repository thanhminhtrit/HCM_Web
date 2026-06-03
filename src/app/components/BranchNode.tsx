import { Link } from "react-router";
import { ReactNode } from "react";

interface BranchNodeProps {
  to: string;
  color: string;
  label: string;
  icon?: ReactNode;
  children?: { label: string }[];
  onHover?: () => void;
}

export function BranchNode({ to, color, label, icon, children, onHover }: BranchNodeProps) {
  return (
    <Link
      to={to}
      onMouseEnter={onHover}
      className="block"
    >
      <div
        className="bg-white rounded-2xl p-6 shadow-lg border-3 transition-all hover:scale-110 hover:shadow-xl w-[200px]"
        style={{ borderColor: color }}
      >
        {icon ? (
          <div className="mb-3 flex justify-center">{icon}</div>
        ) : (
          <div
            className="w-12 h-12 rounded-full mb-3 mx-auto"
            style={{ backgroundColor: color }}
          />
        )}
        <p
          className="font-display text-center font-semibold"
          style={{ color }}
        >
          {label}
        </p>
      </div>

      {children && (
        <div className="mt-4 space-y-2">
          {children.map((child, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-lg px-4 py-2 text-sm text-center border"
              style={{ borderColor: `${color}40` }}
            >
              {child.label}
            </div>
          ))}
        </div>
      )}
    </Link>
  );
}
