'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioItems, categories, type PortfolioCategory } from '@/data/portfolio'

export default function PortfolioClient() {
  const [active, setActive] = useState<PortfolioCategory>('전체')

  const filtered =
    active === '전체'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active)

  return (
    <div>
      {/* ── Filter — minimal underline tabs ── */}
      <div className="flex gap-8 flex-wrap border-b border-border pb-5 mb-20 md:mb-24">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`py-2 px-1 text-sm tracking-wide transition-all duration-200 ${
              active === cat
                ? 'text-white border-b border-white'
                : 'text-white/50 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Editorial grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-10 md:gap-y-24 lg:gap-x-12 lg:gap-y-28">
        {filtered.map((item, index) => {
          const isFeature = index % 3 === 0

          return (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className={`group block ${isFeature ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
            <article>
              {/* ── Image ── */}
              <div
                className={`relative overflow-hidden bg-warm-300 ${
                  isFeature
                    ? 'h-[60vw] md:h-[62vh] max-h-[600px]'
                    : 'h-[70vw] sm:h-[55vw] md:h-[50vh] max-h-[480px]'
                }`}
              >
                <Image
                  src={`https://picsum.photos/seed/${item.imageId}/1200/800`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-out
                             group-hover:scale-[1.06]"
                  sizes={
                    isFeature
                      ? '(max-width: 768px) 100vw, 100vw'
                      : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw'
                  }
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-700 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(8,6,4,0.82) 0%, rgba(8,6,4,0.38) 40%, transparent 68%)',
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8
                               translate-y-2 group-hover:translate-y-0
                               transition-transform duration-700 delay-100 ease-out"
                  >
                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/55 mb-2.5">
                      {item.category}&ensp;·&ensp;{item.location}
                    </p>
                    <h3
                      className={`font-semibold text-white leading-snug ${
                        isFeature ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* ── Caption ── */}
              <div className="mt-5 md:mt-6">
                <div className="flex items-start justify-between gap-6 mb-3.5">
                  <div>
                    <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-2.5">
                      {item.category}&ensp;·&ensp;{item.location}
                    </p>
                    <h3
                      className={`font-bold text-white leading-snug group-hover:text-gold transition-colors duration-200 ${
                        isFeature ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-1 leading-relaxed">{item.subtitle}</p>
                  </div>
                </div>

                {/* Metadata strip */}
                <div className="flex items-center gap-0 border-t border-border pt-3.5">
                  {[
                    { label: '위치', value: item.location },
                    { label: '면적', value: item.area },
                    { label: '기간', value: item.duration },
                  ].map((meta, i) => (
                    <div key={meta.label} className="flex items-center">
                      {i > 0 && <div className="w-px h-3 bg-border mx-4 shrink-0" />}
                      <div>
                        <p className="text-[8px] tracking-[0.2em] uppercase text-muted/60 mb-0.5">{meta.label}</p>
                        <p className="text-[11px] text-white/60 tabular-nums">{meta.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            </Link>
          )
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-28 text-center text-white/40 text-sm tracking-widest uppercase">
          해당 카테고리의 프로젝트가 없습니다
        </div>
      )}
    </div>
  )
}
