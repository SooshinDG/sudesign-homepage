const testimonials = [
  {
    id: 1,
    name: '김민지',
    location: '서울 마포구 46평',
    rating: 5,
    text: '처음 상담부터 마지막 완공 점검까지 너무 꼼꼼하게 챙겨주셨어요. 3D 시뮬레이션 덕분에 결과물을 미리 확인할 수 있어서 믿음이 갔고, 실제 완공 후에도 기대 이상이었습니다.',
  },
  {
    id: 2,
    name: '이준영',
    location: '경기 분당구 52평',
    rating: 5,
    text: '공사 기간 내내 현장 담당자가 매일 진행 상황을 사진으로 공유해주셔서 안심했습니다. 자재 선택부터 배치까지 전문적인 조언이 큰 도움이 됐어요. 완성도에 완전히 만족합니다.',
  },
  {
    id: 3,
    name: '박서연',
    location: '서울 강남구 28평',
    rating: 5,
    text: '좁은 공간을 넓어 보이게 만들어주셨고, 수납도 기가 막히게 해결해주셨어요. 작은 아파트지만 호텔처럼 바꿔주셔서 매일 집에 들어올 때마다 기분이 좋습니다.',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-50 border-t border-warm-300">
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
              className="bg-warm-100 p-8 md:p-10 border-l-2 border-gold/40"
            >
              {/* Large decorative quote mark */}
              <div className="text-5xl font-serif text-gold/20 leading-none mb-5 select-none">
                &ldquo;
              </div>

              <blockquote className="text-dark-soft text-sm leading-loose mb-8">
                {item.text}
              </blockquote>

              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-8 h-8 bg-warm-300 flex items-center justify-center text-dark font-medium text-xs">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-medium text-dark text-sm">{item.name}</p>
                  <p className="text-muted text-xs mt-0.5">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
