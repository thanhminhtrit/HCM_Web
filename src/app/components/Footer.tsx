import { BronzeDrumIcon } from "./BronzeDrumIcon";
import { MiniQuiz } from "./MiniQuiz";
import { TeamSection } from "./TeamSection";

export function Footer() {
  return (
    <footer className="bg-ivory border-t border-burgundy-15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mini Quiz */}
        <div className="py-16">
          <MiniQuiz />
        </div>

        {/* Team Section */}
        <div id="team" className="py-16 border-t border-burgundy-15">
          <TeamSection />
        </div>

        {/* Footer Credits */}
        <div className="py-8 border-t border-burgundy-15">
          <div className="flex flex-col items-center gap-4">
            <BronzeDrumIcon className="w-12 h-12 text-burgundy opacity-30" />
            <div className="text-center text-sm text-soft-text">
              <p className="font-medium">Tư tưởng Hồ Chí Minh · Chương 6 · Phần Văn hóa</p>
              <p className="mt-1">Trường Đại học Bách Khoa Hà Nội · 2026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
