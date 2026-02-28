import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-dark">
      <div className="container-main">

        {/* Section header */}
        <div className="mb-20 md:mb-28">
          <span className="section-label">Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-[2.6rem] font-bold text-white leading-tight">
            서비스
          </h2>
        </div>

        {/* Editorial alternating list */}
        <div>
          {services.map((service, i) => {
            const isEven = i % 2 === 1

            return (
              <div
                key={service.id}
                className={`group flex flex-col lg:flex-row items-stretch
                            ${i > 0 ? 'border-t border-white/[0.06]' : ''}`}
              >

                {/* Text block */}
                <div
                  className={`lg:w-5/12 flex items-center py-14 md:py-16
                              ${isEven
                                ? 'lg:order-2 lg:pl-14 xl:pl-20'
                                : 'lg:pr-14 xl:pr-20'}`}
                >
                  <div className="w-full">

                    {/* Index */}
                    <p className="text-[10px] tracking-[0.32em] text-gold/50 mb-7 uppercase">
                      — {String(service.id).padStart(2, '0')}
                    </p>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug mb-3">
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-white/30 text-sm tracking-wide mb-10">
                      {service.subtitle}
                    </p>

                    {/* Thin gold rule */}
                    <div className="w-7 h-px bg-gold/30 mb-10" />

                    {/* Price + link */}
                    <div className="flex items-center gap-8">
                      <span className="text-gold text-sm font-light">
                        {service.startingPrice}
                      </span>
                      <Link
                        href="/service"
                        className="group/link flex items-center gap-1.5 text-[11px]
                                   text-white/25 hover:text-white/65 tracking-[0.2em]
                                   uppercase transition-colors duration-200"
                      >
                        자세히 보기
                        <svg
                          className="w-2.5 h-2.5 group-hover/link:translate-x-0.5 transition-transform duration-200"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>

                  </div>
                </div>

                {/* Image block */}
                <div
                  className={`relative overflow-hidden lg:w-7/12
                              min-h-[56vw] md:min-h-[340px] lg:min-h-[420px]
                              ${isEven ? 'lg:order-1' : ''}`}
                >
                  <Image
                    src={`https://picsum.photos/seed/svc${service.id}/900/640`}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out
                               group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />

                  {/* Edge gradient — fades toward the text side */}
                  <div
                    className={`absolute inset-0 ${
                      isEven
                        ? 'bg-gradient-to-l from-dark/55 via-dark/10 to-transparent'
                        : 'bg-gradient-to-r from-dark/55 via-dark/10 to-transparent'
                    }`}
                  />
                </div>

              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-white/[0.06] text-center">
          <Link href="/service" className="btn-ghost">
            서비스 전체 보기
          </Link>
        </div>

      </div>
    </section>
  )
}
