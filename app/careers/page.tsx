import type { Metadata } from "next";
import CareersHero from "@/sections/CareersHero";
import OpenPositions from "@/sections/OpenPositions";
import Culture from "@/sections/Culture";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Careers | FET Semiconductors Pvt Ltd",
  description: "Join our team of innovators and help shape the future of semiconductor technology.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Culture />
      <OpenPositions />

      <section className="py-8 lg:py-10 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <FadeIn className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-3">
              Have a Career Query?
            </h2>
            <p className="text-gray-500 text-base mb-6 max-w-xl mx-auto">
              For any career-related questions or applications, reach out to our HR team directly.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=hr@fetsemi.com&su=Career%20Query%20-%20FET%20Semiconductors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-base transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hr@fetsemi.com
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
