import type { Metadata } from 'next'
import ContactForm from '@/components/sections/contact/ContactForm'
import { CONTACT } from '@/data/contact'

export const metadata: Metadata = {
  title: '상담 문의',
  description:
    '수디자인에 무료 인테리어 상담을 신청하세요. 구로구·서울 아파트 리모델링, 주택 인테리어 견적을 무료로 제공합니다. 담당 디자이너가 24시간 이내 연락드립니다.',
  keywords: [
    '인테리어 무료 상담',
    '구로구 인테리어 상담',
    '아파트 리모델링 견적',
    '서울 인테리어 업체 상담',
    '인테리어 견적 무료',
    '수디자인 상담',
    '인테리어 문의',
  ],
}

const contactInfo = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: '전화 문의',
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    note: CONTACT.hours,
  },
  {
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.477 3 2 6.597 2 11c0 2.719 1.57 5.122 3.956 6.614l-.838 3.111a.375.375 0 00.552.414L9.2 18.94A11.56 11.56 0 0012 19c5.523 0 10-3.597 10-8S17.523 3 12 3z" />
      </svg>
    ),
    label: '카카오톡',
    value: '카카오톡 채널 바로가기',
    href: CONTACT.kakao,
    note: '채팅으로 빠른 상담',
    external: true,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: '이메일',
    value: CONTACT.email,
    href: CONTACT.emailHref,
    note: '24시간 이내 회신',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: '사무실',
    value: CONTACT.address,
    href: undefined,
    note: '사전 예약 후 방문',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-dark">
        <div className="container-main">
          <span className="section-label">Contact</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            상담 문의
          </h1>
          <p className="text-white/45 text-sm md:text-base leading-loose max-w-lg">
            궁금한 점이나 상담을 원하시면 언제든지 연락주세요.
            평일 기준 24시간 이내에 회신드립니다.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-warm-200">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-base font-bold text-white mb-8 tracking-wide">연락처 정보</h2>
              <div className="space-y-7">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-warm-300 flex items-center justify-center flex-shrink-0 text-gold">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-muted mb-1 tracking-wider uppercase">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          {...('external' in info && info.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="text-sm text-white/80 hover:text-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white/80">{info.value}</p>
                      )}
                      <p className="text-xs text-muted mt-0.5">{info.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick notice */}
              <div className="mt-10 p-6 bg-warm-300 border-l-2 border-gold">
                <p className="text-sm font-medium text-white mb-3">상담 전 알아두세요</p>
                <ul className="text-xs text-muted space-y-2 leading-loose">
                  <li>무료 상담 후 견적서를 무료로 제공합니다.</li>
                  <li>현장 방문 측정은 서울·경기 지역 무료입니다.</li>
                  <li>계약 전까지 어떤 비용도 청구하지 않습니다.</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-warm-100 border border-border p-8 md:p-12">
              <h2 className="text-base font-bold text-white mb-1.5 tracking-wide">상담 신청서</h2>
              <p className="text-sm text-muted mb-8 leading-loose">
                아래 양식을 작성해 주시면 담당 디자이너가 직접 연락드립니다.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
