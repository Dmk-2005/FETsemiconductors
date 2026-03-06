import type { Metadata } from "next";
import AboutHero from "@/sections/AboutHero";
import Mission from "@/sections/Mission";
import Team from "@/sections/Team";
import Timeline from "@/sections/Timeline";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: "About Us | FET Semiconductors Pvt Ltd",
  description: "Learn about our mission, values, and the team driving innovation in semiconductor technology.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Timeline />
      <Team />
      <CTA />
    </>
  );
}
