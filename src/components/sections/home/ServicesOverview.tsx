import Link from 'next/link'
import { services } from '@/data/services'

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-dark">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            서비스
          </h2>
          <p className="text-white/50 text-base md:text-lg mt-4 max-w-lg">
            아파트부터 상업 공간까지, 공간의 성격에 맞는
            <br className="hidden md:block" />
            최적의 인테리어 솔루션을 제공합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 md:p-8 border border-white/10 rounded-sm hover:border-gold/50 transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div className="text-3xl mb-5">{service.icon}</div>
              <h3 className="text-white text-xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm mb-4">{service.subtitle}</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-gold text-sm font-medium">
                  {service.startingPrice}
                </span>
                <Link
                  href="/service"
                  className="text-xs text-white/30 hover:text-gold transition-colors group-hover:text-white/60"
                >
                  자세히 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/service" className="btn-ghost">
            서비스 전체 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
