"use client";

import FadeIn from "@/components/FadeIn";

export default function ContactInfo() {
  const reasons = [
    {
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Response",
      desc: "We respond to all inquiries within 24 business hours.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "NDA Protected",
      desc: "All discussions are covered under strict confidentiality agreements.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Dedicated Team",
      desc: "A dedicated point of contact assigned to your project from day one.",
    },
  ];

  const contacts = [
    {
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "info@fetsemi.com",
      href: "mailto:info@fetsemi.com",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91-9014717430",
      href: "tel:+91-9014717430",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Business Hours",
      value: "Mon – Fri, 8 AM – 6 PM PST",
      href: null,
    },
  ];

  return (
    <FadeIn delay={0.1}>
      <div className="flex flex-col gap-6 h-full">

        {/* Contact details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-800 mb-5">Contact Details</h2>
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-navy-800 font-medium text-sm hover:text-orange-500 transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-navy-800 font-medium text-sm">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why work with us */}
        <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-6 sm:p-8 text-white flex-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-bold mb-5">Why Work With Us</h3>
            <div className="space-y-4">
              {reasons.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{r.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </FadeIn>
  );
}
