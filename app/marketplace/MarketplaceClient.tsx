'use client'

import CommunityIntakeForm from '../components/CommunityIntakeForm'
import { useSiteLanguage } from '../components/useSiteLanguage'

const TEXT = {
  en: {
    title: 'Marketplace',
    subtitle: 'Buy products and book services from disability-owned businesses and creators.',
    tracksTitle: 'Marketplace tracks',
    tracks: [
      'Products: handmade items, art, adaptive products, digital goods.',
      'Services: design, consulting, tutoring, accessibility audits, local services.',
      'Business directory: discover and support entrepreneurs with disabilities.',
    ],
    strategyTitle: 'Platform strategy (Dating + Commerce)',
    strategy: [
      'Separate modules, shared trust and moderation.',
      'Independent discovery feeds (dating feed and marketplace feed).',
      'Profile badges and verification for sellers/providers.',
      'One wallet for future donations, purchases, and premium community features.',
    ],
  },
  ru: {
    title: 'Маркетплейс',
    subtitle: 'Покупайте товары и заказывайте услуги у бизнесов и создателей с инвалидностью.',
    tracksTitle: 'Направления маркетплейса',
    tracks: [
      'Товары: хендмейд, арт, адаптивные товары, цифровые продукты.',
      'Услуги: дизайн, консультации, обучение, аудит доступности, локальные сервисы.',
      'Каталог бизнесов: поддержка предпринимателей с инвалидностью.',
    ],
    strategyTitle: 'Стратегия платформы (Dating + Commerce)',
    strategy: [
      'Раздельные модули, но единая система доверия и модерации.',
      'Отдельные ленты: знакомства и маркетплейс.',
      'Бейджи профиля и верификация продавцов/исполнителей.',
      'Единый кошелек в будущем для донатов, покупок и community-функций.',
    ],
  },
} as const

export default function MarketplaceClient() {
  const { language } = useSiteLanguage()
  const t = TEXT[language]

  return (
    <section className="content-section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <h1>{t.title}</h1>
        <p style={{ color: 'var(--gray-600)', maxWidth: 780 }}>{t.subtitle}</p>

        <div className="community-grid" style={{ marginTop: '1.2rem' }}>
          <div className="community-card card">
            <div className="card-body">
              <h2 style={{ fontSize: '1.2rem' }}>{t.tracksTitle}</h2>
              <ul style={{ marginTop: '0.8rem', lineHeight: 1.8 }}>
                {t.tracks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="community-card card">
            <div className="card-body">
              <h2 style={{ fontSize: '1.2rem' }}>{t.strategyTitle}</h2>
              <ul style={{ marginTop: '0.8rem', lineHeight: 1.8 }}>
                {t.strategy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <CommunityIntakeForm defaultType="product" />
      </div>
    </section>
  )
}
