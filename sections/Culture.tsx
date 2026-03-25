import FadeIn from "@/components/FadeIn";

export default function Culture() {
  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Collaborative Environment",
      description: "Work alongside talented professionals in a culture that values teamwork and open communication.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Career Growth",
      description: "Continuous learning opportunities, mentorship programs, and clear paths for advancement.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation Focus",
      description: "Access to cutting-edge technology and resources to bring your ideas to life.",
    },
  ];

  return (
    <section className="py-8 lg:py-10 bg-white">
      <div className="container-custom">
        <FadeIn className="text-center mb-6">
          <h2 className="heading-lg text-navy-800 mb-3">Why FET Semiconductors?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience a workplace culture that empowers you to do your best work
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full text-orange-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
