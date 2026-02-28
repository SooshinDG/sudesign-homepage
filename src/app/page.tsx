import Hero from '@/components/sections/home/Hero'
import FeaturedProjects from '@/components/sections/home/FeaturedProjects'
import ServicesOverview from '@/components/sections/home/ServicesOverview'
import Process from '@/components/sections/home/Process'
import Testimonials from '@/components/sections/home/Testimonials'
import HomeCTA from '@/components/sections/home/HomeCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <Process />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
