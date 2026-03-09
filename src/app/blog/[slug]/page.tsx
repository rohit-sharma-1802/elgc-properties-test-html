import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; date: string; excerpt: string; body: string; image: string }
> = {
  "market-outlook-2025": {
    title: "Market Outlook 2025: Prime Locations & Yield Trends",
    date: "March 2025",
    excerpt: "Key insights on where to invest and what to expect.",
    body: "The property market continues to show resilience in prime corridors. We expect sustained demand for well-managed residential and commercial assets, with yield compression in core locations. ELGC recommends focusing on RERA-compliant projects and assets with strong operational track records.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png",
  },
  "rera-compliance-guide": {
    title: "RERA Compliance: A Practical Guide for Owners",
    date: "February 2025",
    excerpt: "Stay compliant with the latest regulations.",
    body: "RERA compliance is non-negotiable for property owners and managers. From registration to ongoing disclosures, we outline the key steps and documentation required. ELGC supports clients with end-to-end compliance and audit readiness.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png",
  },
  "luxury-tenant-experience": {
    title: "Elevating the Luxury Tenant Experience",
    date: "January 2025",
    excerpt: "How ELGC delivers concierge-level service.",
    body: "Luxury tenants expect seamless service, from move-in to maintenance and beyond. We share how ELGC combines technology and human touch to deliver a premium experience that drives retention and referrals.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5621871cb3-72ca87149ebff064964c.png",
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-soft">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-gold font-semibold text-sm hover:underline mb-6 inline-block">
            ← Back to Insights
          </Link>
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">{post.date}</span>
          <h1 className="text-4xl md:text-5xl font-serif text-navy mt-2 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-navy/80">{post.excerpt}</p>
        </div>
      </section>
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-10">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <div className="prose prose-navy max-w-none">
            <p className="text-navy/90 leading-relaxed text-lg">{post.body}</p>
          </div>
        </div>
      </section>
    </>
  );
}
