export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-navy">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl text-white mb-6">
            About FET Semiconductors
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            For over 25 years, we've been pioneering innovation in semiconductor technology, 
            delivering world-class solutions that power the future of electronics.
          </p>
        </div>
      </div>
    </section>
  );
}
