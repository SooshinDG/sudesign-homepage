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
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white shadow-sm border-b border-border'
          : 'bg-white/0 border-b border-white/10'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                scrolled || isOpen ? 'text-dark' : 'text-white'
              }`}
            >
              수<span className="text-gold">디자인</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-gold'
                    : scrolled
                    ? 'text-dark-soft hover:text-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`px-5 py-2.5 text-sm font-medium rounded-sm transition-all duration-200 ${
                scrolled
                  ? 'bg-dark text-white hover:bg-gold'
                  : 'bg-white/10 border border-white/30 text-white hover:bg-white hover:text-dark'
              }`}
            >
              무료 상담 신청
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 flex flex-col justify-center gap-[5px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴 열기"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-5 h-0.5 transition-all duration-300 origin-center ${
                scrolled || isOpen ? 'bg-dark' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${
                scrolled || isOpen ? 'bg-dark' : 'bg-white'
              } ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 origin-center ${
                scrolled || isOpen ? 'bg-dark' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-main py-4 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center py-3.5 text-base border-b border-warm-100 last:border-0 transition-colors ${
                pathname === link.href
                  ? 'text-gold font-medium'
                  : 'text-dark-soft hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 py-3 text-center bg-dark text-white font-medium rounded-sm hover:bg-gold transition-colors"
          >
            무료 상담 신청
          </Link>
        </nav>
      </div>
    </header>
  )
}
