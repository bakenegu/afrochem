"use client";

import React from "react";
import Image from "next/image";

type CardProps = { children: React.ReactNode; className?: string };

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-orange-100 bg-white shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`px-5 pt-4 pb-2 ${className}`}>{children}</div>;
}

function CardTitle({ children, className = "" }: CardProps) {
  return (
    <h3 className={`text-base font-semibold leading-relaxed ${className}`}>
      {children}
    </h3>
  );
}

function CardContent({ children, className = "" }: CardProps) {
  return <div className={`px-5 pb-4 ${className}`}>{children}</div>;
}

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "AFROCHEM delivers fast quotations and keeps us informed so production timelines stay on track.",
    name: "Procurement Manager",
    role: "Manufacturing Company",
    initials: "AA",
  },
  {
    quote:
      "They source industrial-grade materials with the documentation we need for compliant operations.",
    name: "Operations Lead",
    role: "Chemicals & Detergents",
    initials: "OL",
  },
  {
    quote:
      "Responsive team, clear communication, and reliable supply coordination for our regional plants.",
    name: "Supply Chain Director",
    role: "Industrial Group",
    initials: "SCD",
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="h-4 w-4 fill-orange-500"
    >
      <path d="M10 1.5 12.59 7l5.66.51-4.29 3.68 1.3 5.61L10 13.97 4.74 16.8l1.3-5.61-4.29-3.68L7.41 7z" />
    </svg>
  );
}

function Avatar({ avatarSrc, initials }: { avatarSrc?: string; initials: string }) {
  const baseClasses =
    "flex items-center justify-center rounded-full aspect-square object-cover ring-2 ring-orange-500/40";
  if (avatarSrc) {
    return (
      <Image
        src={avatarSrc}
        alt={`${initials} avatar`}
        width={64}
        height={64}
        className={`${baseClasses} w-12 h-12 md:w-14 md:h-14`}
      />
    );
  }
  return (
    <div
      className={`${baseClasses} w-12 h-12 md:w-14 md:h-14 bg-orange-100 text-orange-700 text-sm font-semibold`}
      aria-hidden
    >
      {initials}
    </div>
  );
}

export function TestimonialsCarousel() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  const total = testimonials.length;

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, total]);

  const goTo = (idx: number) => setActive(idx % total);
  const prev = () => setActive((prevIdx) => (prevIdx - 1 + total) % total);
  const next = () => setActive((prevIdx) => (prevIdx + 1) % total);

  return (
    <div
      className="relative mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div className="min-h-[240px]">
          {testimonials.map((item, idx) => {
            const isActive = idx === active;
            return (
              <div
                key={item.name}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100"
                    : "pointer-events-none opacity-0 -translate-y-2 scale-95"
                }`}
                aria-hidden={!isActive}
              >
                <Card className="h-full rounded-3xl border border-orange-100 bg-white shadow-sm">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar avatarSrc={item.avatarSrc} initials={item.initials} />
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                        <p className="text-xs text-slate-700">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <StarIcon key={starIdx} />
                      ))}
                    </div>
                    <CardTitle className="text-base leading-relaxed text-slate-800">
                      “{item.quote}”
                    </CardTitle>
                  </CardHeader>
                  <CardContent />
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={idx}
                type="button"
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  isActive
                    ? "w-8 bg-orange-600"
                    : "w-3 bg-orange-200 hover:bg-orange-300"
                }`}
              />
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-9 items-center justify-center rounded-full border border-orange-200 px-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-9 items-center justify-center rounded-full border border-orange-200 px-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
