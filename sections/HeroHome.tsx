"use client";

import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="pt-32 pb-24 bg-gradient-navy">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Powering Innovation Through Advanced Semiconductor Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              FET Semiconductors delivers world-class chip design, manufacturing, and engineering services 
              that drive technological advancement across industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Request Consultation
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800 text-center">
                Explore Services
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Global Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-navy-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-navy-700 to-navy-900 rounded-xl flex items-center justify-center">
                <svg className="w-64 h-64 text-orange-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
