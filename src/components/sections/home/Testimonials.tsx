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
    <section className="section-padding bg-warm-50">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Reviews
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            고객 후기
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm p-6 md:p-8 border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-dark-soft text-sm leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-warm-200 flex items-center justify-center text-dark font-bold text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">{item.name}</p>
                  <p className="text-muted text-xs">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
