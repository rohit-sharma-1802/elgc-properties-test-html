import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "market-outlook-2025",
    title: "Market Outlook 2025: Prime Locations & Yield Trends",
    excerpt: "Key insights on where to invest and what to expect in residential and commercial segments.",
    date: "March 2025",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png",
  },
  {
    slug: "rera-compliance-guide",
    title: "RERA Compliance: A Practical Guide for Owners",
    excerpt: "Stay compliant with the latest regulations and avoid common pitfalls in property documentation.",
    date: "February 2025",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png",
  },
  {
    slug: "luxury-tenant-experience",
    title: "Elevating the Luxury Tenant Experience",
    excerpt: "How ELGC delivers concierge-level service and retention in high-end residential assets.",
    date: "January 2025",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-soft">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Insights</span>
          <h1 className="text-5xl md:text-6xl font-serif text-navy mt-4 mb-6 leading-tight">
            Blog & <span className="italic text-gold">Insights</span>
          </h1>
          <p className="text-lg text-navy/80 max-w-2xl">
            Market insights, property guides, and expert perspectives from the ELGC team.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full">
                    {post.date}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-serif text-navy mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-navy/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gold font-semibold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
