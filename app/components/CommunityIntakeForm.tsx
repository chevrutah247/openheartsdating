'use client'

import { FormEvent, useMemo, useState } from 'react'
import { SiteLanguage, useSiteLanguage } from './useSiteLanguage'

type IntakeType = 'resource' | 'business' | 'product' | 'service'

type Props = {
  defaultType: IntakeType
}

type Dictionary = {
  title: string
  subtitle: string
  submit: string
  sending: string
  success: string
  labels: {
    type: string
    name: string
    email: string
    title: string
    organization: string
    website: string
    location: string
    phone: string
    description: string
  }
  placeholders: {
    name: string
    email: string
    title: string
    organization: string
    website: string
    location: string
    phone: string
    description: string
  }
  typeOptions: Record<IntakeType, string>
}

const TEXT: Record<SiteLanguage, Dictionary> = {
  en: {
    title: 'Submit to Community Hub',
    subtitle: 'Share a resource, business, product, or service to support people with disabilities.',
    submit: 'Send Submission',
    sending: 'Sending...',
    success: 'Thank you! We received your submission and will review it shortly.',
    labels: {
      type: 'Submission Type',
      name: 'Your Name',
      email: 'Email',
      title: 'Title',
      organization: 'Organization / Business',
      website: 'Website',
      location: 'Location',
      phone: 'Phone',
      description: 'Description',
    },
    placeholders: {
      name: 'Your full name',
      email: 'name@example.com',
      title: 'Resource name / product name / listing title',
      organization: 'Optional',
      website: 'https://example.com',
      location: 'City, State',
      phone: '+1 ...',
      description: 'Please include details, who this helps, pricing (if any), and how to contact.',
    },
    typeOptions: {
      resource: 'Helpful Resource',
      business: 'Disability-Owned Business',
      product: 'Marketplace Product',
      service: 'Service by Person with Disability',
    },
  },
  ru: {
    title: 'Добавить в Community Hub',
    subtitle: 'Поделитесь ресурсом, бизнесом, товаром или услугой для поддержки людей с инвалидностью.',
    submit: 'Отправить',
    sending: 'Отправка...',
    success: 'Спасибо! Мы получили вашу заявку и скоро ее проверим.',
    labels: {
      type: 'Тип заявки',
      name: 'Ваше имя',
      email: 'Email',
      title: 'Название',
      organization: 'Организация / Бизнес',
      website: 'Сайт',
      location: 'Локация',
      phone: 'Телефон',
      description: 'Описание',
    },
    placeholders: {
      name: 'Ваше полное имя',
      email: 'name@example.com',
      title: 'Название ресурса / товара / объявления',
      organization: 'Необязательно',
      website: 'https://example.com',
      location: 'Город, штат/страна',
      phone: '+1 ...',
      description: 'Опишите подробно: кому помогает, цена (если есть), как связаться.',
    },
    typeOptions: {
      resource: 'Полезный ресурс',
      business: 'Бизнес владельца с инвалидностью',
      product: 'Товар для маркетплейса',
      service: 'Услуга от человека с инвалидностью',
    },
  },
}

export default function CommunityIntakeForm({ defaultType }: Props) {
  const { language } = useSiteLanguage()
  const t = useMemo(() => TEXT[language], [language])

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    type: defaultType,
    name: '',
    email: '',
    title: '',
    organization: '',
    website: '',
    location: '',
    phone: '',
    description: '',
    honeypot: '',
  })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setSubmitting(true)

    try {
      const res = await fetch('/api/community-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send')
      }

      setSuccess(true)
      setForm((prev) => ({
        ...prev,
        name: '',
        email: '',
        title: '',
        organization: '',
        website: '',
        location: '',
        phone: '',
        description: '',
        honeypot: '',
      }))
    } catch (err: any) {
      setError(err.message || 'Failed to send')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="form-shell card" style={{ marginTop: '2rem' }}>
      <div className="card-body">
        <h3 style={{ marginBottom: '0.35rem' }}>{t.title}</h3>
        <p style={{ color: 'var(--gray-600)' }}>{t.subtitle}</p>

        <form onSubmit={onSubmit} style={{ marginTop: '1rem', display: 'grid', gap: '0.85rem' }}>
          <label>
            {t.labels.type}
            <select value={form.type} onChange={(e) => setForm((p) => ({ ...p, type: e.target.value as IntakeType }))} required>
              <option value="resource">{t.typeOptions.resource}</option>
              <option value="business">{t.typeOptions.business}</option>
              <option value="product">{t.typeOptions.product}</option>
              <option value="service">{t.typeOptions.service}</option>
            </select>
          </label>

          <label>
            {t.labels.name}
            <input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder={t.placeholders.name} required />
          </label>

          <label>
            {t.labels.email}
            <input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder={t.placeholders.email} required />
          </label>

          <label>
            {t.labels.title}
            <input value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} placeholder={t.placeholders.title} required />
          </label>

          <label>
            {t.labels.organization}
            <input value={form.organization} onChange={(e) => setForm((p) => ({ ...p, organization: e.target.value }))} placeholder={t.placeholders.organization} />
          </label>

          <label>
            {t.labels.website}
            <input value={form.website} onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))} placeholder={t.placeholders.website} />
          </label>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
            <label>
              {t.labels.location}
              <input value={form.location} onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))} placeholder={t.placeholders.location} />
            </label>

            <label>
              {t.labels.phone}
              <input value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder={t.placeholders.phone} />
            </label>
          </div>

          <label>
            {t.labels.description}
            <textarea
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              placeholder={t.placeholders.description}
              rows={6}
              required
            />
          </label>

          <input
            aria-hidden="true"
            tabIndex={-1}
            style={{ position: 'absolute', left: '-9999px' }}
            value={form.honeypot}
            onChange={(e) => setForm((p) => ({ ...p, honeypot: e.target.value }))}
          />

          {error && <p style={{ color: 'var(--error)', margin: 0 }}>{error}</p>}
          {success && <p style={{ color: 'var(--success)', margin: 0 }}>{t.success}</p>}

          <button className="button button-primary" type="submit" disabled={submitting}>
            {submitting ? t.sending : t.submit}
          </button>
        </form>
      </div>
    </div>
  )
}
