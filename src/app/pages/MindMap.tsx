import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { BronzeDrumIcon } from "../components/BronzeDrumIcon";
import { LotusIcon } from "../components/LotusIcon";
import { ArrowLeft } from "lucide-react";

interface BranchNode {
  id: string;
  label: string;
  color: string;
  route: string;
  angle: number;
  children?: { label: string; subRoute?: string }[];
}

const branches: BranchNode[] = [
  {
    id: "1",
    label: "Gốc Rễ Lý Luận",
    color: "#7B1E2B",
    route: "/goc-re-ly-luan",
    angle: -135,
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
    angle: -45
  },
  {
    id: "3",
    label: "Mặt Trận Ánh Sáng",
    color: "#B5562E",
    route: "/mat-tran-anh-sang",
    angle: 45
  },
  {
    id: "4",
    label: "Khát Vọng Vươn Xa",
    color: "#2F5D54",
    route: "/khat-vong-vuon-xa",
    angle: 135
  }
];

export function MindMap() {
  const [expandedBranch, setExpandedBranch] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-ivory py-12 px-6">
      {/* Background drum motif */}
      <div className="fixed inset-0 flex items-center justify-center opacity-3 pointer-events-none">
        <BronzeDrumIcon className="w-[800px] h-[800px] text-burgundy" />
      </div>

      <div className="relative max-w-7xl mx-auto">
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
                        className="bg-white rounded-2xl p-6 shadow-lg border-3 transition-all hover:scale-110 hover:shadow-xl w-[200px]"
                        style={{ borderColor: branch.color }}
                      >
                        <div
                          className="w-12 h-12 rounded-full mb-3 mx-auto"
                          style={{ backgroundColor: branch.color }}
                        />
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

          {branches.map((branch) => (
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
                    className="w-12 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: branch.color }}
                  />
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
