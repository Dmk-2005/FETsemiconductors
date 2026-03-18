import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-10 lg:py-14 bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Semiconductor Vision into Reality?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Partner with FET Semiconductors for cutting-edge solutions that drive innovation. 
            Our expert team is ready to bring your next project to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link 
              href="/contact" 
              className="bg-orange-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-800 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div>
              <div className="text-orange-400 font-bold text-3xl mb-2">24/7</div>
              <div className="text-gray-300">Technical Support</div>
            </div>
            <div>
              <div className="text-orange-400 font-bold text-3xl mb-2">48hrs</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div>
              <div className="text-orange-400 font-bold text-3xl mb-2">100%</div>
              <div className="text-gray-300">Confidentiality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
