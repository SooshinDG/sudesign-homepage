import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { num: '150+', label: '완성 프로젝트' },
  { num: '8년', label: '업력' },
  { num: '98%', label: '고객 만족도' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#F7F9FC] overflow-hidden">

      {/* ── Background layers ── */}

      {/* Real interior photograph — animated drift wrapper */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-atmo absolute" style={{ inset: '-5%' }}>
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Top scrim — nav readability only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 18%)',
        }}
      />

      {/* Bottom white ramp — anchors stats strip, fades out fast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(247,249,252,0.94) 0%, rgba(247,249,252,0.60) 14%, rgba(247,249,252,0.18) 32%, transparent 50%)',
        }}
      />

      {/* Organic radial mist — naturally calms photo behind text column */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 46% 58% at 14% 82%, rgba(247,249,252,0.20) 0%, transparent 70%)',
        }}
      />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />

      {/* Thin horizontal rule */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-white/[0.03] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="container-main relative z-10 flex-1 flex flex-col justify-end pb-16 md:pb-20 pt-36 md:pt-44">

        <div className="flex items-end justify-between gap-12 lg:gap-16">

          {/* Left: editorial text column */}
          <div className="w-full max-w-[24rem] md:max-w-[32rem] lg:max-w-[40rem]">
            <span className="section-label hero-enter hero-enter-1">Interior Design Studio</span>

            {/* Headline */}
            <h1
              className="hero-enter hero-enter-1
                         text-[3.15rem] sm:text-[4.5rem] md:text-[5.6rem] lg:text-[6.5rem]
                         font-bold text-dark leading-[1.05] mb-8 md:mb-10"
              style={{
                letterSpacing: '-0.025em',
                textShadow: '0 2px 10px rgba(0,0,0,0.15)',
              }}
            >
              공간이
              <br />
              <span className="text-[#3B82F6]">삶이</span>
              <br />
              됩니다
            </h1>

            {/* Subtitle */}
            <p
              className="hero-enter hero-enter-2
                         text-dark/80 text-sm font-medium leading-[2.1] max-w-[20rem] mb-6"
            >
              조용히, 그러나 분명하게.
              <br />
              수디자인은 당신의 이야기가 담긴
              <br />
              공간을 설계합니다.
            </p>

            {/* CTAs */}
            <div className="hero-enter hero-enter-3 flex items-center gap-7 mb-11 md:mb-14">
              <Link
                href="/portfolio"
                className="group flex items-center gap-2 py-1 text-sm text-dark/65
                           hover:text-dark/90 transition-colors duration-300 tracking-wide"
              >
                포트폴리오 보기
                <svg
                  className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <span className="w-px h-3 bg-dark/15 shrink-0" />

              <Link
                href="/contact"
                className="group flex items-center gap-2 py-1 text-sm text-dark/65
                           hover:text-dark/90 transition-colors duration-300 tracking-wide"
              >
                무료 상담 신청
                <svg
                  className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: editorial vertical text — desktop only */}
          <div className="hero-enter hero-enter-3 hidden lg:flex flex-col items-center gap-5 pb-1 select-none shrink-0">
            <div className="w-px h-20 bg-gradient-to-b from-transparent to-dark/12" />
            <p
              className="text-[9px] text-dark/28 tracking-[0.5em] uppercase font-light"
              style={{ writingMode: 'vertical-rl', letterSpacing: '0.5em' }}
            >
              Since 2016 · Seoul
            </p>
          </div>

        </div>
      </div>

      {/* ── Bottom stats strip ── */}
      <div className="hero-enter hero-enter-4 container-main relative z-10 pb-9 md:pb-11">
        <div className="border-t border-dark/[0.08] pt-6 flex items-center">

          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <div className="w-px h-4 bg-dark/10 mx-6 md:mx-10 shrink-0" />
              )}
              <div>
                <p className="text-base md:text-lg font-light text-dark/75 tracking-tight leading-none">
                  {stat.num}
                </p>
                <p className="text-[10px] text-dark/40 mt-1.5 tracking-[0.22em] uppercase">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ── Atmospheric scroll indicator ── */}
      <div className="hero-enter hero-enter-4 absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10
                      flex flex-col items-center gap-3 pointer-events-none select-none">
        <span className="text-[8px] tracking-[0.45em] uppercase text-dark/25">Scroll</span>
        <div className="relative w-px h-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/14 via-dark/8 to-transparent" />
          <div
            className="hero-scroll-flow absolute w-full"
            style={{
              height: '45%',
              background: 'linear-gradient(to bottom, transparent, rgba(26,29,35,0.45), transparent)',
            }}
          />
        </div>
      </div>

    </section>
  )
}
