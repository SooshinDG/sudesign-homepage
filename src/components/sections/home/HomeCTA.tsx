import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section className="section-padding-sm bg-gold">
      <div className="container-main text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          지금 바로 무료 상담을 받아보세요
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
          전화 한 통으로 시작하는 인테리어 여정.
          <br />
          담당 디자이너가 직접 상담해드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:010-0000-0000"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-dark text-sm font-semibold rounded-sm hover:bg-warm-100 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            010-0000-0000
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white text-white text-sm font-semibold rounded-sm hover:bg-white/10 transition-colors"
          >
            온라인 상담 신청
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
        </div>
      </div>
    </section>
  )
}
