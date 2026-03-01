'use client'

import { useState } from 'react'

type FormData = {
  name: string
  phone: string
  email: string
  serviceType: string
  area: string
  budget: string
  message: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  serviceType: '',
  area: '',
  budget: '',
  message: '',
}

const serviceTypes = [
  '아파트 리모델링',
  '단독주택 인테리어',
  '상업 공간 인테리어',
  '오피스 인테리어',
  '부분 인테리어',
  '기타',
]

const budgetRanges = [
  '500만원 미만',
  '500 ~ 1,000만원',
  '1,000 ~ 2,000만원',
  '2,000 ~ 3,000만원',
  '3,000 ~ 5,000만원',
  '5,000만원 이상',
]

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call — replace with real endpoint later
    await new Promise((res) => setTimeout(res, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-dark mb-3">상담 신청 완료!</h3>
        <p className="text-muted max-w-sm mx-auto leading-relaxed">
          빠른 시일 내에 담당 디자이너가 직접 연락드리겠습니다.
          <br />
          보통 영업일 기준 24시간 이내 연락드립니다.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm) }}
          className="mt-8 btn-secondary"
        >
          다시 신청하기
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-dark/80 mb-1.5">
            성함 <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="홍길동"
            className="w-full px-4 py-4 border border-border text-sm text-dark focus:outline-none focus:border-gold transition-colors bg-warm-200 placeholder:text-muted/60"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-dark/80 mb-1.5">
            연락처 <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="010-0000-0000"
            className="w-full px-4 py-4 border border-border text-sm text-dark focus:outline-none focus:border-gold transition-colors bg-warm-200 placeholder:text-muted/60"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-dark/80 mb-1.5">
            이메일
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full px-4 py-4 border border-border rounded-sm text-sm text-dark focus:outline-none focus:border-gold transition-colors bg-warm-200 placeholder:text-muted/60"
          />
        </div>

        {/* Service type */}
        <div>
          <label className="block text-sm font-medium text-dark/80 mb-1.5">
            서비스 유형 <span className="text-gold">*</span>
          </label>
          <select
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 border border-border rounded-sm text-sm text-dark focus:outline-none focus:border-gold transition-colors bg-warm-200 appearance-none cursor-pointer"
          >
            <option value="">선택해주세요</option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-medium text-dark/80 mb-1.5">
            평수
          </label>
          <input
            type="text"
            name="area"
            value={form.area}
            onChange={handleChange}
            placeholder="예: 32평"
            className="w-full px-4 py-4 border border-border rounded-sm text-sm text-dark focus:outline-none focus:border-gold transition-colors bg-warm-200 placeholder:text-muted/60"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-dark/80 mb-1.5">
            예산 범위
          </label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-border rounded-sm text-sm text-dark focus:outline-none focus:border-gold transition-colors bg-warm-200 appearance-none cursor-pointer"
          >
            <option value="">선택해주세요</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-dark/80 mb-1.5">
          문의 내용
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="원하시는 스타일, 특별히 요청하실 사항을 자유롭게 작성해주세요."
          className="w-full px-4 py-4 border border-border rounded-sm text-sm text-dark focus:outline-none focus:border-gold transition-colors bg-warm-200 placeholder:text-muted/60 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto btn-primary px-10 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            전송 중...
          </>
        ) : (
          '상담 신청하기'
        )}
      </button>
    </form>
  )
}
