'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), {
  ssr: false,
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AboutCompanySection />
      <FAQSection />
      <FinalCTASection />
      <MobileStickyButton />
      <ChatWidget />
    </>
  )
}

function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            {/* Language flags - more prominent */}
            <div className="flex justify-center md:justify-start gap-3 mb-6">
              {[
                { flag: '🇮🇩', name: 'Indonesia' },
                { flag: '🇳🇵', name: 'Nepal' },
                { flag: '🇲🇲', name: 'Myanmar' },
                { flag: '🇻🇳', name: 'Vietnam' },
                { flag: '🇵🇭', name: 'Philippines' },
              ].map((country, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform cursor-default"
                  title={country.name}
                >
                  {country.flag}
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">{t('badge')}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {t('title')}
            </h1>

            {/* Key benefits with numbers */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="text-2xl font-bold text-yellow-300">¥25万〜</span>
                <span className="text-sm ml-1">{t('salary')}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="text-2xl font-bold text-green-300">0円</span>
                <span className="text-sm ml-1">{t('cost')}</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-dark-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t('cta')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/80">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('trust1')}
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('trust2')}
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('trust3')}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80"
                alt="Young professionals working together"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark-800">500+</p>
                  <p className="text-dark-500 text-sm">{t('hired')}</p>
                </div>
              </div>
            </div>

            {/* Floating review card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl max-w-[200px]">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-dark-600">&ldquo;{t('miniReview')}&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProofSection() {
  const t = useTranslations('home.socialProof')

  const testimonials = [
    {
      name: t('testimonial1.name'),
      country: '🇮🇩',
      countryName: 'Indonesia',
      role: t('testimonial1.role'),
      salary: '¥28万',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      quote: t('testimonial1.quote'),
    },
    {
      name: t('testimonial2.name'),
      country: '🇳🇵',
      countryName: 'Nepal',
      role: t('testimonial2.role'),
      salary: '¥26万',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      quote: t('testimonial2.quote'),
    },
    {
      name: t('testimonial3.name'),
      country: '🇲🇲',
      countryName: 'Myanmar',
      role: t('testimonial3.role'),
      salary: '¥27万',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80',
      quote: t('testimonial3.quote'),
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-3">
            {t('title')}
          </h2>
          <p className="text-dark-600">{t('subtitle')}</p>
        </div>

        {/* Stats bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500">500+</div>
              <div className="text-sm text-dark-500">{t('stat1')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500">98%</div>
              <div className="text-sm text-dark-500">{t('stat2')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500">2{t('weeks')}</div>
              <div className="text-sm text-dark-500">{t('stat3')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-500">5{t('countries')}</div>
              <div className="text-sm text-dark-500">{t('stat4')}</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xl">{testimonial.country}</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark-800">{testimonial.name}</h4>
                  <p className="text-sm text-dark-500">{testimonial.role}</p>
                  <p className="text-sm font-medium text-green-600">{t('monthlySalary')}: {testimonial.salary}</p>
                </div>
              </div>
              <p className="text-dark-600 text-sm leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
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
      color: 'bg-rose-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: t('feature2.title'),
      description: t('feature2.description'),
      color: 'bg-blue-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('feature3.title'),
      description: t('feature3.description'),
      color: 'bg-emerald-500',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark-800 mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-dark-600 mb-12 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 border-2 border-dark-100 hover:border-primary-300 transition-all hover:shadow-xl"
            >
              <div className={`w-16 h-16 ${feature.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const t = useTranslations('home.howItWorks')

  const steps = [
    {
      number: '1',
      title: t('step1.title'),
      description: t('step1.description'),
      icon: '📝',
    },
    {
      number: '2',
      title: t('step2.title'),
      description: t('step2.description'),
      icon: '💬',
    },
    {
      number: '3',
      title: t('step3.title'),
      description: t('step3.description'),
      icon: '🏢',
    },
    {
      number: '4',
      title: t('step4.title'),
      description: t('step4.description'),
      icon: '🎉',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-dark-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200" />
              )}

              <div className="relative bg-white rounded-2xl p-6 shadow-lg text-center z-10">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {step.icon}
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <h3 className="font-bold text-dark-800 mb-2">{step.title}</h3>
                <p className="text-sm text-dark-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            {t('cta')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
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
              className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              <span className="text-2xl">{benefit.icon}</span>
              <span className="text-dark-100">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CEO Message */}
        <div className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
              👨‍💼
            </div>
            <div>
              <p className="text-dark-200 mb-4 italic text-lg">
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

function FAQSection() {
  const t = useTranslations('home.faq')

  const faqs = [
    { q: t('q1.question'), a: t('q1.answer') },
    { q: t('q2.question'), a: t('q2.answer') },
    { q: t('q3.question'), a: t('q3.answer') },
    { q: t('q4.question'), a: t('q4.answer') },
    { q: t('q5.question'), a: t('q5.answer') },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark-800 mb-4">
          {t('title')}
        </h2>
        <p className="text-center text-dark-600 mb-12">{t('subtitle')}</p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-dark-50 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-dark-100 transition-colors">
                <span className="font-medium text-dark-800 pr-4">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-dark-500 group-open:rotate-180 transition-transform flex-shrink-0"
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

function FinalCTASection() {
  const t = useTranslations('home.finalCta')

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <Link
          href="/register"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-dark-900 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          {t('cta')}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <p className="mt-4 text-sm text-white/70">{t('note')}</p>
      </div>
    </section>
  )
}

function MobileStickyButton() {
  const t = useTranslations('home.hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-dark-100 shadow-lg md:hidden z-40 transition-transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Link
        href="/register"
        className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 text-dark-900 py-4 rounded-xl font-bold text-lg transition-colors"
      >
        {t('cta')}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  )
}
