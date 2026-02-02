'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="font-medium">{t('company')}</span>
          </div>

          <div className="flex gap-6 text-sm text-dark-300">
            <Link href="/" className="hover:text-primary-400 transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/" className="hover:text-primary-400 transition-colors">
              {t('terms')}
            </Link>
          </div>

          <p className="text-sm text-dark-400">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
