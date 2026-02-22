"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, ExternalLink, X } from "lucide-react";

interface Workshop {
  id: string;
  city: string;
  country: string;
  dates: string;
  image?: string;
}

export default function PosterViewer({
  workshops,
}: {
  workshops: Workshop[];
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeAlt, setActiveAlt] = useState("");

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {workshops.map((ws) => (
          <button
            key={ws.id}
            type="button"
            onClick={() => {
              if (ws.image) {
                setActiveImage(ws.image);
                setActiveAlt(`${ws.city}, ${ws.country} workshop poster`);
              }
            }}
            className="group bg-cream-50 border border-cream-200/60 rounded-sm overflow-hidden hover:border-saffron-300/60 hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
          >
            {ws.image && (
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={ws.image}
                  alt={`${ws.city}, ${ws.country} workshop poster`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="font-serif text-base text-warm-900">
                {ws.city}
              </h3>
              <p className="text-xs text-warm-800/50 mt-0.5">{ws.country}</p>
              <div className="flex items-center gap-1.5 mt-3 text-sm text-saffron-700">
                <Calendar size={13} />
                <span>{ws.dates}</span>
              </div>
              <p className="flex items-center gap-1.5 mt-2 text-xs text-warm-800/40 group-hover:text-saffron-600 transition-colors">
                <ExternalLink size={11} />
                View full poster
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-warm-900/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-cream-100/70 hover:text-cream-50 transition-colors z-10 cursor-pointer"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-2xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={activeAlt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-sm"
            />
          </div>
        </div>
      )}
    </>
  );
}
