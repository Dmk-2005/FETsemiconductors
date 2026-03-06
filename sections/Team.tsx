export default function Team() {
  const team = [
    {
      name: "",
      role: "",
      bio: "",
    },
    {
      name: "",
      role: "",
      bio: "",
    },
    {
      name: "",
      role: "",
      bio: "",
    },
    {
      name: "",
      role: "",
      bio: "",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-800 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts driving innovation and excellence at FET Semiconductors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden card-hover">
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-5 bg-gray-100 rounded mb-3 w-1/2"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
