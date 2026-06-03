import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

const cultures = [
  {
    name: 'Pháp',
    influence: 'Tư tưởng tự do, bình đẳng, bác ái và chủ nghĩa nhân văn',
  },
  {
    name: 'Anh',
    influence: 'Phong cách làm việc công nghiệp, phương pháp luận thực tiễn',
  },
  {
    name: 'Mỹ',
    influence: 'Tinh thần độc lập dân tộc, quyền tự do và mưu cầu hạnh phúc',
  },
  {
    name: 'Nga',
    influence:
      'Chủ nghĩa Mác - Lênin, Cách mạng Tháng Mười, tư tưởng giải phóng giai cấp',
  },
  {
    name: 'Trung Quốc',
    influence:
      'Nho giáo (triết lý hành động), Phật giáo (từ bi bác ái), Lão giáo (hài hòa thiên nhiên)',
  },
]

export function DiemHenGiaoThoa() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cultures.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cultures.length) % cultures.length)
  }

  return (
    <div className="min-h-screen bg-ivory py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="w-16 h-1 bg-ochre mb-6" />
          <h1 className="font-display text-4xl md:text-5xl text-ochre mb-6">
            Điểm Hẹn Giao Thoa
          </h1>
          <p className="text-lg text-soft-text leading-relaxed">
            Văn hóa Việt Nam trong tư tưởng Hồ Chí Minh là sự giao thoa giữa bản
            sắc dân tộc và tinh hoa văn hóa thế giới.
          </p>
        </motion.div>

        {/* Nested Rings Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl text-ochre mb-8 text-center">
            Mối quan hệ biện chứng giữa Văn hóa với Chính trị và Kinh tế
          </h2>
          <div className="relative max-w-2xl mx-auto aspect-square flex items-center justify-center">
            {/* Outermost ring */}
            <div className="absolute inset-0 rounded-full border-4 border-ochre/30 flex items-center justify-center">
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-ochre font-medium">
                Xã hội
              </span>
            </div>
            {/* Second ring */}
            <div className="absolute inset-12 rounded-full border-4 border-ochre/40 flex items-center justify-center">
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-ochre font-medium">
                Kinh tế
              </span>
            </div>
            {/* Third ring */}
            <div className="absolute inset-24 rounded-full border-4 border-ochre/60 flex items-center justify-center">
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-ochre font-medium">
                Chính trị
              </span>
            </div>
            {/* Center */}
            <div className="absolute inset-36 rounded-full bg-ochre flex items-center justify-center">
              <span className="text-white font-display text-xl text-center px-6">
                Văn hóa
              </span>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-ochre/5 p-6 rounded-xl border border-ochre/20">
              <h4 className="font-display text-lg text-ochre mb-2">
                Văn hóa & Chính trị
              </h4>
              <p className="text-ink">
                Giải phóng chính trị là điều kiện tiên quyết để giải phóng văn
                hóa. Chừng nào dân tộc còn bị xiềng xích, văn hóa không thể tự
                do phát triển. Ngược lại, khi chính trị được giải phóng, văn hóa
                phải trở thành động lực phục vụ đắc lực cho các nhiệm vụ chính
                trị và sự nghiệp bảo vệ Tổ quốc.
              </p>
            </div>
            <div className="bg-ochre/5 p-6 rounded-xl border border-ochre/20">
              <h4 className="font-display text-lg text-ochre mb-2">
                Văn hóa & Kinh tế
              </h4>
              <p className="text-ink">
                Kinh tế là cơ sở hạ tầng, đóng vai trò nền tảng vật chất quyết
                định kiến trúc thượng tầng văn hóa ("Có thực mới vực được đạo").
                Tuy nhiên, văn hóa không thụ động mà có tính độc lập tương đối.
                Nó tham gia vào quá trình phát triển bền vững, là ngọn hải đăng
                định hướng kinh tế.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Culture Journey Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl text-ochre mb-6">
            Tiếp biến văn hóa – Mở cửa đón nhận tinh hoa
          </h2>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-ochre/20">
            <div className="overflow-hidden">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-ochre/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-3xl text-ochre">
                    {cultures[currentSlide].name}
                  </span>
                </div>
                <p className="text-lg text-ink">
                  {cultures[currentSlide].influence}
                </p>
              </motion.div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-ochre/10 hover:bg-ochre/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-ochre" />
              </button>

              <div className="flex gap-2">
                {cultures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-ochre w-8'
                        : 'bg-ochre/30 hover:bg-ochre/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-ochre/10 hover:bg-ochre/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-ochre" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Compare Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-2xl p-8 border-l-4 border-ochre shadow-md">
            <h3 className="font-display text-xl text-ochre mb-4">
              Lấy văn hóa dân tộc làm gốc
            </h3>
            <ul className="space-y-3 text-ink">
              <li className="flex items-start gap-2">
                <span className="text-ochre mt-1">•</span>
                <span>
                  Giữ gìn cốt cách, linh hồn, lòng yêu nước của người Việt Nam.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ochre mt-1">•</span>
                <span>
                  Bảo tồn các giá trị cốt lõi, phát huy truyền thống tốt đẹp.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ochre mt-1">•</span>
                <span>
                  Bản sắc dân tộc là cái khiên bảo vệ đất nước trước sự đồng hóa
                  văn hóa.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border-l-4 border-terracotta shadow-md">
            <h3 className="font-display text-xl text-terracotta mb-4">
              Tiếp biến tinh hoa nhân loại
            </h3>
            <ul className="space-y-3 text-ink">
              <li className="flex items-start gap-2">
                <span className="text-terracotta mt-1">•</span>
                <span>
                  Chắt lọc tinh túy Nho - Phật - Lão giáo và nhân văn phương
                  Tây.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta mt-1">•</span>
                <span>
                  Làm giàu cho văn hóa nước nhà bằng tri thức nhân loại.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta mt-1">•</span>
                <span className="font-medium italic">
                  Tiếp thu có chọn lọc, không rập khuôn, không lai căng.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
