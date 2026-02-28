import Link from 'next/link'

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
                수<span className="text-gold">디자인</span>
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
                <a href="tel:010-0000-0000" className="hover:text-white transition-colors">
                  010-0000-0000
                </a>
              </p>
              <p>
                <span className="text-white/25 mr-3 text-xs tracking-wider">EMAIL</span>
                <a href="mailto:hello@soodesign.kr" className="hover:text-white transition-colors">
                  hello@soodesign.kr
                </a>
              </p>
              <p>
                <span className="text-white/25 mr-3 text-xs tracking-wider">ADDR</span>
                서울특별시 강남구 테헤란로 123
              </p>
              <p>
                <span className="text-white/25 mr-3 text-xs tracking-wider">OPEN</span>
                평일 09:00 – 18:00
              </p>
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
