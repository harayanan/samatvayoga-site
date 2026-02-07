import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { talkCategories, youtubeChannelUrl } from "@/data/talks";
import {
  Video,
  FileText,
  Headphones,
  ExternalLink,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Talks & Archive | Samatva Yoga",
  description:
    "Past lectures, recorded discourses, and published writings on Vedanta and Yoga philosophy by Shri Siddhartha Krishna.",
};

const typeIcons = {
  video: Video,
  audio: Headphones,
  article: FileText,
};

export default function TalksPage() {
  return (
    <>
      <Header />

      {/* Hero with image */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/siddhartha-hero.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-12"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-100/80 via-cream-50/90 to-cream-50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-600/70 font-serif italic tracking-wide mb-4">
            Teachings
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 tracking-wide">
            Talks & Archive
          </h1>
          <p className="mt-4 text-warm-800/60 text-lg font-light max-w-2xl mx-auto">
            Recorded discourses, past lectures, and published writings — a
            growing treasury of wisdom from the Vedantic tradition.
          </p>
          <div className="mt-6 h-px w-16 bg-saffron-500/30 mx-auto" />
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-warm-900 rounded-sm text-cream-100 hover:bg-warm-800 transition-colors duration-300 group"
          >
            <div className="flex items-center gap-4">
              <Youtube size={28} className="text-saffron-400" />
              <div>
                <p className="font-serif text-lg">YouTube Channel</p>
                <p className="text-sm text-cream-200/50">
                  Watch all recorded lectures and discourses
                </p>
              </div>
            </div>
            <ExternalLink
              size={18}
              className="text-cream-200/40 group-hover:text-cream-200/70 transition-colors"
            />
          </a>
        </div>
      </section>

      {/* Talk Categories */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-20">
          {talkCategories.map((category) => (
            <div key={category.id}>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mb-2">
                {category.title}
              </h2>
              <p className="text-warm-800/55 leading-relaxed mb-8 max-w-2xl">
                {category.description}
              </p>

              <div className="space-y-4">
                {category.talks.map((talk) => {
                  const Icon = typeIcons[talk.type];
                  return (
                    <div
                      key={talk.id}
                      className="flex items-start gap-5 p-6 bg-cream-100/40 border border-cream-200/60 rounded-sm hover:border-saffron-200/50 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-cream-200/60 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-warm-800/50" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-serif text-lg text-warm-900">
                            {talk.title}
                          </h3>
                          {talk.date && (
                            <span className="text-xs text-warm-800/40 whitespace-nowrap mt-1">
                              {talk.date}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-warm-800/55 leading-relaxed mt-1">
                          {talk.description}
                        </p>
                        <span className="inline-block mt-3 text-xs text-saffron-600/60 bg-saffron-50 px-2 py-0.5 rounded-full">
                          {talk.topic}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
