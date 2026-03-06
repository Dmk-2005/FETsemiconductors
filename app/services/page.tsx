import type { Metadata } from "next";
import ServicesHero from "@/sections/ServicesHero";
import SpecializedServices from "@/sections/SpecializedServices";
import ServicesList from "@/sections/ServicesList";
import Process from "@/sections/Process";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Our Services | FET Semiconductors Pvt Ltd",
  description: "Comprehensive semiconductor design, manufacturing, and engineering services tailored to your needs.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <SpecializedServices />
      <ServicesList />
      <Process />
      <CTA />
    </>
  );
}
