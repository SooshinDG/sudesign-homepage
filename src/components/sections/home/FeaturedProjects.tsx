import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/data/portfolio'

export default function FeaturedProjects() {
  const featured = portfolioItems.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="section-padding bg-warm-50">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 md:mb-20">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
              주요 시공 사례
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="btn-text self-start md:self-auto mb-1"
          >
            전체 보기
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {featured.map((item, index) => (
            <Link
              key={item.id}
              href="/portfolio"
              className={`group relative overflow-hidden bg-warm-200 ${
                index === 0 ? 'md:col-span-2 h-[55vw] md:h-[520px] max-h-[600px]' : 'h-64 md:h-80'
              }`}
            >
              <Image
                src={`https://picsum.photos/seed/${item.imageId}/1200/800`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes={
                  index === 0
                    ? '(max-width: 768px) 100vw, 100vw'
                    : '(max-width: 768px) 100vw, 50vw'
                }
              />

              {/* Lighter, more editorial overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Category — top right, minimal */}
              <div className="absolute top-5 right-5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                  {item.category}
                </span>
              </div>

              {/* Info — bottom, generous padding */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white/50 text-xs tracking-wider mb-2">
                  {item.location} · {item.area}
                </p>
                <h3
                  className={`text-white font-bold leading-snug ${
                    index === 0 ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm mt-1">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
