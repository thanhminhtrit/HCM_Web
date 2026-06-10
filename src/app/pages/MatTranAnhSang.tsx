import { motion } from 'motion/react'
import { useState } from 'react'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { CultureBuilder } from '../components/CultureBuilder'
import { QuoteExplorer } from '../components/QuoteExplorer'

const flipCards = [
  {
    front: 'Tính Dân tộc',
    back: 'Thể hiện tinh thần độc lập, tự cường, phát huy các giá trị truyền thống tốt đẹp của cha ông, phù hợp với tâm lý và cốt cách người Việt.',
    figId: 'H.3.3',
    imageLabel: 'Văn hóa dân tộc – Bản sắc và cốt cách Việt Nam',
    imageHint: '4:3 · ~800×600px',
    source: 'Trang thông tin điện tử tổng hợp',
    sourceUrl:
      'https://btgdvtukhanhhoa.vn/van-hoa-van-nghe/giu-gin-ban-sac-van-hoa-dan-toc-viet-nam-trong-qua-trinh-toan-cau-hoa',
    src: '/images/mat-tran-anh-sang/VanHoaDanToc.jpg',
    color: '#7B1E2B',
    colorVariant: 'burgundy' as const,
  },
  {
    front: 'Tính Khoa học',
    back: 'Đòi hỏi nền văn hóa phải tiên tiến, hiện đại, dựa trên nền tảng của tư duy khoa học biện chứng, kiên quyết chống lại tư tưởng phong kiến hủ bại, mê tín dị đoan.',
    figId: 'H.3.4',
    imageLabel: 'Phong trào khoa học – Giáo dục tiến bộ Việt Nam',
    imageHint: '4:3 · ~800×600px',
    source: 'Báo điện tử Chính Phủ',
    sourceUrl:
      'https://baochinhphu.vn/chien-luoc-phat-trien-giao-duc-den-nam-2030-tam-nhin-den-nam-2045-102250102165657226.htm',
    src: '/images/mat-tran-anh-sang/PhongTraoKhoaHocVN.jpg',
    color: '#B5562E',
    colorVariant: 'terracotta' as const,
  },
  {
    front: 'Tính Đại chúng',
    back: 'Nền văn hóa phải thuộc về nhân dân, phục vụ đại đa số quần chúng nhân dân lao động, làm cho nhân dân dễ hiểu, dễ tiếp cận và trực tiếp làm chủ.',
    figId: 'H.3.5',
    imageLabel: 'Nhân dân lao động – Chủ thể của nền văn hóa mới',
    imageHint: '4:3 · ~800×600px',
    source: 'Báo phát thanh truyền hình Ninh Bình',
    sourceUrl:
      'https://nbtv.vn/nhan-dan-la-chu-the-sang-tao-gin-giu-trao-truyen-va-phat-huy-nen-van-hoa-dan-toc-50151.html',
    src: '/images/mat-tran-anh-sang/NDLDChuTheVanHoa.png',
    color: '#C99A3B',
    colorVariant: 'ochre' as const,
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex max-w-full bg-burgundy text-white px-4 sm:px-8 py-2 mb-6 md:rotate-[-2deg]">
            <span className="font-display text-xs sm:text-sm tracking-widest uppercase text-center">
              Vị trí và Vai trò định hướng
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-burgundy mb-6 leading-tight">
            Văn hóa soi đường cho quốc dân đi
          </h1>
          <p className="text-lg md:text-xl text-terracotta font-medium max-w-3xl mx-auto leading-relaxed">
            Phát biểu tại Hội nghị Văn hóa toàn quốc lần thứ nhất (1946), Người
            khẳng định văn hóa thấu suốt vào tư tưởng, tâm lý quốc dân, định
            hình tư duy cứu nước và kiến thiết quốc gia.
          </p>
        </motion.div>

        {/* Propaganda Poster Image — full width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <ImagePlaceholder
            figId="H.3.1"
            label="Poster tuyên truyền văn hóa kháng chiến – Hội nghị Văn hóa toàn quốc 1946"
            hint="Tranh tuyên truyền / ảnh tư liệu · 16:6 · ~1600×600px"
            color="terracotta"
            source="Bảo tàng Lịch sử Quốc gia"
            src="/images/mat-tran-anh-sang/Poster.jpg"
            sourceUrl="https://baotanglichsu.vn/vi/Articles/1002/16373/suu-tap-tranh-tuyen-truyen-co-djong-trong-khang-chien-chong-thuc-dan-phap-1946-1954.html"
            className="aspect-[16/6]"
          />
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

        <QuoteExplorer />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-16 grid md:grid-cols-2 border-y border-burgundy/20"
        >
          <div className="p-8 md:p-10 md:border-r border-burgundy/20">
            <p className="text-sm uppercase tracking-widest text-terracotta mb-3">Văn hóa là mục tiêu</p>
            <h2 className="font-display text-2xl text-burgundy mb-3">Một đời sống tốt đẹp hơn</h2>
            <p className="text-soft-text leading-relaxed">
              Cách mạng không chỉ giành độc lập mà còn hướng tới một xã hội nơi
              con người có tri thức, đạo đức, đời sống văn minh và được phát triển toàn diện.
            </p>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-sm uppercase tracking-widest text-terracotta mb-3">Văn hóa là động lực</p>
            <h2 className="font-display text-2xl text-burgundy mb-3">Sức mạnh thúc đẩy hành động</h2>
            <p className="text-soft-text leading-relaxed">
              Văn hóa nâng cao dân trí, bồi dưỡng lòng yêu nước, ý chí đấu tranh
              và niềm tin để nhân dân cùng tham gia xây dựng, bảo vệ đất nước.
            </p>
          </div>
        </motion.section>

        {/* Flip Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl text-burgundy mb-3 text-center">
            3 Tính chất cốt lõi của văn hóa mới
          </h2>
          <p className="text-center text-soft-text mb-8">
            Nhấn vào thẻ để xem chi tiết
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {flipCards.map((card, index) => {
              const isFlipped = flippedCards.has(index)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  style={{ perspective: '1000px' }}
                >
                  <button
                    type="button"
                    onClick={() => toggleCard(index)}
                    aria-pressed={isFlipped}
                    aria-label={`${card.front}: ${isFlipped ? 'đang hiển thị giải thích' : 'xem giải thích'}`}
                    className="relative cursor-pointer w-full text-left"
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                    }}
                  >
                    {/* Front */}
                    <div
                      className={`rounded-2xl overflow-hidden transition-all ${
                        isFlipped
                          ? 'opacity-0 pointer-events-none'
                          : 'opacity-100'
                      }`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: isFlipped
                          ? 'rotateY(180deg)'
                          : 'rotateY(0deg)',
                        backgroundColor: card.color,
                      }}
                    >
                      <ImagePlaceholder
                        figId={card.figId}
                        label={card.imageLabel}
                        hint={card.imageHint}
                        color={card.colorVariant}
                        source={card.source}
                        sourceUrl={card.sourceUrl}
                        src={card.src}
                        className="aspect-[4/3] rounded-none border-0 border-b-2"
                      />
                      <div className="p-8 text-center">
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
                        borderColor: card.color,
                      }}
                    >
                      <div>
                        <p className="text-ink leading-relaxed">{card.back}</p>
                        <p className="text-soft-text text-sm mt-4">
                          Nhấn để quay lại
                        </p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <CultureBuilder />

        {/* Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
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
              <ImagePlaceholder
                figId="H.3.2"
                label="Văn nghệ sĩ trong kháng chiến – Ngòi bút là vũ khí"
                hint="Ảnh tư liệu · 16:9 · ~800×450px"
                color="burgundy"
                source="Thời Báo Ngân Hàng"
                src="/images/mat-tran-anh-sang/VanNgheSi.jpg"
                sourceUrl="https://thoibaonganhang.vn/mot-thoi-hao-hung-van-nghe-khang-chien-118807.html"
                className="aspect-video mt-6"
              />
            </div>
            <div className="bg-terracotta/10 rounded-2xl p-8 border-l-4 border-terracotta">
              <ImagePlaceholder
                figId="H.3.6"
                label="Hội nghị Văn hóa toàn quốc lần thứ nhất (1946)"
                hint="Ảnh tư liệu · 4:3 · ~800×600px"
                color="terracotta"
                source="Báo Đại Đoàn Kết"
                sourceUrl="https://daidoanket.vn/hoi-nghi-van-hoa-toan-quoc-lan-thu-nhat-con-duong-van-hoa-moi-cho-nuoc-nha-10211618.html"
                src="/images/mat-tran-anh-sang/HoiNghiVanHoaLan1.jpg"
                className="aspect-[4/3] mb-6"
              />
              <ul className="space-y-4">
                {[
                  'Nghệ thuật phải phục vụ nhân dân',
                  'Văn hóa vừa là mục tiêu, vừa là động lực',
                  'Tác phẩm cần có chất thép và giá trị chân, thiện, mỹ',
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
