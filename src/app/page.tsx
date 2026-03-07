import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyCrown from "@/components/sections/WhyCrown";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Industries from "@/components/sections/Industries";
import TechnicalCapabilities from "@/components/sections/TechnicalCapabilities";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSnapshot />
      <ServicesGrid />
      <WhyCrown />
      <ProcessTimeline />
      <Industries />
      <TechnicalCapabilities />
      <CTABanner />
    </>
  );
}
