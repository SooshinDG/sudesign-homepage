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

// Update this to the real production domain before launch
const BASE_URL = 'https://soodesign.kr'

const SITE_TITLE = '수디자인 | 구로구 아파트 인테리어 · 서울 리모델링 전문'
const SITE_DESCRIPTION =
  '수디자인은 서울 구로구를 비롯한 수도권 전역의 아파트 리모델링과 주택 인테리어를 전문으로 하는 인테리어 디자인 스튜디오입니다. 설계부터 시공까지 책임지는 서울 인테리어 업체.'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | 수디자인',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    '구로구 인테리어',
    '아파트 리모델링',
    '서울 인테리어 업체',
    '인테리어 디자인',
    '수디자인',
    '아파트 인테리어',
    '주택 인테리어',
    '서울 인테리어',
    '인테리어 시공',
    '홈 리모델링',
    '상업공간 인테리어',
    '오피스 인테리어',
    '수도권 인테리어',
    '인테리어 업체 추천',
  ],
  authors: [{ name: '수디자인', url: BASE_URL }],
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    siteName: '수디자인',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
