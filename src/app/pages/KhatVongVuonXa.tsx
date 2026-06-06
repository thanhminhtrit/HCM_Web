import { ArrowRight, BookOpen } from 'lucide-react'
import { motion } from 'motion/react'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

const articles = [
  {
    tag: 'Sức mạnh mềm',
    title: "Lan tỏa 'Sức mạnh mềm' qua công nghệ số",
    author: 'Minh An',
    date: '22/05/2026',
    excerpt:
      'Sử dụng công nghệ đồ họa, truyền thông MXH để quảng bá ẩm thực, lịch sử và âm nhạc truyền thống Việt ra thế giới.',
    figId: 'H.4.4',
    imageLabel: 'Ảnh minh họa – Lan tỏa sức mạnh mềm',
    imageHint: '16:9 · ~600×337px',
    source: 'Ảnh cá nhân thành viên nhóm',
  },
  {
    tag: 'An ninh tư tưởng',
    title: 'Mặt trận An ninh tư tưởng số của người trẻ',
    author: 'Quang Huy',
    date: '22/05/2026',
    excerpt:
      'Sàng lọc tin giả, kiên định phản bác luận điệu xuyên tạc về lịch sử và lãnh tụ trên TikTok, Facebook.',
    figId: 'H.4.5',
    imageLabel: 'Ảnh minh họa – An ninh tư tưởng số',
    imageHint: '16:9 · ~600×337px',
    source: 'Ảnh cá nhân thành viên nhóm',
  },
  {
    tag: 'Nghệ thuật cộng đồng',
    title: 'Nghệ thuật số vì cộng đồng – Lịch sử trong tầm tay',
    author: 'Thu Hà',
    date: '22/05/2026',
    excerpt:
      'Chuyển hóa dữ liệu lịch sử thành sản phẩm giải trí số hấp dẫn nhưng vẫn chuẩn mực.',
    figId: 'H.4.6',
    imageLabel: 'Ảnh minh họa – Nghệ thuật số cộng đồng',
    imageHint: '16:9 · ~600×337px',
    source: 'Ảnh cá nhân thành viên nhóm',
  },
  {
    tag: 'Văn hóa khởi nghiệp',
    title: 'Văn hóa khởi nghiệp theo tư tưởng đạo đức Hồ Chí Minh',
    author: 'Phương Linh',
    date: '22/05/2026',
    excerpt:
      'Xây dựng văn hóa doanh nghiệp lấy đạo đức làm nền tảng, lấy nhân dân làm trọng tâm phục vụ.',
    figId: 'H.4.7',
    imageLabel: 'Ảnh minh họa – Văn hóa khởi nghiệp',
    imageHint: '16:9 · ~600×337px',
    source: 'Ảnh cá nhân thành viên nhóm',
  },
]

const visionItems = [
  {
    icon: '🌍',
    title: 'Toàn cầu hóa',
    desc: 'Hội nhập quốc tế với bản sắc Việt',
    figId: 'H.4.2',
    imageLabel: 'Việt Nam hội nhập quốc tế – Ngoại giao văn hóa',
    imageHint: '16:9 · ~600×337px',
    source: 'Tuyên Giáo Hưng Yên',
    src: '/images/khat-vong-vuon-xa/NgoaiGiaoVanHoa.jpg',
    sourceUrl:
      'https://tuyengiao.hungyen.dcs.vn/ngoai-giao-cay-tre-voi-boi-canh-hoi-nhap-quoc-te-viet-nam-hien-nay-c219655.html',
  },
  {
    icon: '💡',
    title: 'Đổi mới sáng tạo',
    desc: 'Văn hóa số và công nghệ',
    figId: 'H.4.3',
    imageLabel: 'Chuyển đổi số – Văn hóa công nghệ Việt Nam',
    imageHint: '16:9 · ~600×337px',
    source: 'Báo Lao Động',
    src: '/images/khat-vong-vuon-xa/Chuyen-Doi-So.jpg',
    sourceUrl:
      'https://laodong.vn/cong-nghe/chuyen-doi-so-de-lan-toa-gia-tri-van-hoa-lich-su-cua-di-san-1405412.ldo',
  },
  {
    icon: '🚀',
    title: 'Tương lai 2045',
    desc: 'Xây dựng thế hệ văn hóa mới',
    figId: 'H.4.4',
    imageLabel: 'Thế hệ trẻ Việt Nam – Khát vọng 2045',
    imageHint: '16:9 · ~600×337px',
    source: 'Báo Nhân Dân',
    src: '/images/khat-vong-vuon-xa/TheHeTreVN.jpg',
    sourceUrl:
      'https://special.nhandan.vn/tuong-lai-cho-the-he-vuon-minh/index.html',
  },
]

export function KhatVongVuonXa() {
  return (
    <div className="min-h-screen bg-dark-bg text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 text-ochre mb-6">
            <div className="h-px w-12 bg-ochre" />
            <span className="text-sm tracking-widest uppercase">
              Từ Đại hội XIII đến 2045
            </span>
            <div className="h-px w-12 bg-ochre" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl mb-6 bg-gradient-to-r from-ochre via-white to-teal bg-clip-text text-transparent">
            Khát Vọng Việt Nam Hùng Cường
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Đại hội XIII nhấn mạnh tinh thần yêu nước và khát vọng phát triển
            phồn vinh. Đưa sức mạnh văn hóa và con người Việt Nam trở thành
            nguồn lực nội sinh quan trọng nhất hướng đến cột mốc năm 2045.
          </p>
        </motion.div>

        {/* Featured Header Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <ImagePlaceholder
            figId="H.4.1"
            label="Đại hội XIII – Khát vọng Việt Nam hùng cường đến 2045"
            hint="Ảnh sự kiện · 16:6 · ~1600×600px"
            color="teal"
            source="Báo Chính Phủ"
            sourceUrl="https://baochinhphu.vn/10-dau-an-noi-bat-ve-dai-hoi-xiii-cua-dang-102287461.htm"
            src="/images/khat-vong-vuon-xa/DaiHoiDang.jpg"
            className="aspect-[16/6]"
          />
        </motion.div>

        {/* Vision Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-teal/20 to-burgundy/20 backdrop-blur-sm border border-ochre/30 rounded-2xl overflow-hidden hover:border-ochre transition-all hover:scale-105"
            >
              <ImagePlaceholder
                figId={item.figId}
                label={item.imageLabel}
                hint={item.imageHint}
                color="teal"
                source={item.source}
                sourceUrl={item.sourceUrl}
                src={item.src}
                className="aspect-video rounded-none border-0 border-b border-ochre/20"
              />
              <div className="p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-display text-xl text-ochre mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gen Z Articles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-3">
            <BookOpen className="w-6 h-6 text-ochre" />
            <h2 className="font-display text-3xl">
              <span className="bg-gradient-to-r from-ochre to-teal bg-clip-text text-transparent">
                Góc nhìn Gen Z
              </span>
            </h2>
          </div>
          <p className="text-center text-gray-400 mb-10">
            Những bài viết của thế hệ trẻ về văn hóa và bảo vệ nền tảng tư tưởng
            trên không gian mạng
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-ochre/50 transition-all overflow-hidden group"
              >
                {/* Article thumbnail */}
                <ImagePlaceholder
                  figId={article.figId}
                  label={article.imageLabel}
                  hint={article.imageHint}
                  color="ochre"
                  source={article.source}
                  className="aspect-video rounded-none border-0 border-b border-gray-700"
                />

                <div className="p-6">
                  {/* Tag */}
                  <span className="inline-block text-xs text-ochre border border-ochre/40 rounded-full px-3 py-1 mb-3">
                    {article.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-lg text-white mb-2 leading-snug group-hover:text-ochre transition-colors">
                    {article.title}
                  </h3>

                  {/* Author + Date */}
                  <p className="text-ochre/70 text-sm mb-3">
                    ✍️ {article.author} &nbsp;·&nbsp; {article.date}
                  </p>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <button className="inline-flex items-center gap-1.5 text-sm text-ochre hover:text-white transition-colors font-medium">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-burgundy via-terracotta to-ochre p-12 text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>
          <div className="relative z-10">
            <h3 className="font-display text-4xl text-white mb-6">Vươn Tầm Quốc Tế</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Thế hệ trẻ tiếp tục con đường cách mạng Bác Hồ đã vạch ra: phát triển văn hóa
              đồng bộ với kinh tế, kiên quyết chống lại xâm lăng văn hóa để bảo vệ trọn vẹn
              di sản Việt Nam.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Sức mạnh mềm', 'Bảo vệ tư tưởng', 'Hội nhập', 'Khát vọng 2045'].map((tag, i) => (
                <span
                  key={i}
                  className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
