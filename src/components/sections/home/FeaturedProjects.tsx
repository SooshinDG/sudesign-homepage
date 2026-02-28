import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/data/portfolio'

export default function FeaturedProjects() {
  const featured = portfolioItems.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="section-padding bg-warm-50">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
              주요 시공 사례
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-medium text-dark-soft hover:text-gold transition-colors self-start md:self-auto"
          >
            전체 보기
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {featured.map((item, index) => (
            <Link
              key={item.id}
              href="/portfolio"
              className={`group relative overflow-hidden rounded-sm bg-warm-200 ${
                index === 0 ? 'md:col-span-2 h-80 md:h-[480px]' : 'h-64 md:h-80'
              }`}
            >
              {/* Placeholder image using picsum */}
              <Image
                src={`https://picsum.photos/seed/${item.imageId}/1200/800`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={
                  index === 0
                    ? '(max-width: 768px) 100vw, 100vw'
                    : '(max-width: 768px) 100vw, 50vw'
                }
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs rounded-sm">
                  {item.category}
                </span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="text-white/60 text-sm mb-1">
                  {item.location} · {item.area}
                </p>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-0.5">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.subtitle}</p>

                {/* Tags */}
                <div className="flex gap-2 mt-3 flex-wrap">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
