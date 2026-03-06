export default function Benefits() {
  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Dental and vision coverage",
        "Mental health support",
        "Fitness center membership",
        "Wellness programs",
      ],
    },
    {
      category: "Financial",
      items: [
        "Competitive salary packages",
        "Performance bonuses",
        "401(k) with company match",
        "Stock options",
        "Relocation assistance",
      ],
    },
    {
      category: "Work-Life Balance",
      items: [
        "Flexible work schedules",
        "Remote work options",
        "Generous PTO policy",
        "Paid parental leave",
        "Sabbatical opportunities",
      ],
    },
    {
      category: "Professional Development",
      items: [
        "Tuition reimbursement",
        "Conference attendance",
        "Certification programs",
        "Mentorship opportunities",
        "Internal training programs",
      ],
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-800 mb-4">Benefits & Perks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in our people with comprehensive benefits and perks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 card-hover">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">{benefit.category}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
