"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Engineering the Future of
              <span className="block text-orange-400 mt-2">Semiconductor Technology</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Delivering cutting-edge semiconductor design, manufacturing, and engineering solutions 
              that power the world's most innovative products.
            </p>
          </div>

          <div className="relative max-w-xl">
            <div className="bg-gradient-to-br from-orange-500/20 to-navy-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-navy-700 to-navy-900 rounded-xl flex items-center justify-center">
                <svg className="w-60 h-60 text-orange-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
