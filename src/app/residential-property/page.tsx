import Link from "next/link";
import Image from "next/image";

export default function ResidentialPropertyPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-soft">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Residential</span>
            <h1 className="text-5xl md:text-6xl font-serif text-navy mt-4 mb-6 leading-tight">
              Residential <span className="italic text-gold">Management</span>
            </h1>
            <p className="text-lg text-navy/80 max-w-xl leading-relaxed">
              Full-service residential property management from ELGC: tenant screening, 24/7 concierge, lease optimization, and maintenance excellence.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 px-8 py-4 bg-navy text-white rounded-full font-semibold hover:bg-navy/90 transition-all"
            >
              Request Proposal
            </Link>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png"
              alt="Residential property"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-navy mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-soft border border-gray-100">
              <h4 className="text-xl font-serif text-navy mb-2">Tenant Screening</h4>
              <p className="text-navy/70 text-sm">Rigorous vetting and background checks for quality tenants.</p>
            </div>
            <div className="p-8 rounded-2xl bg-soft border border-gray-100">
              <h4 className="text-xl font-serif text-navy mb-2">24/7 Concierge</h4>
              <p className="text-navy/70 text-sm">Round-the-clock support and emergency response.</p>
            </div>
            <div className="p-8 rounded-2xl bg-soft border border-gray-100">
              <h4 className="text-xl font-serif text-navy mb-2">Lease Optimization</h4>
              <p className="text-navy/70 text-sm">Market-aligned pricing and lease structuring.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
