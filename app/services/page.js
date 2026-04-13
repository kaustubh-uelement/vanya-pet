import ServicesHero from "@/components/services/ServicesHero";
import ServicesFilter from "@/components/services/ServicesFilter";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Services — Vanya Pet",
  description:
    "Explore all 11 Vanya pet services — from boarding and grooming to wellness, insurance, and legacy care.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesFilter />
      <CTASection />
    </main>
  );
}
