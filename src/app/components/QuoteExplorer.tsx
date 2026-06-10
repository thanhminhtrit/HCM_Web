import { motion } from 'motion/react'
import { useState } from 'react'

const quoteParts = [
  {
    label: 'Văn hóa',
    title: 'Một chỉnh thể của đời sống',
    explanation:
      'Không chỉ là văn học, nghệ thuật. Văn hóa còn bao gồm tri thức, đạo đức, pháp luật, lối sống và những sáng tạo vật chất phục vụ con người.',
    connection: 'Kết nối với định nghĩa văn hóa năm 1943.',
  },
  {
    label: 'soi đường',
    title: 'Vai trò định hướng',
    explanation:
      'Văn hóa giúp con người nhận thức đúng, sống đúng và hành động đúng; từ đó định hướng công cuộc xây dựng và bảo vệ đất nước.',
    connection: 'Văn hóa vừa là mục tiêu, vừa là động lực của cách mạng.',
  },
  {
    label: 'quốc dân',
    title: 'Nhân dân là chủ thể',
    explanation:
      'Văn hóa thuộc về nhân dân, do nhân dân sáng tạo, phục vụ nhân dân và phải được đông đảo nhân dân tiếp cận, hưởng thụ.',
    connection: 'Kết nối với tính Đại chúng của nền văn hóa mới.',
  },
  {
    label: 'đi',
    title: 'Tư tưởng phải thành hành động',
    explanation:
      'Văn hóa không dừng ở nhận thức mà phải đi vào thực tiễn: kiến quốc, kháng chiến, phát triển con người và nuôi dưỡng khát vọng tương lai.',
    connection: 'Kết nối với hành động của thế hệ trẻ hôm nay.',
  },
]

export function QuoteExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePart = quoteParts[activeIndex]

  return (
    <section className="mb-16 bg-burgundy text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute right-0 top-0 text-[180px] font-display opacity-10 leading-none">"</div>
      <div className="relative z-10">
        <p className="text-ochre text-sm uppercase tracking-widest mb-4">Quote Explorer</p>
        <h2 className="font-display text-3xl md:text-4xl mb-3">Chạm vào từng lớp ý nghĩa</h2>
        <p className="text-white/70 max-w-2xl mb-8">
          Một câu ngắn nhưng chứa cả cách Hồ Chí Minh nhìn về bản chất, vai trò,
          chủ thể và sức hành động của văn hóa.
        </p>

        <div className="flex flex-wrap gap-2 mb-8" aria-label="Các cụm từ trong câu trích dẫn">
          {quoteParts.map((part, index) => (
            <button
              key={part.label}
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              className={`px-4 py-3 border transition-colors font-display text-xl md:text-2xl ${
                activeIndex === index
                  ? 'bg-ochre text-ink border-ochre'
                  : 'border-white/30 hover:border-ochre text-white'
              }`}
            >
              {part.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activePart.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-[1fr_auto] gap-6 border-t border-white/20 pt-6"
        >
          <div>
            <h3 className="font-display text-2xl text-ochre mb-2">{activePart.title}</h3>
            <p className="text-white/85 leading-relaxed max-w-3xl">{activePart.explanation}</p>
          </div>
          <p className="md:max-w-[240px] text-sm text-white/60 border-l border-white/20 pl-4">
            {activePart.connection}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
