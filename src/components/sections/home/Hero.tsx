import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { num: '150+', label: '완성 프로젝트' },
  { num: '8년', label: '업력' },
  { num: '98%', label: '고객 만족도' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#0E1117] overflow-hidden">

      {/* ── Background: interior photograph ── */}
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

      {/* Subtle dark overlay — dims photo just enough for panel to read */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,13,20,0.38) 0%, rgba(10,13,20,0.22) 60%, rgba(10,13,20,0.48) 100%)',
        }}
      />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />

      {/* ── Main content: vertically + horizontally centered panel ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 pt-28 pb-8 md:pt-32 md:pb-10">

        {/* Glass panel */}
        <div
          className="hero-enter hero-enter-1 w-full"
          style={{
            maxWidth: '520px',
            background: 'rgba(20, 25, 35, 0.55)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 8px 48px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.06) inset',
            padding: '2.5rem 2.75rem',
          }}
        >
          {/* Label */}
          <span
            className="hero-enter hero-enter-1 block mb-5 text-[#3B82F6] font-medium"
            style={{
              fontSize: '10px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
            }}
          >
            Interior Design Studio
          </span>

          {/* Headline */}
          <h1
            className="hero-enter hero-enter-1 font-bold text-white leading-[1.18] mb-5"
            style={{
              fontSize: 'clamp(1.9rem, 4.5vw, 2.65rem)',
              letterSpacing: '-0.02em',
            }}
          >
            공간의 <span style={{ color: '#3B82F6' }}>가치</span>가
            <br />
            일상의 품격이 됩니다
          </h1>

          {/* Divider */}
          <div
            className="hero-enter hero-enter-2 mb-5"
            style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.18)' }}
          />

          {/* Sub description */}
          <p
            className="hero-enter hero-enter-2 leading-[1.85]"
            style={{
              fontSize: '13.5px',
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '360px',
              marginBottom: '1.75rem',
            }}
          >
            수디자인은 공간을 꾸미는 것이 아닌,
            <br />
            삶의 흐름을 설계합니다.
          </p>

          {/* CTA links */}
          <div className="hero-enter hero-enter-3 flex items-center gap-7">
            <Link
              href="/portfolio"
              className="group flex items-center gap-1.5 text-[13px] tracking-wide
                         text-white/60 hover:text-[#3B82F6] transition-colors duration-300"
            >
              포트폴리오 보기
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <span className="w-px h-3 bg-white/[0.18] shrink-0" />

            <Link
              href="/contact"
              className="group flex items-center gap-1.5 text-[13px] tracking-wide
                         text-white/60 hover:text-[#3B82F6] transition-colors duration-300"
            >
              무료 상담 신청
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom stats strip ── */}
      <div className="hero-enter hero-enter-4 container-main relative z-10 pb-9 md:pb-11">
        <div className="border-t border-white/[0.10] pt-6 flex items-center">

          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <div className="w-px h-4 bg-white/[0.12] mx-6 md:mx-10 shrink-0" />
              )}
              <div>
                <p className="text-base md:text-lg font-light text-white/70 tracking-tight leading-none">
                  {stat.num}
                </p>
                <p className="text-[10px] text-white/35 mt-1.5 tracking-[0.22em] uppercase">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero-enter hero-enter-4 absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10
                      flex flex-col items-center gap-3 pointer-events-none select-none">
        <span className="text-[8px] tracking-[0.45em] uppercase text-white/25">Scroll</span>
        <div className="relative w-px h-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/14 via-white/8 to-transparent" />
          <div
            className="hero-scroll-flow absolute w-full"
            style={{
              height: '45%',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.40), transparent)',
            }}
          />
        </div>
      </div>

    </section>
  )
}
