import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-[#2A2420]" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Decorative geometry */}
      <div className="absolute top-1/4 right-[10%] hidden lg:block">
        <div className="w-64 h-64 border border-gold/10 rounded-full" />
        <div className="absolute inset-4 border border-gold/10 rounded-full" />
        <div className="absolute inset-8 border border-gold/10 rounded-full" />
      </div>
      <div className="absolute bottom-20 right-[5%] hidden lg:block">
        <div className="w-32 h-32 border border-gold/15 rotate-45" />
      </div>

      {/* Top-left accent */}
      <div className="absolute top-28 left-4 md:left-12">
        <div className="flex flex-col gap-1.5">
          <div className="w-10 h-0.5 bg-gold" />
          <div className="w-6 h-0.5 bg-gold/50" />
        </div>
      </div>

      {/* Main content */}
      <div className="container-main relative z-10 pt-20">
        <div className="max-w-3xl">
          <p className="text-gold text-xs md:text-sm font-medium tracking-[0.3em] mb-6 uppercase">
            Interior Design Studio
          </p>

          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] font-bold text-white leading-[1.05] mb-6 md:mb-8">
            당신의
            <br />
            <span className="text-gold">공간</span>을
            <br />
            새롭게
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            수디자인은 고객의 라이프스타일과 감성에 맞춰
            <br className="hidden sm:block" />
            완성도 높은 인테리어를 설계합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio" className="btn-ghost">
              포트폴리오 보기
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-primary">
              무료 상담 신청
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-24 grid grid-cols-3 gap-4 md:gap-8 max-w-xl border-t border-white/10 pt-8 md:pt-10">
          {[
            { num: '150+', label: '완성 프로젝트' },
            { num: '8년', label: '업력' },
            { num: '98%', label: '고객 만족도' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {stat.num}
              </p>
              <p className="text-xs md:text-sm text-white/40 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  )
}
