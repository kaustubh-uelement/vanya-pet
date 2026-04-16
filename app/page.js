import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsSection from "@/components/home/StatsSection";
import PhaseRoadmap from "@/components/home/PhaseRoadmap";
import AppPreview from "@/components/home/AppPreview";
import CTASection from "@/components/home/CTASection";
import FamilySection from "@/components/home/FamilySection";
import PetParentingSection from "@/components/home/PetParentingSection";
import FindFriendSection from "@/components/home/FindFriendSection";

export const metadata = {
  title: "Vanya Pet — Your Pet's World. Just a Tap Away.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <FamilySection />
      <PetParentingSection />
      <FindFriendSection />
      {/* <StatsSection /> */}
      {/* <PhaseRoadmap /> */}
      {/* <AppPreview /> */}
      {/* <CTASection /> */}
    </main>
  );
}
