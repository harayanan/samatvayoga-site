import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { bio, teachings } from "@/data/about";
import { onlineClasses } from "@/data/online-classes";
import Image from "next/image";
import { BookOpen, Globe, Video, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
          {/* Sanskrit ornament */}
          <p className="text-saffron-600/80 font-serif text-lg md:text-xl italic tracking-widest mb-8">
            samatvam yoga uchyate
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-warm-900 tracking-wide leading-tight">
            Samatva
            <span className="text-saffron-600"> Yoga</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-warm-800/60 font-light max-w-2xl mx-auto leading-relaxed">
            The Yoga of Balance and Equanimity
          </p>

          <div className="mt-6 h-px w-24 bg-saffron-500/30 mx-auto" />

          <p className="mt-8 text-base md:text-lg text-warm-800/50 font-light max-w-xl mx-auto leading-relaxed">
            Teachings of Vedanta, the Bhagavad Gita, Upanishads & Sanskrit
            <br />
            by{" "}
            <span className="text-warm-900 font-medium">{bio.name}</span>
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-warm-900 text-cream-100 font-medium text-sm tracking-wide rounded-sm hover:bg-warm-800 transition-colors duration-300"
            >
              Discover the Teaching
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/teachings/online-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-saffron-600/30 text-saffron-800 font-medium text-sm tracking-wide rounded-sm hover:bg-saffron-50 transition-colors duration-300"
            >
              Join a Class
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-warm-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-[200px] font-serif text-cream-100 leading-none">
            &ldquo;
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream-100 font-light leading-relaxed italic">
            Yoga is skill in action, equanimity of mind, and the journey from
            the known to the unknown — from the darkness of ignorance to the
            light of Self-knowledge.
          </blockquote>
          <p className="mt-8 text-saffron-400/70 text-sm tracking-widest uppercase">
            From the Bhagavad Gita
          </p>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-[3/4] rounded-sm relative overflow-hidden">
                <Image
                  src="/images/siddhartha-hero.jpg"
                  alt="Shri Siddhartha Krishna teaching"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-4 border border-cream-100/20 rounded-sm" />
              </div>
            </div>

            <div>
              <SectionHeading
                title="The Teacher"
                subtitle={bio.title}
                centered={false}
              />
              <p className="mt-8 text-warm-800/70 leading-relaxed">
                {bio.fullBio[0]}
              </p>
              <p className="mt-4 text-warm-800/70 leading-relaxed">
                {bio.fullBio[1]}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-saffron-700 font-medium text-sm tracking-wide hover:text-saffron-800 transition-colors group"
              >
                Read full biography
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-cream-100/50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="The Teaching"
            subtitle="Samatva — The Yoga of Equanimity"
          />
          <p className="mt-12 text-warm-800/70 leading-relaxed text-center max-w-3xl mx-auto text-lg font-light">
            {teachings.philosophy}
          </p>
        </div>
      </section>

      {/* Teachings Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Explore the Teachings"
            subtitle="Multiple paths to engage with the wisdom tradition"
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Online Classes */}
            <Link
              href="/teachings/online-classes"
              className="group bg-cream-100/50 border border-cream-200 rounded-sm hover:border-saffron-200 hover:bg-saffron-50/30 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src="/images/online-course.jpg"
                  alt="Online yoga class"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center mb-4 group-hover:bg-saffron-200 transition-colors duration-300">
                  <Video size={16} className="text-saffron-700" />
                </div>
                <h3 className="font-serif text-xl text-warm-900 mb-3">
                  Online Classes
                </h3>
                <p className="text-sm text-warm-800/60 leading-relaxed mb-4">
                  Join live sessions on the Bhagavad Gita, Upanishads, Yoga
                  Sutras, Vishnu Sahasranama, and Sanskrit Grammar.
                </p>
                <p className="text-sm text-warm-800/40">
                  {onlineClasses.length} ongoing courses
                </p>
              </div>
            </Link>

            {/* Talks & Archive */}
            <Link
              href="/teachings/talks"
              className="group bg-cream-100/50 border border-cream-200 rounded-sm hover:border-saffron-200 hover:bg-saffron-50/30 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src="/images/siddhartha-hero.jpg"
                  alt="Shri Siddhartha Krishna speaking"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors duration-300">
                  <BookOpen size={16} className="text-sage-700" />
                </div>
                <h3 className="font-serif text-xl text-warm-900 mb-3">
                  Talks & Archive
                </h3>
                <p className="text-sm text-warm-800/60 leading-relaxed mb-4">
                  Past lectures, recorded discourses, and published writings on
                  Vedanta and Yoga philosophy.
                </p>
                <p className="text-sm text-warm-800/40">
                  Videos, articles & publications
                </p>
              </div>
            </Link>

            {/* Travels */}
            <Link
              href="/teachings/travels"
              className="group bg-cream-100/50 border border-cream-200 rounded-sm hover:border-saffron-200 hover:bg-saffron-50/30 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src="/images/class-scene.jpg"
                  alt="Yoga class at Patanjala Yoga Kendra"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center mb-4 group-hover:bg-cream-300 transition-colors duration-300">
                  <Globe size={16} className="text-saffron-800" />
                </div>
                <h3 className="font-serif text-xl text-warm-900 mb-3">
                  Travels & Workshops
                </h3>
                <p className="text-sm text-warm-800/60 leading-relaxed mb-4">
                  In-person workshops, retreats, and lecture series across India
                  and around the world.
                </p>
                <p className="text-sm text-warm-800/40">
                  Upcoming events & home base
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-warm-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Subjects of Study"
            subtitle="The core texts and disciplines that form the foundation of the teaching"
            light
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
            {teachings.subjects.map((subject) => (
              <div
                key={subject}
                className="p-6 border border-cream-200/10 rounded-sm text-center"
              >
                <p className="font-serif text-lg text-cream-100/90">
                  {subject}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-saffron-600/70 italic text-lg mb-4">
            Begin your journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-warm-900">
            Join a Class
          </h2>
          <p className="mt-6 text-warm-800/60 leading-relaxed max-w-xl mx-auto">
            All online classes are donation-based and open to sincere seekers.
            Connect via WhatsApp or email to register.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teachings/online-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-saffron-600 text-cream-50 font-medium text-sm tracking-wide rounded-sm hover:bg-saffron-700 transition-colors duration-300"
            >
              View Class Schedule
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-warm-800/20 text-warm-800 font-medium text-sm tracking-wide rounded-sm hover:bg-cream-100 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
