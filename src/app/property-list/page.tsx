import Link from "next/link";
import Image from "next/image";

export default function PropertyListPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-6 leading-tight">
            Property <span className="italic text-gold">Listings</span>
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Explore our curated selection of residential and commercial properties under ELGC management.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png"
                    alt={`Property ${i}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full">
                    {i % 2 === 0 ? "Commercial" : "Residential"}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-navy mb-2">Premium Property {i}</h3>
                  <p className="text-navy/70 text-sm mb-4">Prime location with full management services.</p>
                  <Link
                    href="/contact"
                    className="text-gold font-semibold text-sm hover:underline"
                  >
                    Enquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-navy/60 mt-12 max-w-2xl mx-auto">
            Our four-step bespoke acquisition process ensures a seamless transition into your new property. Contact us for exclusive listings and market reports.
          </p>
        </div>
      </section>
    </>
  );
}
