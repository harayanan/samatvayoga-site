import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { sagePatanjali } from "@/data/sage-patanjali";

export const metadata: Metadata = {
  title: "Sage Patanjali — Father of Yoga | Samatva Yoga",
  description: sagePatanjali.introduction,
};

export default function SagePatanjaliPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-600/70 font-serif italic tracking-wide mb-4">
            {sagePatanjali.era}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-warm-900 tracking-wide">
            {sagePatanjali.name}
          </h1>
          <p className="mt-4 text-warm-800/60 text-lg font-light">
            {sagePatanjali.title}
          </p>
          <div className="mt-6 h-px w-16 bg-saffron-500/30 mx-auto" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-warm-800/75 leading-relaxed text-lg text-center font-light">
            {sagePatanjali.introduction}
          </p>
        </div>
      </section>

      {/* Life */}
      <section className="py-24 bg-cream-100/50">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            title="His Life"
            subtitle="Legends and history of the great master"
          />
          <div className="mt-12 space-y-6">
            {sagePatanjali.life.map((para, i) => (
              <p
                key={i}
                className="text-warm-800/75 leading-relaxed text-base"
              >
                {para}
              </p>
            ))}
            <p className="text-xs text-warm-800/40 mt-8 italic">
              {sagePatanjali.lifeSource}
            </p>
          </div>
        </div>
      </section>

      {/* Yoga Philosophy */}
      <section className="py-24 bg-warm-900">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            title="His Yoga"
            subtitle="The philosophy and purpose of Yoga"
            light
          />
          <div className="mt-12 space-y-6">
            {sagePatanjali.yogaPhilosophy.map((para, i) => (
              <p
                key={i}
                className="text-cream-200/70 leading-relaxed text-center text-lg font-light"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Sutras */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            title="The Yoga Sutras"
            subtitle="196 aphorisms on the tradition and philosophy of Yoga"
          />
          <div className="mt-12 space-y-6">
            <p className="text-warm-800/75 leading-relaxed text-base">
              {sagePatanjali.yogaSutras.description}
            </p>
            <blockquote className="border-l-2 border-saffron-400 pl-6 my-8">
              <p className="text-warm-800/70 leading-relaxed italic text-base">
                {sagePatanjali.yogaSutras.meaning}
              </p>
            </blockquote>
            <p className="text-warm-800/75 leading-relaxed text-base">
              {sagePatanjali.yogaSutras.connection}
            </p>
          </div>
        </div>
      </section>

      {/* Yama and Niyama */}
      <section className="py-24 bg-cream-100/50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Yama & Niyama"
            subtitle="The first two steps of the eightfold path of Yoga"
          />
          <p className="mt-8 text-warm-800/65 leading-relaxed text-center max-w-2xl mx-auto text-sm">
            {sagePatanjali.yamaAndNiyama.introduction}
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Yama */}
            <div>
              <h3 className="font-serif text-2xl text-warm-900 mb-6">
                {sagePatanjali.yamaAndNiyama.yama.title}
              </h3>
              <div className="space-y-4">
                {sagePatanjali.yamaAndNiyama.yama.items.map((item) => (
                  <div
                    key={item.sanskrit}
                    className="bg-cream-50 border border-cream-200/60 rounded-sm p-5"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-saffron-700 text-lg">
                        {item.sanskrit}
                      </span>
                      <span className="text-xs text-warm-800/40 uppercase tracking-wide">
                        {item.english}
                      </span>
                    </div>
                    <p className="text-sm text-warm-800/60 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Niyama */}
            <div>
              <h3 className="font-serif text-2xl text-warm-900 mb-6">
                {sagePatanjali.yamaAndNiyama.niyama.title}
              </h3>
              <div className="space-y-4">
                {sagePatanjali.yamaAndNiyama.niyama.items.map((item) => (
                  <div
                    key={item.sanskrit}
                    className="bg-cream-50 border border-cream-200/60 rounded-sm p-5"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-saffron-700 text-lg">
                        {item.sanskrit}
                      </span>
                      <span className="text-xs text-warm-800/40 uppercase tracking-wide">
                        {item.english}
                      </span>
                    </div>
                    <p className="text-sm text-warm-800/60 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing */}
          <blockquote className="mt-12 border-l-2 border-saffron-400 pl-6 max-w-2xl mx-auto">
            <p className="text-warm-800/70 leading-relaxed italic text-base">
              {sagePatanjali.yamaAndNiyama.conclusion}
            </p>
          </blockquote>
        </div>
      </section>

      <Footer />
    </>
  );
}
