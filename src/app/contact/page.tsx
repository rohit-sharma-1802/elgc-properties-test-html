"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 mb-6 leading-tight">
            <span className="italic text-gold">Contact</span> ELGC
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Whether you&apos;re an investor, owner, or tenant—we&apos;re here to help. Reach out for a consultation or general enquiry.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-soft">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif text-navy mb-6">Contact Details</h2>
            <ul className="space-y-6 text-navy/80">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 font-bold">
                  @
                </span>
                <div>
                  <p className="font-semibold text-navy">Email</p>
                  <a href="mailto:info@elgcproperties.com" className="hover:text-gold transition-colors">
                    info@elgcproperties.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 font-bold text-sm">
                  📞
                </span>
                <div>
                  <p className="font-semibold text-navy">Phone</p>
                  <a href="tel:+912212345678" className="hover:text-gold transition-colors">
                    +91 22 1234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 font-bold text-sm">
                  📍
                </span>
                <div>
                  <p className="font-semibold text-navy">Office</p>
                  <p>ELGC Properties<br />Prime Business District<br />Mumbai 400 001</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-serif text-navy mb-6">Send a Message</h2>
            {submitted ? (
              <div className="py-12 text-center">
                <p className="text-gold font-semibold text-lg mb-2">Thank you for reaching out.</p>
                <p className="text-navy/70 text-sm">
                  We&apos;ll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white"
                  >
                    <option>General Enquiry</option>
                    <option>Property Management</option>
                    <option>Investment Advisory</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white py-4 rounded-full font-semibold hover:bg-gold/90 transition-all shadow-lg shadow-gold/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
