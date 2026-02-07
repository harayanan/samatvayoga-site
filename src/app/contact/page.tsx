import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { socialLinks, bio } from "@/data/about";
import { homeBase } from "@/data/travels";
import {
  Mail,
  MessageCircle,
  Youtube,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Samatva Yoga",
  description: `Get in touch with ${bio.name} for online classes, workshops, and guest teaching invitations.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-600/70 font-serif italic tracking-wide mb-4">
            Reach Out
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 tracking-wide">
            Contact
          </h1>
          <p className="mt-4 text-warm-800/60 text-lg font-light max-w-2xl mx-auto">
            For class registration, workshop enquiries, or guest teaching
            invitations.
          </p>
          <div className="mt-6 h-px w-16 bg-saffron-500/30 mx-auto" />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href={`mailto:${socialLinks.email}`}
              className="group p-8 bg-cream-100/50 border border-cream-200/80 rounded-sm hover:border-saffron-200/60 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center mb-5 group-hover:bg-saffron-200 transition-colors">
                <Mail size={20} className="text-saffron-700" />
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-2">Email</h3>
              <p className="text-saffron-700 text-sm font-medium">
                {socialLinks.email}
              </p>
              <p className="text-warm-800/40 text-xs mt-2">
                For all enquiries
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${socialLinks.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-cream-100/50 border border-cream-200/80 rounded-sm hover:border-sage-200/60 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors">
                <MessageCircle size={20} className="text-sage-700" />
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-2">
                WhatsApp
              </h3>
              <p className="text-sage-700 text-sm font-medium">
                {socialLinks.whatsapp}
              </p>
              <p className="text-warm-800/40 text-xs mt-2">
                For class registration
              </p>
            </a>

            {/* YouTube */}
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-cream-100/50 border border-cream-200/80 rounded-sm hover:border-saffron-200/60 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center mb-5 group-hover:bg-cream-300 transition-colors">
                <Youtube size={20} className="text-warm-800/70" />
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-2">
                YouTube
              </h3>
              <p className="text-warm-800/60 text-sm">
                Watch recorded lectures
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-saffron-600 mt-2">
                Visit channel <ExternalLink size={10} />
              </span>
            </a>

            {/* Location */}
            <div className="p-8 bg-cream-100/50 border border-cream-200/80 rounded-sm">
              <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center mb-5">
                <MapPin size={20} className="text-warm-800/70" />
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-2">
                Visit
              </h3>
              <p className="text-warm-800/60 text-sm leading-relaxed">
                {homeBase.name}
              </p>
              <p className="text-warm-800/40 text-xs mt-2 leading-relaxed">
                {homeBase.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-cream-100/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            title="Looking for something specific?"
          />
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/teachings/online-classes"
              className="px-6 py-3 bg-cream-50 border border-cream-200 text-warm-800 text-sm rounded-sm hover:border-saffron-200 transition-colors"
            >
              Online Class Schedule
            </Link>
            <Link
              href="/teachings/travels"
              className="px-6 py-3 bg-cream-50 border border-cream-200 text-warm-800 text-sm rounded-sm hover:border-saffron-200 transition-colors"
            >
              Upcoming Workshops
            </Link>
            <Link
              href="/teachings/talks"
              className="px-6 py-3 bg-cream-50 border border-cream-200 text-warm-800 text-sm rounded-sm hover:border-saffron-200 transition-colors"
            >
              Talks & Archive
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-cream-50 border border-cream-200 text-warm-800 text-sm rounded-sm hover:border-saffron-200 transition-colors"
            >
              About the Teacher
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
