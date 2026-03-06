import Link from "next/link";

export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-lg text-navy-800 mb-6">
              Pioneering Innovation in Semiconductor Technology
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over years of experience, FET Semiconductors has been at the forefront 
              of semiconductor innovation, delivering cutting-edge solutions to clients worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert engineers and researchers work tirelessly to push the boundaries 
              of what's possible, ensuring our clients stay ahead in an ever-evolving technological landscape.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-navy-700 to-navy-900 p-8 rounded-xl text-white">
              <div className="text-4xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-xl text-white mt-8">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Customer Support</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-xl text-white -mt-8">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-orange-100">Expert Engineers</div>
            </div>
            <div className="bg-gradient-to-br from-navy-700 to-navy-900 p-8 rounded-xl text-white">
              <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
