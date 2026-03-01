const steps = [
  {
    number: '01',
    title: '무료 상담',
    description: '전화 또는 온라인 폼을 통해 상담을 신청하시면 24시간 내에 연락드립니다.',
  },
  {
    number: '02',
    title: '현장 방문 & 측정',
    description: '담당 디자이너가 직접 현장을 방문하여 공간을 파악하고 고객의 니즈를 듣습니다.',
  },
  {
    number: '03',
    title: '설계 & 자재 선택',
    description: '3D 시뮬레이션과 함께 상세한 설계안과 자재 샘플을 제안드립니다.',
  },
  {
    number: '04',
    title: '시공 & 완공',
    description: '숙련된 시공팀이 계획된 일정에 맞춰 꼼꼼하게 작업하고 완공 후 점검합니다.',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-warm-200 border-t border-warm-300">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="section-label">Process</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            시공 절차
          </h2>
          <p className="text-muted text-sm md:text-base mt-4 leading-loose max-w-sm">
            체계적인 프로세스로 고객의 만족을 보장합니다.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="text-[11px] tracking-[0.25em] text-gold mb-5 font-normal">
                — {step.number}
              </p>
              <h3 className="text-base font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-loose">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
