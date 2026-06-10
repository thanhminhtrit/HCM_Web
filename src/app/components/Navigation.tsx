import { Link, useLocation } from "react-router";
import { BronzeDrumIcon } from "./BronzeDrumIcon";
import { JourneyProgress } from "./JourneyProgress";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-burgundy-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" aria-label="Về trang mở đầu" className="flex items-center gap-3 group shrink-0">
            <BronzeDrumIcon className="w-8 h-8 text-burgundy transition-transform group-hover:scale-110" />
            <span className="font-display text-lg text-burgundy hidden sm:block">
              Văn Hóa Soi Đường
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6 text-sm">
            <JourneyProgress />
            <Link
              to="/"
              className={`hidden sm:block transition-colors hover:text-burgundy ${
                location.pathname === "/" ? "text-burgundy font-medium" : "text-ink"
              }`}
            >
              Mở đầu
            </Link>
            <Link
              to="/ban-do"
              className={`whitespace-nowrap transition-colors hover:text-burgundy ${
                location.pathname === "/ban-do" ? "text-burgundy font-medium" : "text-ink"
              }`}
            >
              Bản đồ
            </Link>
            <Link
              to="/#team"
              className="hidden sm:block transition-colors hover:text-burgundy text-ink whitespace-nowrap"
            >
              Giới thiệu nhóm
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
