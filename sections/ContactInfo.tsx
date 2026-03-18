"use client";

import FadeIn from "@/components/FadeIn";

export default function ContactInfo() {
  const offices = [
    {
      city: "Visakhapatnam",
      address: "Andhra Pradesh, India",
      phone: "+1 (408) 555-0100",
      email: "info@fetsemi.com",
    }
  ];

  return (
    <FadeIn delay={0.1}>
      <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-navy-800 mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-navy-800 mb-1">Email</h3>
              <a href="mailto:info@fetsemi.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                info@fetsemi.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-navy-800 mb-1">Phone</h3>
              <a href="tel:+14085550100" className="text-gray-600 hover:text-orange-500 transition-colors">
                +1 (408) 555-0100
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-navy-800 mb-1">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM PST</p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200">
        <h3 className="text-2xl font-bold text-navy-800 mb-6">Our Offices</h3>
        <div className="space-y-6">
          {offices.map((office, index) => (
            <div key={index} className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
              <h4 className="font-semibold text-navy-800 mb-2">{office.city}</h4>
              <p className="text-gray-600 text-sm mb-1">{office.address}</p>
              <p className="text-gray-600 text-sm mb-1">
                <a href={`tel:${office.phone}`} className="hover:text-orange-500 transition-colors">
                  {office.phone}
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                <a href={`mailto:${office.email}`} className="hover:text-orange-500 transition-colors">
                  {office.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </FadeIn>
  );
}
