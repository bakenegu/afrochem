"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

const categoryMap: Record<string, { label: string; image: string }> = {
  plastics: { label: "Plastics", image: "/Plastics.png" },
  foam: { label: "Foam", image: "/Foam.png" },
  soap: { label: "Soap & Detergent", image: "/soap.png" },
  mining: { label: "Mining", image: "/mining.png" },
  construction: { label: "Construction", image: "/construction.png" },
};

const categorySections: Array<{
  key: string;
  title: string;
  bullets: string[];
}> = [
  {
    key: "plastics",
    title: "Plastics",
    bullets: [
      "Resins and additives for extrusion and molding",
      "Colorants and stabilizers for durable parts",
    ],
  },
  {
    key: "foam",
    title: "Foam",
    bullets: [
      "Blowing agents and catalysts for flexible foam",
      "Performance additives for cushioning and insulation",
    ],
  },
  {
    key: "soap",
    title: "Soap & Detergent",
    bullets: [
      "Surfactants and builders for cleaning formulations",
      "Fragrance carriers and functional additives",
    ],
  },
  {
    key: "mining",
    title: "Mining",
    bullets: [
      "Reagents for ore processing and separation",
      "Dust suppression and water treatment inputs",
    ],
  },
  {
    key: "construction",
    title: "Construction",
    bullets: [
      "Admixtures and binders for concrete and mortar",
      "Sealants and protective coatings materials",
    ],
  },
];

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsPageContent />
    </Suspense>
  );
}

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const category = (searchParams.get("category") || "").toLowerCase().trim();
  const hasCategory = Boolean(category);

  const categoryData = useMemo(() => {
    if (!hasCategory) return null;
    return categoryMap[category] ?? null;
  }, [category, hasCategory]);

  useEffect(() => {
    if (!hasCategory || !category) return;
    const el = document.getElementById(`products-${category}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [category, hasCategory]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {hasCategory && (
        <section className="mx-auto max-w-5xl px-6 pt-12 pb-6">
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 shadow-sm">
            {categoryData?.image && (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url('${categoryData.image}')` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end gap-2 px-6 py-10 sm:px-8">
              <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                Category: {categoryData?.label ?? category}
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Our Product Range
              </h1>
              <p className="text-lg text-white/90">
                Explore industrial raw materials and chemicals tailored for plastics, foam, soap
                and detergent, mining, and construction supply chains.
              </p>
            </div>
          </div>
        </section>
      )}

      {!hasCategory && (
        <section className="mx-auto flex max-w-5xl flex-col gap-4 px-6 pt-16 pb-12">
          <p className="text-sm font-medium text-orange-600">Products</p>
          <h1 className="text-4xl font-semibold tracking-tight">Our Product Range</h1>
          <p className="text-lg text-slate-700">
            Explore industrial raw materials and chemicals tailored for plastics, foam, soap
            and detergent, mining, and construction supply chains.
          </p>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {categorySections.map((item) => (
            <div
              key={item.key}
              id={`products-${item.key}`}
              className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-600">
                {item.title}
              </p>
              <h3 className="text-lg font-semibold text-slate-900">{item.title} Materials</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
