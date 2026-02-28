import Link from 'next/link'

const stats = [
  { num: '150+', label: '완성 프로젝트' },
  { num: '8년', label: '업력' },
  { num: '98%', label: '고객 만족도' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#14120D] overflow-hidden">

      {/* ── Background layers ── */}

      {/* Atmospheric depth layer — ghost image under all overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-atmo absolute"
          style={{
            inset: '-5%',
            backgroundImage: 'url("https://picsum.photos/seed/sd-atmo/2400/1400")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 38%',
            backgroundRepeat: 'no-repeat',
            opacity: 0.18,
          }}
        />
      </div>

      {/* Vignette: warm amber centre fading to deep warm-dark edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 75% at 38% 52%, #1E1B13 0%, #0D0B07 100%)',
        }}
      />

      {/* Cinematic edge vignette — deep corner crush for drama */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 68% 68% at 38% 52%, transparent 28%, rgba(6,4,2,0.72) 100%)',
        }}
      />

      {/* Headline focus glow — warm amber bloom behind text block */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 52% 55% at 18% 60%, rgba(184,150,106,0.13) 0%, transparent 68%)',
        }}
      />

      {/* Gold ambient bleed — top-right */}
      <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-gradient-to-bl from-[#B8966A]/12 via-[#B8966A]/4 to-transparent pointer-events-none" />

      {/* Gold ambient bleed — bottom-left */}
      <div className="absolute bottom-0 left-0 w-2/5 h-1/2 bg-gradient-to-tr from-[#B8966A]/6 to-transparent pointer-events-none" />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />

      {/* Thin horizontal rule — editorial accent at 1/3 height */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-white/[0.03] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="container-main relative z-10 flex-1 flex flex-col justify-end pb-16 md:pb-20 pt-36 md:pt-44">

        <div className="flex items-end justify-between gap-10">

          {/* Left: editorial text block */}
          <div className="flex-1 max-w-xl">
            <span className="section-label">Interior Design Studio</span>

            {/* Short emotional headline */}
            <h1
              className="text-[3.4rem] sm:text-[4.8rem] md:text-[6rem] lg:text-[7rem]
                         font-bold text-white leading-[1.05] mb-10 md:mb-14"
              style={{
                letterSpacing: '-0.025em',
                textShadow: '0 2px 80px rgba(0,0,0,0.95), 0 1px 6px rgba(0,0,0,0.7)',
              }}
            >
              공간이
              <br />
              <span className="text-[#C9A87C]">삶이</span>
              <br />
              됩니다
            </h1>

            {/* Subtle, airy subtitle */}
            <p className="text-warm-400/85 text-sm leading-[2.1] max-w-[20rem] mb-11 md:mb-14">
              조용히, 그러나 분명하게.
              <br />
              수디자인은 당신의 이야기가 담긴
              <br />
              공간을 설계합니다.
            </p>

            {/* Minimal text-link CTAs — no boxes, no bold colours */}
            <div className="flex items-center gap-7">
              <Link
                href="/portfolio"
                className="group flex items-center gap-2 text-sm text-warm-400/70
                           hover:text-white/90 transition-colors duration-300 tracking-wide"
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

              <span className="w-px h-3 bg-white/15 shrink-0" />

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm text-warm-400/70
                           hover:text-white/90 transition-colors duration-300 tracking-wide"
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
          <div className="hidden lg:flex flex-col items-center gap-5 pb-1 select-none">
            <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/10" />
            <p
              className="text-[9px] text-white/18 tracking-[0.5em] uppercase font-light"
              style={{ writingMode: 'vertical-rl', letterSpacing: '0.5em' }}
            >
              Since 2016 · Seoul
            </p>
          </div>

        </div>
      </div>

      {/* ── Bottom stats strip ── */}
      <div className="container-main relative z-10 pb-9 md:pb-11">
        <div className="border-t border-white/[0.07] pt-6 flex items-center">

          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <div className="w-px h-4 bg-white/10 mx-6 md:mx-10 shrink-0" />
              )}
              <div>
                <p className="text-base md:text-lg font-light text-white/80 tracking-tight leading-none">
                  {stat.num}
                </p>
                <p className="text-[10px] text-warm-300/65 mt-1.5 tracking-[0.22em] uppercase">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}

          {/* Scroll indicator — anchored to the far right */}
          <div className="ml-auto flex items-end gap-2.5 text-warm-400/40">
            <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
            <span className="text-[9px] tracking-[0.3em] uppercase pb-px">Scroll</span>
          </div>

        </div>
      </div>

    </section>
  )
}
