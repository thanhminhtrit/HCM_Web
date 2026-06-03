import { Pause, Play } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

const podcasts = [
  {
    title: "Lan tỏa 'Sức mạnh mềm'",
    speaker: 'Minh An, 22 tuổi',
    duration: '12:34',
    topic:
      'Sử dụng công nghệ đồ họa, truyền thông MXH để quảng bá ẩm thực, lịch sử và âm nhạc truyền thống Việt ra thế giới.',
  },
  {
    title: 'Mặt trận An ninh tư tưởng số',
    speaker: 'Quang Huy, 23 tuổi',
    duration: '15:22',
    topic:
      'Sàng lọc tin giả, kiên định phản bác luận điệu xuyên tạc về lịch sử và lãnh tụ trên TikTok, Facebook.',
  },
  {
    title: 'Nghệ thuật vì cộng đồng',
    speaker: 'Thu Hà, 21 tuổi',
    duration: '10:45',
    topic:
      'Chuyển hóa dữ liệu lịch sử thành sản phẩm giải trí số hấp dẫn nhưng vẫn chuẩn mực.',
  },
  {
    title: 'Văn hóa khởi nghiệp',
    speaker: 'Phương Linh, 24 tuổi',
    duration: '13:56',
    topic: 'Xây dựng văn hóa doanh nghiệp theo tư tưởng đạo đức HCM',
  },
]

export function KhatVongVuonXa() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const togglePlay = (index: number) => {
    setPlayingIndex(playingIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
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

        {/* Vision Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: '🌍',
              title: 'Toàn cầu hóa',
              desc: 'Hội nhập quốc tế với bản sắc Việt',
            },
            {
              icon: '💡',
              title: 'Đổi mới sáng tạo',
              desc: 'Văn hóa số và công nghệ',
            },
            {
              icon: '🚀',
              title: 'Tương lai',
              desc: 'Xây dựng thế hệ văn hóa mới',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-teal/20 to-burgundy/20 backdrop-blur-sm border border-ochre/30 rounded-2xl p-6 hover:border-ochre transition-all hover:scale-105"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-display text-xl text-ochre mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gen Z Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl text-center mb-3">
            <span className="bg-gradient-to-r from-ochre to-teal bg-clip-text text-transparent">
              Trách nhiệm và Hành động số của Gen Z
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Những góc nhìn trẻ về văn hóa và bảo vệ nền tảng tư tưởng trên không
            gian mạng
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {podcasts.map((podcast, index) => {
              const isPlaying = playingIndex === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-ochre/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => togglePlay(index)}
                      className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                        isPlaying
                          ? 'bg-ochre text-dark-bg'
                          : 'bg-ochre/20 text-ochre hover:bg-ochre/30'
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6 ml-1" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg text-white mb-1 truncate">
                        {podcast.title}
                      </h3>
                      <p className="text-ochre text-sm mb-2">
                        {podcast.speaker}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {podcast.topic}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          {isPlaying && (
                            <motion.div
                              className="h-full bg-ochre"
                              initial={{ width: '0%' }}
                              animate={{ width: '60%' }}
                              transition={{ duration: 2 }}
                            />
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {podcast.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
                backgroundImage:
                  'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>
          <div className="relative z-10">
            <h3 className="font-display text-4xl text-white mb-6">
              Vươn Tầm Quốc Tế
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Thế hệ trẻ tiếp tục con đường cách mạng Bác Hồ đã vạch ra: phát
              triển văn hóa đồng bộ với kinh tế, kiên quyết chống lại xâm lăng
              văn hóa để bảo vệ trọn vẹn di sản Việt Nam.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Sức mạnh mềm',
                'Bảo vệ tư tưởng',
                'Hội nhập',
                'Khát vọng 2045',
              ].map((tag, i) => (
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
