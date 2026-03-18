"use client";

import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, engineers: 0, satisfaction: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { projects: 500, clients: 50, engineers: 200, satisfaction: 99.9 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        engineers: Math.floor(targets.engineers * progress),
        satisfaction: parseFloat((targets.satisfaction * progress).toFixed(1)),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Cutting-Edge Technology",
      description: "Access to the latest semiconductor design tools and advanced process nodes.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "On-Time Delivery",
      description: "Proven track record of meeting deadlines and exceeding client expectations.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Rigorous testing and validation processes ensure the highest quality standards.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Highly skilled engineers with decades of combined semiconductor experience.",
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
            Why Choose FET Semiconductors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading expertise and proven results that set us apart
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            <div className="text-5xl font-bold text-orange-500 mb-2">{counts.projects}+</div>
            <div className="text-navy-800 font-semibold">Projects Completed</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl">
            <div className="text-5xl font-bold text-navy-700 mb-2">{counts.clients}+</div>
            <div className="text-navy-800 font-semibold">Global Clients</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            <div className="text-5xl font-bold text-orange-500 mb-2">{counts.engineers}+</div>
            <div className="text-navy-800 font-semibold">Expert Engineers</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl">
            <div className="text-5xl font-bold text-navy-700 mb-2">{counts.satisfaction}%</div>
            <div className="text-navy-800 font-semibold">Client Satisfaction</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full text-orange-500 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
