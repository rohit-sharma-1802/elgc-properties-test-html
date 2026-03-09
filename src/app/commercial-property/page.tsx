import Link from "next/link";
import Image from "next/image";

export default function CommercialPropertyPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Commercial</span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-6 leading-tight">
            Commercial <span className="italic text-gold">Assets</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl leading-relaxed">
            Bespoke property management solutions for Class-A commercial developments, focusing on operational excellence and tenant retention.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold/90 transition-all"
          >
            Discuss Your Property
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-navy mb-12 text-center">Commercial Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-soft border border-gray-100 hover:border-gold/30 transition-colors">
              <h4 className="text-xl font-serif text-navy mb-2">Asset Appreciation</h4>
              <p className="text-navy/70 text-sm">Strategic initiatives to enhance property value and NOI.</p>
            </div>
            <div className="p-8 rounded-2xl bg-soft border border-gray-100 hover:border-gold/30 transition-colors">
              <h4 className="text-xl font-serif text-navy mb-2">Facilities Management</h4>
              <p className="text-navy/70 text-sm">Elite maintenance and building systems oversight.</p>
            </div>
            <div className="p-8 rounded-2xl bg-soft border border-gray-100 hover:border-gold/30 transition-colors">
              <h4 className="text-xl font-serif text-navy mb-2">ESG Reporting</h4>
              <p className="text-navy/70 text-sm">Sustainability metrics and compliance reporting.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
