import Link from 'next/link'
import { CONTACT } from '@/data/contact'

export default function HomeCTA() {
  return (
    <section className="section-padding-sm bg-dark">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              지금 바로 무료 상담을
              <br className="hidden sm:block" />
              받아보세요
            </h2>
            <p className="text-white/45 text-sm leading-loose max-w-sm">
              전화 한 통으로 시작하는 인테리어 여정.
              담당 디자이너가 직접 상담해드립니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {/* Phone */}
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white/80 text-sm tracking-wide hover:border-white/50 hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {CONTACT.phone}
            </a>

            {/* KakaoTalk */}
            <a
              href={CONTACT.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white/80 text-sm tracking-wide hover:border-white/50 hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.597 2 11c0 2.719 1.57 5.122 3.956 6.614l-.838 3.111a.375.375 0 00.552.414L9.2 18.94A11.56 11.56 0 0012 19c5.523 0 10-3.597 10-8S17.523 3 12 3z" />
              </svg>
              카카오톡 상담
            </a>

            {/* Online form */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-white text-sm tracking-wide hover:bg-gold-dark transition-colors duration-200"
            >
              온라인 상담 신청
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
