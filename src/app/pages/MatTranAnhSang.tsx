import { motion } from 'motion/react'
import { useState } from 'react'

const flipCards = [
  {
    front: 'Tính Dân tộc',
    back: 'Thể hiện tinh thần độc lập, tự cường, phát huy các giá trị truyền thống tốt đẹp của cha ông, phù hợp với tâm lý và cốt cách người Việt.',
  },
  {
    front: 'Tính Khoa học',
    back: 'Đòi hỏi nền văn hóa phải tiên tiến, hiện đại, dựa trên nền tảng của tư duy khoa học biện chứng, kiên quyết chống lại tư tưởng phong kiến hủ bại, mê tín dị đoan.',
  },
  {
    front: 'Tính Đại chúng',
    back: 'Nền văn hóa phải thuộc về nhân dân, phục vụ đại đa số quần chúng nhân dân lao động, làm cho nhân dân dễ hiểu, dễ tiếp cận và trực tiếp làm chủ.',
  },
]

export function MatTranAnhSang() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards)
    if (newFlipped.has(index)) {
      newFlipped.delete(index)
    } else {
      newFlipped.add(index)
    }
    setFlippedCards(newFlipped)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-burgundy/10 via-ivory to-terracotta/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with propaganda poster aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-block bg-burgundy text-white px-8 py-2 mb-6 rotate-[-2deg]">
            <span className="font-display text-sm tracking-widest uppercase">
              Vị trí và Vai trò định hướng
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-burgundy mb-6 leading-tight">
            Văn hóa soi đường cho quốc dân đi
          </h1>
          <p className="text-xl text-terracotta font-medium max-w-3xl mx-auto leading-relaxed">
            Phát biểu tại Hội nghị Văn hóa toàn quốc lần thứ nhất (1946), Người
            khẳng định văn hóa thấu suốt vào tư tưởng, tâm lý quốc dân, định
            hình tư duy cứu nước và kiến thiết quốc gia.
          </p>
        </motion.div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="bg-burgundy text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[200px] font-display leading-none opacity-10">
              "
            </div>
            <p className="font-quote italic text-2xl md:text-3xl leading-relaxed relative z-10 mb-6">
              Văn hóa là một mặt trận - Nghệ sĩ là chiến sĩ
            </p>
            <p className="text-ochre text-lg">— Tư tưởng Hồ Chí Minh</p>
          </div>
        </motion.div>

        {/* Flip Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl text-burgundy mb-8 text-center">
            3 Tính chất cốt lõi của văn hóa mới
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {flipCards.map((card, index) => {
              const isFlipped = flippedCards.has(index)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="perspective-1000"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    onClick={() => toggleCard(index)}
                    className="relative h-80 cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                    }}
                  >
                    {/* Front */}
                    <div
                      className={`absolute inset-0 rounded-2xl p-8 flex items-center justify-center text-center transition-all ${
                        isFlipped
                          ? 'opacity-0 pointer-events-none'
                          : 'opacity-100'
                      }`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: isFlipped
                          ? 'rotateY(180deg)'
                          : 'rotateY(0deg)',
                        backgroundColor:
                          index === 0
                            ? '#7B1E2B'
                            : index === 1
                              ? '#B5562E'
                              : '#C99A3B',
                      }}
                    >
                      <div>
                        <h3 className="font-display text-3xl text-white leading-tight">
                          {card.front}
                        </h3>
                        <p className="text-white/60 text-sm mt-4">
                          Nhấn để xem thêm
                        </p>
                      </div>
                    </div>

                    {/* Back */}
                    <div
                      className={`absolute inset-0 bg-white rounded-2xl p-8 flex items-center justify-center text-center border-4 transition-all ${
                        !isFlipped
                          ? 'opacity-0 pointer-events-none'
                          : 'opacity-100'
                      }`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: !isFlipped
                          ? 'rotateY(-180deg)'
                          : 'rotateY(0deg)',
                        borderColor:
                          index === 0
                            ? '#7B1E2B'
                            : index === 1
                              ? '#B5562E'
                              : '#C99A3B',
                      }}
                    >
                      <div>
                        <p className="text-ink leading-relaxed">{card.back}</p>
                        <p className="text-soft-text text-sm mt-4">
                          Nhấn để quay lại
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-20 h-1 bg-burgundy mb-6" />
              <h3 className="font-display text-3xl text-burgundy mb-6">
                Mặt Trận Đấu Tranh
              </h3>
              <div className="space-y-4 text-ink leading-relaxed">
                <p>
                  Cuộc đấu tranh trên lĩnh vực tư tưởng, văn hóa diễn ra vô cùng
                  cam go và quyết liệt. Người nghệ sĩ, người làm công tác văn
                  hóa không được đứng ngoài cuộc chiến.
                </p>
                <p>
                  Ngòi bút chính là vũ khí sắc bén để "phò chính trừ tà", biểu
                  dương cái thiện, đấu tranh quét sạch chủ nghĩa cá nhân, tệ
                  tham nhũng và thói hư tật xấu.
                </p>
              </div>
            </div>
            <div className="bg-terracotta/10 rounded-2xl p-8 border-l-4 border-terracotta">
              <ul className="space-y-4">
                {[
                  'Nghệ thuật phải phục vụ nhân dân',
                  'Văn hóa là mục tiêu tối cao',
                  'Văn hóa là động lực nội sinh',
                  'Ngòi bút là vũ khí phò chính trừ tà',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-terracotta text-2xl">→</span>
                    <span className="text-ink font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
