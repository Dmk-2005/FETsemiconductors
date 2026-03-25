import FadeIn from "@/components/FadeIn";

export default function ContactHero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-14 bg-gradient-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-orange-500/20 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Let's Connect
          </span>
          <h1 className="heading-xl text-white mb-4 sm:mb-5">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
            Have a project in mind? Our team of semiconductor experts is ready to help you bring your vision to life.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
