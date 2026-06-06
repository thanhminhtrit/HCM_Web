import { ExternalLink, ImageIcon } from 'lucide-react'

type ColorVariant = 'burgundy' | 'ochre' | 'terracotta' | 'teal'

export interface ImagePlaceholderProps {
  label?: string
  hint?: string
  className?: string
  color?: ColorVariant
  /** Số thứ tự hình, e.g. "H.1.1" */
  figId?: string
  /** Tên nguồn trích dẫn */
  source?: string
  /** URL của nguồn (tuỳ chọn) */
  sourceUrl?: string
  /**
   * Đường dẫn ảnh thật từ public/, e.g. "/images/hero/bac-ho-voi-nhan-dan.jpg"
   * Khi có src → hiển thị ảnh thật; khi chưa có → hiển thị khung chờ.
   */
  src?: string
}

const colorStyles: Record<ColorVariant, { border: string; bg: string; icon: string; text: string }> = {
  burgundy: {
    border: 'border-burgundy/30',
    bg: 'bg-burgundy/5',
    icon: 'text-burgundy/30',
    text: 'text-burgundy/40',
  },
  ochre: {
    border: 'border-ochre/30',
    bg: 'bg-ochre/5',
    icon: 'text-ochre/30',
    text: 'text-ochre/40',
  },
  terracotta: {
    border: 'border-terracotta/40',
    bg: 'bg-terracotta/5',
    icon: 'text-terracotta/30',
    text: 'text-terracotta/50',
  },
  teal: {
    border: 'border-teal/30',
    bg: 'bg-teal/10',
    icon: 'text-teal/40',
    text: 'text-teal/50',
  },
}

export function ImagePlaceholder({
  label = 'Thêm ảnh tại đây',
  hint,
  className = '',
  color = 'burgundy',
  figId,
  source,
  sourceUrl,
  src,
}: ImagePlaceholderProps) {
  const s = colorStyles[color]

  return (
    <figure className="not-prose">
      {src ? (
        /* ── Ảnh thật ── */
        <img
          src={src}
          alt={label}
          className={`rounded-xl object-cover w-full h-full ${className}`}
        />
      ) : (
        /* ── Khung chờ ── */
        <div
          className={`border-2 border-dashed ${s.border} ${s.bg} rounded-xl flex flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
        >
          <ImageIcon className={`w-10 h-10 ${s.icon}`} />
          <p className={`text-sm ${s.text} text-center px-4`}>{label}</p>
          {hint && (
            <p className={`text-xs ${s.text} opacity-70 text-center px-4`}>{hint}</p>
          )}
        </div>
      )}

      {/* Citation — luôn hiển thị */}
      <figcaption className="mt-1.5 flex items-start gap-1 text-xs text-soft-text/60 italic leading-snug px-1">
        {figId && (
          <span className="not-italic font-medium text-soft-text/80 shrink-0">
            {figId}.
          </span>
        )}
        <span className="flex-1">
          {label}
          {source || sourceUrl ? (
            <>
              {' '}—{' '}
              <span className="not-italic">Nguồn: </span>
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-italic underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-0.5"
                >
                  {source ?? sourceUrl}
                  <ExternalLink className="w-3 h-3 inline-block" />
                </a>
              ) : (
                <span className="not-italic">{source}</span>
              )}
            </>
          ) : (
            <span className="text-soft-text/40"> — Nguồn: [chưa cập nhật]</span>
          )}
        </span>
      </figcaption>
    </figure>
  )
}
