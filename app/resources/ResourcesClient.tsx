'use client'

import CommunityIntakeForm from '../components/CommunityIntakeForm'
import { useSiteLanguage } from '../components/useSiteLanguage'

const TEXT = {
  en: {
    title: 'Help & Resources',
    subtitle: 'A practical directory for disability support: grants, legal help, advocacy, and everyday services.',
    categoriesTitle: 'Priority categories',
    categories: [
      'Financial aid and emergency grants',
      'Legal aid and disability rights attorneys',
      'Housing and transportation support',
      'Mental health and peer support',
      'Employment programs and training',
      'Independent living services',
    ],
  },
  ru: {
    title: 'Помощь и ресурсы',
    subtitle: 'Практичный каталог поддержки: гранты, адвокаты, фонды, сервисы и услуги для людей с инвалидностью.',
    categoriesTitle: 'Приоритетные категории',
    categories: [
      'Финансовая помощь и экстренные гранты',
      'Юридическая помощь и адвокаты по правам инвалидов',
      'Поддержка по жилью и транспорту',
      'Психологическая помощь и peer-support',
      'Программы занятости и обучения',
      'Сервисы независимой жизни',
    ],
  },
} as const

export default function ResourcesClient() {
  const { language } = useSiteLanguage()
  const t = TEXT[language]

  return (
    <section className="content-section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <h1>{t.title}</h1>
        <p style={{ color: 'var(--gray-600)', maxWidth: 780 }}>{t.subtitle}</p>

        <div className="card" style={{ marginTop: '1.4rem' }}>
          <div className="card-body">
            <h2 style={{ fontSize: '1.25rem' }}>{t.categoriesTitle}</h2>
            <ul style={{ marginTop: '0.8rem', lineHeight: 1.8 }}>
              {t.categories.map((item) => (
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
