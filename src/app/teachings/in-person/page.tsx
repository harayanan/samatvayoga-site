import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import {
  intensiveCourses,
  regularClasses,
  philosophyCourse,
  facilityHours,
  internationalWorkshops,
  summerClosure,
  homeBase,
} from "@/data/travels";
import { MapPin, Calendar, Clock, Mail, Users, Info, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "In-Person Workshops | Samatva Yoga",
  description:
    "Intensive yoga courses, regular classes in Rishikesh, and international workshops by Shri Siddhartha Krishna and Usha Devi.",
};

export default function InPersonPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/yoga-studio.jpg"
            alt=""
            className="w-full h-full object-cover opacity-12"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-100/80 via-cream-50/90 to-cream-50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-600/70 font-serif italic tracking-wide mb-4">
            Teachings
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 tracking-wide">
            In-Person Workshops
          </h1>
          <p className="mt-4 text-warm-800/60 text-lg font-light max-w-2xl mx-auto">
            Intensive courses and regular classes at {homeBase.name}, Rishikesh
            — plus international workshops across the world.
          </p>
          <div className="mt-6 h-px w-16 bg-saffron-500/30 mx-auto" />
        </div>
      </section>

      {/* Intensive Yoga Courses */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            title={intensiveCourses.title}
            subtitle={`with ${intensiveCourses.instructor} \u2022 ${intensiveCourses.location}`}
          />
          <div className="mt-12 grid md:grid-cols-5 gap-8 items-start">
            {/* Image */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] relative rounded-sm overflow-hidden">
                <Image
                  src={intensiveCourses.image}
                  alt="Intensive Yoga Course at Patanjala Yoga Kendra"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-3">
              {/* Schedule grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {intensiveCourses.sessions.map((session) => (
                  <div
                    key={session.dates}
                    className={`p-4 rounded-sm border text-center ${
                      session.status === "completed"
                        ? "bg-cream-100/40 border-cream-200/40 opacity-50"
                        : session.status === "ongoing"
                          ? "bg-sage-50 border-sage-200/60"
                          : "bg-saffron-50/50 border-saffron-200/60"
                    }`}
                  >
                    <p className="font-serif text-sm text-warm-900">
                      {session.dates}
                    </p>
                    <p
                      className={`text-xs mt-1 capitalize ${
                        session.status === "completed"
                          ? "text-warm-800/40"
                          : session.status === "ongoing"
                            ? "text-sage-700"
                            : "text-saffron-700"
                      }`}
                    >
                      {session.status}
                    </p>
                  </div>
                ))}
              </div>

              {/* Info cards */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 text-sm text-warm-800/65">
                  <Users size={16} className="text-saffron-600 mt-0.5 shrink-0" />
                  <span>{intensiveCourses.requirement}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-warm-800/65">
                  <Info size={16} className="text-saffron-600 mt-0.5 shrink-0" />
                  <span>{intensiveCourses.pricing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Classes at Rishikesh */}
      <section className="py-20 bg-cream-100/50">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            title="Regular Classes"
            subtitle={`${homeBase.name}, Rishikesh`}
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularClasses.map((cls) => (
              <div
                key={cls.title}
                className="bg-cream-50 border border-cream-200/60 rounded-sm overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="font-serif text-lg text-warm-900 mb-1">
                    {cls.title}
                  </h3>
                  <p className="text-xs text-saffron-600 mb-4">
                    {cls.instructor}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-warm-800/60 mb-4">
                    <Clock size={14} className="text-sage-600 shrink-0" />
                    <span>{cls.schedule}</span>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-1.5 mb-4">
                    {cls.pricing.map((p) => (
                      <div
                        key={p.sessions}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-warm-800/50">{p.sessions}</span>
                        <span className="text-warm-900 font-medium">
                          {p.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {cls.note && (
                    <p className="text-xs text-warm-800/40 border-t border-cream-200/60 pt-3">
                      {cls.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Philosophy Course + Facility Hours */}
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {/* Philosophy Course */}
            <div className="bg-cream-50 border border-cream-200/60 rounded-sm p-6">
              <div className="flex items-start gap-3 mb-3">
                <BookOpen size={16} className="text-saffron-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-warm-900">
                    {philosophyCourse.title}
                  </h3>
                  <p className="text-xs text-saffron-600">
                    {philosophyCourse.instructor}
                  </p>
                </div>
              </div>
              <p className="text-sm text-warm-800/60 mb-2">
                {philosophyCourse.topics}
              </p>
              <p className="text-sm text-warm-800/65">
                {philosophyCourse.pricing}
              </p>
              <p className="text-xs text-warm-800/40 mt-3 italic">
                {philosophyCourse.status}
              </p>
            </div>

            {/* Facility Hours */}
            <div className="bg-cream-50 border border-cream-200/60 rounded-sm p-6">
              <h3 className="font-serif text-lg text-warm-900 mb-4">
                Facility Hours
              </h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-2.5 text-warm-800/60">
                  <Clock size={14} className="text-sage-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-warm-800/70 font-medium">Self-Practice</p>
                    <p>{facilityHours.selfPractice}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-warm-800/60">
                  <Info size={14} className="text-sage-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-warm-800/70 font-medium">Office Hours</p>
                    <p>Morning: {facilityHours.officeMorning}</p>
                    <p>Evening: {facilityHours.officeEvening}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-warm-800/40 text-center">
            <MapPin size={12} className="inline mr-1" />
            {homeBase.address}
          </p>
        </div>
      </section>

      {/* International Workshops 2026 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            title="International Workshops 2026"
            subtitle="Workshops and intensives across the world"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {internationalWorkshops.map((ws) => (
              <div
                key={ws.id}
                className="bg-cream-50 border border-cream-200/60 rounded-sm overflow-hidden hover:border-saffron-200/60 transition-colors"
              >
                {ws.image && (
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={ws.image}
                      alt={`${ws.city}, ${ws.country} workshop`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-serif text-base text-warm-900">
                    {ws.city}
                  </h3>
                  <p className="text-xs text-warm-800/50 mt-0.5">
                    {ws.country}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-sm text-saffron-700">
                    <Calendar size={13} />
                    <span>{ws.dates}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summer closure notice */}
          <div className="mt-8 p-4 bg-saffron-50/50 border border-saffron-200/40 rounded-sm text-center">
            <p className="text-sm text-warm-800/60">
              <Info size={14} className="inline mr-1.5 text-saffron-600" />
              {summerClosure.note}: {summerClosure.dates}
            </p>
          </div>
        </div>
      </section>

      {/* Guest Invitation CTA */}
      <section className="py-24 bg-warm-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Invite as Guest Teacher"
            subtitle="Shri Siddhartha Krishna accepts guest instructor invitations from yoga centres and spiritual communities worldwide."
            light
          />
          <a
            href="mailto:info@iyengaryoga.in"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-saffron-600 text-cream-50 font-medium text-sm tracking-wide rounded-sm hover:bg-saffron-700 transition-colors duration-300"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
