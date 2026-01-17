import type { ReactNode } from 'react'

export default function PlatformPreviewLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <section style={{ minHeight: '100vh', background: '#ffffff' }}>
      {children}
    </section>
  )
}
