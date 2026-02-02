'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const t = useTranslations('header')
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-dark-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-dark-800">{t('title')}</h1>
                <p className="text-xs text-dark-500">{t('subtitle')}</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/register"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {t('register')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
