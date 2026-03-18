import FadeIn from "@/components/FadeIn";

export default function AboutUs() {
  return (
    <section className="py-10 lg:py-14 bg-gray-50">
      <div className="container-custom">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-8">
            About Us
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At FET Semiconductors, we provide end-to-end Physical Design and STA services,
            delivering timing-closed, power-optimized, and manufacturable silicon for advanced-node
            designs. Our signoff-driven methodology ensures reliable, high-performance SoCs with
            minimal risk.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
