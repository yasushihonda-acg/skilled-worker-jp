'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { Link } from '@/i18n/routing'

type FormData = {
  name: string
  birthDate: string
  gender: string
  nationality: string
  residenceStatus: string
  residenceExpiry: string
  yearsInJapan: string
  japaneseLevel: string
  desiredJob: string
  contact: string
}

export default function RegisterForm() {
  const t = useTranslations('register')
  const tCommon = useTranslations('common')
  const params = useParams()
  const locale = params.locale as string
  const [step, setStep] = useState<1 | 2 | 3 | 'confirm' | 'complete'>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDate: '',
    gender: '',
    nationality: '',
    residenceStatus: '',
    residenceExpiry: '',
    yearsInJapan: '',
    japaneseLevel: '',
    desiredJob: '',
    contact: '',
  })

  const nationalities = ['ID', 'NP', 'MM', 'VN', 'PH', 'OTHER'] as const
  const residenceStatuses = ['TRAINEE_1', 'TRAINEE_2', 'TRAINEE_3', 'SSW_1', 'SSW_2', 'OTHER'] as const
  const genders = ['MALE', 'FEMALE', 'OTHER'] as const
  const japaneseLevels = ['N1', 'N2', 'N3', 'N4', 'N5', 'JFT_A2', 'STUDYING', 'NONE'] as const
  const desiredJobs = ['CARE_WORKER', 'CARE_SUPPORT', 'NURSING_ASSISTANT', 'OTHER'] as const

  const handleNext = () => {
    if (step === 1) setStep(2)
    else if (step === 2) setStep(3)
    else if (step === 3) setStep('confirm')
  }

  const handleBack = () => {
    if (step === 2) setStep(1)
    else if (step === 3) setStep(2)
    else if (step === 'confirm') setStep(3)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step !== 'confirm') {
      handleNext()
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      setStep('complete')
    } catch {
      setError(tCommon('error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const stepLabels = [t('step1'), t('step2'), t('step3')]
  const currentStepIndex = typeof step === 'number' ? step - 1 : step === 'confirm' ? 3 : 4

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
            {step === 'confirm' ? t('confirm.title') : t('title')}
          </h1>
          <p className="text-dark-600">{t('subtitle')}</p>
        </div>

        {/* Step indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {stepLabels.map((label, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                    currentStepIndex >= i ? 'bg-primary-500 text-white' : 'bg-dark-200 text-dark-500'
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-xs mt-1 text-dark-500">{label}</span>
              </div>
              {i < 2 && (
                <div className={`w-12 h-1 mx-1 ${currentStepIndex > i ? 'bg-primary-500' : 'bg-dark-200'}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-dark-100 p-6 md:p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
          )}

          {/* Step 1: Basic Info */}
          {step === 1 && (
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
                  {t('form.birthDate')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">{t('form.gender')}</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white"
                >
                  <option value="">{t('form.genderPlaceholder')}</option>
                  {genders.map((code) => (
                    <option key={code} value={code}>
                      {t(`genders.${code}`)}
                    </option>
                  ))}
                </select>
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

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold text-lg transition-colors"
              >
                {tCommon('submit')}
              </button>
            </div>
          )}

          {/* Step 2: Residence & Skills */}
          {step === 2 && (
            <div className="space-y-6">
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
                <label className="block text-sm font-medium text-dark-700 mb-2">{t('form.residenceExpiry')}</label>
                <input
                  type="date"
                  value={formData.residenceExpiry}
                  onChange={(e) => setFormData({ ...formData, residenceExpiry: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
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
                  {t('form.japaneseLevel')} <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.japaneseLevel}
                  onChange={(e) => setFormData({ ...formData, japaneseLevel: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white"
                >
                  <option value="">{t('form.japaneseLevelPlaceholder')}</option>
                  {japaneseLevels.map((level) => (
                    <option key={level} value={level}>
                      {t(`japaneseLevels.${level}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  {t('form.desiredJob')} <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.desiredJob}
                  onChange={(e) => setFormData({ ...formData, desiredJob: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white"
                >
                  <option value="">{t('form.desiredJobPlaceholder')}</option>
                  {desiredJobs.map((job) => (
                    <option key={job} value={job}>
                      {t(`desiredJobs.${job}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
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

          {/* Step 3: Contact */}
          {step === 3 && (
            <div className="space-y-6">
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

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
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

          {/* Confirm */}
          {step === 'confirm' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <ConfirmRow label={t('form.name')} value={formData.name} />
                <ConfirmRow label={t('form.birthDate')} value={formData.birthDate} />
                {formData.gender && <ConfirmRow label={t('form.gender')} value={t(`genders.${formData.gender}`)} />}
                <ConfirmRow label={t('form.nationality')} value={t(`nationalities.${formData.nationality}`)} />
                <ConfirmRow label={t('form.residenceStatus')} value={t(`residenceStatuses.${formData.residenceStatus}`)} />
                {formData.residenceExpiry && <ConfirmRow label={t('form.residenceExpiry')} value={formData.residenceExpiry} />}
                <ConfirmRow label={t('form.yearsInJapan')} value={`${formData.yearsInJapan} 年`} />
                <ConfirmRow label={t('form.japaneseLevel')} value={t(`japaneseLevels.${formData.japaneseLevel}`)} />
                <ConfirmRow label={t('form.desiredJob')} value={t(`desiredJobs.${formData.desiredJob}`)} />
                <ConfirmRow label={t('form.contact')} value={formData.contact} />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="flex-1 border border-dark-300 text-dark-700 py-4 rounded-xl font-medium hover:bg-dark-50 transition-colors disabled:opacity-50"
                >
                  {t('confirm.edit')}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? tCommon('loading') : tCommon('submit')}
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
