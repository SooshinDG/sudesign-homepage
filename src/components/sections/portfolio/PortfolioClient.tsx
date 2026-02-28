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
      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-sm rounded-sm font-medium transition-all duration-200 ${
              active === cat
                ? 'bg-dark text-white'
                : 'bg-white border border-border text-dark-soft hover:border-gold hover:text-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-sm bg-warm-200 h-72 md:h-80"
          >
            <Image
              src={`https://picsum.photos/seed/${item.imageId}/800/600`}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs rounded-sm">
                {item.category}
              </span>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white/60 text-xs mb-1">
                {item.location} · {item.area} · {item.duration}
              </p>
              <h3 className="text-white text-lg font-bold mb-1">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm">{item.subtitle}</p>
              <div className="flex gap-2 mt-3 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-gold border border-gold/40 px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">
          해당 카테고리의 프로젝트가 없습니다.
        </div>
      )}
    </div>
  )
}
