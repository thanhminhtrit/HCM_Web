import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  CheckCircle2,
  FileSearch,
  Lightbulb,
  MessageSquareText,
  PenTool,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

const aiTools = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    role: 'Đối thoại ý tưởng & hỗ trợ triển khai',
    summary:
      'Được sử dụng để gợi mở cách kể chuyện, phản biện cấu trúc nội dung, review code và hỗ trợ hiện thực hóa một số tương tác UI/UX.',
    input: 'Yêu cầu thiết kế, nội dung nhóm đã chuẩn bị, code hiện có và tiêu chí môn học.',
    output: 'Gợi ý cấu trúc, phương án UI/UX, bản nháp diễn đạt và đề xuất kỹ thuật.',
    verification:
      'Nhóm đọc lại, chọn lọc, sửa nội dung theo tài liệu môn học và trực tiếp kiểm tra website.',
    color: '#7B1E2B',
    icon: MessageSquareText,
  },
  {
    id: 'gemini',
    name: 'Gemini',
    role: 'Mở rộng góc nhìn & khám phá phương án',
    summary:
      'Được sử dụng như một nguồn tham khảo bổ sung khi brainstorm, so sánh các cách diễn đạt và khám phá thêm hướng trình bày trực quan.',
    input: 'Chủ đề, câu hỏi mở và các ý tưởng cần được nhìn từ nhiều góc độ.',
    output: 'Các phương án diễn giải, liên hệ hiện đại và gợi ý hình thức trình bày.',
    verification:
      'Nhóm đối chiếu với mục tiêu bài học, loại bỏ ý không phù hợp và không xem câu trả lời AI là nguồn học thuật.',
    color: '#C99A3B',
    icon: Sparkles,
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    role: 'Đọc tài liệu & tổng hợp có căn cứ',
    summary:
      'Được sử dụng để hỗ trợ đọc, hệ thống hóa và tìm mối liên hệ trong các tài liệu mà nhóm cung cấp.',
    input: 'Tài liệu học tập, ghi chú và nguồn tham khảo do nhóm chủ động lựa chọn.',
    output: 'Tóm tắt, nhóm luận điểm và gợi ý mối liên hệ giữa các phần nội dung.',
    verification:
      'Nhóm quay lại nguồn gốc để kiểm tra trích dẫn, ngữ cảnh và tính chính xác trước khi sử dụng.',
    color: '#2F5D54',
    icon: BookOpenCheck,
  },
]

const workflow = [
  {
    number: '01',
    title: 'Xác định câu hỏi',
    text: 'Nhóm xác định luận điểm cần trình bày, đối tượng người xem và trải nghiệm học tập mong muốn.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Cung cấp ngữ cảnh',
    text: 'AI nhận tài liệu, nội dung nhóm chuẩn bị và yêu cầu cụ thể, thay vì được yêu cầu tạo bài hoàn chỉnh từ đầu.',
    icon: FileSearch,
  },
  {
    number: '03',
    title: 'Chọn lọc & sáng tạo',
    text: 'Nhóm so sánh đề xuất, viết lại nội dung, lựa chọn hình thức phù hợp và trực tiếp xây dựng sản phẩm.',
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Kiểm chứng & chịu trách nhiệm',
    text: 'Các luận điểm được đối chiếu lại với tài liệu; code được chạy thử; nhóm chịu trách nhiệm với sản phẩm cuối cùng.',
    icon: ShieldCheck,
  },
]

const principles = [
  {
    title: 'AI không phải nguồn học thuật',
    text: 'Mọi luận điểm quan trọng cần quay về giáo trình, văn kiện hoặc nguồn tham khảo đáng tin cậy.',
  },
  {
    title: 'Con người giữ quyền quyết định',
    text: 'Nhóm lựa chọn nội dung, định hình thông điệp, chỉnh sửa thiết kế và quyết định phiên bản cuối.',
  },
  {
    title: 'Minh bạch cách sử dụng',
    text: 'Phụ lục này công khai vai trò của AI để người xem phân biệt giữa công cụ hỗ trợ và đóng góp của nhóm.',
  },
]

export function PhuLucAI() {
  const [activeToolId, setActiveToolId] = useState(aiTools[0].id)
  const activeTool = aiTools.find((tool) => tool.id === activeToolId) ?? aiTools[0]
  const ActiveIcon = activeTool.icon

  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-burgundy/15 px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-burgundy text-sm uppercase tracking-widest mb-5">
              <Bot className="w-4 h-4" />
              Phụ lục phương pháp
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-burgundy leading-tight mb-6">
              AI đồng hành,<br />nhóm giữ tay lái
            </h1>
            <p className="text-lg text-soft-text leading-relaxed max-w-2xl">
              Dự án sử dụng ChatGPT, Gemini và NotebookLM như những công cụ hỗ
              trợ tư duy, đọc tài liệu và triển khai sản phẩm. Nội dung, lựa
              chọn học thuật và sản phẩm cuối cùng do nhóm kiểm chứng và chịu
              trách nhiệm.
            </p>
          </div>
          <div className="border-l-4 border-terracotta pl-6 py-2">
            <p className="text-sm uppercase tracking-widest text-terracotta mb-2">
              Nguyên tắc cốt lõi
            </p>
            <p className="font-display text-2xl text-ink leading-relaxed">
              Dùng AI để mở rộng khả năng làm việc, không thay thế việc học và
              tư duy của con người.
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <p className="text-sm uppercase tracking-widest text-terracotta mb-3">Ba công cụ, ba vai trò</p>
              <h2 className="font-display text-3xl md:text-4xl text-burgundy mb-4">
                AI được dùng ở đâu trong dự án?
              </h2>
              <p className="text-soft-text">
                Chọn từng công cụ để xem đầu vào, đầu ra và bước kiểm chứng của nhóm.
              </p>
            </div>

            <div className="grid lg:grid-cols-[0.75fr_1.25fr] border-y border-burgundy/20">
              <div className="lg:border-r border-burgundy/20">
                {aiTools.map((tool) => {
                  const ToolIcon = tool.icon
                  const isActive = activeTool.id === tool.id

                  return (
                    <button
                      key={tool.id}
                      onClick={() => setActiveToolId(tool.id)}
                      aria-pressed={isActive}
                      className={`w-full text-left p-6 border-b last:border-b-0 border-burgundy/15 transition-colors ${
                        isActive ? 'bg-white' : 'hover:bg-white/60'
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className="w-11 h-11 flex items-center justify-center text-white shrink-0"
                          style={{ backgroundColor: tool.color }}
                        >
                          <ToolIcon className="w-5 h-5" />
                        </span>
                        <span>
                          <span className="font-display text-xl text-ink block">{tool.name}</span>
                          <span className="text-sm text-soft-text">{tool.role}</span>
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <motion.div
                key={activeTool.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-7 md:p-10"
              >
                <div className="flex items-start gap-4 mb-8">
                  <span
                    className="w-14 h-14 flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: activeTool.color }}
                  >
                    <ActiveIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-soft-text mb-1">{activeTool.role}</p>
                    <h3 className="font-display text-3xl text-burgundy">{activeTool.name}</h3>
                  </div>
                </div>
                <p className="text-ink leading-relaxed mb-8">{activeTool.summary}</p>
                <div className="grid md:grid-cols-3 border-t border-burgundy/15">
                  {[
                    ['Đầu vào', activeTool.input],
                    ['AI hỗ trợ tạo ra', activeTool.output],
                    ['Nhóm kiểm chứng', activeTool.verification],
                  ].map(([label, text], index) => (
                    <div
                      key={label}
                      className={`py-5 md:px-5 ${index > 0 ? 'border-t md:border-t-0 md:border-l border-burgundy/15' : ''}`}
                    >
                      <p className="text-xs uppercase tracking-wider font-bold text-terracotta mb-2">{label}</p>
                      <p className="text-sm text-soft-text leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-burgundy text-white px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-sm uppercase tracking-widest text-ochre mb-3">Quy trình làm việc</p>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Từ câu hỏi của nhóm đến sản phẩm cuối
              </h2>
              <p className="text-white/65 leading-relaxed">
                AI xuất hiện ở giữa quy trình, không đứng ở đầu và cũng không
                phải người quyết định kết quả cuối cùng.
              </p>
            </div>
            <div className="grid md:grid-cols-4 border-t border-white/20">
              {workflow.map((step, index) => {
                const StepIcon = step.icon
                return (
                  <div
                    key={step.number}
                    className="relative p-6 border-b md:border-b-0 md:border-r last:border-r-0 border-white/15"
                  >
                    {index < workflow.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-8 z-10 w-6 h-6 p-1 bg-burgundy text-ochre" />
                    )}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-3xl text-ochre">{step.number}</span>
                      <StepIcon className="w-5 h-5 text-white/50" />
                    </div>
                    <h3 className="font-display text-xl text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{step.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <div>
              <div className="inline-flex items-center gap-2 text-teal text-sm uppercase tracking-widest mb-4">
                <Users className="w-4 h-4" />
                Trách nhiệm của nhóm
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-burgundy mb-5">
                Điều AI không thay thế
              </h2>
              <p className="text-soft-text leading-relaxed">
                Công cụ có thể gợi ý rất nhanh. Nhưng việc hiểu tư tưởng, lựa
                chọn thông điệp, kiểm chứng nguồn và bảo vệ lập luận vẫn là phần
                việc của con người.
              </p>
            </div>
            <div className="border-t border-burgundy/20">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="grid sm:grid-cols-[auto_1fr] gap-4 py-6 border-b border-burgundy/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal mt-1" />
                  <div>
                    <h3 className="font-display text-xl text-burgundy mb-2">{principle.title}</h3>
                    <p className="text-sm text-soft-text leading-relaxed">{principle.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
