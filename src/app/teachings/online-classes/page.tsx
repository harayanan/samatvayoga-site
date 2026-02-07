import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { onlineClasses, registrationInfo } from "@/data/online-classes";
import { Clock, Calendar, Globe, MessageCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Classes | Samatva Yoga",
  description:
    "Join live online classes on the Bhagavad Gita, Upanishads, Yoga Sutras, Sanskrit, and Vedanta with Shri Siddhartha Krishna.",
};

export default function OnlineClassesPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-600/70 font-serif italic tracking-wide mb-4">
            Teachings
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 tracking-wide">
            Online Classes
          </h1>
          <p className="mt-4 text-warm-800/60 text-lg font-light max-w-2xl mx-auto">
            Live sessions on the great texts of the Vedantic tradition, open to
            sincere seekers everywhere.
          </p>
          <div className="mt-6 h-px w-16 bg-saffron-500/30 mx-auto" />
        </div>
      </section>

      {/* Classes */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {onlineClasses.map((cls) => (
              <div
                key={cls.id}
                className="p-8 md:p-10 bg-cream-100/40 border border-cream-200/80 rounded-sm hover:border-saffron-200/60 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-warm-900">
                      {cls.title}
                    </h2>
                    <p className="text-saffron-700/70 font-serif italic mt-1">
                      {cls.subtitle}
                    </p>
                  </div>
                  {cls.recordingsAvailable && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-100 text-sage-700 text-xs font-medium rounded-full whitespace-nowrap">
                      Recordings available
                    </span>
                  )}
                </div>

                <p className="text-warm-800/65 leading-relaxed mb-6">
                  {cls.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-warm-800/50">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={14} className="text-saffron-600/60" />
                    {cls.schedule}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={14} className="text-saffron-600/60" />
                    {cls.time}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Globe size={14} className="text-saffron-600/60" />
                    {cls.language}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-24 bg-warm-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Join a Class"
            subtitle={registrationInfo.note}
            light
          />
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`https://wa.me/${registrationInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sage-700 text-cream-100 font-medium text-sm tracking-wide rounded-sm hover:bg-sage-800 transition-colors duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp: {registrationInfo.whatsapp}
            </a>
            <a
              href={`mailto:${registrationInfo.email}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-cream-200/20 text-cream-200 font-medium text-sm tracking-wide rounded-sm hover:bg-cream-200/5 transition-colors duration-300"
            >
              <Mail size={18} />
              {registrationInfo.email}
            </a>
          </div>
          <p className="mt-8 text-cream-200/40 text-sm italic">
            All classes are donation-based
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
