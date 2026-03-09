import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-soft">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">About ELGC</span>
          <h1 className="text-5xl md:text-6xl font-serif text-navy mt-4 mb-6 leading-tight">
            Who We <span className="italic text-gold">Are</span>
          </h1>
          <p className="text-lg text-navy/80 max-w-2xl">
            ELGC Properties delivers premium property management and real estate services with integrity, innovation, and a commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Story</h2>
            <h3 className="text-3xl font-serif text-navy mb-6">Redefining property management through innovation</h3>
            <p className="text-navy/80 leading-relaxed mb-6">
              We blend luxury hospitality standards with data-driven operations to maximize asset value and tenant satisfaction. Our team brings decades of experience across residential, commercial, and mixed-use assets.
            </p>
            <p className="text-navy/80 leading-relaxed">
              ELGC is committed to RERA compliance, transparent reporting, and long-term partnerships with property owners and investors worldwide.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png"
              alt="ELGC team and properties"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-navy mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-100">
              <h4 className="text-xl font-serif text-navy mb-2">Integrity</h4>
              <p className="text-navy/70 text-sm">Transparent dealings and ethical practices in every engagement.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100">
              <h4 className="text-xl font-serif text-navy mb-2">Innovation</h4>
              <p className="text-navy/70 text-sm">Technology and process excellence to drive performance.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100">
              <h4 className="text-xl font-serif text-navy mb-2">Excellence</h4>
              <p className="text-navy/70 text-sm">Luxury standards in service delivery and asset care.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
