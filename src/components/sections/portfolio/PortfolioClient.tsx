'use client'

import { useState } from 'react'
import Image from 'next/image'
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
            className={`text-sm tracking-wide transition-all duration-200 ${
              active === cat
                ? 'text-dark border-b border-dark pb-px'
                : 'text-dark-soft/70 hover:text-dark'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Editorial grid ──
          Pattern: every 3rd card (index 0, 3, 6…) is a full-width feature.
          The two cards between each feature pair as halves.
          Result: feature → pair → feature → pair …  like a magazine spread.
      ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-10 md:gap-y-24 lg:gap-x-12 lg:gap-y-28">
        {filtered.map((item, index) => {
          const isFeature = index % 3 === 0

          return (
            <article
              key={item.id}
              className={`group ${isFeature ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              {/* ── Image ── */}
              <div
                className={`relative overflow-hidden bg-warm-200 ${
                  isFeature
                    ? 'h-[60vw] md:h-[62vh] max-h-[600px]'
                    : 'h-[70vw] sm:h-[55vw] md:h-[50vh] max-h-[480px]'
                }`}
              >
                <Image
                  src={`https://picsum.photos/seed/${item.imageId}/1200/800`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1000ms] ease-out
                             group-hover:scale-[1.04]"
                  sizes={
                    isFeature
                      ? '(max-width: 768px) 100vw, 100vw'
                      : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw'
                  }
                />
                {/* No overlay at rest — image speaks alone.
                    Barely-there scrim only on hover for legibility. */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/6
                                transition-colors duration-700" />
              </div>

              {/* ── Caption — below image, editorial ── */}
              <div className="mt-5 md:mt-6 flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase text-dark-soft/70 mb-2.5">
                    {item.category}&ensp;·&ensp;{item.location}
                  </p>
                  <h3
                    className={`font-bold text-dark leading-snug ${
                      isFeature ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-soft mt-1 leading-relaxed">{item.subtitle}</p>
                </div>

                {/* Area — right-aligned */}
                <p className="text-xs text-dark-soft/65 shrink-0 pt-1 tabular-nums">{item.area}</p>
              </div>
            </article>
          )
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-28 text-center text-dark-soft/60 text-sm tracking-widest uppercase">
          해당 카테고리의 프로젝트가 없습니다
        </div>
      )}
    </div>
  )
}
