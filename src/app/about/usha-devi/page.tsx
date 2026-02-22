import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { ushaDeviBio } from "@/data/about";

export const metadata: Metadata = {
  title: "Shrimati Usha Devi — Patanjala Yoga Kendra | Samatva Yoga",
  description: ushaDeviBio.intro,
};

export default function UshaDeviPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-600/70 font-serif italic tracking-wide mb-4">
            {ushaDeviBio.role}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 tracking-wide">
            {ushaDeviBio.name}
          </h1>
          <div className="mt-6 h-px w-16 bg-saffron-500/30 mx-auto" />
        </div>
      </section>

      {/* Photo + Bio */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-sm relative overflow-hidden sticky top-28">
                <Image
                  src="/images/teacher-1.jpg"
                  alt="Shrimati Usha Devi teaching"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-3 border border-cream-100/20 rounded-sm" />
              </div>
            </div>

            {/* Bio content */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-warm-800/75 leading-relaxed text-base">
                {ushaDeviBio.intro}
              </p>
              <p className="text-warm-800/75 leading-relaxed text-base">
                {ushaDeviBio.teachingStyle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Story */}
      <section className="py-24 bg-cream-100/50">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            title="The Accidents & Recovery"
            subtitle="A remarkable journey of healing through Yoga"
          />
          <div className="mt-12 space-y-6">
            <p className="text-warm-800/75 leading-relaxed text-base">
              {ushaDeviBio.recovery.summary}
            </p>
            <p className="text-warm-800/75 leading-relaxed text-base">
              {ushaDeviBio.recovery.secondAccident}
            </p>
            <blockquote className="border-l-2 border-saffron-400 pl-6 my-8">
              <p className="text-warm-800/70 leading-relaxed italic text-base">
                {ushaDeviBio.recovery.ownWords}
              </p>
            </blockquote>
            <p className="text-warm-800/75 leading-relaxed text-base">
              {ushaDeviBio.recovery.reflection}
            </p>
          </div>
        </div>
      </section>

      {/* Times of India */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            title={`\u201C${ushaDeviBio.timesOfIndia.headline}\u201D`}
            subtitle={ushaDeviBio.timesOfIndia.source}
          />
          <div className="mt-12 space-y-6">
            {ushaDeviBio.timesOfIndia.text.map((para, i) => (
              <p
                key={i}
                className="text-warm-800/70 leading-relaxed text-base"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Saga Health Quote */}
      <section className="py-16 bg-warm-900">
        <div className="max-w-3xl mx-auto px-6">
          <blockquote className="text-center">
            <p className="text-cream-200/80 leading-relaxed italic text-lg font-light">
              &ldquo;{ushaDeviBio.sagaQuote.text}&rdquo;
            </p>
            <footer className="mt-4 text-xs text-cream-200/40">
              — {ushaDeviBio.sagaQuote.source}
            </footer>
          </blockquote>
        </div>
      </section>

      <Footer />
    </>
  );
}
