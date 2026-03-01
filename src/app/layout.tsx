import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTA from '@/components/layout/MobileCTA'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
  preload: false,
})

// Enables safe-area-inset support on notched phones (iPhone X+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: {
    default: '수디자인 | 아파트 인테리어 전문',
    template: '%s | 수디자인',
  },
  description:
    '수디자인은 고객의 라이프스타일에 맞는 감각적인 인테리어를 제공합니다. 아파트, 주택, 상업공간 리모델링 전문 인테리어 디자인 스튜디오.',
  keywords: ['인테리어', '아파트 리모델링', '수디자인', '인테리어 디자인', '홈 리모델링', '인테리어 시공'],
  openGraph: {
    title: '수디자인 | 아파트 인테리어 전문',
    description: '고객의 라이프스타일에 맞는 감각적인 인테리어를 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="font-sans">
        <Header />
        {/* pb-20 on mobile clears the fixed bottom CTA bar + safe-area */}
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}
