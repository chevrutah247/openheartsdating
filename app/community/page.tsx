'use client'

import Link from 'next/link'
import CommunityIntakeForm from '../components/CommunityIntakeForm'
import { useSiteLanguage } from '../components/useSiteLanguage'

const TEXT = {
  en: {
    title: 'Community Hub',
    subtitle: 'One platform for dating, support resources, and disability-owned commerce.',
    blocks: [
      {
        title: 'Dating',
        text: 'Find meaningful relationships in an inclusive, safety-first environment.',
        cta: 'Go to Dating',
        href: '/browse',
      },
      {
        title: 'Help & Resources',
        text: 'Share and discover grants, legal aid, advocacy groups, and support organizations.',
        cta: 'Open Resources',
        href: '/resources',
      },
      {
        title: 'Marketplace',
        text: 'Support businesses and creators with disabilities. Buy products and book services.',
        cta: 'Open Marketplace',
        href: '/marketplace',
      },
    ],
    architectureTitle: 'How everything works on one platform',
    architecture: [
      'Single account, multiple modes: Dating profile + Seller profile + Resource contributor.',
      'Role-based navigation: users see only relevant actions (dating, buying, selling, helping).',
      'Shared trust system: identity checks, reporting, moderation, and ratings used across all modules.',
      'Unified inbox: one message center for matches, buyers, sellers, and support requests.',
    ],
  },
  ru: {
    title: 'Community Hub',
    subtitle: 'Единая платформа для знакомств, ресурсов помощи и бизнеса владельцев с инвалидностью.',
    blocks: [
      {
        title: 'Знакомства',
        text: 'Поиск серьезных отношений в инклюзивной и безопасной среде.',
        cta: 'Перейти к знакомствам',
        href: '/browse',
      },
      {
        title: 'Помощь и ресурсы',
        text: 'Гранты, юридическая помощь, адвокаты, фонды и сообщества поддержки.',
        cta: 'Открыть ресурсы',
        href: '/resources',
      },
      {
        title: 'Маркетплейс',
        text: 'Поддержка бизнеса и мастеров с инвалидностью: товары и услуги в одном месте.',
        cta: 'Открыть маркетплейс',
        href: '/marketplace',
      },
    ],
    architectureTitle: 'Как объединить все в одной платформе',
    architecture: [
      'Один аккаунт, несколько режимов: профиль знакомств + продавец + автор ресурса.',
      'Ролевая навигация: пользователь видит только нужные действия (знакомства, покупка, продажа, помощь).',
      'Единая система доверия: верификация, жалобы, модерация и рейтинги для всех модулей.',
      'Единый inbox: переписка с матчами, покупателями, продавцами и по заявкам помощи.',
    ],
  },
} as const

export default function CommunityPage() {
  const { language } = useSiteLanguage()
  const t = TEXT[language]

  return (
    <section className="content-section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <h1>{t.title}</h1>
        <p style={{ color: 'var(--gray-600)', maxWidth: 760 }}>{t.subtitle}</p>

        <div className="community-grid" style={{ marginTop: '1.4rem' }}>
          {t.blocks.map((block) => (
            <article key={block.title} className="community-card card">
              <div className="card-body">
                <h3 style={{ marginBottom: '0.5rem' }}>{block.title}</h3>
                <p style={{ color: 'var(--gray-600)' }}>{block.text}</p>
                <Link href={block.href} className="button button-secondary button-small">
                  {block.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="card" style={{ marginTop: '1.4rem' }}>
          <div className="card-body">
            <h2 style={{ fontSize: '1.3rem' }}>{t.architectureTitle}</h2>
            <ul style={{ marginTop: '0.8rem', lineHeight: 1.8 }}>
              {t.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <CommunityIntakeForm defaultType="resource" />
      </div>
    </section>
  )
}
