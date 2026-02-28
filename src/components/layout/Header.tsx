'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/portfolio', label: '포트폴리오' },
  { href: '/service', label: '서비스' },
  { href: '/about', label: '소개' },
  { href: '/contact', label: '문의' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const solid = scrolled || isOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-warm-50/95 backdrop-blur-md border-b border-warm-200/70'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${
                solid ? 'text-dark' : 'text-white/90'
              }`}
            >
              수<span className={solid ? 'text-gold' : 'text-[#C9A87C]'}>디자인</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-11">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-normal tracking-wide transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-gold'
                    : solid
                    ? 'text-dark-soft/75 hover:text-dark'
                    : 'text-white/50 hover:text-white/85'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className={`text-[13px] tracking-wide border-b pb-px transition-all duration-300 ${
                solid
                  ? 'text-dark-soft/75 border-dark-soft/30 hover:text-dark hover:border-dark/60'
                  : 'text-white/50 border-white/20 hover:text-white/80 hover:border-white/45'
              }`}
            >
              무료 상담
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 -mr-1 flex flex-col justify-center gap-[5px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴 열기"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-5 h-px transition-all duration-300 origin-center ${
                solid ? 'bg-dark' : 'bg-white/70'
              } ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
            />
            <span
              className={`block w-4 h-px transition-all duration-300 ${
                solid ? 'bg-dark' : 'bg-white/70'
              } ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 origin-center ${
                solid ? 'bg-dark' : 'bg-white/70'
              } ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-warm-50/98 backdrop-blur-md ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-main py-5 pb-7 border-t border-warm-200/60">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center py-4 text-sm tracking-wide border-b border-warm-200/50 last:border-0 transition-colors ${
                pathname === link.href
                  ? 'text-gold'
                  : 'text-dark-soft/70 hover:text-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-5 py-3 text-center text-sm tracking-wide border border-dark/40 text-dark-soft hover:bg-dark hover:text-white transition-colors duration-200"
          >
            무료 상담 신청
          </Link>
        </nav>
      </div>
    </header>
  )
}
