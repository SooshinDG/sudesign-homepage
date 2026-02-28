import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/data/portfolio'

export default function FeaturedProjects() {
  // 3 items: left large + right stacked pair
  const [hero, ...pair] = portfolioItems.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="section-padding bg-warm-50">
      <div className="container-main">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 md:mb-18">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-dark leading-snug">
              주요 시공 사례
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="btn-text self-start md:self-auto shrink-0"
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

        {/* ── Editorial split: 60% left hero + 40% right stacked pair ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 md:h-[600px] lg:h-[660px]">

          {/* Left — large hero image */}
          <Link
            href="/portfolio"
            className="group md:col-span-3 relative overflow-hidden bg-warm-200
                       h-[62vw] md:h-full"
          >
            <Image
              src={`https://picsum.photos/seed/${hero.imageId}/1200/900`}
              alt={hero.title}
              fill
              className="object-cover transition-transform duration-[1100ms] ease-out
                         group-hover:scale-[1.04]"
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            {/* Gradient: only bottom third */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-2.5">
                {hero.category}&ensp;·&ensp;{hero.location}&ensp;·&ensp;{hero.area}
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-snug">
                {hero.title}
              </h3>
              <p className="text-white/60 text-sm mt-1">{hero.subtitle}</p>
            </div>
          </Link>

          {/* Right — stacked pair */}
          <div className="md:col-span-2 flex flex-col gap-3 md:gap-4 md:h-full">
            {pair.map((item) => (
              <Link
                key={item.id}
                href="/portfolio"
                className="group relative overflow-hidden bg-warm-200 flex-1
                           h-52 md:h-full"
              >
                <Image
                  src={`https://picsum.photos/seed/${item.imageId}/800/700`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1100ms] ease-out
                             group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mb-1.5">
                    {item.category}&ensp;·&ensp;{item.area}
                  </p>
                  <h3 className="text-white text-base font-bold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
