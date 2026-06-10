import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { BronzeDrumIcon } from "../components/BronzeDrumIcon";
import { LotusIcon } from "../components/LotusIcon";
import { ArrowLeft, ArrowRight, Check, Compass, Lightbulb, Sparkles } from "lucide-react";
import { useJourneyProgress } from "../hooks/useJourneyProgress";

interface BranchNode {
  id: string;
  label: string;
  color: string;
  route: string;
  angle: number;
  summary: string;
  children?: { label: string; subRoute?: string }[];
}

const branches: BranchNode[] = [
  {
    id: "1",
    label: "Gốc Rễ Lý Luận",
    color: "#7B1E2B",
    route: "/goc-re-ly-luan",
    angle: -135,
    summary: "Khám phá định nghĩa năm 1943 và bốn cách tiếp cận văn hóa.",
    children: [
      { label: "Định nghĩa 1943" },
      { label: "4 Cách tiếp cận" }
    ]
  },
  {
    id: "2",
    label: "Điểm Hẹn Giao Thoa",
    color: "#C99A3B",
    route: "/diem-hen-giao-thoa",
    angle: -45,
    summary: "Nhìn văn hóa trong quan hệ với chính trị, kinh tế và thế giới."
  },
  {
    id: "3",
    label: "Mặt Trận Ánh Sáng",
    color: "#B5562E",
    route: "/mat-tran-anh-sang",
    angle: 45,
    summary: "Giải mã vai trò soi đường và thử xây một nền văn hóa mới."
  },
  {
    id: "4",
    label: "Khát Vọng Vươn Xa",
    color: "#2F5D54",
    route: "/khat-vong-vuon-xa",
    angle: 135,
    summary: "Kết nối tư tưởng với Đại hội XIII và hành động của Gen Z."
  }
];

const timeline = [
  {
    year: '1943',
    title: 'Định hình khái niệm',
    text: 'Từ hoàn cảnh ngục tù, Hồ Chí Minh nhìn văn hóa như toàn bộ sáng tạo vật chất và tinh thần vì lẽ sinh tồn.',
    route: '/goc-re-ly-luan',
  },
  {
    year: '1946',
    title: 'Văn hóa soi đường',
    text: 'Trong công cuộc kiến quốc, văn hóa trở thành lực lượng định hướng tư tưởng, đạo đức và hành động của nhân dân.',
    route: '/mat-tran-anh-sang',
  },
  {
    year: 'Kháng chiến',
    title: 'Văn hóa là mặt trận',
    text: 'Văn nghệ sĩ dùng tác phẩm làm vũ khí, biểu dương cái tốt và đấu tranh với cái xấu, cái lạc hậu.',
    route: '/mat-tran-anh-sang',
  },
  {
    year: '2045',
    title: 'Sức mạnh nội sinh',
    text: 'Văn hóa và con người Việt Nam trở thành nguồn lực cho khát vọng đất nước phồn vinh, hạnh phúc.',
    route: '/khat-vong-vuon-xa',
  },
]

export function MindMap() {
  const [expandedBranch, setExpandedBranch] = useState<string | null>(null);
  const { visitedRoutes, completedCount, progressPercent } = useJourneyProgress();

  return (
    <div className="min-h-screen bg-ivory py-12 px-6">
      {/* Background drum motif */}
      <div className="fixed inset-0 flex items-center justify-center opacity-3 pointer-events-none">
        <BronzeDrumIcon className="w-[800px] h-[800px] text-burgundy" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-burgundy text-sm font-medium mb-3">
            <Compass className="w-4 h-4" />
            Hành trình ánh sáng
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-burgundy mb-4">
            Mỗi trạm mở ra một lớp tư tưởng
          </h1>
          <p className="text-soft-text max-w-2xl mx-auto mb-6">
            Đi từ gốc rễ lý luận đến cách thế hệ trẻ vận dụng văn hóa như một
            nguồn lực phát triển đất nước.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-between text-sm text-soft-text mb-2">
              <span>Đã khám phá {completedCount}/4 trạm</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-2 bg-burgundy/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-burgundy"
                animate={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
        {expandedBranch && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setExpandedBranch(null)}
            className="mb-8 inline-flex items-center gap-2 text-burgundy hover:text-ochre transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Về bản đồ
          </motion.button>
        )}

        {/* Desktop View - Interactive Network */}
        <div className="hidden lg:block">
          <div className="relative w-full aspect-square max-w-4xl mx-auto">
            {/* Central core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white rounded-full p-8 shadow-xl border-4 border-burgundy">
                <div className="flex flex-col items-center text-center">
                  <LotusIcon className="w-16 h-16 text-burgundy mb-3" />
                  <p className="font-display text-xl text-burgundy max-w-[200px]">
                    Tư tưởng Văn hóa<br />Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>

            {/* Branch nodes */}
            {branches.map((branch) => {
              const radius = expandedBranch === branch.id ? 280 : 320;
              const x = Math.cos((branch.angle * Math.PI) / 180) * radius;
              const y = Math.sin((branch.angle * Math.PI) / 180) * radius;
              const isExpanded = expandedBranch === branch.id;
              const isVisited = visitedRoutes.includes(branch.route);

              return (
                <div key={branch.id}>
                  {/* Connection line */}
                  <svg
                    className="absolute top-1/2 left-1/2 w-full h-full -z-10 pointer-events-none"
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    <motion.path
                      d={`M 0 0 Q ${x / 2} ${y / 2} ${x} ${y}`}
                      stroke={branch.color}
                      strokeWidth={isExpanded ? "3" : "2"}
                      fill="none"
                      opacity={isExpanded ? "1" : "0.4"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </svg>

                  {/* Branch node */}
                  <motion.div
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x: x - 100,
                      y: y - 60
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + parseInt(branch.id) * 0.1 }}
                  >
                    <Link
                      to={branch.route}
                      onMouseEnter={() => setExpandedBranch(branch.id)}
                      className="block"
                    >
                      <div
                        className={`bg-white rounded-2xl p-6 shadow-lg border-[3px] transition-all hover:scale-105 hover:shadow-xl w-[200px] ${
                          isVisited ? 'ring-4 ring-ochre/20' : ''
                        }`}
                        style={{ borderColor: branch.color }}
                      >
                        <div
                          className="w-12 h-12 rounded-full mb-3 mx-auto flex items-center justify-center text-white"
                          style={{ backgroundColor: branch.color }}
                        >
                          {isVisited ? <Check className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                        </div>
                        <p
                          className="font-display text-center font-semibold"
                          style={{ color: branch.color }}
                        >
                          {branch.label}
                        </p>
                      </div>
                    </Link>

                    {/* Child nodes (when expanded) */}
                    {isExpanded && branch.children && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 space-y-2"
                      >
                        {branch.children.map((child, idx) => (
                          <div
                            key={idx}
                            className="bg-white/90 rounded-lg px-4 py-2 text-sm text-center border"
                            style={{ borderColor: `${branch.color}40` }}
                          >
                            {child.label}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View - Vertical Stack */}
        <div className="lg:hidden space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-burgundy mb-8">
            <div className="flex items-center gap-4">
              <LotusIcon className="w-12 h-12 text-burgundy" />
              <h2 className="font-display text-xl text-burgundy">
                Tư tưởng Văn hóa Hồ Chí Minh
              </h2>
            </div>
          </div>

          {branches.map((branch) => {
            const isVisited = visitedRoutes.includes(branch.route)
            return (
            <Link
              key={branch.id}
              to={branch.route}
              className="block"
            >
              <div
                className="bg-white rounded-xl p-6 shadow-md border-l-4 transition-all hover:shadow-lg hover:scale-[1.02]"
                style={{ borderColor: branch.color }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white"
                    style={{ backgroundColor: branch.color }}
                  >
                    {isVisited ? <Check className="w-5 h-5" /> : <Lightbulb className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg font-semibold mb-1"
                      style={{ color: branch.color }}
                    >
                      {branch.label}
                    </h3>
                    {branch.children && (
                      <p className="text-sm text-soft-text">
                        {branch.children.map(c => c.label).join(" · ")}
                      </p>
                    )}
                    <p className="text-sm text-soft-text mt-1">{branch.summary}</p>
                  </div>
                </div>
              </div>
            </Link>
          )})}
        </div>

        <section className="mt-20 max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-sm uppercase tracking-widest text-terracotta mb-3">
              Mạch phát triển
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-burgundy mb-4">
              Từ một định nghĩa đến sức mạnh phát triển đất nước
            </h2>
            <p className="text-soft-text">
              Timeline này không chỉ ghi ngày tháng. Nó cho thấy tư tưởng văn hóa
              được mở rộng từ nhận thức, sang hành động cách mạng, rồi thành nguồn
              lực cho tương lai.
            </p>
          </div>
          <div className="grid md:grid-cols-4 border-t border-burgundy/20">
            {timeline.map((item, index) => (
              <Link
                key={item.year}
                to={item.route}
                className="relative p-6 border-b md:border-b-0 md:border-r last:border-r-0 border-burgundy/15 group"
              >
                <span className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-ivory border-[3px] border-terracotta group-hover:bg-terracotta transition-colors" />
                <span className="block text-sm font-bold text-terracotta mb-3">{item.year}</span>
                <h3 className="font-display text-xl text-burgundy mb-2">{item.title}</h3>
                <p className="text-sm text-soft-text leading-relaxed mb-4">{item.text}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-burgundy">
                  Khám phá <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
