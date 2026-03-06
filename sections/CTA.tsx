import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-navy">
      <div className="container-custom text-center">
        <h2 className="heading-lg text-white mb-6">
          Ready to Transform Your Ideas into Reality?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our semiconductor solutions can drive your next innovation forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
          <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
