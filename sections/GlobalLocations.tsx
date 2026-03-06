export default function GlobalLocations() {
  const locations = [
    {
      city: "San Jose, California",
      type: "Headquarters & R&D Center",
      address: "3000 Technology Drive, Suite 200",
      phone: "+1 (408) 555-0100",
      email: "sanjose@fetsemi.com",
      employees: "500+",
    },
    {
      city: "Austin, Texas",
      type: "Design Center",
      address: "1500 Innovation Parkway, Building A",
      phone: "+1 (512) 555-0200",
      email: "austin@fetsemi.com",
      employees: "300+",
    },
    {
      city: "Phoenix, Arizona",
      type: "Manufacturing Facility",
      address: "2400 Manufacturing Boulevard",
      phone: "+1 (602) 555-0300",
      email: "phoenix@fetsemi.com",
      employees: "800+",
    },
    {
      city: "Bangalore, India",
      type: "Engineering Center",
      address: "Tech Park, Electronic City Phase 1",
      phone: "+91 80 5555 0400",
      email: "bangalore@fetsemi.com",
      employees: "400+",
    },
    {
      city: "Munich, Germany",
      type: "European Operations",
      address: "Innovation Campus, Building 5",
      phone: "+49 89 5555 0500",
      email: "munich@fetsemi.com",
      employees: "200+",
    },
    {
      city: "Tokyo, Japan",
      type: "Asia-Pacific Hub",
      address: "Tech Tower, Shibuya District",
      phone: "+81 3 5555 0600",
      email: "tokyo@fetsemi.com",
      employees: "250+",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
            Global Presence, Local Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic locations worldwide to serve our clients better
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-1">{location.city}</h3>
                  <p className="text-orange-500 font-semibold text-sm">{location.type}</p>
                </div>
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {location.employees}
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${location.phone}`} className="hover:text-orange-500 transition-colors">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${location.email}`} className="hover:text-orange-500 transition-colors">
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-50 to-navy-50 p-8 rounded-2xl">
            <p className="text-lg text-navy-800 mb-4">
              <span className="font-bold text-2xl text-orange-500">2,500+</span> employees across 
              <span className="font-bold text-2xl text-navy-700 mx-2">6</span> global locations
            </p>
            <p className="text-gray-600">Serving clients in over 50 countries worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
