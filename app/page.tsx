import { HeroSection } from "@/components/home/hero-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { FeaturesGrid } from "@/components/home/features-grid"
import { MultiChannelSupport } from "@/components/home/multi-channel-support"
import { TrendingIssues } from "@/components/home/trending-issues"
import { Testimonials } from "@/components/home/testimonials"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <HowItWorks />
      <FeaturesGrid />
      <MultiChannelSupport />
      <TrendingIssues />
      <Testimonials />
    </div>
  )
}
