'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

type FormData = {
  name: string
  nationality: string
  residenceStatus: string
  yearsInJapan: string
  contact: string
}

export default function RegisterPage() {
  const t = useTranslations('register')
  const tCommon = useTranslations('common')
  const [step, setStep] = useState<'form' | 'confirm' | 'complete'>('form')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    nationality: '',
    residenceStatus: '',
    yearsInJapan: '',
    contact: '',
  })

  const nationalities = ['ID', 'NP', 'MM', 'VN', 'PH', 'OTHER'] as const
  const residenceStatuses = ['TRAINEE_1', 'TRAINEE_2', 'TRAINEE_3', 'SSW_1', 'SSW_2', 'OTHER'] as const

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 'form') {
      setStep('confirm')
    } else if (step === 'confirm') {
      // TODO: API call
      console.log('Submitting:', formData)
      setStep('complete')
    }
  }

  if (step === 'complete') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-dark-800 mb-4">{t('complete.title')}</h1>
          <p className="text-dark-600 mb-8">{t('complete.message')}</p>
          <Link
            href="/"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            {t('complete.back')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-dark-800 mb-2">
            {step === 'form' ? t('title') : t('confirm.title')}
          </h1>
          <p className="text-dark-600">{t('subtitle')}</p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {['form', 'confirm', 'complete'].map((s, i) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                  ['form', 'confirm', 'complete'].indexOf(step) >= i
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-200 text-dark-500'
                }`}
              >
                {i + 1}
              </div>
              {i < 2 && (
                <div
                  className={`w-12 h-1 ${
                    ['form', 'confirm', 'complete'].indexOf(step) > i
                      ? 'bg-primary-500'
                      : 'bg-dark-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-dark-100 p-6 md:p-8">
          {step === 'form' ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  {t('form.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('form.namePlaceholder')}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  {t('form.nationality')} <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white"
                >
                  <option value="">{t('form.nationalityPlaceholder')}</option>
                  {nationalities.map((code) => (
                    <option key={code} value={code}>
                      {t(`nationalities.${code}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  {t('form.residenceStatus')} <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.residenceStatus}
                  onChange={(e) => setFormData({ ...formData, residenceStatus: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white"
                >
                  <option value="">{t('form.residenceStatusPlaceholder')}</option>
                  {residenceStatuses.map((status) => (
                    <option key={status} value={status}>
                      {t(`residenceStatuses.${status}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  {t('form.yearsInJapan')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  max="30"
                  value={formData.yearsInJapan}
                  onChange={(e) => setFormData({ ...formData, yearsInJapan: e.target.value })}
                  placeholder={t('form.yearsInJapanPlaceholder')}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  {t('form.contact')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder={t('form.contactPlaceholder')}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold text-lg transition-colors"
              >
                {tCommon('submit')}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <ConfirmRow label={t('form.name')} value={formData.name} />
                <ConfirmRow label={t('form.nationality')} value={t(`nationalities.${formData.nationality}`)} />
                <ConfirmRow label={t('form.residenceStatus')} value={t(`residenceStatuses.${formData.residenceStatus}`)} />
                <ConfirmRow label={t('form.yearsInJapan')} value={`${formData.yearsInJapan} 年`} />
                <ConfirmRow label={t('form.contact')} value={formData.contact} />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="flex-1 border border-dark-300 text-dark-700 py-4 rounded-xl font-medium hover:bg-dark-50 transition-colors"
                >
                  {t('confirm.edit')}
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold transition-colors"
                >
                  {tCommon('submit')}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

function ConfirmRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-3 border-b border-dark-100 last:border-0">
      <span className="text-dark-500">{label}</span>
      <span className="font-medium text-dark-800">{value}</span>
    </div>
  )
}
