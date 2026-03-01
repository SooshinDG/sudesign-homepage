const testimonials = [
  {
    id: 1,
    initials: 'K·M',
    name: '김민지 고객님',
    area: '구로구 34평 아파트',
    service: '아파트 리모델링',
    rating: 5,
    text: '처음엔 인테리어 공사가 워낙 큰 돈이 들어가다 보니 여러 업체를 비교했는데, 수디자인은 첫 상담 때부터 다른 느낌이었어요. 제 예산과 원하는 스타일을 솔직하게 이야기했더니 무리하게 업셀링하지 않고 딱 맞는 방향으로 잡아주시더라고요. 공사 중에도 일주일마다 현장 사진이랑 진행 현황을 보내주셔서 전혀 불안하지 않았고, 완공 후에 실제로 살아보니 동선이나 수납이 저희 가족 생활 패턴에 딱 맞아서 정말 만족스럽습니다.',
  },
  {
    id: 2,
    initials: 'L·J',
    name: '이준호 고객님',
    area: '영등포구 46평 아파트',
    service: '아파트 리모델링',
    rating: 5,
    text: '주방을 오픈형으로 바꾸고 싶었는데 구조적으로 가능한지 걱정이 많았어요. 방문 상담에서 꼼꼼히 체크해주시고 가능한 범위랑 비용을 명확히 설명해주셔서 바로 결정할 수 있었습니다. 자재도 비슷한 느낌의 저렴한 걸 쓰자고 하지 않고 장기적으로 관리가 쉬운 걸 추천해주신 게 인상적이었어요. 완공 이후 6개월이 지난 지금도 하자 하나 없고, 주방을 쓸 때마다 기분이 좋습니다.',
  },
  {
    id: 3,
    initials: 'P·S',
    name: '박서연 고객님',
    area: '강남구 28평 아파트',
    service: '소형 아파트 풀 리모델링',
    rating: 5,
    text: '28평이라 좁다고 느꼈는데 수디자인에서 공간 계획을 새로 짜주니까 실제 면적보다 훨씬 넓어 보이더라고요. 특히 붙박이 수납을 어떻게 배치하느냐에 따라 이렇게 달라질 수 있다는 게 신기했어요. 시공 품질도 꼼꼼해서 마감 처리 하나하나가 깔끔하고, 완공 후 한 달 뒤에 하자 점검까지 직접 방문해주셔서 AS 걱정도 없었습니다. 집들이 때마다 손님들이 인테리어 업체 어딘지 꼭 물어봐요.',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-200 border-t border-warm-300">
      <div className="container-main">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <span className="section-label">Reviews</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
            고객 후기
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-warm-300 p-8 md:p-10 border-l-2 border-gold/40 flex flex-col"
            >
              {/* Service tag + stars */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] tracking-[0.22em] uppercase text-gold/70 border border-gold/25 px-2.5 py-1">
                  {item.service}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-gold/70" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote mark */}
              <div className="text-5xl font-serif text-gold/18 leading-none mb-4 select-none">&ldquo;</div>

              {/* Review text */}
              <blockquote className="text-dark/70 text-sm leading-[2] flex-1 mb-8">
                {item.text}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-border">
                <div className="w-10 h-10 bg-warm-300 flex items-center justify-center
                                text-dark font-medium text-[10px] tracking-wider shrink-0">
                  {item.initials}
                </div>
                <div>
                  <p className="font-medium text-dark text-sm leading-snug">{item.name}</p>
                  <p className="text-muted text-[11px] mt-0.5 tracking-wide">{item.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
