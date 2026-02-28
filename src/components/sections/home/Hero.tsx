import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A18] via-[#1A1A18] to-[#252119]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B8966A]/6 to-transparent" />
      </div>

      {/* Minimal accent — single thin gold line, top left */}
      <div className="absolute top-32 left-5 md:left-14 w-8 h-px bg-gold opacity-70" />

      {/* Main content */}
      <div className="container-main relative z-10 pt-20 pb-24">
        <div className="max-w-2xl">
          <span className="section-label">Interior Design Studio</span>

          <h1 className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold text-white leading-[1.1] mb-7 md:mb-9">
            당신의
            <br />
            <span className="text-gold">공간</span>을
            <br />
            새롭게
          </h1>

          <p className="text-white/50 text-base md:text-lg max-w-sm mb-12 leading-loose">
            수디자인은 고객의 라이프스타일과 감성에 맞춰
            완성도 높은 인테리어를 설계합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/portfolio" className="btn-ghost">
              포트폴리오 보기
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
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
        <div className="mt-20 md:mt-32 grid grid-cols-3 gap-6 md:gap-10 max-w-md border-t border-white/10 pt-10">
          {[
            { num: '150+', label: '완성 프로젝트' },
            { num: '8년', label: '업력' },
            { num: '98%', label: '고객 만족도' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-light text-white tracking-tight">
                {stat.num}
              </p>
              <p className="text-[11px] text-white/35 mt-1.5 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-5 md:left-14 flex items-center gap-3 text-white/25">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <span className="text-[10px] tracking-[0.25em] uppercase rotate-0">Scroll</span>
      </div>
    </section>
  )
}
