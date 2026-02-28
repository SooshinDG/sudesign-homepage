import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '소개',
  description: '수디자인의 브랜드 스토리와 디자인 철학을 소개합니다.',
}

const values = [
  {
    icon: '✦',
    title: '진정성',
    description:
      '화려한 포트폴리오보다 고객과의 신뢰를 먼저 생각합니다. 과장 없이 솔직하게 소통하고, 약속한 결과를 반드시 지킵니다.',
  },
  {
    icon: '✦',
    title: '섬세함',
    description:
      '눈에 잘 띄지 않는 디테일이 공간의 완성도를 결정합니다. 마감재 하나, 조명 하나까지 꼼꼼하게 검토합니다.',
  },
  {
    icon: '✦',
    title: '실용성',
    description:
      '아름다움과 기능성은 둘이 아닙니다. 사용하기 편한 동선, 효율적인 수납, 유지 관리가 쉬운 자재를 먼저 고려합니다.',
  },
  {
    icon: '✦',
    title: '맞춤화',
    description:
      '똑같은 공간은 없습니다. 가족 구성, 생활 패턴, 취향을 깊이 이해하고 오직 그 고객을 위한 설계를 합니다.',
  },
]

const team = [
  {
    name: '김수연',
    role: '대표 디자이너',
    experience: '인테리어 디자인 15년',
    description: '홍익대학교 실내건축학과 졸업 후 대형 인테리어 회사에서 경력을 쌓았습니다. 수디자인 창업 후 150여 개 프로젝트를 완성했습니다.',
    initial: '수',
  },
  {
    name: '이민호',
    role: '수석 시공 감리',
    experience: '현장 시공 12년',
    description: '자재와 시공 기술에 대한 깊은 이해를 바탕으로 설계 의도가 현장에서 완벽하게 구현되도록 감리합니다.',
    initial: '민',
  },
  {
    name: '박지아',
    role: '공간 스타일리스트',
    experience: '홈 스타일링 8년',
    description: '가구, 소품, 패브릭 등 공간의 마지막 레이어를 완성합니다. 트렌드를 바탕으로 고객의 취향에 맞는 스타일링을 제안합니다.',
    initial: '지',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-16 bg-dark">
        <div className="container-main">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            소개
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">
            공간을 새롭게 만드는 일을 8년째 해오고 있습니다.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-warm-50">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                공간이 삶을 바꾼다는
                <br />
                믿음으로 시작했습니다
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed">
                <p>
                  수디자인은 2016년, &ldquo;좋은 인테리어는 비싼 자재가 아니라 세심한 설계에서 온다&rdquo;는 생각으로 시작했습니다.
                </p>
                <p>
                  고객 한 명 한 명의 이야기를 듣고, 그 이야기가 담긴 공간을 만드는 것이 우리의 방식입니다. 트렌디한 것보다 시간이 지나도 질리지 않는 디자인을, 화려한 것보다 매일 생활하기 편한 공간을 만듭니다.
                </p>
                <p>
                  8년간 150여 개의 공간을 완성하며 고객들과 쌓아온 신뢰가 수디자인의 가장 큰 자산입니다.
                </p>
              </div>
            </div>

            {/* Stats block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '2016', label: '설립 연도' },
                { num: '150+', label: '완성 프로젝트' },
                { num: '98%', label: '고객 만족도' },
                { num: '8년+', label: '전문 경력' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 md:p-8 bg-white border border-border rounded-sm text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-dark mb-1">
                    {stat.num}
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark">
        <div className="container-main">
          <div className="mb-12 md:mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              수디자인이 중요하게 여기는 것
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 border border-white/10 rounded-sm hover:border-gold/40 transition-colors"
              >
                <span className="text-gold text-lg mb-4 block">{v.icon}</span>
                <h3 className="text-white text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-warm-50">
        <div className="container-main">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              수디자인 팀
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-border rounded-sm p-8 text-center hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 bg-warm-200 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl font-bold text-dark">
                  {member.initial}
                </div>
                <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                <p className="text-gold text-sm font-medium mt-1 mb-1">{member.role}</p>
                <p className="text-muted text-xs mb-4">{member.experience}</p>
                <p className="text-dark-soft text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-gold">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            함께 멋진 공간을 만들어요
          </h2>
          <p className="text-white/80 mb-8">
            지금 바로 무료 상담을 신청하세요.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-dark text-sm font-semibold rounded-sm hover:bg-warm-100 transition-colors">
            상담 신청하기
          </Link>
        </div>
      </section>
    </>
  )
}
