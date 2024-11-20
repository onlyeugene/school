import Container from "@/components/container";
import CTASection from "@/components/home/cta-section";
import FeaturesGrid from "@/components/home/features-grid";
import HeroSection from "@/components/home/hero-section";
import StatsSection from "@/components/home/stats-section";

export default function Home() {
  return (
    <main className=" bg-gradient-to-b from-[#35b3fb]  to-white dark:from-gray-900 dark:to-gray-800 pt-28">
      <Container>
        <HeroSection />
        <FeaturesGrid />
        <CTASection />
      <StatsSection />
      </Container>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      </div> */}
    </main>
  );
}

// animate-[bounce_5s_ease-in-out_infinite]
