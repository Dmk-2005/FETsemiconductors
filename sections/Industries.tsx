export default function Industries() {
  const industries = [
    {
      icon: "📱",
      title: "Consumer Electronics",
      description: "Powering smartphones, tablets, and wearables with cutting-edge chip solutions.",
    },
    {
      icon: "🚗",
      title: "Automotive",
      description: "Advanced semiconductors for autonomous driving and electric vehicles.",
    },
    {
      icon: "🏥",
      title: "Healthcare & Medical",
      description: "Precision chips for medical devices and diagnostic equipment.",
    },
    {
      icon: "🏭",
      title: "Industrial IoT",
      description: "Robust solutions for industrial automation and smart manufacturing.",
    },
    {
      icon: "📡",
      title: "Telecommunications",
      description: "High-performance chips for 5G networks and communication systems.",
    },
    {
      icon: "🛡️",
      title: "Aerospace & Defense",
      description: "Mission-critical semiconductors for aerospace and defense applications.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized semiconductor solutions across diverse sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">{industry.title}</h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
