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
      <section className="pt-40 pb-20 bg-dark">
        <div className="container-main">
          <span className="section-label">Services</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            서비스
          </h1>
          <p className="text-white/45 text-sm md:text-base leading-loose max-w-lg">
            공간의 성격과 고객의 니즈에 맞춰 최적의 인테리어 솔루션을 제안해드립니다.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-warm-50">
        <div className="container-main">
          <div className="space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row gap-10 md:gap-20 p-8 md:p-14 border border-border bg-warm-100 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon & Title side */}
                <div className="md:w-64 flex-shrink-0">
                  <div className="text-2xl mb-6 opacity-70">{service.icon}</div>
                  <h2 className="text-xl md:text-2xl font-bold text-dark mb-2 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-gold text-xs tracking-wide mb-6">{service.subtitle}</p>
                  <div className="inline-block border-l-2 border-gold pl-4">
                    <span className="text-[10px] text-muted tracking-wider uppercase">시작가</span>
                    <p className="text-xl font-light text-dark mt-1 tracking-tight">
                      {service.startingPrice}
                    </p>
                  </div>
                </div>

                {/* Description side */}
                <div className="md:flex-1">
                  <p className="text-muted text-sm leading-loose mb-8">
                    {service.description}
                  </p>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
                    포함 사항
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-dark-soft">
                        <span className="text-gold mt-0.5 text-xs flex-shrink-0">—</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex mt-10 btn-secondary">
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
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                어떤 서비스가 맞는지 모르시겠나요?
              </h2>
              <p className="text-white/45 text-sm leading-loose">
                담당 디자이너와 무료로 상담하면 최적의 솔루션을 찾아드립니다.
              </p>
            </div>
            <Link href="/contact" className="btn-ghost shrink-0">
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
