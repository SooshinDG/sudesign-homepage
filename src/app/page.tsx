import Hero from '@/components/sections/home/Hero'
import FeaturedProjects from '@/components/sections/home/FeaturedProjects'
import ServicesOverview from '@/components/sections/home/ServicesOverview'
import Process from '@/components/sections/home/Process'
import Testimonials from '@/components/sections/home/Testimonials'
import HomeCTA from '@/components/sections/home/HomeCTA'
import { CONTACT } from '@/data/contact'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: '수디자인',
  alternateName: 'SooDesign',
  url: 'https://soodesign.kr',
  telephone: CONTACT.phone,
  email: CONTACT.email,
  description:
    '수디자인은 서울 구로구를 비롯한 수도권 전역의 아파트 리모델링과 주택 인테리어를 전문으로 하는 인테리어 디자인 스튜디오입니다.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '테헤란로 123',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  serviceArea: [
    { '@type': 'City', name: '서울특별시' },
    { '@type': 'AdministrativeArea', name: '구로구' },
    { '@type': 'AdministrativeArea', name: '영등포구' },
    { '@type': 'AdministrativeArea', name: '강남구' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '₩₩₩',
  knowsLanguage: 'ko',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '인테리어 서비스',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '아파트 리모델링' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '단독주택 인테리어' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '상업 공간 인테리어' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '오피스 인테리어' } },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <Process />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
