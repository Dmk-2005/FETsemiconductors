export default function ContactHero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-6 bg-gradient-navy">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl text-white mb-4 sm:mb-6">
            Get in Touch
          </h1>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}
