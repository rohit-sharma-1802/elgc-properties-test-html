import Link from "next/link";
import Image from "next/image";

export default function BuildingPropertyPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-soft">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              Premium Asset Care
            </span>
            <h1 className="text-5xl lg:text-6xl font-serif text-navy leading-tight mb-8">
              Intelligent <span className="italic text-gold">Building</span> Management
            </h1>
            <p className="text-lg text-navy/80 mb-10 max-w-xl leading-relaxed">
              Elevate your property assets with ELGC&apos;s data-driven management solutions. We blend luxury hospitality standards with industrial-grade technical precision.
            </p>
            <Link
              href="#services"
              className="px-8 py-4 bg-navy text-white rounded-full font-medium inline-flex items-center gap-3 hover:bg-navy/90 transition-all"
            >
              Explore Services →
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3bdef673d1-097d24d106530dd74afc.png"
              alt="Luxury high-rise commercial building"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif text-navy mb-12 text-center">
            Comprehensive Management Ecosystem
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: "Common Area Management", desc: "Pristine maintenance of lobbies, gardens, and shared amenities." },
              { title: "Security Services", desc: "Elite 24/7 surveillance and concierge-level access control." },
              { title: "Financial Admin", desc: "Transparent reporting, budgeting, and automated collection." },
              { title: "Vendor Management", desc: "Vetted specialist selection and strict SLA performance audits." },
              { title: "Sustainability", desc: "Energy optimization and green building certification support." },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-soft hover:bg-navy transition-all duration-500 hover:-translate-y-2"
              >
                <h3 className="text-xl font-serif mb-4 group-hover:text-white transition-colors text-navy">{item.title}</h3>
                <p className="text-sm text-navy/70 group-hover:text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
