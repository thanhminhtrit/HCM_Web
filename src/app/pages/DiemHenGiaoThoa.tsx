import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

const cultures = [
  {
    name: 'Pháp',
    influence: 'Tư tưởng tự do, bình đẳng, bác ái và chủ nghĩa nhân văn',
    figId: 'H.2.2',
    imageLabel: 'Bác Hồ tại Pháp – Tư tưởng tự do, bình đẳng',
    imageHint: '1:1 · ~500×500px',
    source: 'Quân đội Nhân dân',
    src: '/images/diem-hen-giao-thoa/BacHoTaiPhap.jpg',
    sourceUrl:
      'https://www.qdnd.vn/ky-niem-110-nam-ngay-bac-ho-ra-di-tim-duong-cuu-nuoc/hanh-trinh-lich-su/dong-chi-nguyen-ai-quoc-va-dai-hoi-toan-quoc-lan-thu-18-dang-xa-hoi-phap-661016',
  },
  {
    name: 'Anh',
    influence: 'Phong cách làm việc công nghiệp, phương pháp luận thực tiễn',
    figId: 'H.2.3',
    imageLabel: 'Cảng London thế kỷ 20 – Phong cách thực tiễn công nghiệp',
    imageHint: '1:1 · ~500×500px',
    source: 'Yêu Lịch Sử',
    src: '/images/diem-hen-giao-thoa/CongNghiepAnh19.webp',
    sourceUrl: 'https://yeulichsu.edu.vn/cach-mang-cong-nghiep-o-anh',
  },
  {
    name: 'Mỹ',
    influence: 'Tinh thần độc lập dân tộc, quyền tự do và mưu cầu hạnh phúc',
    figId: 'H.2.4',
    imageLabel: 'Tuyên ngôn Độc lập Hoa Kỳ 1776 – Nguồn cảm hứng',
    imageHint: '1:1 · ~500×500px',
    source: 'Nghiên Cứu Quốc Tế',
    src: '/images/diem-hen-giao-thoa/TuyenNgonDocLapHoaKi.jpg',
    sourceUrl:
      'https://nghiencuuquocte.org/2017/08/02/tuyen-ngon-doc-lap-my-duoc-ky/',
  },
  {
    name: 'Nga',
    influence:
      'Chủ nghĩa Mác - Lênin, Cách mạng Tháng Mười, tư tưởng giải phóng giai cấp',
    figId: 'H.2.5',
    imageLabel: 'Cách mạng Tháng Mười Nga 1917 – Chủ nghĩa Mác-Lênin',
    imageHint: '1:1 · ~500×500px',
    source: 'Quân đội Nhân dân',
    src: '/images/diem-hen-giao-thoa/CacMangThang10.jpg',
    sourceUrl:
      'https://www.qdnd.vn/quoc-te/doi-song/cach-mang-thang-muoi-nga-khai-mo-mot-thoi-dai-moi-750340',
  },
  {
    name: 'Trung Quốc',
    influence:
      'Nho giáo (triết lý hành động), Phật giáo (từ bi bác ái), Lão giáo (hài hòa thiên nhiên)',
    figId: 'H.2.6',
    imageLabel: 'Tam giáo Đông phương – Nho, Phật, Lão',
    imageHint: '1:1 · ~500×500px',
    source: 'Phật học',
    src: '/images/diem-hen-giao-thoa/TamGiaoDongPhuong.png',
    sourceUrl:
      'https://tapchinghiencuuphathoc.vn/van-hoc-phat-giao-dang-trong-su-dung-hoa-tu-tuong-phat-nho-dao.html',
  },
]

export function DiemHenGiaoThoa() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % cultures.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + cultures.length) % cultures.length)

  return (
    <div className="min-h-screen bg-ivory py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
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

        {/* Featured Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <ImagePlaceholder
            figId="H.2.1"
            label="Bác Hồ trên hành trình tìm đường cứu nước – Giao thoa văn hóa nhân loại"
            hint="Ảnh tư liệu lịch sử · 16:5 · ~1600×500px"
            color="ochre"
            source="Báo Quân đội Nhân dân"
            src="/images/diem-hen-giao-thoa/BacTrongHanhTrinhCuuNuoc.jpg"
            sourceUrl="https://media.qdnd.vn/long-form/nguyen-ai-quoc-voi-hanh-trinh-tim-duong-cuu-nuoc-giai-phong-dan-toc-54717"
            className="aspect-[16/5]"
          />
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
          <div className="grid md:grid-cols-3 border-y border-ochre/30 mb-8">
            {[
              {
                name: 'Chính trị',
                note: 'Mở đường và tạo điều kiện',
                detail: 'Độc lập dân tộc giải phóng văn hóa khỏi sự nô dịch.',
              },
              {
                name: 'Văn hóa',
                note: 'Định hướng và tác động trở lại',
                detail: 'Khai sáng nhận thức, bồi dưỡng con người và phục vụ nhiệm vụ cách mạng.',
              },
              {
                name: 'Kinh tế',
                note: 'Tạo nền tảng vật chất',
                detail: 'Kinh tế phát triển tạo điều kiện để văn hóa được kiến thiết.',
              },
            ].map((item, index) => (
              <div
                key={item.name}
                className={`relative p-7 text-center ${
                  index < 2 ? 'md:border-r border-b md:border-b-0 border-ochre/20' : ''
                } ${item.name === 'Văn hóa' ? 'bg-ochre/10' : ''}`}
              >
                {index < 2 && (
                  <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-ivory text-ochre">
                    ↔
                  </span>
                )}
                <p className="text-xs uppercase tracking-widest text-soft-text mb-2">{item.note}</p>
                <h3 className="font-display text-2xl text-ochre mb-3">{item.name}</h3>
                <p className="text-sm text-ink leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-soft-text max-w-2xl mx-auto">
            Ba lĩnh vực không nằm lồng trong nhau theo thứ bậc. Chúng tác động
            qua lại; trong đó văn hóa có tính độc lập tương đối và góp phần thúc
            đẩy xã hội phát triển bền vững.
          </p>

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
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-full md:w-56 flex-shrink-0">
                  <ImagePlaceholder
                    figId={cultures[currentSlide].figId}
                    label={cultures[currentSlide].imageLabel}
                    hint={cultures[currentSlide].imageHint}
                    color="ochre"
                    source={cultures[currentSlide].source}
                    sourceUrl={cultures[currentSlide].sourceUrl}
                    src={cultures[currentSlide].src}
                    className="aspect-square"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-display text-3xl text-ochre mb-3">
                    {cultures[currentSlide].name}
                  </h3>
                  <p className="text-lg text-ink leading-relaxed">
                    {cultures[currentSlide].influence}
                  </p>
                </div>
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
            <ImagePlaceholder
              figId="H.2.7"
              label="Bảo tồn bản sắc văn hóa dân tộc – Trống đồng Đông Sơn"
              hint="4:3 · ~800×600px"
              color="ochre"
              source="VOV"
              src="/images/diem-hen-giao-thoa/BaoTonBanSacDanToc.webp"
              sourceUrl="https://vov2.vov.vn/van-hoa-giai-tri/am-vang-dong-son-nhung-di-vat-dac-sac-nen-van-hoa-dong-son-46015.vov2"
              className="aspect-[4/3] mb-6"
            />
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
            <ImagePlaceholder
              figId="H.2.8"
              label="Tiếp biến tinh hoa văn hóa nhân loại – Giao lưu Đông Tây"
              hint="4:3 · ~800×600px"
              color="terracotta"
              source="Việt Nam Thinh Vượng"
              src="/images/diem-hen-giao-thoa/GiaoLuuVanHoa.jpg"
              sourceUrl="https://thinhvuongvietnam.com/Content/qua-trinh-giao-luu-tiep-bien-van-hoa-viet-nam-can-duoc-nhin-nhan-mot-cach-dung-dan-phu-hop-3499"
              className="aspect-[4/3] mb-6"
            />
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
