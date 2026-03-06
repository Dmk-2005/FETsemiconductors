export default function Stats() {
  const stats = [
    {
      value: "25+",
      label: "Years of Excellence",
      description: "Industry-leading experience",
    },
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successful implementations",
    },
    {
      value: "50+",
      label: "Global Clients",
      description: "Trusted partnerships",
    },
    {
      value: "200+",
      label: "Expert Team",
      description: "Skilled professionals",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-navy-800 mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
