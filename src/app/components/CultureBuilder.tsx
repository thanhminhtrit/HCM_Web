import { Check, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'

const choices = [
  { id: 'dan-toc', label: 'Giữ bản sắc dân tộc', principle: 'Dân tộc', positive: true },
  { id: 'khoa-hoc', label: 'Dựa trên tri thức khoa học', principle: 'Khoa học', positive: true },
  { id: 'dai-chung', label: 'Để nhân dân cùng sáng tạo', principle: 'Đại chúng', positive: true },
  { id: 'cong-nghe', label: 'Ứng dụng công nghệ có chọn lọc', principle: 'Khoa học', positive: true },
  { id: 'lai-cang', label: 'Chạy theo xu hướng, bỏ bản sắc', principle: 'Dân tộc', positive: false },
  { id: 'me-tin', label: 'Cổ súy mê tín và thông tin thiếu kiểm chứng', principle: 'Khoa học', positive: false },
  { id: 'thieu-so', label: 'Chỉ phục vụ một nhóm nhỏ', principle: 'Đại chúng', positive: false },
]

export function CultureBuilder() {
  const [selected, setSelected] = useState<string[]>([])

  const result = useMemo(() => {
    const selectedChoices = choices.filter((choice) => selected.includes(choice.id))
    const positives = selectedChoices.filter((choice) => choice.positive)
    const negatives = selectedChoices.filter((choice) => !choice.positive)
    const principles = new Set(positives.map((choice) => choice.principle))

    if (selectedChoices.length === 0) {
      return {
        score: 0,
        title: 'Hãy chọn những viên gạch đầu tiên',
        text: 'Một nền văn hóa mới cần được cân bằng giữa bản sắc, tri thức và quyền làm chủ của nhân dân.',
      }
    }

    const score = Math.max(0, Math.round(((principles.size / 3) * 80) + (positives.length * 5) - (negatives.length * 20)))

    if (negatives.length > 0) {
      return {
        score,
        title: 'Nền móng đang có điểm mất cân bằng',
        text: `Lựa chọn hiện tại làm suy yếu tính ${negatives.map((item) => item.principle).join(', ')}. Đổi mới chỉ bền vững khi không xa rời bản sắc, khoa học và nhân dân.`,
      }
    }

    if (principles.size === 3) {
      return {
        score: Math.min(100, score),
        title: 'Một nền văn hóa cân bằng và có sức sống',
        text: 'Bạn đã kết nối đủ ba tính chất Dân tộc, Khoa học và Đại chúng. Công nghệ lúc này trở thành phương tiện làm giàu bản sắc và mở rộng quyền tiếp cận.',
      }
    }

    return {
      score,
      title: 'Đã có nền móng, nhưng chưa đủ ba trụ cột',
      text: 'Hãy xem nền văn hóa bạn xây còn thiếu tính Dân tộc, Khoa học hay Đại chúng.',
    }
  }, [selected])

  const toggleChoice = (id: string) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return (
    <section className="mb-16 bg-white border border-burgundy/15 shadow-xl">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-8 md:p-10">
          <p className="text-sm uppercase tracking-widest text-terracotta mb-3">Tình huống vận dụng</p>
          <h2 className="font-display text-3xl text-burgundy mb-3">Xây một nền văn hóa mới</h2>
          <p className="text-soft-text leading-relaxed mb-8">
            Bạn đang thiết kế một dự án số giúp người trẻ khám phá di sản Việt Nam.
            Hãy chọn những nguyên tắc dự án sẽ theo đuổi.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {choices.map((choice) => {
              const isSelected = selected.includes(choice.id)
              return (
                <button
                  key={choice.id}
                  onClick={() => toggleChoice(choice.id)}
                  aria-pressed={isSelected}
                  className={`text-left p-4 border transition-all ${
                    isSelected
                      ? choice.positive
                        ? 'border-teal bg-teal/10'
                        : 'border-terracotta bg-terracotta/10'
                      : 'border-burgundy/15 hover:border-burgundy/40'
                  }`}
                >
                  <span className="flex items-start gap-3">
                    <span className={`mt-0.5 w-5 h-5 border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-burgundy text-white border-burgundy' : 'border-burgundy/30'
                    }`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">{choice.label}</span>
                      <span className="block text-xs text-soft-text mt-1">{choice.principle}</span>
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
        <div className="bg-burgundy text-white p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-end gap-2 mb-6">
              <span className="font-display text-6xl text-ochre">{result.score}</span>
              <span className="text-white/60 pb-2">/100 cân bằng</span>
            </div>
            <div className="h-2 bg-white/10 overflow-hidden mb-8">
              <div className="h-full bg-ochre transition-all" style={{ width: `${result.score}%` }} />
            </div>
            <h3 className="font-display text-2xl text-ochre mb-3">{result.title}</h3>
            <p className="text-white/75 leading-relaxed">{result.text}</p>
          </div>
          <button
            onClick={() => setSelected([])}
            className="mt-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white self-start"
          >
            <RotateCcw className="w-4 h-4" />
            Xây lại từ đầu
          </button>
        </div>
      </div>
    </section>
  )
}
