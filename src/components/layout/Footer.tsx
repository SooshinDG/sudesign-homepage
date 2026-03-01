import Link from 'next/link'
import { CONTACT } from '@/data/contact'

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/portfolio', label: '포트폴리오' },
  { href: '/service', label: '서비스' },
  { href: '/about', label: '소개' },
  { href: '/contact', label: '문의' },
]

const serviceLinks = [
  { href: '/service', label: '아파트 리모델링' },
  { href: '/service', label: '단독주택 인테리어' },
  { href: '/service', label: '상업 공간 인테리어' },
  { href: '/service', label: '오피스 인테리어' },
  { href: '/service', label: '부분 인테리어' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-main py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-gold">秀</span>디자인
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-loose max-w-sm mb-8">
              고객의 라이프스타일과 감성에 맞춰 완성도 높은 인테리어를
              설계합니다. 설계부터 시공까지 전 과정을 책임지는 인테리어
              디자인 스튜디오입니다.
            </p>
            <div className="space-y-2.5 text-sm text-white/50">
              <p>
                <span className="text-white/25 mr-3 text-xs tracking-wider">TEL</span>
                <a href={CONTACT.phoneHref} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <span className="text-white/25 mr-3 text-xs tracking-wider">EMAIL</span>
                <a href={CONTACT.emailHref} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <span className="text-white/25 mr-3 text-xs tracking-wider">ADDR</span>
                {CONTACT.address}
              </p>
              <p>
                <span className="text-white/25 mr-3 text-xs tracking-wider">OPEN</span>
                {CONTACT.hours}
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 mt-8">
              {/* Instagram */}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* KakaoTalk */}
              <a
                href={CONTACT.kakao}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡 채널"
                className="text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.597 2 11c0 2.719 1.57 5.122 3.956 6.614l-.838 3.111a.375.375 0 00.552.414L9.2 18.94A11.56 11.56 0 0012 19c5.523 0 10-3.597 10-8S17.523 3 12 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-normal tracking-[0.3em] text-white/30 uppercase mb-6">
              메뉴
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-normal tracking-[0.3em] text-white/30 uppercase mb-6">
              서비스
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25 tracking-wide">
            © {new Date().getFullYear()} 수디자인. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors tracking-wide">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors tracking-wide">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
