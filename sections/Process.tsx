import FadeIn from "@/components/FadeIn";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We begin by understanding your requirements, goals, and constraints to develop a comprehensive project plan.",
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our expert team creates detailed designs and develops solutions using industry-leading tools and methodologies.",
    },
    {
      number: "03",
      title: "Verification & Testing",
      description: "Rigorous testing and verification processes ensure your solution meets all specifications and quality standards.",
    },
    {
      number: "04",
      title: "Production & Delivery",
      description: "We manage the entire production process and deliver your solution on time and within budget.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <FadeIn className="text-center mb-8">
          <h2 className="heading-lg text-navy-800 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative">
                <div className="bg-white p-8 rounded-xl border border-gray-200 card-hover h-full">
                  <div className="text-6xl font-bold text-orange-500 opacity-20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
