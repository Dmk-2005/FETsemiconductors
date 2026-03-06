export default function Timeline() {
  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "FET Semiconductors established with a vision to revolutionize chip design.",
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-800 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key milestones in our path to becoming an industry leader
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 lg:text-right">
                  {index % 2 === 0 && (
                    <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
                      <div className="text-3xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-navy-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  )}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="flex-1">
                  {index % 2 !== 0 && (
                    <div className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
                      <div className="text-3xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-navy-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
