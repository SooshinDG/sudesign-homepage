import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-dark text-center px-5">
      <span className="section-label">404</span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-warm-400/75 text-sm leading-loose mb-10 max-w-sm">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Link href="/" className="btn-ghost">
        홈으로 돌아가기
      </Link>
    </section>
  )
}
