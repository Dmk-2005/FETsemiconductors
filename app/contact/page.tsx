import type { Metadata } from "next";
import ContactHero from "@/sections/ContactHero";
import ContactForm from "@/sections/ContactForm";
import ContactInfo from "@/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | FET Semiconductors Pvt Ltd",
  description: "Get in touch with our team to discuss your semiconductor and engineering needs.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">Find Us</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border-2 border-gray-200 h-96 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-navy-800 rounded-full blur-3xl"></div>
            </div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-gray-600 text-xl font-semibold mb-2">Interactive Map</p>
              <p className="text-gray-500">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help bring your semiconductor project to life.
          </p>
          <a href="mailto:info@fetsemi.com" className="btn-primary">
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
