export type PortfolioCategory = '전체' | '아파트' | '주택' | '상업공간' | '오피스'

export interface PortfolioItem {
  id: number
  title: string
  subtitle: string
  category: Exclude<PortfolioCategory, '전체'>
  area: string
  duration: string
  location: string
  tags: string[]
  imageId: number
  featured: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: '성수동 모던 미니멀',
    subtitle: '34평 아파트 풀 리모델링',
    category: '아파트',
    area: '34평',
    duration: '8주',
    location: '서울 성동구',
    tags: ['모던', '미니멀', '화이트'],
    imageId: 101,
    featured: true,
  },
  {
    id: 2,
    title: '마포 내추럴 우드',
    subtitle: '46평 아파트 거실·주방 인테리어',
    category: '아파트',
    area: '46평',
    duration: '10주',
    location: '서울 마포구',
    tags: ['내추럴', '우드', '따뜻함'],
    imageId: 102,
    featured: true,
  },
  {
    id: 3,
    title: '강남 호텔 스타일',
    subtitle: '28평 아파트 럭셔리 인테리어',
    category: '아파트',
    area: '28평',
    duration: '6주',
    location: '서울 강남구',
    tags: ['럭셔리', '호텔', '다크톤'],
    imageId: 103,
    featured: true,
  },
  {
    id: 4,
    title: '서초 클래식 엘레강스',
    subtitle: '32평 아파트 클래식 감성',
    category: '아파트',
    area: '32평',
    duration: '7주',
    location: '서울 서초구',
    tags: ['클래식', '엘레강스', '그레이'],
    imageId: 104,
    featured: false,
  },
  {
    id: 5,
    title: '분당 럭셔리 그레이',
    subtitle: '52평 아파트 프리미엄 리모델링',
    category: '아파트',
    area: '52평',
    duration: '12주',
    location: '경기 분당구',
    tags: ['럭셔리', '프리미엄', '그레이'],
    imageId: 105,
    featured: true,
  },
  {
    id: 6,
    title: '부산 컨트리 하우스',
    subtitle: '45평 단독주택 풀 리노베이션',
    category: '주택',
    area: '45평',
    duration: '14주',
    location: '부산 해운대구',
    tags: ['컨트리', '내추럴', '우드'],
    imageId: 106,
    featured: false,
  },
  {
    id: 7,
    title: '용산 스칸디나비안',
    subtitle: '20평 아파트 북유럽 감성',
    category: '아파트',
    area: '20평',
    duration: '5주',
    location: '서울 용산구',
    tags: ['스칸디나비안', '미니멀', '화이트'],
    imageId: 107,
    featured: false,
  },
  {
    id: 8,
    title: '인천 빈티지 카페',
    subtitle: '40평 카페 인더스트리얼 인테리어',
    category: '상업공간',
    area: '40평',
    duration: '6주',
    location: '인천 연수구',
    tags: ['빈티지', '인더스트리얼', '카페'],
    imageId: 108,
    featured: true,
  },
  {
    id: 9,
    title: '강남 모던 오피스',
    subtitle: '80평 스타트업 오피스 인테리어',
    category: '오피스',
    area: '80평',
    duration: '8주',
    location: '서울 강남구',
    tags: ['모던', '비즈니스', '스마트'],
    imageId: 109,
    featured: false,
  },
]

export const categories: PortfolioCategory[] = [
  '전체',
  '아파트',
  '주택',
  '상업공간',
  '오피스',
]
