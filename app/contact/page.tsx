import type { Metadata } from "next";
import ContactHero from "@/sections/ContactHero";
import ContactForm from "@/sections/ContactForm";
import ContactInfo from "@/sections/ContactInfo";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us | FET Semiconductors Pvt Ltd",
  description: "Get in touch with our team to discuss your semiconductor and engineering needs.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Main form + info grid */}
      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-10 lg:py-14 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <FadeIn className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-7 max-w-xl mx-auto">
              Let's discuss how we can help bring your semiconductor project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://mail.google.com/mail/?view=cm&to=info@fetsemi.com&su=Project%20Inquiry%20-%20FET%20Semiconductors" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-40 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a href="tel:+14085550100" className="inline-flex items-center justify-center gap-2 w-40 border-2 border-white text-white hover:bg-white hover:text-navy-800 font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
