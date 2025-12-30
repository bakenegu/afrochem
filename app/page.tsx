"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [submitted, setSubmitted] = React.useState(false);
  const industries = [
    {
      title: "Plastics",
      bullets: [
        "Resins and additives for extrusion and molding",
        "Colorants and stabilizers for durable parts",
      ],
      bgImage: "/Plastics.png",
    },
    {
      title: "Foam",
      bullets: [
        "Blowing agents and catalysts for flexible foam",
        "Performance additives for cushioning and insulation",
      ],
      bgImage: "/Foam.png",
    },
    {
      title: "Soap & Detergent",
      bullets: [
        "Surfactants and builders for cleaning formulations",
        "Fragrance carriers and functional additives",
      ],
      bgImage: "/soap.png",
    },
    {
      title: "Mining",
      bullets: [
        "Reagents for ore processing and separation",
        "Dust suppression and water treatment inputs",
      ],
      bgImage: "/mining.png",
    },
    {
      title: "Construction",
      bullets: [
        "Admixtures and binders for concrete and mortar",
        "Sealants and protective coatings materials",
      ],
      bgImage: "/construction.png",
    },
  ];

  const renderIndustryCard = (item: (typeof industries)[number]) => {
    const hasBg = Boolean(item.bgImage);
    const titleColor = "text-white";
    const bodyColor = "text-white/90";
    const linkColor = "text-white font-semibold";

    return (
      <div
        key={item.title}
        className={`relative group overflow-hidden rounded-2xl border shadow-sm ${
          hasBg ? "border-orange-200/70 bg-slate-950" : "border-slate-200 bg-white"
        }`}
      >
        {hasBg && (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${item.bgImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent transition duration-500 group-hover:from-black/75 group-hover:via-black/45" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-transparent" />
          </div>
        )}
        <div className="relative z-10 flex h-full flex-col">
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 opacity-90" />
          <CardHeader>
            <h3 className={`text-lg font-semibold ${titleColor}`}>{item.title}</h3>
          </CardHeader>
            <CardContent>
              <ul className={`mb-4 list-disc space-y-1 pl-5 ${bodyColor}`}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a
                href={`/products?category=${
                  item.title === "Plastics"
                    ? "plastics"
                    : item.title === "Foam"
                      ? "foam"
                      : item.title === "Soap & Detergent"
                        ? "soap"
                        : item.title === "Mining"
                          ? "mining"
                          : item.title === "Construction"
                            ? "construction"
                            : ""
                }`}
                className={`inline-flex items-center gap-2 text-sm hover:text-orange-200 ${linkColor}`}
              >
                Explore
                <span aria-hidden>→</span>
              </a>
          </CardContent>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-orange-500/30 via-orange-400/15 to-transparent" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-orange-100/60 via-white to-orange-50/40 blur-3xl" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-800 shadow-sm">
              Ajman, UAE - B2B Industrial Supply
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Industrial Raw Materials & Chemicals for Global Supply
              </h1>
              <p className="max-w-2xl text-lg text-slate-700">
                AFROCHEM TRADING FZE LLC specializes in general trading and operates
                as an agency / commission agent, supplying industrial raw materials and
                chemicals for plastics, foam, soap & detergent, mining, and construction
                industries.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="px-6 bg-orange-600 text-white hover:bg-orange-700"
              >
                <a href="mailto:afrochem2019@gmail.com">Request a Quote</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-6 border-orange-600 text-orange-700 hover:bg-orange-50"
              >
                <a href="/products">View Products</a>
              </Button>
            </div>
            <div className="text-sm font-medium text-slate-600">
              Industries served: Plastics - Foam - Soap &amp; Detergent - Mining - Construction
            </div>
          </div>

          <div className="relative flex-1">
            <div className="mb-2 flex justify-center">
              <Image
                src="/afrologo.png"
                alt="AFROCHEM logo"
                width={1400}
                height={600}
                priority
                className="h-72 w-auto md:h-[22rem]"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-orange-50/60 to-orange-100/40 p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "Fast Quotations",
                  "Industrial-Grade Materials",
                  "Compliance-Minded Supply",
                ].map((title) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm"
                  >
                    <span className="mb-2 block h-1 w-10 rounded-full bg-orange-500" />
                    {title}
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-200/50 via-white to-orange-100/60 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-gradient-to-br from-orange-100/70 via-white to-orange-200/40 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white scroll-mt-28">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20 min-h-[140vh]">
          <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <div className="space-y-3 lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-600">
                Industries Served
              </p>
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Industries Served
                </h2>
                <p className="text-lg text-slate-700">
                  Industrial raw materials and chemicals tailored to your application.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
                {industries.map((item) => renderIndustryCard(item))}
              </div>

              <div className="hidden lg:flex lg:flex-col lg:gap-0">
                {industries.map((item, idx) => (
                  <div
                    key={item.title}
                    className="relative h-[80vh]"
                    aria-label={`${item.title} card`}
                  >
                    <div
                      className="sticky top-28"
                      style={{
                        zIndex: 10 + idx * 5,
                        transform: `translateY(${idx * 8}px)`,
                      }}
                    >
                      {renderIndustryCard(item)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-20">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why AFROCHEM
            </h2>
            <p className="text-lg text-slate-700">
              A reliable partner for industrial sourcing and supply.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Reliable sourcing & supply",
                desc: "Dependable access to industrial raw materials and chemicals through vetted suppliers and consistent fulfillment.",
              },
              {
                title: "Responsive quotations",
                desc: "Fast, clear quotations tailored to your specifications, with direct communication to keep timelines on track.",
              },
              {
                title: "Industrial-grade focus",
                desc: "Materials aligned to production standards for plastics, foam, soap & detergent, mining, and construction.",
              },
              {
                title: "Compliance-minded approach",
                desc: "Attention to regulatory and quality requirements to support safe, compliant supply chains.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <span className="mb-2 block h-2 w-2 rounded-full bg-orange-500" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/60 via-white to-orange-100/40 p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Contact details
                </h2>
                <div className="space-y-2 text-sm text-slate-800">
                  <p>
                    Email:{" "}
                    <a href="mailto:afrochem2019@gmail.com" className="font-semibold text-orange-700 hover:text-orange-800">
                      afrochem2019@gmail.com
                    </a>
                  </p>
                  <p>
                    Mobile/WhatsApp:{" "}
                    <a href="tel:+971569653824" className="font-semibold text-orange-700 hover:text-orange-800">
                      +971569653824
                    </a>
                  </p>
                  <p>Location: Ajman Media City Free Zone, Ajman, United Arab Emirates</p>
                  <p>Office Location: BLA-BR3-360, AMC Boulevard Building, Ajman Media City, Ajman, UAE</p>
                  <p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Ajman%20Media%20City%20Free%20Zone%2C%20Ajman%2C%20United%20Arab%20Emirates"
                      className="font-semibold text-orange-700 hover:text-orange-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-slate-800">
                  Prefer to send details? Include product/material, quantity, destination, and intended industrial use.
                </p>
                <div className="overflow-hidden rounded-xl border border-orange-100 shadow-sm aspect-video w-full">
                  <iframe
                    title="Ajman Media City Free Zone Map"
                    src="https://www.google.com/maps?q=Ajman%20Media%20City%20Free%20Zone%2C%20Ajman%2C%20United%20Arab%20Emirates&output=embed"
                    loading="lazy"
                    className="h-full w-full"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ajman%20Media%20City%20Free%20Zone%2C%20Ajman%2C%20United%20Arab%20Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              How We Work
            </h2>
            <p className="text-lg text-slate-700">
              A simple, compliant process from inquiry to delivery coordination.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Send an inquiry",
                desc: "Share your product or material needs, destination, and any specifications.",
              },
              {
                step: "02",
                title: "Confirm specs & documentation",
                desc: "Verify requirements and documentation, including regulated items where applicable.",
              },
              {
                step: "03",
                title: "Receive quotation",
                desc: "Get pricing, lead time, and terms aligned to your request.",
              },
              {
                step: "04",
                title: "Delivery coordination",
                desc: "Coordinate logistics and shipment based on agreed terms.",
              },
            ].map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className="mb-2 inline-flex h-8 items-center rounded-full bg-orange-100 px-3 text-xs font-semibold uppercase tracking-wide text-orange-700">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-700">
            Regulated materials may require additional verification before quotation or supply.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trusted B2B Supply Partner
            </h2>
            <p className="text-lg text-slate-700">
              Credibility signals that make it easy to work with us.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "B2B inquiries only",
                desc: "We supply to eligible industrial clients.",
                bg: "/b2b.png",
              },
              {
                title: "Compliance-first supply",
                desc: "Regulated materials may require verification and documentation.",
                bg: "/compliance.png",
              },
              {
                title: "SDS/MSDS on request",
                desc: "Documentation support where applicable.",
                bg: "/sds.png",
              },
              {
                title: "Multiple contact channels",
                desc: "Email/WhatsApp/phone (placeholders for now).",
                bg: "/contact.png",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-orange-100 bg-slate-900 px-6 py-6 shadow-sm min-h-[360px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.bg}')` }}
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent" />
                <span className="relative z-10 mt-1 block h-2.5 w-2.5 rounded-full bg-white" aria-hidden />
                <div className="relative z-10 space-y-1 text-white">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-white/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-700">
            Your inquiry details are used only to respond to your request.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What Clients Say
            </h2>
            <p className="text-lg text-slate-700">
              Trusted by industrial buyers and partners.
            </p>
          </div>

          <TestimonialsCarousel />

          <p className="mt-4 text-sm text-slate-700">
            Testimonials available upon request.
          </p>
        </div>
      </section>

      <a
        href="https://wa.me/971569653824"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
        aria-label="WhatsApp call +971569653824"
      >
        <span className="text-lg">📞</span>
        Contact Us
      </a>
    </main>
  );
}
