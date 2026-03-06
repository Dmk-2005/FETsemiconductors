export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "25+ years leading semiconductor innovation and business strategy.",
      linkedin: "#",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Expert in advanced chip architecture and design methodologies.",
      linkedin: "#",
    },
    {
      name: "Dr. Emily Watson",
      role: "VP of Engineering",
      bio: "Driving engineering excellence and process optimization.",
      linkedin: "#",
    },
    {
      name: "James Park",
      role: "VP of Operations",
      bio: "Ensuring operational efficiency across global facilities.",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced executives driving innovation and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-80 bg-gradient-to-br from-navy-700 to-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-orange-500/20 rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-1">{leader.name}</h3>
                <p className="text-orange-500 font-semibold mb-3 text-sm">{leader.role}</p>
                <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                <a
                  href={leader.linkedin}
                  className="inline-flex items-center text-navy-700 hover:text-orange-500 transition-colors text-sm font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
