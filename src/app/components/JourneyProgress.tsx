import { Check, Map } from 'lucide-react'
import { Link } from 'react-router'
import { useJourneyProgress } from '../hooks/useJourneyProgress'

export function JourneyProgress() {
  const { completedCount, progressPercent } = useJourneyProgress()

  return (
    <Link
      to="/ban-do"
      aria-label={`Đã khám phá ${completedCount} trên 4 trạm`}
      className="hidden md:flex items-center gap-3 min-w-[180px] group"
    >
      <span className="w-9 h-9 rounded-full border border-burgundy/20 bg-burgundy/5 flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors">
        {completedCount === 4 ? <Check className="w-4 h-4" /> : <Map className="w-4 h-4" />}
      </span>
      <span className="flex-1">
        <span className="flex justify-between text-xs text-soft-text mb-1">
          <span>Hành trình</span>
          <span>{completedCount}/4 trạm</span>
        </span>
        <span className="block h-1.5 bg-burgundy/10 rounded-full overflow-hidden">
          <span
            className="block h-full bg-burgundy transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </span>
      </span>
    </Link>
  )
}
