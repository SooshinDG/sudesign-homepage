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
    <section className="section-padding bg-warm-100">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            시공 절차
          </h2>
          <p className="text-muted text-base md:text-lg mt-4 max-w-lg mx-auto">
            체계적인 프로세스로 고객의 만족을 보장합니다.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-gold/40 to-transparent z-0 -translate-x-4" />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-gold/20 leading-none">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
