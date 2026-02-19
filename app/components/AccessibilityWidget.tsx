'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'

type Settings = {
  voiceEnabled: boolean
  navAnnouncements: boolean
  mouseSounds: boolean
  fontSize: number // 0=normal, 1=large, 2=xl, 3=xxl
  highContrast: boolean
  reducedMotion: boolean
  highlightLinks: boolean
  largeCursor: boolean
}

const DEFAULT: Settings = {
  voiceEnabled: false,
  navAnnouncements: false,
  mouseSounds: false,
  fontSize: 0,
  highContrast: false,
  reducedMotion: false,
  highlightLinks: false,
  largeCursor: false,
}

const FONT_LABELS = ['Normal', 'Large', 'Extra Large', 'Huge']

function pickVoice(voices: SpeechSynthesisVoice[]) {
  return (
    voices.find((v) => v.lang.toLowerCase() === 'en-us') ||
    voices.find((v) => v.lang.toLowerCase().startsWith('en')) ||
    voices[0]
  )
}

function speakDirect(synth: SpeechSynthesis, text: string) {
  const voices = synth.getVoices()
  const selectedVoice = voices.length > 0 ? pickVoice(voices) : null

  if (synth.speaking || synth.pending) synth.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'en-US'
  if (selectedVoice) utter.voice = selectedVoice
  utter.rate = 0.95
  utter.pitch = 1
  utter.volume = 1

  utter.onerror = () => {
    const retryVoices = synth.getVoices()
    const retryVoice = retryVoices.length > 0 ? pickVoice(retryVoices) : null
    const retry = new SpeechSynthesisUtterance(text)
    retry.lang = 'en-US'
    if (retryVoice) retry.voice = retryVoice
    retry.rate = 0.95
    retry.pitch = 1
    retry.volume = 1
    synth.cancel()
    synth.speak(retry)
    if (synth.paused) synth.resume()
  }

  synth.speak(utter)
  if (synth.paused) synth.resume()
}

function pathToLabel(pathname: string) {
  if (!pathname || pathname === '/') return 'Home'
  return pathname
    .replace(/^\//, '')
    .split('/')
    .filter(Boolean)
    .map((part) => decodeURIComponent(part).replace(/[-_]+/g, ' '))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' - ')
}

export default function AccessibilityWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(DEFAULT)
  const [voiceReady, setVoiceReady] = useState(false)
  const [liveMessage, setLiveMessage] = useState('')
  const panelRef = useRef<HTMLDivElement>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const routeAnnounceInitializedRef = useRef(false)
  const lastHoverToneRef = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    synthRef.current = window.speechSynthesis

    const loadVoices = () => {
      const voices = synthRef.current?.getVoices()
      if (voices && voices.length > 0) setVoiceReady(true)
    }

    loadVoices()
    synthRef.current.addEventListener('voiceschanged', loadVoices)

    return () => {
      synthRef.current?.removeEventListener('voiceschanged', loadVoices)
    }
  }, [])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('a11y-settings')
      if (saved) {
        setSettings({ ...DEFAULT, ...JSON.parse(saved) })
      }
    } catch {}
  }, [])

  useEffect(() => {
    const root = document.documentElement

    const sizes = ['100%', '120%', '140%', '160%']
    root.style.fontSize = sizes[settings.fontSize] || '100%'

    root.classList.toggle('a11y-high-contrast', settings.highContrast)
    root.classList.toggle('a11y-reduced-motion', settings.reducedMotion)
    root.classList.toggle('a11y-highlight-links', settings.highlightLinks)
    root.classList.toggle('a11y-large-cursor', settings.largeCursor)

    try {
      localStorage.setItem('a11y-settings', JSON.stringify(settings))
    } catch {}
  }, [settings])

  const speak = useCallback((text: string) => {
    if (!synthRef.current || !settings.voiceEnabled) return
    speakDirect(synthRef.current, text)
  }, [settings.voiceEnabled])

  const ensureAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null
    const Ctx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctx) return null

    if (!audioCtxRef.current) {
      audioCtxRef.current = new Ctx()
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {})
    }

    return audioCtxRef.current
  }, [])

  const playTone = useCallback((frequency: number, duration = 0.03, volume = 0.04) => {
    const ctx = ensureAudioContext()
    if (!ctx) return

    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.value = frequency

    gain.gain.value = 0.0001
    gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 0.005)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)

    oscillator.connect(gain)
    gain.connect(ctx.destination)

    oscillator.start()
    oscillator.stop(ctx.currentTime + duration)
  }, [ensureAudioContext])

  useEffect(() => {
    if (!settings.voiceEnabled) return

    const handleFocus = (e: FocusEvent) => {
      const el = e.target as HTMLElement
      const text = getReadableText(el)
      if (text) speak(text)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (!el) return
      if (el.matches('button, a, [role="button"], input, select, textarea, [tabindex], h1, h2, h3, h4, h5, h6, label')) {
        const text = getReadableText(el)
        if (text) speak(text)
      }
    }

    document.addEventListener('focusin', handleFocus)
    document.addEventListener('mouseenter', handleMouseEnter, true)

    return () => {
      document.removeEventListener('focusin', handleFocus)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      synthRef.current?.cancel()
    }
  }, [settings.voiceEnabled, speak])

  useEffect(() => {
    if (!settings.mouseSounds) return

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || target.closest('.a11y-widget')) return
      if (!target.closest('a, button, [role="button"], input, select, textarea, label')) return

      const now = Date.now()
      if (now - lastHoverToneRef.current < 120) return
      lastHoverToneRef.current = now
      playTone(980, 0.018, 0.03)
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || target.closest('.a11y-widget')) return
      playTone(660, 0.04, 0.05)
    }

    document.addEventListener('mouseover', handleMouseOver, true)
    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver, true)
      document.removeEventListener('click', handleClick, true)
    }
  }, [settings.mouseSounds, playTone])

  useEffect(() => {
    if (!pathname) return

    const pageLabel = pathToLabel(pathname)
    const message = `Page opened: ${pageLabel}`
    setLiveMessage(message)

    if (!routeAnnounceInitializedRef.current) {
      routeAnnounceInitializedRef.current = true
      return
    }

    if (settings.navAnnouncements && synthRef.current) {
      speakDirect(synthRef.current, message)
    }
  }, [pathname, settings.navAnnouncements])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  const update = (partial: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...partial }))
  }

  const toggleVoice = () => {
    const newVal = !settings.voiceEnabled
    update({ voiceEnabled: newVal })

    if (newVal && synthRef.current) {
      speakDirect(synthRef.current, 'Voice enabled. Hover over buttons and links to hear them.')
    } else {
      synthRef.current?.cancel()
    }
  }

  const testVoice = () => {
    if (synthRef.current) {
      speakDirect(synthRef.current, 'Hello! Voice is working. Hover over any button or link to hear it.')
    }
  }

  const toggleMouseSounds = () => {
    const newVal = !settings.mouseSounds
    update({ mouseSounds: newVal })

    if (newVal) {
      ensureAudioContext()
      playTone(760, 0.045, 0.05)
    }
  }

  const reset = () => {
    setSettings(DEFAULT)
    synthRef.current?.cancel()
  }

  const hasChanges = JSON.stringify(settings) !== JSON.stringify(DEFAULT)
  const hasSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window

  return (
    <div ref={panelRef} className="a11y-widget">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {liveMessage}
      </div>

      <button
        className="a11y-trigger"
        onClick={() => setOpen(!open)}
        aria-label="Accessibility settings"
        aria-expanded={open}
        title="Accessibility settings"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v4" />
          <path d="M7.5 9.5L12 11l4.5-1.5" />
          <path d="M9 21l3-8 3 8" />
        </svg>
        {hasChanges && <span className="a11y-badge" />}
      </button>

      {open && (
        <div className="a11y-panel" role="dialog" aria-label="Accessibility settings">
          <div className="a11y-panel-header">
            <h3>Accessibility</h3>
            {hasChanges && (
              <button className="a11y-reset" onClick={reset} aria-label="Reset all settings">
                Reset
              </button>
            )}
          </div>

          <div className="a11y-options">
            {hasSpeech && (
              <>
                <div className="a11y-option" style={{ flexWrap: 'wrap' }}>
                  <div className="a11y-option-info">
                    <span className="a11y-option-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07"/></svg>
                    </span>
                    <div>
                      <span className="a11y-option-label">Voice</span>
                      <span className="a11y-option-desc">Read buttons and links aloud</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {settings.voiceEnabled && (
                      <button
                        className="a11y-test-btn"
                        onClick={testVoice}
                        aria-label="Test voice"
                      >
                        Test
                      </button>
                    )}
                    <button
                      className={`a11y-toggle ${settings.voiceEnabled ? 'active' : ''}`}
                      onClick={toggleVoice}
                      role="switch"
                      aria-checked={settings.voiceEnabled}
                      aria-label="Toggle voice readout"
                    >
                      <span className="a11y-toggle-thumb" />
                    </button>
                  </div>
                </div>

                <div className="a11y-option">
                  <div className="a11y-option-info">
                    <span className="a11y-option-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5h18"/><path d="M7 12h10"/><path d="M10 19h4"/></svg>
                    </span>
                    <div>
                      <span className="a11y-option-label">Navigation Voice</span>
                      <span className="a11y-option-desc">Announce opened pages</span>
                    </div>
                  </div>
                  <button
                    className={`a11y-toggle ${settings.navAnnouncements ? 'active' : ''}`}
                    onClick={() => update({ navAnnouncements: !settings.navAnnouncements })}
                    role="switch"
                    aria-checked={settings.navAnnouncements}
                    aria-label="Toggle navigation announcements"
                  >
                    <span className="a11y-toggle-thumb" />
                  </button>
                </div>
              </>
            )}

            <div className="a11y-option">
              <div className="a11y-option-info">
                <span className="a11y-option-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>
                </span>
                <div>
                  <span className="a11y-option-label">Font Size</span>
                  <span className="a11y-option-desc">{FONT_LABELS[settings.fontSize]}</span>
                </div>
              </div>
              <div className="a11y-font-btns">
                <button
                  className="a11y-font-btn"
                  onClick={() => update({ fontSize: Math.max(0, settings.fontSize - 1) })}
                  disabled={settings.fontSize === 0}
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <button
                  className="a11y-font-btn"
                  onClick={() => update({ fontSize: Math.min(3, settings.fontSize + 1) })}
                  disabled={settings.fontSize === 3}
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>

            <div className="a11y-option">
              <div className="a11y-option-info">
                <span className="a11y-option-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20" /><path d="M12 2a10 10 0 010 20" fill="currentColor"/></svg>
                </span>
                <div>
                  <span className="a11y-option-label">High Contrast</span>
                  <span className="a11y-option-desc">Increase visual contrast</span>
                </div>
              </div>
              <button
                className={`a11y-toggle ${settings.highContrast ? 'active' : ''}`}
                onClick={() => update({ highContrast: !settings.highContrast })}
                role="switch"
                aria-checked={settings.highContrast}
                aria-label="Toggle high contrast"
              >
                <span className="a11y-toggle-thumb" />
              </button>
            </div>

            <div className="a11y-option">
              <div className="a11y-option-info">
                <span className="a11y-option-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M10 12h4"/></svg>
                </span>
                <div>
                  <span className="a11y-option-label">Reduce Motion</span>
                  <span className="a11y-option-desc">Stop animations and transitions</span>
                </div>
              </div>
              <button
                className={`a11y-toggle ${settings.reducedMotion ? 'active' : ''}`}
                onClick={() => update({ reducedMotion: !settings.reducedMotion })}
                role="switch"
                aria-checked={settings.reducedMotion}
                aria-label="Toggle reduced motion"
              >
                <span className="a11y-toggle-thumb" />
              </button>
            </div>

            <div className="a11y-option">
              <div className="a11y-option-info">
                <span className="a11y-option-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                </span>
                <div>
                  <span className="a11y-option-label">Highlight Links</span>
                  <span className="a11y-option-desc">Underline all links</span>
                </div>
              </div>
              <button
                className={`a11y-toggle ${settings.highlightLinks ? 'active' : ''}`}
                onClick={() => update({ highlightLinks: !settings.highlightLinks })}
                role="switch"
                aria-checked={settings.highlightLinks}
                aria-label="Toggle link highlighting"
              >
                <span className="a11y-toggle-thumb" />
              </button>
            </div>

            <div className="a11y-option">
              <div className="a11y-option-info">
                <span className="a11y-option-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/></svg>
                </span>
                <div>
                  <span className="a11y-option-label">Large Cursor</span>
                  <span className="a11y-option-desc">Use bigger mouse pointer</span>
                </div>
              </div>
              <button
                className={`a11y-toggle ${settings.largeCursor ? 'active' : ''}`}
                onClick={() => update({ largeCursor: !settings.largeCursor })}
                role="switch"
                aria-checked={settings.largeCursor}
                aria-label="Toggle large cursor"
              >
                <span className="a11y-toggle-thumb" />
              </button>
            </div>

            <div className="a11y-option">
              <div className="a11y-option-info">
                <span className="a11y-option-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </span>
                <div>
                  <span className="a11y-option-label">Mouse Sounds</span>
                  <span className="a11y-option-desc">Play hover and click tones</span>
                </div>
              </div>
              <button
                className={`a11y-toggle ${settings.mouseSounds ? 'active' : ''}`}
                onClick={toggleMouseSounds}
                role="switch"
                aria-checked={settings.mouseSounds}
                aria-label="Toggle mouse sounds"
              >
                <span className="a11y-toggle-thumb" />
              </button>
            </div>
          </div>

          <div className="a11y-panel-footer">
            <kbd>Esc</kbd> to close
            {hasSpeech && settings.voiceEnabled && !voiceReady && <span style={{ display: 'block', marginTop: 6 }}>Loading voices...</span>}
          </div>
        </div>
      )}
    </div>
  )
}

function getReadableText(el: HTMLElement): string {
  if (el.closest('.a11y-widget')) return ''

  const ariaLabel = el.getAttribute('aria-label')
  if (ariaLabel) return ariaLabel

  const labelledBy = el.getAttribute('aria-labelledby')
  if (labelledBy) {
    const labelEl = document.getElementById(labelledBy)
    if (labelEl?.textContent) return labelEl.textContent.trim()
  }

  if (el.tagName === 'IMG') {
    return (el as HTMLImageElement).alt || ''
  }

  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
    const input = el as HTMLInputElement
    const placeholder = input.placeholder
    const type = input.type
    const label = document.querySelector(`label[for="${input.id}"]`)
    if (label?.textContent) return `${label.textContent.trim()}: ${type} field`
    if (placeholder) return `${placeholder}: ${type} field`
    return `${type} field`
  }

  if (el.tagName === 'SELECT') {
    const select = el as HTMLSelectElement
    const selected = select.options[select.selectedIndex]?.text
    return selected ? `Selection: ${selected}` : 'Dropdown'
  }

  const text = el.textContent?.trim()
  if (text && text.length < 200) return text

  const title = el.getAttribute('title')
  if (title) return title

  return ''
}
