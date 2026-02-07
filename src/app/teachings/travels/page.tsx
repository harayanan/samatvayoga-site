import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { travelEvents, homeBase } from "@/data/travels";
import {
  MapPin,
  Calendar,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Travels & Workshops | Samatva Yoga",
  description:
    "In-person workshops, retreats, and lecture series by Shri Siddhartha Krishna across India and around the world.",
};

const statusStyles = {
  upcoming: "bg-saffron-100 text-saffron-800",
  ongoing: "bg-sage-100 text-sage-800",
  completed: "bg-cream-200 text-warm-800/50",
};

const typeLabels = {
  workshop: "Workshop",
  retreat: "Retreat",
  "lecture-series": "Lecture Series",
  intensive: "Intensive",
};

export default function TravelsPage() {
  const upcoming = travelEvents.filter((e) => e.status === "upcoming");
  const past = travelEvents.filter((e) => e.status === "completed");

  return (
    <>
      <Header />

      {/* Hero with image */}
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
            Travels & Workshops
          </h1>
          <p className="mt-4 text-warm-800/60 text-lg font-light max-w-2xl mx-auto">
            In-person sessions, intensives, and workshops — carrying the
            teachings from Rishikesh to seekers across the world.
          </p>
          <div className="mt-6 h-px w-16 bg-saffron-500/30 mx-auto" />
        </div>
      </section>

      {/* Home Base */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-sage-50/50 border border-sage-200/40 rounded-sm overflow-hidden">
            <div className="aspect-[21/9] relative">
              <img
                src="/images/yoga-studio.jpg"
                alt="Patanjala Yoga Kendra, Rishikesh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <MapPin size={20} className="text-sage-600 mt-1 shrink-0" />
              <div>
                <h2 className="font-serif text-2xl text-warm-900">
                  {homeBase.name}
                </h2>
                <p className="text-warm-800/50 text-sm mt-1">Home Centre</p>
              </div>
            </div>
            <p className="text-warm-800/65 leading-relaxed mb-6 ml-9">
              {homeBase.description}
            </p>
            <div className="ml-9 space-y-2">
              {homeBase.schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center gap-3 text-sm text-warm-800/50"
                >
                  <Calendar size={14} className="text-sage-500/60" />
                  <span className="font-medium text-warm-800/70">
                    {item.day}:
                  </span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
            <p className="ml-9 mt-4 text-xs text-warm-800/40">
              {homeBase.address}
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcoming.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading
              title="Upcoming Events"
              subtitle="Workshops and intensives open for registration"
            />
            <div className="mt-12 space-y-6">
              {upcoming.map((event) => (
                <div
                  key={event.id}
                  className="p-8 bg-cream-100/40 border border-cream-200/80 rounded-sm hover:border-saffron-200/60 transition-colors duration-500"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[event.status]}`}
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </span>
                    <span className="text-xs text-warm-800/40 bg-cream-200/60 px-3 py-1 rounded-full">
                      {typeLabels[event.type]}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-warm-900 mb-2">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-warm-800/50 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      {event.location}, {event.country}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      {event.date}
                      {event.endDate && event.endDate !== event.date
                        ? ` – ${event.endDate}`
                        : ""}
                    </span>
                  </div>

                  <p className="text-warm-800/65 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {event.contactEmail && (
                    <a
                      href={`mailto:${event.contactEmail}`}
                      className="inline-flex items-center gap-2 text-saffron-700 text-sm font-medium hover:text-saffron-800 transition-colors group"
                    >
                      <Mail size={14} />
                      Enquire: {event.contactEmail}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {past.length > 0 && (
        <section className="py-16 bg-cream-100/30">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading title="Past Events" />
            <div className="mt-12 space-y-4">
              {past.map((event) => (
                <div
                  key={event.id}
                  className="p-6 bg-cream-50 border border-cream-200/40 rounded-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg text-warm-800/70">
                        {event.title}
                      </h3>
                      <p className="text-sm text-warm-800/40 mt-1">
                        {event.location}, {event.country} — {event.date}
                      </p>
                    </div>
                    <span className="text-xs text-warm-800/30 bg-cream-200/40 px-3 py-1 rounded-full whitespace-nowrap">
                      {typeLabels[event.type]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
