import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { ProductsSection } from "@/components/products-section"
import { TerritorySection } from "@/components/territory-section"
import { ContactSection } from "@/components/contact-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <TerritorySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
