import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: '서비스',
  description: '수디자인의 인테리어 서비스를 소개합니다. 아파트 리모델링부터 상업공간까지 다양한 공간에 최적화된 서비스를 제공합니다.',
}

export default function ServicePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-16 bg-dark">
        <div className="container-main">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            서비스
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">
            공간의 성격과 고객의 니즈에 맞춰 최적의 인테리어 솔루션을
            <br className="hidden md:block" />
            제안해드립니다.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-warm-50">
        <div className="container-main">
          <div className="space-y-8 md:space-y-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 p-8 md:p-12 rounded-sm border border-border bg-white hover:border-gold/30 hover:shadow-md transition-all duration-300 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon & Title side */}
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="text-5xl mb-5">{service.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gold text-sm font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <div className="inline-block px-4 py-2 bg-warm-100 rounded-sm">
                    <span className="text-xs text-muted">시작가</span>
                    <p className="text-xl font-bold text-dark mt-0.5">
                      {service.startingPrice}
                    </p>
                  </div>
                </div>

                {/* Description side */}
                <div className="md:flex-1">
                  <p className="text-muted text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <h3 className="text-sm font-semibold text-dark tracking-wide mb-4 uppercase">
                    포함 사항
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-dark-soft">
                        <svg
                          className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex mt-8 btn-primary"
                  >
                    이 서비스 상담하기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding-sm bg-dark">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            어떤 서비스가 맞는지 모르시겠나요?
          </h2>
          <p className="text-white/60 mb-8">
            담당 디자이너와 무료로 상담하면 최적의 솔루션을 찾아드립니다.
          </p>
          <Link href="/contact" className="btn-ghost">
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  )
}
