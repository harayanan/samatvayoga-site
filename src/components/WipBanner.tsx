"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function WipBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wip-dismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("wip-dismissed", "1");
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-warm-900/50 backdrop-blur-sm">
      <div className="bg-cream-50 rounded-sm shadow-2xl max-w-md mx-6 p-8 relative">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-warm-800/40 hover:text-warm-800 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-saffron-500 text-cream-50 rounded-sm mb-5">
            Work in Progress
          </span>
          <h2 className="font-serif text-2xl text-warm-900 mb-3">
            This site is under construction
          </h2>
          <p className="text-warm-800/60 text-sm leading-relaxed mb-6">
            Welcome! This website for Samatva Yoga is currently being built and
            the content is not yet final. Text, images, and schedules shown here
            are preliminary and subject to change.
          </p>
          <button
            onClick={dismiss}
            className="px-6 py-2.5 bg-warm-900 text-cream-100 text-sm font-medium rounded-sm hover:bg-warm-800 transition-colors"
          >
            I understand, continue
          </button>
        </div>
      </div>
    </div>
  );
}
