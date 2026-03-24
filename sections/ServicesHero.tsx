export default function ServicesHero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-6 bg-gradient-navy">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl text-white mb-4 sm:mb-6 mt-5">
            Comprehensive Semiconductor Solutions
          </h1>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
            From initial concept to final production, we provide end-to-end semiconductor
            services that drive innovation and deliver exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
}
