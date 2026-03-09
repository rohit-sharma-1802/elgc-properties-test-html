import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[800px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png"
            alt="Luxury modern penthouse architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full text-gold font-medium text-sm">
              <span>Redefining Luxury Management</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Professional Property <span className="italic text-gold">Management</span> Solutions
            </h1>
            <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
              Maximize your asset value with our technology-driven, RERA-compliant property management services designed for elite global investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-white hover:text-navy text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:-translate-y-1 text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="/property-management"
                className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-navy">Specialized Real Estate Services</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 rounded-[2.5rem] bg-soft hover:bg-navy transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-gold/30">
              <div className="w-16 h-16 bg-white group-hover:bg-gold rounded-2xl flex items-center justify-center mb-8 transition-colors shadow-sm">
                <span className="text-gold group-hover:text-navy text-2xl font-bold">R</span>
              </div>
              <h4 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors">Residential Management</h4>
              <ul className="space-y-3 text-navy/80 group-hover:text-white/90 text-sm mb-6">
                <li>Tenant Screening</li>
                <li>24/7 Concierge</li>
                <li>Lease Optimization</li>
              </ul>
              <Link href="/residential-property" className="text-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More →
              </Link>
            </div>
            <div className="group p-10 rounded-[2.5rem] bg-soft hover:bg-navy transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-gold/30">
              <div className="w-16 h-16 bg-white group-hover:bg-gold rounded-2xl flex items-center justify-center mb-8 transition-colors shadow-sm">
                <span className="text-gold group-hover:text-navy text-2xl font-bold">C</span>
              </div>
              <h4 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors">Commercial Assets</h4>
              <ul className="space-y-3 text-navy/80 group-hover:text-white/90 text-sm mb-6">
                <li>Asset Appreciation</li>
                <li>Facilities Management</li>
                <li>ESG Reporting</li>
              </ul>
              <Link href="/commercial-property" className="text-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More →
              </Link>
            </div>
            <div className="group p-10 rounded-[2.5rem] bg-soft hover:bg-navy transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-gold/30">
              <div className="w-16 h-16 bg-white group-hover:bg-gold rounded-2xl flex items-center justify-center mb-8 transition-colors shadow-sm">
                <span className="text-gold group-hover:text-navy text-2xl font-bold">M</span>
              </div>
              <h4 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors">Market Analysis</h4>
              <ul className="space-y-3 text-navy/80 group-hover:text-white/90 text-sm mb-6">
                <li>Market Forecasting</li>
                <li>Investment Advisory</li>
                <li>Valuation Reports</li>
              </ul>
              <Link href="/property-management" className="text-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to elevate your property portfolio?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Get in touch with ELGC for a personalized consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white px-10 py-4 rounded-full font-semibold hover:bg-gold/90 transition-all shadow-lg shadow-gold/20"
          >
            Get Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
