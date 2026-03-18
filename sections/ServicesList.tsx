import FadeIn from "@/components/FadeIn";

export default function ServicesList() {
  const services = [
    {
      title: "Chip Design & Architecture",
      description: "Our expert team delivers comprehensive chip design services from concept to tape-out, utilizing industry-leading EDA tools and proven methodologies.",
      features: ["RTL Design & Development", "System Architecture Planning", "IP Integration & Customization", "Design for Testability (DFT)", "Physical Design & Layout", "Timing Closure & Optimization"],
    },
    {
      title: "Manufacturing & Fabrication",
      description: "State-of-the-art fabrication facilities equipped with advanced process nodes, ensuring high-yield production at competitive costs.",
      features: ["Advanced Process Nodes (7nm-180nm)", "High-Volume Production", "Specialty Process Technologies", "Wafer Fabrication Services", "Package Assembly & Testing", "Supply Chain Management"],
    },
    {
      title: "Verification & Validation",
      description: "Rigorous verification methodologies to ensure your designs meet specifications and perform reliably in real-world conditions.",
      features: ["Functional Verification", "Formal Verification", "Hardware Emulation", "FPGA Prototyping", "Silicon Validation", "Compliance Testing"],
    },
    {
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing protocols and quality assurance processes to guarantee the highest standards of reliability and performance.",
      features: ["Automated Test Equipment (ATE)", "Failure Analysis", "Reliability Testing", "Environmental Testing", "Quality Management Systems", "Statistical Process Control"],
    },
    {
      title: "Power & Performance Optimization",
      description: "Advanced optimization techniques to maximize performance while minimizing power consumption and thermal output.",
      features: ["Power Analysis & Modeling", "Clock Tree Optimization", "Voltage Scaling Strategies", "Thermal Management", "Performance Profiling", "Energy Efficiency Solutions"],
    },
    {
      title: "Consulting & Support",
      description: "Expert guidance and ongoing support to help you navigate complex technical challenges and make informed decisions.",
      features: ["Technology Selection", "Architecture Consulting", "Process Optimization", "Technical Training", "Project Management", "24/7 Technical Support"],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn className="text-center mb-8">
          <h2 className="heading-lg text-navy-800 mb-4">Our Service Offerings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions designed to meet your specific requirements
          </p>
        </FadeIn>

        <div className="space-y-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.05}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
                <h3 className="text-3xl font-bold text-navy-800 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
