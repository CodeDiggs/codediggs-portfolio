import { useEffect, useMemo, useRef, useState } from 'react'
import { supportedLanguages } from './translateLanguages'

type LanguageMenuProps = {
  language: string
  onChoose: (language: string) => void
}

export default function LanguageMenu({ language, onChoose }: LanguageMenuProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    window.addEventListener('keydown', closeOnEscape)
    window.requestAnimationFrame(() => searchRef.current?.focus())

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const filteredLanguages = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return supportedLanguages

    return supportedLanguages.filter(
      (option) =>
        option.label.toLowerCase().includes(query) || option.code.toLowerCase().includes(query),
    )
  }, [search])

  const chooseLanguage = (next: string) => {
    onChoose(next)
    setOpen(false)
    setSearch('')
  }

  const isVietnamese = language === 'vi'

  return (
    <div
      ref={containerRef}
      className="relative z-[60] shrink-0"
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={isVietnamese ? 'Chọn ngôn ngữ' : 'Select language'}
        className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/95 px-3 text-sm font-medium text-slate-200 shadow-md backdrop-blur transition hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
      >
        <span aria-hidden="true" className="text-base">🌐</span>
        <span className="hidden sm:inline">{isVietnamese ? 'Ngôn ngữ' : 'Language'}</span>
        <span
          aria-hidden="true"
          className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={isVietnamese ? 'Chọn ngôn ngữ' : 'Select language'}
          className="fixed inset-x-3 top-[4.75rem] flex max-h-[calc(100dvh-5.5rem)] flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl sm:absolute sm:inset-x-auto sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-80 sm:max-w-[calc(100vw-2rem)] sm:max-h-[calc(100dvh-6rem)]"
        >
          <div className="shrink-0 border-b border-slate-800 p-2">
            <label htmlFor="language-search" className="sr-only">
              {isVietnamese ? 'Tìm ngôn ngữ' : 'Search languages'}
            </label>
            <input
              ref={searchRef}
              id="language-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={isVietnamese ? 'Tìm ngôn ngữ…' : 'Search languages…'}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-1.5">
            {filteredLanguages.map((option) => {
              const selected = option.code === language

              return (
                <button
                  key={option.code}
                  type="button"
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => chooseLanguage(option.code)}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                    selected
                      ? 'bg-cyan-400/10 font-semibold text-cyan-300'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-cyan-300'
                  }`}
                >
                  <span className="min-w-0 truncate">{option.label}</span>
                  <span className="hidden shrink-0 items-center gap-2 sm:flex">
                    <span className="text-xs font-normal uppercase text-slate-500">{option.code}</span>
                    {selected && <span aria-hidden="true">✓</span>}
                  </span>
                  {selected && <span aria-hidden="true" className="shrink-0 sm:hidden">✓</span>}
                </button>
              )
            })}

            {filteredLanguages.length === 0 && (
              <p className="px-3 py-4 text-sm text-slate-400">
                {isVietnamese ? 'Không tìm thấy ngôn ngữ.' : 'No languages found.'}
              </p>
            )}
          </div>

          <p className="hidden shrink-0 border-t border-slate-800 px-3 py-2 text-xs leading-relaxed text-slate-500 sm:block">
            {isVietnamese
              ? 'Tiếng Anh và tiếng Việt dùng bản dịch tích hợp. Các ngôn ngữ khác được dịch bằng Google Translate.'
              : 'English and Vietnamese use built-in translations. Other languages are translated with Google Translate.'}
          </p>
        </div>
      )}
    </div>
  )
}
