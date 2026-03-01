import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '오시는 길 | 수디자인',
  description: '서울특별시 구로구 구로동 685-124번지 상가동 중앙하이츠아파트 101호. 구일역 1번 출구에서 도보 7분.',
}

const ADDRESS = '서울특별시 구로구 구로동 685-124번지 상가동 중앙하이츠아파트 101호'
const MAPS_QUERY = encodeURIComponent(ADDRESS)

export default function LocationPage() {
  return (
    <main className="pb-16 md:pb-0 bg-warm-50 min-h-screen">

      {/* ── Page header ── */}
      <section className="bg-dark pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="container-main">
          <span className="section-label" style={{ color: 'rgba(201,168,124,0.7)' }}>
            찾아오시는 방법
          </span>
          <h1 className="mt-4 text-[2.4rem] md:text-[3.2rem] font-bold text-white leading-tight tracking-[-0.02em]">
            오시는 길
          </h1>
          <p className="mt-4 text-white/45 text-sm tracking-wide">
            수디자인 스튜디오로 언제든지 방문하세요.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section-padding-sm">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">

            {/* Left: address info */}
            <div>
              {/* Address block */}
              <div className="mb-8">
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted mb-3">주소</p>
                <address className="not-italic text-dark-soft text-[1.05rem] leading-[1.8] font-medium">
                  서울특별시 구로구 구로동<br />
                  685-124번지 상가동<br />
                  중앙하이츠아파트 101호
                </address>
              </div>

              {/* Divider */}
              <div className="w-10 h-px bg-border mb-8" />

              {/* Transit */}
              <div className="mb-10">
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted mb-3">대중교통</p>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#C9A87C]/15 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#C9A87C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <p className="text-dark-soft/80 text-sm leading-[1.8]">
                    지하철 <strong className="text-dark-soft font-semibold">구일역</strong> 1번 출구에서<br />
                    도보 약 <strong className="text-dark-soft font-semibold">7분</strong>
                  </p>
                </div>
              </div>

              {/* Directions CTA */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded
                           bg-[#C9A87C] text-[#0C0A07] text-[13px] font-normal tracking-[0.07em]
                           hover:bg-[#D8BA90] hover:shadow-[0_4px_24px_rgba(201,168,124,0.4)]
                           transition-all duration-300"
              >
                지도에서 길찾기
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Office hours */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-[10px] tracking-[0.22em] uppercase text-muted mb-3">운영 시간</p>
                <ul className="space-y-1.5 text-sm text-dark-soft/70 leading-relaxed">
                  <li className="flex justify-between gap-6">
                    <span>평일</span>
                    <span className="text-dark-soft">09:00 – 18:00</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>토요일</span>
                    <span className="text-dark-soft">10:00 – 15:00</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>일요일 · 공휴일</span>
                    <span className="text-muted">휴무</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: map embed */}
            <div className="rounded-sm overflow-hidden border border-border shadow-sm">
              <iframe
                title="수디자인 위치"
                width="100%"
                height="460"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
