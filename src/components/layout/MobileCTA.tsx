import Link from 'next/link'
import { CONTACT } from '@/data/contact'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-warm-50 border-t border-border safe-bottom">
      <div className="grid grid-cols-3 divide-x divide-border">

        {/* Phone */}
        <a
          href={CONTACT.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-4 text-dark-soft hover:bg-warm-200 transition-colors active:bg-warm-200"
          aria-label="전화 문의"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <span className="text-[10px] tracking-wide">전화 문의</span>
        </a>

        {/* KakaoTalk */}
        <a
          href={CONTACT.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-4 text-dark-soft hover:bg-warm-200 transition-colors active:bg-warm-200"
          aria-label="카카오톡 상담"
        >
          {/* KakaoTalk chat bubble icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.477 3 2 6.597 2 11c0 2.719 1.57 5.122 3.956 6.614l-.838 3.111a.375.375 0 00.552.414L9.2 18.94A11.56 11.56 0 0012 19c5.523 0 10-3.597 10-8S17.523 3 12 3z" />
          </svg>
          <span className="text-[10px] tracking-wide">카카오톡</span>
        </a>

        {/* Online consultation */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-4 bg-dark text-white hover:bg-dark-soft transition-colors active:bg-dark-soft"
          aria-label="무료 상담 신청"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          <span className="text-[10px] tracking-wide">상담 신청</span>
        </Link>

      </div>
    </div>
  )
}
