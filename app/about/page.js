import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutStudio from "@/components/about/AboutStudio";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "About — Vanya Pet",
  description:
    "Learn about Vanya's mission to build India's most complete pet technology ecosystem.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStudio />
      <CTASection />
    </main>
  );
}
