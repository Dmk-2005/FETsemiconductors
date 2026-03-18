"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Chip Design",
      description: "Advanced semiconductor design services from concept to tape-out, utilizing cutting-edge EDA tools and methodologies.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Power Optimization",
      description: "Advanced power management solutions to maximize efficiency and minimize energy consumption.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Verification",
      description: "Rigorous verification methodologies using industry-standard tools and custom validation frameworks.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn className="text-center mb-8">
          <h2 className="heading-lg text-navy-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive semiconductor solutions tailored to meet your specific needs
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-xl border border-gray-200 card-hover h-full">
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-navy-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
