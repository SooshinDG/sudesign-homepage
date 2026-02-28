import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: '서비스',
  description:
    '수디자인의 인테리어 서비스를 소개합니다. 아파트 리모델링부터 상업공간까지 다양한 공간에 최적화된 서비스를 제공합니다.',
}

export default function ServicePage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="pt-44 pb-20 md:pb-28 bg-dark">
        <div className="container-main">
          <span className="section-label">Services</span>
          <h1
            className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            서비스
          </h1>
        </div>
      </section>

      {/* ── Editorial service spreads ── */}
      <div className="bg-warm-50">
        {services.map((service, i) => {
          const isEven = i % 2 === 1

          return (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row lg:min-h-[600px]
                          ${i > 0 ? 'border-t border-warm-200' : ''}
                          ${isEven ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* Image — bleeds edge-to-edge on its half */}
              <div className="relative w-full lg:w-1/2 min-h-[58vw] md:min-h-[420px] lg:min-h-0 overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/svc${service.id}/900/720`}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Text — anchored with editorial padding */}
              <div
                className={`w-full lg:w-1/2 flex items-center
                            ${isEven ? 'lg:justify-end' : ''}`}
              >
                <div
                  className={`w-full px-5 md:px-10 py-16 md:py-20
                              lg:py-16 lg:max-w-[540px]
                              ${isEven
                                ? 'lg:pl-14 xl:pl-20 lg:pr-14 xl:pr-16'
                                : 'lg:pl-14 xl:pl-20 lg:pr-14'}`}
                >

                  {/* Index */}
                  <p className="text-[10px] tracking-[0.32em] text-gold/60 mb-8 uppercase">
                    — {String(service.id).padStart(2, '0')}
                  </p>

                  {/* Title */}
                  <h2
                    className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-dark leading-snug mb-3"
                  >
                    {service.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-muted text-sm tracking-wide mb-10">
                    {service.subtitle}
                  </p>

                  {/* Gold rule */}
                  <div className="w-7 h-px bg-gold/40 mb-10" />

                  {/* Description */}
                  <p className="text-dark-soft text-sm leading-loose mb-10">
                    {service.description}
                  </p>

                  {/* Features — minimal list, no bullets */}
                  <ul className="space-y-2.5 mb-12">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs text-muted tracking-wide">
                        <span className="text-gold/60 mt-px flex-shrink-0">—</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-center gap-8 pt-2">
                    <div>
                      <p className="text-[10px] tracking-[0.25em] text-muted uppercase mb-1.5">
                        시작가
                      </p>
                      <p className="text-gold text-lg font-light tracking-tight">
                        {service.startingPrice}
                      </p>
                    </div>
                    <Link href="/contact" className="btn-secondary">
                      상담 신청
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          )
        })}
      </div>

      {/* ── Bottom CTA ── */}
      <section className="section-padding-sm bg-dark border-t border-white/[0.05]">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="section-label">Contact</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                어떤 서비스가 맞는지
                <br className="hidden sm:block" />
                모르시겠나요?
              </h2>
              <p className="text-white/40 text-sm leading-loose max-w-sm">
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
