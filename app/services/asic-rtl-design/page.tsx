import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASIC / RTL Design Services | FET Semiconductors Pvt Ltd",
  description: "End-to-end ASIC and RTL design services for high-performance, scalable, and power-efficient semiconductor solutions.",
};

export default function AsicRtlDesignPage() {
  const expertise = [
    {
      title: "Micro-Architecture Development",
      description: "Defining efficient micro-architectures that balance performance, power, and area for optimal silicon implementation.",
    },
    {
      title: "RTL Coding & Optimization",
      description: "Writing clean, synthesizable RTL code optimized for timing, power, and design reusability across projects.",
    },
    {
      title: "Design Integration & Subsystem Development",
      description: "Seamless integration of IP blocks and subsystems ensuring functional correctness and design coherence.",
    },
    {
      title: "Low-Power RTL Design Techniques",
      description: "Implementing clock gating, power domains, and voltage scaling strategies for energy-efficient designs.",
    },
    {
      title: "Lint & CDC/RDC Clean RTL Delivery",
      description: "Delivering lint-clean and CDC/RDC verified RTL to minimize downstream verification and integration issues.",
    },
    {
      title: "Synthesis-Ready RTL Development",
      description: "Creating RTL that synthesizes efficiently with optimal QoR, meeting timing and area constraints.",
    },
  ];

  const whyMatters = [
    "Chip performance and power efficiency",
    "Design scalability across technology nodes",
    "Faster verification and integration cycles",
    "Reduced design iterations before tape-out",
  ];

  const deliverables = [
    "Clean synthesizable RTL code",
    "Architecture and micro-architecture documentation",
    "Lint, CDC, and synthesis-ready RTL deliverables",
    "Power-optimized and timing-friendly designs",
    "Design integration support",
    "Collaboration with verification and physical design teams",
  ];

  const capabilities = [
    "High-performance compute engines",
    "Interface protocols like PCIe, USB, AXI",
    "Memory controllers and data pipelines",
    "Control logic and subsystem integration",
    "Multi-clock and multi-domain architectures",
  ];

  const whyChooseUs = [
    {
      title: "Strong Digital Design Expertise",
      description: "Decades of combined experience in complex digital design and RTL development.",
    },
    {
      title: "Clean and Maintainable RTL Methodology",
      description: "Following industry best practices for code quality, reusability, and maintainability.",
    },
    {
      title: "Power and Timing Aware Architecture Design",
      description: "Designing with power and timing closure in mind from the start.",
    },
    {
      title: "Seamless Collaboration Across Design Flows",
      description: "Working closely with verification, DFT, and physical design teams.",
    },
    {
      title: "Focus on Silicon-Ready Implementation",
      description: "Delivering production-quality RTL that meets all signoff requirements.",
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
              ASIC / RTL Design
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              End-to-end ASIC and RTL design services for high-performance, scalable, 
              and power-efficient semiconductor solutions.
            </p>
          </div>
        </div>

        <Link 
          href="/services/ip-soc-verification"
          className="absolute left-4 top-[60%] -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous Service"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        <Link 
          href="/services/physical-design-sta"
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">
              Architecture. Precision. Silicon Excellence.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Designing efficient silicon starts with a strong architecture and robust RTL implementation. 
                We provide end-to-end ASIC and RTL design services for high-performance, scalable, and 
                power-efficient semiconductor solutions.
              </p>
              <p>
                From architecture definition to synthesizable RTL, our engineers ensure your design is 
                optimized for performance, power, and silicon reliability.
              </p>
              <p className="font-semibold text-navy-800">
                Our goal is simple — turn complex specifications into production-ready silicon designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
              Why ASIC / RTL Design Matters
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {whyMatters.map((item, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <svg className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <p className="text-gray-700 leading-relaxed">
                Poor RTL architecture can cause timing issues, verification complexity, and redesign cycles. 
                A well-architected RTL foundation ensures smooth integration, faster verification convergence, 
                and successful tape-out with minimal iterations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            Our ASIC / RTL Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-navy-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
              What We Deliver
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
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

            <div className="bg-navy-800 text-white p-8 rounded-xl text-center">
              <p className="text-xl font-semibold">
                We don't just write RTL — we engineer silicon-ready digital designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
              Advanced Design Capability
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-start bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-200">
                  <svg className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Our team has extensive experience in designing high-speed and low-power architectures 
              for complex SoCs, ensuring optimal performance across diverse application domains.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next-Generation Silicon?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our ASIC / RTL design expertise can accelerate your chip development.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}






