import TopBanner from "@/components/top-banner"
import Hero from "@/components/hero"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <TopBanner />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

