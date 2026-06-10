import { motion } from 'motion/react'
import { useState } from 'react'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

const approaches = [
  {
    title: 'Tiếp cận theo nghĩa rộng',
    lens: 'Nghĩa nhân học',
    content:
      'Văn hóa là tổng thể các phương thức sinh hoạt vật chất và tinh thần do con người sáng tạo để thích ứng với nhu cầu đời sống và đòi hỏi của sự sinh tồn.',
    meaning:
      'Cách nhìn này bao quát toàn bộ đời sống và giải thích cách con người làm chủ tự nhiên, làm chủ xã hội.',
  },
  {
    title: 'Tiếp cận theo nghĩa hẹp',
    lens: 'Nghĩa xã hội học',
    content:
      'Văn hóa là đời sống tinh thần của xã hội, thuộc kiến trúc thượng tầng, song hành và tương tác biện chứng với kinh tế và chính trị.',
    meaning:
      'Văn hóa không đứng ngoài xã hội: nó được tạo điều kiện bởi chính trị, kinh tế và đồng thời tác động trở lại hai lĩnh vực ấy.',
  },
  {
    title: 'Tiếp cận theo nghĩa rất hẹp',
    lens: 'Nghĩa tri thức, giáo dục',
    content:
      'Văn hóa là trình độ học vấn, học thức giáo dục, tri thức khoa học kỹ thuật (được thể hiện qua phong trào Bình dân học vụ, xóa nạn mù chữ).',
    meaning:
      'Nâng cao dân trí là điều kiện để nhân dân làm chủ đời sống và tham gia xây dựng một xã hội dân chủ.',
  },
  {
    title: 'Tiếp cận theo phương thức sử dụng',
    lens: 'Nghĩa lối sống, ứng xử',
    content:
      'Văn hóa là lối sống, nếp sống, phong cách sống, văn hóa ứng xử và cốt cách sinh hoạt hằng ngày của con người.',
    meaning:
      'Văn hóa không chỉ nằm trên trang sách mà hiện diện trong cách giao tiếp, tinh thần cần kiệm liêm chính và thái độ sống có tình nghĩa.',
  },
]

const galleryImages = [
  {
    figId: 'H.1.3',
    label: 'Hồ Chí Minh tại Quảng Tây (1942–1943)',
    hint: '3:2 · ~900×600px',
    source: 'Nghiên Cứu Quốc Tế',
    src: '/images/goc-re-ly-luan/HCMQuangTay1942.jpg',
    sourceUrl:
      'https://nghiencuuquocte.org/2025/05/20/mot-giai-doan-quan-trong-trong-cuoc-doi-chu-tich-ho-chi-minh-tai-quang-tay/',
  },
  {
    figId: 'H.1.4',
    label: 'Bình dân học vụ – Xóa nạn mù chữ 1945',
    hint: '3:2 · ~900×600px',
    source: 'Tạp Chí Lịch sử Đảng Việt Nam',
    src: '/images/goc-re-ly-luan/BinhDanHocVuXoaMuChu1945.jpg',
    sourceUrl:
      'https://tapchilichsudang.vn/phong-trao-binh-dan-hoc-vu-1945-1946.html',
  },
  {
    figId: 'H.1.5',
    label: 'Văn hóa dân gian Việt Nam',
    hint: '3:2 · ~900×600px',
    source: 'VOV',
    src: '/images/goc-re-ly-luan/VanHoaDanGianVN.webp',
    sourceUrl:
      'https://vov2.vov.vn/van-hoa-giai-tri/van-hoa-dan-gian-trong-doi-song-duong-dai-24396.vov2',
  },
  {
    figId: 'H.1.6',
    label: 'Phong trào văn hóa kháng chiến',
    hint: '3:2 · ~900×600px',
    source: 'Trạm Thông Tin Điện Tử',
    src: '/images/goc-re-ly-luan/VanHoavaKhangChien.jpg',
    sourceUrl:
      'https://ngheandost.gov.vn/khxhnvna/dien-dan-khxh-nv/van-hoa-van-nghe-nghe-an-trong-khang-chien-chong-phap-den-thang-loi-dien-bien-phu-lay-lung-1945-1954-112.html',
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

        {/* Quote Block — 2 columns: portrait image + quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-stretch mb-12"
        >
          <ImagePlaceholder
            figId="H.1.1"
            label="Hồ Chí Minh tại Quảng Tây (1942–1943)"
            hint="Ảnh chân dung · 3:4 · ~600×800px"
            color="burgundy"
            source="Nghiên Cứu Quốc Tế"
            sourceUrl="https://nghiencuuquocte.org/2025/05/20/mot-giai-doan-quan-trong-trong-cuoc-doi-chu-tich-ho-chi-minh-tai-quang-tay/"
            src="/images/goc-re-ly-luan/HCMQuangTay1942.jpg"
            className="aspect-[3/4] md:aspect-auto"
          />
          <div className="bg-burgundy/5 border-l-4 border-burgundy rounded-r-2xl p-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <span className="text-6xl text-burgundy/30 font-quote leading-none">
                "
              </span>
              <div>
                <p className="font-quote italic text-lg text-ink leading-relaxed mb-4">
                  Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới
                  sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp
                  luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ
                  cho sinh hoạt hằng ngày về mặc, ăn, ở và các phương thức sử
                  dụng. Toàn bộ những sáng tạo và phát minh đó tức là văn hóa.
                  Văn hóa là sự tổng hợp của mọi phương thức sinh hoạt cùng với
                  biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng
                  những nhu cầu đời sống và đòi hỏi của sự sinh tồn.
                </p>
                <p className="text-burgundy font-medium">
                  — Hồ Chí Minh, tháng 8 năm 1943 (Nhật ký trong tù)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline-style section */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-burgundy/20" />

          {/* Milestone 1 */}
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
              tập thơ Nhật ký trong tù khi bị chính quyền Tưởng Giới Thạch giam
              giữ và giải qua nhiều nhà lao tại Quảng Tây, Trung Quốc. Đây là
              lần đầu tiên Người đưa ra định nghĩa mang tính bao quát và định
              hình nền tảng tư tưởng văn hóa.
            </p>
            <p className="text-soft-text leading-relaxed mb-6">
              Phân tích học thuật: Định nghĩa này cho thấy Hồ Chí Minh tiếp cận
              văn hóa từ góc độ nhân học và triết học hành vi hành động. Văn hóa
              không phải là cái gì xa xôi, mà là toàn bộ những giá trị vật chất
              và tinh thần được kiến tạo vì động lực sinh tồn và mục đích sống
              của con người.
            </p>
            <ImagePlaceholder
              figId="H.1.2"
              label="Nhật kí trong tù (1942–1943)"
              hint="Ảnh tư liệu lịch sử · 16:9 · ~1200×675px"
              color="burgundy"
              source="Thông Tấn Xã Việt Nam"
              src="/images/goc-re-ly-luan/NhatKiTrongTu.jpg"
              sourceUrl="https://nvsk.vnanet.vn/nhat-ky-trong-tu-1-124757.vna"
              className="aspect-video"
            />
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
                  <div
                    className={`bg-white rounded-xl border-2 transition-all ${
                      isExpanded
                        ? 'border-burgundy shadow-lg'
                        : 'border-burgundy/20 hover:border-burgundy/40'
                    }`}
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      aria-expanded={isExpanded}
                      aria-controls={`approach-panel-${index}`}
                      className="w-full text-left p-6"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-xs uppercase tracking-wide text-terracotta">
                            {approach.lens}
                          </span>
                          <h3 className="font-display text-xl text-burgundy">
                            {approach.title}
                          </h3>
                        </div>
                        <div
                          className={`w-8 h-8 rounded-full bg-burgundy/10 flex items-center justify-center transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        >
                          <span className="text-burgundy">▼</span>
                        </div>
                      </div>
                    </button>
                    {isExpanded && (
                      <motion.div
                        id={`approach-panel-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mx-6 pb-6 pt-4 border-t border-burgundy/20"
                      >
                        <p className="text-ink leading-relaxed">
                          {approach.content}
                        </p>
                        <div className="mt-4 bg-burgundy/5 border-l-2 border-burgundy p-4">
                          <p className="text-xs uppercase tracking-wide text-burgundy font-bold mb-1">
                            Ý nghĩa
                          </p>
                          <p className="text-sm text-soft-text leading-relaxed">
                            {approach.meaning}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16"
        >
          <div className="w-16 h-1 bg-burgundy/30 mb-6" />
          <h2 className="font-display text-2xl text-burgundy mb-6">
            Hình ảnh minh họa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <ImagePlaceholder
                  figId={img.figId}
                  label={img.label}
                  hint={img.hint}
                  color="burgundy"
                  source={img.source}
                  sourceUrl={img.sourceUrl}
                  src={img.src}
                  className="aspect-[3/2]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
