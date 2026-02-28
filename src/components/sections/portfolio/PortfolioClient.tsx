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
      {/* Filter — text tab style, no button boxes */}
      <div className="flex gap-7 flex-wrap mb-14 border-b border-border pb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm tracking-wide pb-px transition-all duration-200 ${
              active === cat
                ? 'text-dark border-b border-dark'
                : 'text-muted hover:text-dark-soft'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial grid — tight seams like a magazine spread */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filtered.map((item) => (
          <div key={item.id} className="group">
            {/* Image */}
            <div className="relative overflow-hidden bg-warm-200 h-64 md:h-72 mb-4">
              <Image
                src={`https://picsum.photos/seed/${item.imageId}/800/600`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Lighter overlay — editorial, not dramatic */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/8 transition-colors duration-500" />
            </div>

            {/* Info — below image, magazine caption style */}
            <div className="space-y-1">
              <div className="flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-muted">
                <span>{item.category}</span>
                <span className="text-border">·</span>
                <span>{item.location}</span>
              </div>
              <h3 className="text-base font-bold text-dark leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.subtitle}</p>
              <p className="text-xs text-warm-400 pt-0.5">{item.area} · {item.duration}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-24 text-muted text-sm">
          해당 카테고리의 프로젝트가 없습니다.
        </div>
      )}
    </div>
  )
}
