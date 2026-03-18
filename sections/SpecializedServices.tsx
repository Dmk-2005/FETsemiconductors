"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function SpecializedServices() {
  const services = [
    {
      title: "ASIC/RTL Design",
      slug: "asic-rtl-design",
      description: "Design and development of high-performance ASIC and RTL architectures, enabling efficient, scalable, and power-optimized semiconductor solutions tailored for complex digital systems and advanced chip designs.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Physical Design & STA",
      slug: "physical-design-sta",
      description: "Comprehensive physical design and static timing analysis services ensuring optimized chip layout, timing closure, and reliable performance across advanced semiconductor nodes and high-frequency designs.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "EMIR",
      slug: "emir",
      description: "Advanced Electromigration and IR Drop analysis to ensure power integrity, reliability, and long-term stability of semiconductor designs under real-world operating conditions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "IP/SOC Verification",
      slug: "ip-soc-verification",
      description: "Robust verification methodologies for IP and SoC designs using industry-standard frameworks to ensure functional correctness, design reliability, and faster time-to-market.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <FadeIn className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
            Our Specialized Semicon Services
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-navy-700/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-2xl"></div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
