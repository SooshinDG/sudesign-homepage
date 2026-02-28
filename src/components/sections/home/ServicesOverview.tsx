import Link from 'next/link'
import { services } from '@/data/services'

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-dark">
      <div className="container-main">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <span className="section-label">Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5">
            서비스
          </h2>
          <p className="text-white/40 text-sm md:text-base leading-loose max-w-md">
            아파트부터 상업 공간까지, 공간의 성격에 맞는
            최적의 인테리어 솔루션을 제공합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 md:p-10 bg-dark hover:bg-[#202020] transition-colors duration-300"
            >
              <div className="text-2xl mb-6 opacity-80">{service.icon}</div>
              <h3 className="text-white text-lg font-bold mb-1.5 leading-snug">
                {service.title}
              </h3>
              <p className="text-white/35 text-xs tracking-wide mb-5">{service.subtitle}</p>
              <p className="text-white/55 text-sm leading-loose mb-8">
                {service.description}
              </p>
              <div className="flex items-center justify-between border-t border-white/8 pt-5">
                <span className="text-gold text-sm font-light">
                  {service.startingPrice}
                </span>
                <Link
                  href="/service"
                  className="text-[11px] text-white/25 hover:text-white/60 tracking-wider uppercase transition-colors"
                >
                  자세히
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href="/service" className="btn-ghost">
            서비스 전체 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
