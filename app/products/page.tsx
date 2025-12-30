 "use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

const categoryMap: Record<string, { label: string; image: string }> = {
  plastics: { label: "Plastics", image: "/plastic.png" },
  foam: { label: "Foam", image: "/Foam.png" },
  soap: { label: "Soap & Detergent", image: "/soap.png" },
  mining: { label: "Mining", image: "/mining.png" },
  construction: { label: "Construction", image: "/construction.png" },
};

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = (searchParams.get("category") || "").toLowerCase().trim();

  const categoryData = useMemo(() => {
    if (!category) return null;
    return categoryMap[category] ?? null;
  }, [category]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
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

          <div className="relative z-10 space-y-2 px-6 py-10 sm:px-8">
            {categoryData ? (
              <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                Category: {categoryData.label}
              </div>
            ) : (
              <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                Products
              </div>
            )}
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Our Product Range
            </h1>
            <p className="text-lg text-white/90">
              Explore industrial raw materials and chemicals tailored for plastics, foam, soap
              and detergent, mining, and construction supply chains.
            </p>
            <p className="text-xs text-white/80">
              Showing category: {category || "none"} and Banner image: {categoryData?.image || "none"}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-24">
        <p className="text-sm font-medium text-orange-600">Products</p>
        <h1 className="text-4xl font-semibold tracking-tight">Our Product Range</h1>
        <p className="text-lg text-slate-700">
          Explore industrial raw materials and chemicals tailored for plastics, foam, soap
          and detergent, mining, and construction supply chains.
        </p>
      </section>
    </main>
  );
}
