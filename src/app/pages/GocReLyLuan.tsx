import { motion } from 'motion/react'
import { useState } from 'react'

const approaches = [
  {
    title: 'Tiếp cận theo nghĩa rộng',
    content:
      'Văn hóa là tổng thể các phương thức sinh hoạt vật chất và tinh thần của loài người (như định nghĩa năm 1943).',
  },
  {
    title: 'Tiếp cận theo nghĩa hẹp',
    content:
      'Văn hóa là đời sống tinh thần của xã hội, thuộc kiến trúc thượng tầng, song hành và tương tác biện chứng với kinh tế và chính trị.',
  },
  {
    title: 'Tiếp cận theo nghĩa hẹp hơn',
    content:
      'Văn hóa là trình độ học vấn, học thức giáo dục, tri thức khoa học kỹ thuật (được thể hiện qua phong trào Bình dân học vụ, xóa nạn mù chữ).',
  },
  {
    title: 'Tiếp cận theo phương thức sử dụng',
    content:
      'Văn hóa là lối sống, nếp sống, phong cách sống, văn hóa ứng xử và cốt cách sinh hoạt hằng ngày của con người.',
  },
]

export function GocReLyLuan() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-ivory py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="w-16 h-1 bg-burgundy mb-6" />
          <h1 className="font-display text-4xl md:text-5xl text-burgundy mb-6">
            Gốc Rễ Lý Luận
          </h1>
          <p className="text-lg text-soft-text leading-relaxed">
            Khám phá nền tảng tư tưởng về văn hóa qua lăng kính của Hồ Chí Minh,
            từ định nghĩa năm 1943 đến bốn cách tiếp cận khác nhau về văn hóa.
          </p>
        </motion.div>

        {/* Quote Block - 1943 Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-burgundy/5 border-l-4 border-burgundy rounded-r-2xl p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <span className="text-6xl text-burgundy/30 font-quote leading-none">
              "
            </span>
            <div>
              <p className="font-quote italic text-lg text-ink leading-relaxed mb-4">
                Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới
                sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật,
                khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh
                hoạt hằng ngày về mặc, ăn, ở và các phương thức sử dụng. Toàn bộ
                những sáng tạo và phát minh đó tức là văn hóa.
              </p>
              <p className="text-burgundy font-medium">
                — Hồ Chí Minh, 1943 (Nhật ký trong tù)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline-style section */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-burgundy/20" />

          {/* Milestone 1: Hoàn cảnh lịch sử & Phân tích */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 ml-8 relative"
          >
            <div className="absolute left-[-2.375rem] top-1 w-4 h-4 bg-burgundy rounded-full" />
            <h2 className="font-display text-2xl text-burgundy mb-2">
              Hoàn cảnh lịch sử & Phân tích
            </h2>
            <p className="text-ink mb-4 font-medium">
              Được Chủ tịch Hồ Chí Minh ghi chép trong những trang cuối cùng của
              tập thơ Nhật ký trong tù khi bị giam giữ tại Quảng Tây, Trung
              Quốc. Đây là lần đầu tiên Người đưa ra định nghĩa mang tính bao
              quát và định hình nền tảng tư tưởng văn hóa.
            </p>
            <p className="text-soft-text leading-relaxed">
              Phân tích học thuật: Định nghĩa này cho thấy Hồ Chí Minh tiếp cận
              văn hóa từ góc độ nhân học và triết học hành vi hành động. Văn hóa
              không phải là cái gì xa xôi, mà là toàn bộ những giá trị vật chất
              và tinh thần được kiến tạo vì động lực sinh tồn và mục đích sống
              của con người.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 ml-8 relative"
          >
            <div className="absolute left-[-2.375rem] top-1 w-4 h-4 bg-burgundy rounded-full" />
            <h2 className="font-display text-2xl text-burgundy mb-4">
              Bốn Cách Tiếp Cận Văn Hóa
            </h2>
            <p className="text-soft-text mb-6">
              Hồ Chí Minh không cố định văn hóa trong một khái niệm tĩnh, mà
              Người sử dụng linh hoạt tùy thuộc vào mục tiêu cách mạng:
            </p>
          </motion.div>

          {/* Interactive Approaches */}
          <div className="space-y-4 ml-8">
            {approaches.map((approach, index) => {
              const isExpanded = expandedIndex === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full text-left"
                  >
                    <div
                      className={`bg-white rounded-xl border-2 transition-all ${
                        isExpanded
                          ? 'border-burgundy shadow-lg'
                          : 'border-burgundy/20 hover:border-burgundy/40'
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-xl text-burgundy">
                            {approach.title}
                          </h3>
                          <div
                            className={`w-8 h-8 rounded-full bg-burgundy/10 flex items-center justify-center transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          >
                            <span className="text-burgundy">▼</span>
                          </div>
                        </div>

                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-burgundy/20"
                          >
                            <p className="text-ink leading-relaxed">
                              {approach.content}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
