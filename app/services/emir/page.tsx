import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EMIR Analysis Services | FET Semiconductors Pvt Ltd",
  description: "Comprehensive EMIR (Electromigration & IR Drop) analysis and signoff solutions for high-performance SoCs and complex digital designs.",
};

export default function EmirPage() {
  const whyMatters = [
    "Even minor voltage drops can cause timing failures",
    "High current density can lead to metal degradation",
    "Power integrity issues can result in silicon re-spins",
  ];

  const expertise = [
    "Static IR Drop Analysis",
    "Dynamic IR Drop Analysis",
    "Electromigration (EM) Analysis",
  ];

  const deliverables = [
    "Detailed IR & EM violation reports",
    "Heatmap-based hotspot visualization",
    "Root cause analysis",
    "Power grid optimization strategies",
    "Closure support until clean signoff",
  ];

  const advancedCapabilities = [
    "High-current CPU/GPU blocks",
    "Memory-heavy designs",
    "Multi-voltage domain SoCs",
    "Advanced node challenges (7nm, 5nm, and below)",
  ];

  const whyChooseUs = [
    {
      title: "Deep Physical Design Expertise",
      description: "Comprehensive understanding of backend flows and power delivery networks.",
    },
    {
      title: "Strong Understanding of Power Grid Architecture",
      description: "Expertise in power grid design, analysis, and optimization strategies.",
    },
    {
      title: "Fast Turnaround Time",
      description: "Efficient analysis workflows to meet aggressive project schedules.",
    },
    {
      title: "Signoff-Driven Approach",
      description: "Focus on achieving clean signoff with minimal iterations.",
    },
    {
      title: "Silicon-Proven Methodologies",
      description: "Battle-tested approaches that have delivered successful tape-outs.",
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-navy overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              EMIR (Electromigration & IR Drop) Analysis
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Power Integrity. Reliability. Silicon Confidence.
            </p>
          </div>
        </div>

        <Link 
          href="/services/physical-design-sta"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous Service"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        <Link 
          href="/services/ip-soc-verification"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Next Service"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At advanced technology nodes, power integrity is no longer optional — it is mission-critical.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We specialize in comprehensive EMIR (Electromigration & IR Drop) analysis and signoff 
              solutions for high-performance SoCs and complex digital designs.
            </p>
            <p className="text-xl font-semibold text-navy-800">
              Our expertise ensures your silicon meets performance, reliability, and lifetime targets before tape-out.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">
              Why EMIR Matters
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 text-center">
              As geometries shrink and current densities increase:
            </p>

            <div className="space-y-4 mb-12">
              {whyMatters.map((item, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                  <svg className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-navy-800 text-white p-8 rounded-xl text-center">
              <p className="text-xl font-semibold">
                We help eliminate these risks through advanced EMIR analysis and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 text-center">
              Our EMIR Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              We provide end-to-end EMIR support across the physical design flow:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border-2 border-orange-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-800">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
              What We Deliver
            </h2>
            
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-8">
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-500 text-white p-8 rounded-xl text-center shadow-xl">
              <p className="text-2xl font-bold">
                We don't just report violations — we help close them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">
              Advanced Node Readiness
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 text-center">
              Our team has experience handling:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {advancedCapabilities.map((item, index) => (
                <div key={index} className="flex items-start bg-gradient-to-r from-navy-50 to-white p-6 rounded-xl border border-navy-200">
                  <svg className="w-6 h-6 text-navy-700 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white p-8 rounded-xl text-center">
              <p className="text-xl leading-relaxed">
                We understand the tight EM margins and low-voltage sensitivities of modern silicon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-orange-50 to-navy-50 p-8 rounded-2xl border-2 border-orange-200 text-center">
              <p className="text-xl font-semibold text-navy-800">
                We partner with clients to ensure first-pass silicon success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-12 rounded-2xl text-white text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">
                Silicon-Proven EMIR Solutions
              </h2>
              <p className="text-xl leading-relaxed">
                We provide silicon-proven EMIR signoff solutions for high-performance and advanced-node designs. 
                Our expertise in power grid validation, dynamic IR analysis, and electromigration reliability 
                ensures robust, manufacturable, and high-yield silicon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Ensure Power Integrity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our EMIR analysis expertise can de-risk your silicon.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
