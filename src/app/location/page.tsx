import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '오시는 길 | 수디자인',
  description: '서울특별시 구로구 구로동 685-124번지 상가동 중앙하이츠아파트 101호. 구일역 1번 출구에서 도보 7분.',
}

const NAVER_PLACE = 'https://naver.me/Gctp47NQ'
const NAVER_DIRECTIONS = 'https://map.naver.com/v5/search/서울특별시+구로구+구로동+685-124번지+중앙하이츠아파트'

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

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
          <div className="max-w-xl">

            {/* Address */}
            <div className="mb-8">
              <p className="text-[10px] tracking-[0.22em] uppercase text-muted mb-3">주소</p>
              <address className="not-italic text-dark-soft text-[1.05rem] leading-[1.85] font-medium">
                서울특별시 구로구 구로동<br />
                685-124번지 상가동<br />
                중앙하이츠아파트 101호
              </address>
            </div>

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
                <p className="text-dark-soft/80 text-sm leading-[1.85]">
                  지하철 <strong className="text-dark-soft font-semibold">구일역</strong> 1번 출구에서<br />
                  도보 약 <strong className="text-dark-soft font-semibold">8분</strong>
                </p>
              </div>
            </div>

            {/* Naver CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href={NAVER_PLACE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded
                           bg-[#03C75A] text-white text-[13px] font-normal tracking-[0.06em]
                           hover:bg-[#02b350] hover:shadow-[0_4px_20px_rgba(3,199,90,0.35)]
                           transition-all duration-300"
              >
                네이버 플레이스 보기
                <ExternalIcon />
              </a>
              <a
                href={NAVER_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded
                           bg-[#C9A87C] text-[#0C0A07] text-[13px] font-normal tracking-[0.06em]
                           hover:bg-[#D8BA90] hover:shadow-[0_4px_20px_rgba(201,168,124,0.4)]
                           transition-all duration-300"
              >
                네이버 지도 길찾기
                <ArrowIcon />
              </a>
            </div>

            <div className="w-10 h-px bg-border mb-8" />

            {/* Parking / Building access */}
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.22em] uppercase text-muted mb-3">주차 안내</p>
              <p className="text-sm text-dark-soft/75 leading-[1.85]">
                매장 앞 도로변 주차 가능합니다.
              </p>
            </div>

            <div className="w-10 h-px bg-border mb-8" />

            {/* Office hours */}
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-muted mb-3">운영 시간</p>
              <ul className="space-y-2 text-sm text-dark-soft/70 leading-relaxed max-w-[14rem]">
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
        </div>
      </section>

    </main>
  )
}
