import confetti from 'canvas-confetti'
import { useState } from 'react'

const quizQuestions = [
  {
    question:
      'Theo Hồ Chí Minh, văn hóa có vai trò như thế nào đối với dân tộc?',
    options: [
      'Chỉ là hoạt động giải trí, không quan trọng',
      'Soi đường cho quốc dân đi',
      'Là phương tiện kiếm tiền thuần túy',
      'Chỉ dành riêng cho giới trí thức',
    ],
    correctIndex: 1,
    explanation:
      'Câu nói bất hủ này được Người nhấn mạnh tại Hội nghị Văn hóa toàn quốc lần thứ nhất năm 1946.',
  },
  {
    question:
      'Chủ tịch Hồ Chí Minh đưa ra định nghĩa toàn diện, bao quát nhất về khái niệm văn hóa vào thời gian nào?',
    options: [
      'Tháng 8 năm 1943',
      'Tháng 9 năm 1945',
      'Tháng 12 năm 1946',
      'Tháng 5 năm 1954',
    ],
    correctIndex: 0,
    explanation:
      'Định nghĩa này được Người viết ở trang cuối của tập thơ Nhật ký trong tù khi bị giam giữ tại Quảng Tây, tiếp cận văn hóa từ góc độ lẽ sinh tồn.',
  },
  {
    question:
      'Hồ Chí Minh định hướng xây dựng một nền văn hóa mới cho nước Việt Nam độc lập bao gồm những tính chất cốt lõi nào?',
    options: [
      'Tiên tiến, Hiện đại, Đậm đà bản sắc',
      'Dân tộc, Khoa học, Đại chúng',
      'Cách mạng, Khoa học, Quốc tế',
      'Dân chủ, Tự do, Nhân văn',
    ],
    correctIndex: 1,
    explanation:
      'Đây là 3 phương châm đòi hỏi nền văn hóa phải giữ gìn cốt cách truyền thống, dựa trên tư duy khoa học và phục vụ đa số nhân dân.',
  },
  {
    question:
      'Trong tư tưởng Hồ Chí Minh, hoạt động văn nghệ nghệ thuật và người nghệ sĩ được định vị như thế nào?',
    options: [
      'Văn nghệ giải trí đơn thuần, nghệ sĩ đứng ngoài chính trị',
      'Văn hóa là một mặt trận, văn nghệ sĩ là chiến sĩ trên mặt trận ấy',
      'Văn nghệ là công cụ sao chép lại lịch sử một cách thụ động',
      'Nghệ thuật chỉ cần tập trung miêu tả thói hư tật xấu',
    ],
    correctIndex: 1,
    explanation:
      'Luận điểm này khẳng định tính chất đấu tranh cam go tư tưởng và giao trọng trách dùng ngòi bút làm vũ khí cho nghệ sĩ.',
  },
  {
    question:
      'Khi bàn về mối quan hệ biện chứng giữa kinh tế và văn hóa, Chủ tịch Hồ Chí Minh đã khẳng định điều gì?',
    options: [
      'Kinh tế là cơ sở hạ tầng, quyết định nền tảng vật chất cho văn hóa phát triển',
      'Văn hóa hoàn toàn độc lập và không chịu tác động từ kinh tế',
      'Phải xây dựng toàn diện hệ thống văn hóa xong rồi mới làm kinh tế',
      'Kinh tế và văn hóa triệt tiêu lẫn nhau khi cùng phát triển',
    ],
    correctIndex: 0,
    explanation:
      "Người chỉ rõ kinh tế phải đi trước một bước nhằm kiến tạo nền tảng vật chất cho kiến trúc văn hóa tinh thần. Triết lý này nâng tầm câu dân gian 'Có thực mới vực được đạo'.",
  },
]

export function MiniQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [showResultScreen, setShowResultScreen] = useState(false)
  const [score, setScore] = useState(0)

  const currentQuestion = quizQuestions[currentQuestionIndex]

  const triggerMassiveConfetti = () => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      )
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      )
    }, 250)
  }

  const handleAnswer = (index: number) => {
    if (hasAnswered) return

    setSelectedIndex(index)
    setHasAnswered(true)

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedIndex(null)
      setHasAnswered(false)
    } else {
      setShowResultScreen(true)
      triggerMassiveConfetti()
    }
  }

  const reset = () => {
    setCurrentQuestionIndex(0)
    setSelectedIndex(null)
    setHasAnswered(false)
    setShowResultScreen(false)
    setScore(0)
  }

  if (showResultScreen) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-burgundy-15 text-center">
          <div className="w-24 h-24 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🎓</span>
          </div>
          <h3 className="font-display text-4xl text-burgundy mb-4">
            Chúc mừng!
          </h3>
          <p className="text-xl text-ink mb-2">
            Bạn đã hoàn thành bộ trắc nghiệm Chuyên gia Văn hóa.
          </p>
          <p className="text-lg text-soft-text mb-8">
            Điểm số của bạn:{' '}
            <span className="text-burgundy font-bold">
              {score}/{quizQuestions.length}
            </span>
          </p>
          <button
            onClick={reset}
            className="px-8 py-3 bg-burgundy text-white rounded-full font-medium hover:bg-ochre transition-colors shadow-md"
          >
            Làm lại từ đầu
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-burgundy-15">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display text-2xl text-burgundy">
            Bạn có phải chuyên gia văn hóa?
          </h3>
          <span className="text-sm font-medium text-ochre bg-ochre/10 px-3 py-1 rounded-full">
            Câu {currentQuestionIndex + 1}/{quizQuestions.length}
          </span>
        </div>

        <p className="text-ink mb-6 text-lg font-medium">
          {currentQuestion.question}
        </p>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedIndex === index
            const isCorrect = index === currentQuestion.correctIndex
            const showResult = hasAnswered

            let bgColor = 'bg-ivory hover:bg-ochre/10'
            let borderColor = 'border-burgundy-15'
            let textColor = 'text-ink'

            if (showResult) {
              if (isSelected && isCorrect) {
                bgColor = 'bg-burgundy/10'
                borderColor = 'border-burgundy'
                textColor = 'text-burgundy font-medium'
              } else if (isSelected && !isCorrect) {
                bgColor = 'bg-red-50'
                borderColor = 'border-red-300'
                textColor = 'text-red-700'
              } else if (isCorrect) {
                bgColor = 'bg-burgundy/10'
                borderColor = 'border-burgundy'
                textColor = 'text-burgundy font-medium'
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={hasAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${bgColor} ${borderColor} ${textColor} ${
                  !hasAnswered
                    ? 'cursor-pointer hover:border-burgundy/40'
                    : 'cursor-default'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {showResult && isCorrect && (
                    <span className="ml-auto text-burgundy font-bold text-lg">
                      ✓
                    </span>
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <span className="ml-auto text-red-500 font-bold text-lg">
                      ✗
                    </span>
                  )}
                </span>
              </button>
            )
          })}
        </div>

        {hasAnswered && (
          <div className="mt-8 pt-6 border-t border-burgundy/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {selectedIndex === currentQuestion.correctIndex ? (
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">🎉</span>
                <div>
                  <p className="text-burgundy font-bold text-lg mb-1">
                    Chính xác!
                  </p>
                  <p className="text-ink text-sm leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">💡</span>
                <div>
                  <p className="text-soft-text mb-1">
                    Đáp án đúng là:{' '}
                    <span className="text-burgundy font-bold">
                      {currentQuestion.options[currentQuestion.correctIndex]}
                    </span>
                  </p>
                  <p className="text-ink text-sm leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-burgundy text-white rounded-full font-medium shadow-md hover:bg-ochre hover:shadow-lg transition-all"
              >
                {currentQuestionIndex < quizQuestions.length - 1
                  ? 'Câu tiếp theo ➔'
                  : 'Xem kết quả'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
