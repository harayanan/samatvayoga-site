import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { bio, teachings } from "@/data/about";

export const metadata: Metadata = {
  title: "About Shri Siddhartha Krishna | Samatva Yoga",
  description: bio.shortBio,
};

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-600/70 font-serif italic tracking-wide mb-4">
            The Teacher
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 tracking-wide">
            {bio.name}
          </h1>
          <p className="mt-4 text-warm-800/60 text-lg font-light">
            {bio.title}
          </p>
          <div className="mt-6 h-px w-16 bg-saffron-500/30 mx-auto" />
        </div>
      </section>

      {/* Portrait placeholder and short bio */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Portrait */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-sm relative overflow-hidden sticky top-28">
                <Image
                  src="/images/siddhartha-hero.jpg"
                  alt="Shri Siddhartha Krishna"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-3 border border-cream-100/20 rounded-sm" />
              </div>
            </div>

            {/* Biography */}
            <div className="md:col-span-3">
              <div className="prose-custom">
                {bio.fullBio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-warm-800/75 leading-relaxed mb-6 text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 bg-warm-900">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Samatva — The Teaching"
            subtitle="The Yoga of Balance and Equanimity"
            light
          />
          <div className="mt-12 space-y-8">
            <p className="text-cream-200/70 leading-relaxed text-center text-lg font-light">
              {teachings.philosophy}
            </p>
            <p className="text-cream-200/60 leading-relaxed text-center">
              {teachings.approach}
            </p>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Subjects of Study"
            subtitle="The core texts and disciplines that illuminate the path"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {teachings.subjects.map((subject) => (
              <div
                key={subject}
                className="p-6 bg-cream-100/60 border border-cream-200/80 rounded-sm flex items-center gap-4"
              >
                <div className="w-2 h-2 bg-saffron-400 rounded-full shrink-0" />
                <p className="font-serif text-lg text-warm-900">{subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tradition */}
      <section className="py-24 bg-cream-100/50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="Lineage & Tradition" />
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            <div className="bg-cream-50 border border-cream-200/60 rounded-sm overflow-hidden">
              <div className="p-8">
                <h3 className="font-serif text-xl text-warm-900 mb-4">
                  Kailas Ashram Brahma Vidya Pitha
                </h3>
                <p className="text-sm text-warm-800/60 leading-relaxed">
                  A venerable monastery in Rishikesh dedicated to the teaching of
                  Vedanta, with historical connections to Swami Vivekananda, Swami
                  Ramatirtha, Swami Tapovan, and Swami Sivananda.
                </p>
              </div>
            </div>
            <div className="bg-cream-50 border border-cream-200/60 rounded-sm overflow-hidden">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/offline-course.jpg"
                  alt="Teaching at Patanjala Yoga Kendra"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl text-warm-900 mb-4">
                  Patanjala Yoga Kendra
                </h3>
                <p className="text-sm text-warm-800/60 leading-relaxed">
                  An authorized Iyengar Yoga Centre established in 1993 on the
                  banks of the holy River Ganga in Rishikesh, founded by Shrimati
                  Usha Devi.
                </p>
              </div>
            </div>
            <div className="bg-cream-50 border border-cream-200/60 rounded-sm overflow-hidden">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/light-room.jpg"
                  alt="B.K.S. Iyengar Guruji"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl text-warm-900 mb-4">
                  The Iyengar Yoga Tradition
                </h3>
                <p className="text-sm text-warm-800/60 leading-relaxed">
                  Rooted in the method of B.K.S. Iyengar Guruji, firmly based in
                  the ancient Indian tradition of Yoga as defined in the Yoga
                  Sutras of Patanjali.
                </p>
              </div>
            </div>
            <div className="bg-cream-50 border border-cream-200/60 rounded-sm overflow-hidden">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/teacher-1.jpg"
                  alt="Shrimati Usha Devi teaching"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl text-warm-900 mb-4">
                  Shrimati Usha Devi
                </h3>
                <p className="text-sm text-warm-800/60 leading-relaxed">
                  His mother and first teacher, an advanced Iyengar Yoga
                  practitioner who began teaching him the Bhagavad Gita at the
                  age of four.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
