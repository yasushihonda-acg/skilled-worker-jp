import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import nextDynamic from 'next/dynamic'

const ChatWidget = nextDynamic(() => import('@/components/chat/ChatWidget'), {
  ssr: false,
})

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutCompanySection />
      <CTASection />
      <FAQSection />
      <ChatWidget initialLocale={locale} />
    </>
  )
}

function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-2 mb-6">
              {['🇮🇩', '🇳🇵', '🇲🇲', '🇻🇳', '🇵🇭'].map((flag, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl"
                >
                  {flag}
                </div>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg">
              {t('subtitle')}
            </p>
            <Link
              href="/register"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              {t('cta')}
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80"
                alt="Young professionals working together"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-800 font-bold">100+</p>
                  <p className="text-dark-500 text-sm">外国人スタッフ活躍中</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const t = useTranslations('home.features')

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('feature1.title'),
      description: t('feature1.description'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: t('feature2.title'),
      description: t('feature2.description'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('feature3.title'),
      description: t('feature3.description'),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark-800 mb-12">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-primary-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-dark-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutCompanySection() {
  const t = useTranslations('home.about')

  const stats = [
    { number: '50+', label: t('stats.facilities') },
    { number: '16', label: t('stats.years') },
    { number: '24/7', label: t('stats.support') },
  ]

  const benefits = [
    { icon: '💰', text: t('benefits.salary') },
    { icon: '📚', text: t('benefits.training') },
    { icon: '🏠', text: t('benefits.housing') },
    { icon: '🌍', text: t('benefits.diversity') },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-dark-800 to-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-xl p-4 mb-6">
            <Image
              src="https://aozora-cg.com/wp-content/uploads/2025/04/new_rogo_grey.png"
              alt="Aozora Care Group Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-dark-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
            >
              <span className="text-2xl">{benefit.icon}</span>
              <span className="text-dark-100">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CEO Message */}
        <div className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
              👨‍💼
            </div>
            <div>
              <p className="text-dark-200 mb-4 italic">
                &ldquo;{t('ceo.message')}&rdquo;
              </p>
              <div>
                <p className="font-bold text-white">{t('ceo.name')}</p>
                <p className="text-sm text-dark-400">{t('ceo.title')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Link */}
        <div className="text-center mt-8">
          <a
            href="https://aozora-cg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            {t('learnMore')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const t = useTranslations('home.cta')

  return (
    <section className="py-16 md:py-24 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
                    alt="Young professionals"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
                    alt="Diverse team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                    alt="Working together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-4">
              {t('title')}
            </h2>
            <p className="text-dark-600 mb-8 max-w-xl">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/register"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
              >
                {t('button')}
              </Link>
            </div>
            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start text-dark-500 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>登録無料</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>母国語サポート</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ビザ手続きサポート</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const t = useTranslations('home.faq')

  const faqs = [
    { q: t('q1.question'), a: t('q1.answer') },
    { q: t('q2.question'), a: t('q2.answer') },
    { q: t('q3.question'), a: t('q3.answer') },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark-800 mb-12">
          {t('title')}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-dark-50 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-dark-100 transition-colors">
                <span className="font-medium text-dark-800">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-dark-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-dark-600">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
