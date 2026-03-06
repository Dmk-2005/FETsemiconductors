import type { Metadata } from "next";
import CareersHero from "@/sections/CareersHero";
import Benefits from "@/sections/Benefits";
import OpenPositions from "@/sections/OpenPositions";
import Culture from "@/sections/Culture";

export const metadata: Metadata = {
  title: "Careers | FET Semiconductors Pvt Ltd",
  description: "Join our team of innovators and help shape the future of semiconductor technology.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Culture />
      <Benefits />
      <OpenPositions />
    </>
  );
}
