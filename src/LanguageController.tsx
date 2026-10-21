import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import LanguageMenu from './LanguageMenu'
import {
  detectInitialLanguage,
  persistLanguage,
  translateText,
  type Language,
} from './i18n'
import {
  buildGoogleTranslateUrl,
  getGoogleTranslatedTarget,
  isGoogleTranslatedPage,
  isNativeLanguage,
  normalizeSupportedLanguage,
} from './translateLanguages'

type AttributeName = 'aria-label' | 'alt' | 'title'

const textOriginals = new WeakMap<Text, string>()
const attributeOriginals = new WeakMap<Element, Partial<Record<AttributeName, string>>>()
const translatedAttributes: AttributeName[] = ['aria-label', 'alt', 'title']
const EXTERNAL_LANGUAGE_KEY = 'codediggs-external-language'
const NATIVE_LANGUAGE_KEY = 'codediggs-language'

const localizedValue = (language: Language, original: string) =>
  language === 'vi' ? translateText(language, original) : original

const translateTextNode = (node: Text, language: Language) => {
  const current = node.nodeValue ?? ''
  const previousOriginal = textOriginals.get(node)

  if (previousOriginal === undefined) {
    textOriginals.set(node, current)
  } else {
    const previousVietnamese = translateText('vi', previousOriginal)
    if (current !== previousOriginal && current !== previousVietnamese) {
      textOriginals.set(node, current)
    }
  }

  const original = textOriginals.get(node) ?? current
  const next = localizedValue(language, original)
  if (current !== next) node.nodeValue = next
}

const translateAttributes = (element: Element, language: Language) => {
  const originals = attributeOriginals.get(element) ?? {}

  translatedAttributes.forEach((attribute) => {
    const current = element.getAttribute(attribute)
    if (current === null) return

    const previousOriginal = originals[attribute]
    if (previousOriginal === undefined) {
      originals[attribute] = current
    } else {
      const previousVietnamese = translateText('vi', previousOriginal)
      if (current !== previousOriginal && current !== previousVietnamese) {
        originals[attribute] = current
      }
    }

    const original = originals[attribute] ?? current
    const next = localizedValue(language, original)
    if (current !== next) element.setAttribute(attribute, next)
  })

  attributeOriginals.set(element, originals)
}

const translateSubtree = (root: Node, language: Language) => {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, language)
    return
  }

  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return

  if (root.nodeType === Node.ELEMENT_NODE) {
    translateAttributes(root as Element, language)
  }

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  )

  let node = walker.nextNode()
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text, language)
    if (node.nodeType === Node.ELEMENT_NODE) translateAttributes(node as Element, language)
    node = walker.nextNode()
  }
}

const updatePageMetadata = (language: Language) => {
  document.documentElement.lang = language
  document.title =
    language === 'vi'
      ? 'CodeDiggs | Phần mềm, Kỹ thuật & Giáo dục'
      : 'CodeDiggs | Software, Engineering & Education'

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) {
    description.content =
      language === 'vi'
        ? 'CodeDiggs là hồ sơ đa lĩnh vực về kỹ thuật phần mềm, giáo dục kỹ thuật, chẩn đoán ô tô và nghiên cứu độc lập.'
        : 'CodeDiggs is a multidisciplinary portfolio exploring software engineering, technical education, automotive diagnostics, and independent research.'
  }
}

const readStored = (key: string) => {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

const removeStored = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch {
    // The selector still works for the current navigation when storage is unavailable.
  }
}

const writeStored = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // The selector still works for the current navigation when storage is unavailable.
  }
}

const getPreferredSupportedLanguage = (): string => {
  if (typeof window === 'undefined') return 'en'

  const query = normalizeSupportedLanguage(new URLSearchParams(window.location.search).get('lang'))
  if (query) return query

  const external = normalizeSupportedLanguage(readStored(EXTERNAL_LANGUAGE_KEY))
  if (external) return external

  const native = normalizeSupportedLanguage(readStored(NATIVE_LANGUAGE_KEY))
  if (native && isNativeLanguage(native)) return native

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const browserLanguage of browserLanguages) {
    const supported = normalizeSupportedLanguage(browserLanguage)
    if (supported) return supported
  }

  return 'en'
}

const originalSiteUrl = (language: Language) => {
  const url = new URL('https://codediggs.com/')
  url.searchParams.set('lang', language)
  if (typeof window !== 'undefined' && window.location.hash) url.hash = window.location.hash
  return url.toString()
}

export default function LanguageController() {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage)
  const [preferredLanguage] = useState(getPreferredSupportedLanguage)
  const [languageMenuHost, setLanguageMenuHost] = useState<HTMLElement | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    setLanguageMenuHost(document.getElementById('language-menu-root'))

    const handleScroll = () => setShowBackToTop(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isGoogleTranslatedPage() && !isNativeLanguage(preferredLanguage)) {
      writeStored(EXTERNAL_LANGUAGE_KEY, preferredLanguage)
      removeStored(NATIVE_LANGUAGE_KEY)
      window.location.replace(buildGoogleTranslateUrl(preferredLanguage))
      return
    }

    if (isNativeLanguage(preferredLanguage)) removeStored(EXTERNAL_LANGUAGE_KEY)

    persistLanguage(language)
    updatePageMetadata(language)

    const apply = (root: Node = document.body) => translateSubtree(root, language)
    const frame = window.requestAnimationFrame(() => apply())

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') {
          apply(mutation.target)
          return
        }

        if (mutation.type === 'attributes') {
          apply(mutation.target)
          return
        }

        mutation.addedNodes.forEach((node) => apply(node))
      })
    })

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributes,
    })

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [language, preferredLanguage])

  const chooseLanguage = (next: string) => {
    const normalized = normalizeSupportedLanguage(next)
    if (!normalized) return

    if (isNativeLanguage(normalized)) {
      removeStored(EXTERNAL_LANGUAGE_KEY)

      if (isGoogleTranslatedPage()) {
        window.location.assign(originalSiteUrl(normalized))
        return
      }

      setLanguage(normalized)
      persistLanguage(normalized)

      const url = new URL(window.location.href)
      url.searchParams.set('lang', normalized)
      window.history.replaceState({}, '', url)
      return
    }

    writeStored(EXTERNAL_LANGUAGE_KEY, normalized)
    removeStored(NATIVE_LANGUAGE_KEY)
    window.location.assign(buildGoogleTranslateUrl(normalized))
  }

  const activeLanguage = getGoogleTranslatedTarget() ?? language

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      {languageMenuHost &&
        createPortal(
          <LanguageMenu language={activeLanguage} onChoose={chooseLanguage} />,
          languageMenuHost,
        )}

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={language === 'vi' ? 'Về đầu trang' : 'Back to top'}
          title={language === 'vi' ? 'Về đầu trang' : 'Back to top'}
          className="fixed bottom-4 right-4 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/95 text-2xl font-bold text-cyan-300 shadow-2xl backdrop-blur transition hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          <span aria-hidden="true">↑</span>
        </button>
      )}
    </>
  )
}
