'use client'

import { useCallback, useEffect, useState } from 'react'

export type SiteLanguage = 'en' | 'ru'

const STORAGE_KEY = 'ohd-site-language'
const DEFAULT_LANGUAGE: SiteLanguage = 'en'

export function useSiteLanguage() {
  const [language, setLanguageState] = useState<SiteLanguage>(DEFAULT_LANGUAGE)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'ru') {
      setLanguageState(stored)
      return
    }

    const browser = window.navigator.language.toLowerCase()
    if (browser.startsWith('ru')) {
      setLanguageState('ru')
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-site-language', language)
    }
  }, [language])

  const setLanguage = useCallback((next: SiteLanguage) => {
    setLanguageState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
      window.dispatchEvent(new CustomEvent('ohd-language-change', { detail: next }))
    }
  }, [])

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return
      const value = e.newValue
      if (value === 'en' || value === 'ru') {
        setLanguageState(value)
      }
    }

    const onEvent = (e: Event) => {
      const custom = e as CustomEvent<SiteLanguage>
      if (custom.detail === 'en' || custom.detail === 'ru') {
        setLanguageState(custom.detail)
      }
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener('ohd-language-change', onEvent)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('ohd-language-change', onEvent)
    }
  }, [])

  return { language, setLanguage }
}
