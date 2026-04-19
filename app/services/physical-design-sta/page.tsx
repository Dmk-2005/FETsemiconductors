import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Physical Design & STA Services | FET Semiconductors Pvt Ltd",
  description: "End-to-end Physical Design and Static Timing Analysis solutions for high-performance, low-power, and advanced-node SoCs.",
};

export default function PhysicalDesignStaPage() {
  const pdCapabilities = [
    "Floorplanning & Power Planning",
    "Placement & Optimization",
    "Clock Tree Synthesis (CTS)",
    "Routing & Signal Integrity",
    "Physical Signoff",
  ];

  const staCapabilities = [
    "Setup & Hold Closure",
    "MMMC Timing Analysis",
    "OCV & Advanced Variation Models",
    "Signal Integrity & Crosstalk Analysis",
    "Low Power & UPF Timing",
  ];

  const differentiators = [
    {
      title: "Strong Understanding of Timing Architecture",
      description: "Deep expertise in timing constraints, clock domain interactions, and architectural timing optimization.",
    },
    {
      title: "Proven Closure Strategies Under Tight Schedules",
      description: "Efficient methodologies to achieve timing closure even under aggressive project timelines.",
    },
    {
      title: "Deep Knowledge of Clocking Structures",
      description: "Expertise in complex clock tree architectures, multi-mode clocking, and clock domain crossing.",
    },
    {
      title: "Power-Performance-Area (PPA) Driven Approach",
      description: "Balanced optimization across power, performance, and area to meet design goals.",
    },
    {
      title: "Signoff-First Mindset",
      description: "Designing with signoff requirements in mind from the start to minimize iterations.",
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-navy overflow-hidden flex items-center pt-24 sm:pt-28 lg:pt-36 pb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Physical Design and STA
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From RTL to Signoff. Performance Engineered.
            </p>
          </div>
        </div>

        <Link 
          href="/services/asic-rtl-design"
          className="absolute left-4 top-[60%] -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous Service"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        <Link 
          href="/services/emir"
          className="absolute right-4 top-[60%] -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Next Service"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver end-to-end Physical Design and Static Timing Analysis (STA) solutions 
              for high-performance, low-power, and advanced-node SoCs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 text-center">
              Physical Design Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              We provide complete backend implementation services from netlist to GDSII.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-navy-800 mb-8">Our Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {pdCapabilities.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Static Timing Analysis (STA)
              </h2>
              <p className="text-2xl font-semibold text-orange-500">
                Timing is Everything.
              </p>
            </div>

            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              We specialize in advanced multi-mode multi-corner (MMMC) timing analysis to ensure 
              robust silicon across all operating conditions.
            </p>

            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-8">STA Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {staCapabilities.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            What Sets Us Apart
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500"
              >
                <h3 className="text-xl font-bold text-navy-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-500 text-white p-8 rounded-2xl text-center shadow-xl">
              <p className="text-2xl font-bold">
                We don't just close timing — we engineer performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-navy-50 to-orange-50 p-12 rounded-2xl border-2 border-navy-200">
              <h2 className="text-3xl font-bold text-navy-800 mb-6 text-center">
                Our Commitment
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                We provide end-to-end Physical Design and STA services, delivering timing-closed, 
                power-optimized, and manufacturable silicon for advanced-node designs. Our signoff-driven 
                methodology ensures reliable, high-performance SoCs with minimal risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Achieve Timing Closure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our Physical Design and STA expertise can optimize your chip performance.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}







