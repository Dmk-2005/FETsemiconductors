"use client";

import FadeIn from "@/components/FadeIn";

export default function OpenPositions() {
  return (
    <section className="py-8 lg:py-10 bg-gray-50">
      <div className="container-custom">
        <FadeIn className="text-center mb-6">
          <h2 className="heading-lg text-navy-800 mb-3">Open Positions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore current opportunities and find your perfect role
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-bold text-navy-800 mb-2">No Open Positions Currently</h3>
            <p className="text-gray-500 text-sm mb-6">
              We don't have any open positions at the moment, but we're always looking for talented individuals.
            </p>
            <button className="btn-primary">Submit General Application</button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
