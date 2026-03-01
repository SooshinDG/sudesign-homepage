import type { Metadata } from 'next'
import PortfolioClient from '@/components/sections/portfolio/PortfolioClient'

export const metadata: Metadata = {
  title: '포트폴리오',
  description:
    '수디자인의 아파트 리모델링 및 인테리어 시공 사례를 확인해보세요. 구로구 아파트부터 서울 전역의 주택·상업공간·오피스 인테리어 프로젝트를 카테고리별로 소개합니다.',
  keywords: [
    '인테리어 시공 사례',
    '아파트 리모델링 포트폴리오',
    '구로구 인테리어 시공',
    '서울 인테리어 업체 포트폴리오',
    '아파트 인테리어 사례',
    '주택 인테리어 사례',
    '상업공간 인테리어',
    '수디자인 포트폴리오',
  ],
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
          <p className="text-warm-400/85 text-sm md:text-base leading-loose max-w-lg">
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
