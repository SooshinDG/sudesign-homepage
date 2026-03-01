import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { portfolioItems, portfolioDetails } from '@/data/portfolio'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ id: String(item.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const item = portfolioItems.find((p) => p.id === Number(id))
  if (!item) return {}
  const detail = portfolioDetails[item.id]
  return {
    title: item.title,
    description: `${item.subtitle} — ${item.location}. ${detail?.challenge ?? '수디자인의 인테리어 프로젝트 상세 페이지입니다.'}`,
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params
  const item = portfolioItems.find((p) => p.id === Number(id))
  const detail = portfolioDetails[Number(id)]
  if (!item || !detail) notFound()

  const related = portfolioItems
    .filter((p) => p.id !== item.id && p.category === item.category)
    .slice(0, 2)

  return (
    <>
      {/* ── Hero — dark ── */}
      <section className="bg-[#0B0D12] pt-44 pb-0">
        <div className="container-main pb-12 md:pb-16">

          {/* Back link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase
                       text-white/30 hover:text-white/60 transition-colors duration-200 mb-10"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            포트폴리오
          </Link>

          {/* Category + Location */}
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold/70 mb-5">
            {item.category}&ensp;·&ensp;{item.location}
          </p>

          {/* Title */}
          <h1
            className="text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5rem]
                       font-bold text-white leading-[1.04] mb-8 md:mb-10"
            style={{ letterSpacing: '-0.025em' }}
          >
            {item.title}
          </h1>

          {/* Meta strip */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              { label: '면적', value: item.area },
              { label: '기간', value: item.duration },
              { label: '연도', value: String(detail.year) },
              { label: '예산', value: detail.budget },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-3 bg-white/10" />}
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-white/28 mb-0.5">{m.label}</p>
                  <p className="text-sm font-light text-white/75 tabular-nums">{m.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-bleed hero image */}
        <div className="relative h-[56vw] md:h-[68vh] max-h-[720px] overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${item.imageId}/2000/1200`}
            alt={item.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Subtle top vignette to merge with dark header */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(12,10,7,0.55) 0%, transparent 28%)' }}
          />
        </div>
      </section>

      {/* ── Story + Project info ── */}
      <section className="section-padding bg-warm-200">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">

            {/* Left — project story */}
            <div className="lg:col-span-7">
              <span className="section-label">Project Story</span>

              {/* Challenge callout */}
              <blockquote
                className="text-base md:text-lg text-white leading-relaxed font-light
                           border-l-2 border-gold/50 pl-6 mb-10 md:mb-12 italic"
              >
                &ldquo;{detail.challenge}&rdquo;
              </blockquote>

              {/* Story paragraphs */}
              <div className="space-y-5 text-white/70 text-sm leading-loose">
                {detail.story.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase
                               border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — project specs card */}
            <div className="lg:col-span-5">
              <div className="bg-dark p-8 md:p-10 sticky top-28">
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold/60 mb-7">
                  Project Info
                </p>

                {/* Spec rows */}
                <div className="space-y-5 mb-8">
                  {[
                    { label: '위치', value: item.location },
                    { label: '면적', value: item.area },
                    { label: '공사 기간', value: item.duration },
                    { label: '완공 연도', value: String(detail.year) },
                    { label: '총 예산', value: detail.budget },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between gap-4 border-b border-white/[0.06] pb-5">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/35 shrink-0">{label}</p>
                      <p className="text-sm text-white/80 text-right tabular-nums">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Scope */}
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase text-gold/60 mb-4">
                    주요 공종
                  </p>
                  <ul className="space-y-2">
                    {detail.scope.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-xs text-white/55 leading-relaxed">
                        <span className="text-gold/40 mt-0.5 shrink-0">—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="mt-9 flex items-center justify-center gap-2 px-6 py-3.5
                             bg-[#1E4ED8] text-white text-sm tracking-wide
                             hover:bg-[#2563EB] transition-colors duration-200"
                >
                  이 스타일로 상담하기
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="section-padding bg-warm-100 border-t border-border">
        <div className="container-main">
          <div className="mb-12 md:mb-16">
            <span className="section-label">Before &amp; After</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              시공 전후 비교
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Before */}
            <div>
              <div className="relative h-[60vw] md:h-[52vh] max-h-[520px] overflow-hidden bg-warm-200">
                <Image
                  src={`https://picsum.photos/seed/${detail.beforeImageId}/1200/800`}
                  alt={`${item.title} — 시공 전`}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay scrim */}
                <div className="absolute inset-0 bg-[#0C0A07]/20" />
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-6 h-px bg-muted/40" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted">Before</p>
              </div>
            </div>

            {/* After */}
            <div>
              <div className="relative h-[60vw] md:h-[52vh] max-h-[520px] overflow-hidden bg-warm-200">
                <Image
                  src={`https://picsum.photos/seed/${item.imageId}/1200/800`}
                  alt={`${item.title} — 시공 후`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-6 h-px bg-gold/50" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold">After</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section-padding bg-warm-200">
        <div className="container-main">
          <span className="section-label">Gallery</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 md:mb-16">
            공간 상세 사진
          </h2>

          {/* Asymmetric grid: big left + 2 stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* Large image */}
            <div className="relative h-[65vw] md:h-[580px] overflow-hidden bg-warm-200">
              <Image
                src={`https://picsum.photos/seed/${detail.galleryImageIds[0]}/1000/1200`}
                alt={`${item.title} 갤러리 1`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Two stacked */}
            <div className="grid grid-rows-2 gap-4 md:gap-5 h-[130vw] md:h-[580px]">
              <div className="relative overflow-hidden bg-warm-200">
                <Image
                  src={`https://picsum.photos/seed/${detail.galleryImageIds[1]}/900/600`}
                  alt={`${item.title} 갤러리 2`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative overflow-hidden bg-warm-200">
                <Image
                  src={`https://picsum.photos/seed/${detail.galleryImageIds[2]}/900/600`}
                  alt={`${item.title} 갤러리 3`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Highlights ── */}
      <section className="section-padding bg-dark">
        <div className="container-main">
          <span className="section-label">Design Highlights</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-14 md:mb-20">
            이 공간의 핵심 디자인
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
            {detail.highlights.map((h, i) => (
              <div key={h.title} className="bg-dark p-8 md:p-10 lg:p-12">
                <p className="text-[11px] tracking-[0.35em] text-gold/40 mb-7 font-light">
                  0{i + 1}
                </p>
                <h3 className="text-white text-lg font-bold mb-4 leading-snug">
                  {h.title}
                </h3>
                <p className="text-white/45 text-sm leading-loose">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Projects ── */}
      {related.length > 0 && (
        <section className="section-padding bg-warm-200">
          <div className="container-main">
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <div>
                <span className="section-label">Related Projects</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  비슷한 프로젝트
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden sm:flex items-center gap-2 text-xs tracking-[0.15em] uppercase
                           text-muted hover:text-white transition-colors duration-200"
              >
                전체 보기
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/portfolio/${rel.id}`}
                  className="group block"
                >
                  <div className="relative h-[60vw] md:h-[42vh] max-h-[400px] overflow-hidden bg-warm-200 mb-5">
                    <Image
                      src={`https://picsum.photos/seed/${rel.imageId}/1000/700`}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
                    {rel.category}&ensp;·&ensp;{rel.location}
                  </p>
                  <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-gold transition-colors duration-200">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">{rel.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA strip ── */}
      <section className="section-padding-sm bg-dark border-t border-white/[0.05]">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="section-label">Start Your Project</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                이런 공간을 원하신다면
              </h2>
              <p className="text-white/40 text-sm leading-loose max-w-sm">
                수디자인과 함께 당신만의 이야기가 담긴 공간을 만들어 보세요.
                첫 상담은 무료입니다.
              </p>
            </div>
            <Link href="/contact" className="btn-ghost shrink-0">
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
