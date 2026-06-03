import { Link, useLocation } from "react-router";
import { BronzeDrumIcon } from "./BronzeDrumIcon";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-burgundy-15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <BronzeDrumIcon className="w-8 h-8 text-burgundy transition-transform group-hover:scale-110" />
            <span className="font-display text-lg text-burgundy hidden sm:block">
              Văn Hóa Soi Đường
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className={`transition-colors hover:text-burgundy ${
                location.pathname === "/" ? "text-burgundy font-medium" : "text-ink"
              }`}
            >
              Mở đầu
            </Link>
            <Link
              to="/ban-do"
              className={`transition-colors hover:text-burgundy ${
                location.pathname === "/ban-do" ? "text-burgundy font-medium" : "text-ink"
              }`}
            >
              Bản đồ
            </Link>
            <Link
              to="/#team"
              className="transition-colors hover:text-burgundy text-ink"
            >
              Giới thiệu nhóm
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
