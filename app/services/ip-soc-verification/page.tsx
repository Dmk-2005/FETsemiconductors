import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IP / SoC Verification Services | FET Semiconductors Pvt Ltd",
  description: "Comprehensive IP and SoC verification services to ensure functional correctness, reliability, and first-pass silicon success.",
};

export default function IpSocVerificationPage() {
  const whyMatters = [
    "Large-scale SoC integration increases design complexity",
    "Multiple IP blocks must function seamlessly together",
    "Undetected bugs can lead to costly silicon re-spins",
    "Verification cycles often consume the majority of development time",
  ];

  const expertise = [
    "IP Verification",
    "SoC-Level Verification",
    "UVM-Based Verification Environments",
    "Functional Coverage Development",
    "Assertion-Based Verification (ABV)",
    "Protocol and Interface Verification",
  ];

  const deliverables = [
    "Comprehensive verification plans",
    "UVM-based verification environments",
    "Functional and code coverage closure",
    "Bug tracking and root cause analysis",
    "Reusable testbenches and verification components",
    "Verification reports and signoff support",
  ];

  const capabilities = [
    "Multi-core SoC architectures",
    "High-speed interface protocols (PCIe, AXI, USB, Ethernet)",
    "Memory subsystems and controllers",
    "Power management systems",
    "Multi-clock and multi-domain designs",
  ];

  const whyChooseUs = [
    {
      title: "Strong Expertise in Modern Verification Methodologies",
      description: "Deep knowledge of UVM, SystemVerilog, and industry-standard verification practices.",
    },
    {
      title: "Deep Experience with UVM-Based Verification Environments",
      description: "Building scalable, reusable verification frameworks for complex designs.",
    },
    {
      title: "Scalable and Reusable Verification Frameworks",
      description: "Creating verification components that can be leveraged across multiple projects.",
    },
    {
      title: "Faster Bug Detection and Debugging Cycles",
      description: "Efficient methodologies to identify and resolve issues quickly.",
    },
    {
      title: "Focus on Verification Completeness and Silicon Readiness",
      description: "Ensuring thorough coverage and functional confidence before tape-out.",
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-navy overflow-hidden flex items-center pt-36 pb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              IP / SoC Verification
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Accuracy. Coverage. Silicon Confidence.
            </p>
          </div>
        </div>

        <Link 
          href="/services/emir"
          className="absolute left-4 top-[60%] -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous Service"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        <Link 
          href="/services/asic-rtl-design"
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
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              In modern semiconductor development, verification is one of the most critical phases of the design cycle. 
              We provide comprehensive IP and SoC verification services to ensure functional correctness, reliability, 
              and first-pass silicon success.
            </p>
            <p>
              Our verification engineers leverage industry-standard methodologies, advanced verification environments, 
              and scalable frameworks to detect issues early and reduce costly design iterations.
            </p>
            <p className="font-semibold text-navy-800 text-xl">
              Our mission is simple — verify thoroughly, validate efficiently, and deliver reliable silicon.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">
              Why IP / SoC Verification Matters
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 text-center">
              As chip complexity increases, verification challenges grow significantly:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {whyMatters.map((item, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <svg className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white p-8 rounded-xl mb-6">
              <p className="text-xl leading-relaxed text-center">
                A robust verification strategy ensures design correctness, system stability, and faster time-to-market.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <p className="text-gray-700 leading-relaxed">
                We help mitigate risks through structured verification methodologies and comprehensive coverage analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 text-center">
              Our Verification Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              We provide end-to-end verification support across the complete verification lifecycle:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg font-semibold text-navy-800">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-navy-50 p-6 rounded-xl border border-orange-200 text-center">
              <p className="text-lg text-gray-700">
                Our teams build scalable and reusable verification environments that integrate seamlessly into the design flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gray-50">
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
                We don't just test designs — we ensure complete functional confidence before silicon tape-out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">
              Advanced Verification Capability
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 text-center">
              Our engineers have experience verifying complex semiconductor designs including:
            </p>

            <div className="space-y-4 mb-12">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-start bg-gradient-to-r from-navy-50 to-white p-6 rounded-xl border border-navy-200">
                  <svg className="w-6 h-6 text-navy-700 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-navy-800 text-white p-8 rounded-xl text-center">
              <p className="text-xl leading-relaxed">
                We understand the challenges of large-scale integration and complex verification environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {whyChooseUs.map((item, index) => (
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
            <div className="bg-gradient-to-r from-orange-50 to-navy-50 p-8 rounded-2xl border-2 border-orange-200 text-center">
              <p className="text-xl font-semibold text-navy-800">
                We work closely with design and physical teams to ensure design quality and first-pass silicon success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-12 rounded-2xl text-white text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">
                Comprehensive Verification Services
              </h2>
              <p className="text-xl leading-relaxed">
                We deliver comprehensive IP and SoC verification services using advanced methodologies and 
                scalable verification frameworks. Our expertise ensures functional correctness, coverage closure, 
                and reliable silicon for complex semiconductor systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Ensure Functional Correctness?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our verification expertise can accelerate your design validation.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}






