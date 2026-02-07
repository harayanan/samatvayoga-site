import Link from "next/link";
import { socialLinks } from "@/data/about";

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-cream-200/80">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-cream-100 mb-4">
              Samatva Yoga
            </h3>
            <p className="text-sm leading-relaxed text-cream-200/60 max-w-xs">
              The Yoga of Balance and Equanimity. Rooted in the timeless wisdom
              of the Vedas, Upanishads, and the Bhagavad Gita.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg text-cream-100 mb-4">
              Explore
            </h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-sm hover:text-saffron-400 transition-colors"
              >
                About Shri Siddhartha Krishna
              </Link>
              <Link
                href="/teachings/online-classes"
                className="block text-sm hover:text-saffron-400 transition-colors"
              >
                Online Classes
              </Link>
              <Link
                href="/teachings/talks"
                className="block text-sm hover:text-saffron-400 transition-colors"
              >
                Talks & Archive
              </Link>
              <Link
                href="/teachings/travels"
                className="block text-sm hover:text-saffron-400 transition-colors"
              >
                Travels & Workshops
              </Link>
              <Link
                href="/contact"
                className="block text-sm hover:text-saffron-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream-100 mb-4">
              Connect
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${socialLinks.email}`}
                className="block hover:text-saffron-400 transition-colors"
              >
                {socialLinks.email}
              </a>
              <a
                href={`https://wa.me/${socialLinks.whatsapp.replace(/[^0-9]/g, "")}`}
                className="block hover:text-saffron-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {socialLinks.whatsapp}
              </a>
              <a
                href={socialLinks.youtube}
                className="block hover:text-saffron-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-200/10 text-center">
          <p className="text-xs text-cream-200/40 font-serif italic">
            &ldquo;samatvam yoga uchyate&rdquo; — Yoga is equanimity
          </p>
          <p className="text-xs text-cream-200/30 mt-2">
            Bhagavad Gita 2.48
          </p>
        </div>
      </div>
    </footer>
  );
}
