import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'van-hoa-soi-duong-progress'

export const journeyRoutes = [
  '/goc-re-ly-luan',
  '/diem-hen-giao-thoa',
  '/mat-tran-anh-sang',
  '/khat-vong-vuon-xa',
] as const

function readVisitedRoutes() {
  if (typeof window === 'undefined') return []

  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(value) ? value.filter((route) => typeof route === 'string') : []
  } catch {
    return []
  }
}

export function useJourneyProgress() {
  const [visitedRoutes, setVisitedRoutes] = useState<string[]>(readVisitedRoutes)

  useEffect(() => {
    const syncProgress = () => setVisitedRoutes(readVisitedRoutes())
    window.addEventListener('journey-progress', syncProgress)
    window.addEventListener('storage', syncProgress)

    return () => {
      window.removeEventListener('journey-progress', syncProgress)
      window.removeEventListener('storage', syncProgress)
    }
  }, [])

  const markVisited = useCallback((route: string) => {
    if (!journeyRoutes.includes(route as (typeof journeyRoutes)[number])) return

    const nextRoutes = Array.from(new Set([...readVisitedRoutes(), route]))
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRoutes))
    setVisitedRoutes(nextRoutes)
    window.dispatchEvent(new Event('journey-progress'))
  }, [])

  const completedCount = journeyRoutes.filter((route) => visitedRoutes.includes(route)).length

  return {
    visitedRoutes,
    completedCount,
    progressPercent: Math.round((completedCount / journeyRoutes.length) * 100),
    markVisited,
  }
}
