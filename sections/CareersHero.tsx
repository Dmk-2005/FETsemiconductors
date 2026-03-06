export default function CareersHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-navy">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl text-white mb-6">
            Join Our Team of Innovators
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Build your career at the forefront of semiconductor technology. 
            Work with brilliant minds on projects that shape the future.
          </p>
        </div>
      </div>
    </section>
  );
}
