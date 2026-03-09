import Link from "next/link";

export default function PropertyManagementPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Services</span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-6 leading-tight">
            Property <span className="italic text-gold">Management</span>
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            End-to-end property management from ELGC: from tenant placement and rent collection to maintenance, compliance, and reporting.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold/90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-navy mb-12 text-center">Our Management Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Tenant placement & lease management",
              "Rent collection & financial reporting",
              "Maintenance & repairs coordination",
              "RERA compliance & documentation",
              "Asset valuation & market analysis",
              "24/7 emergency response",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-soft border border-gray-100">
                <span className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-navy font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
