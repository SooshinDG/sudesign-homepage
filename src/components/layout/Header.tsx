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
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-warm-50 border-b border-border'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled || isOpen ? 'text-dark' : 'text-white'
              }`}
            >
              수<span className="text-gold">디자인</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-normal tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-gold'
                    : scrolled
                    ? 'text-dark-soft hover:text-dark'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA — understated text link style */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/contact"
              className={`text-sm tracking-wide border-b pb-px transition-all duration-200 ${
                scrolled
                  ? 'text-dark border-dark/40 hover:border-dark'
                  : 'text-white/80 border-white/30 hover:text-white hover:border-white/60'
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
                scrolled || isOpen ? 'bg-dark' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
            />
            <span
              className={`block w-4 h-px transition-all duration-300 ${
                scrolled || isOpen ? 'bg-dark' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 origin-center ${
                scrolled || isOpen ? 'bg-dark' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-warm-50 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-main py-5 pb-7 border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center py-4 text-sm tracking-wide border-b border-warm-200 last:border-0 transition-colors ${
                pathname === link.href
                  ? 'text-gold'
                  : 'text-dark-soft hover:text-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-5 py-3 text-center text-sm tracking-wide border border-dark text-dark hover:bg-dark hover:text-white transition-colors"
          >
            무료 상담 신청
          </Link>
        </nav>
      </div>
    </header>
  )
}
