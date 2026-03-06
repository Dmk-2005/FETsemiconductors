"use client";

export default function OpenPositions() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-800 mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore current opportunities and find your perfect role
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="bg-gray-50 rounded-2xl p-12 border-2 border-gray-200">
            <svg className="w-20 h-20 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-navy-800 mb-4">No Open Positions Currently</h3>
            <p className="text-gray-600 mb-8">
              We don't have any open positions at the moment, but we're always looking for talented individuals to join our team.
            </p>
            <button className="btn-primary">
              Submit General Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
