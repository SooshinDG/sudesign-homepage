import type { Metadata } from 'next'
import PortfolioClient from '@/components/sections/portfolio/PortfolioClient'

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '수디자인의 다양한 시공 사례를 확인해보세요. 아파트, 주택, 상업공간, 오피스 인테리어 작업을 소개합니다.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-dark">
        <div className="container-main">
          <span className="section-label">Portfolio</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            포트폴리오
          </h1>
          <p className="text-white/45 text-sm md:text-base leading-loose max-w-lg">
            수디자인이 완성한 공간들을 카테고리별로 확인해보세요.
            각 프로젝트에 담긴 고객의 이야기와 디자인 철학을 만날 수 있습니다.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-warm-50">
        <div className="container-main">
          <PortfolioClient />
        </div>
      </section>
    </>
  )
}
