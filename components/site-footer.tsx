import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-orange-700">
              <span className="h-2 w-2 rounded-full bg-orange-600" aria-hidden />
              AFROCHEM TRADING FZE LLC
            </div>
            <p className="text-sm text-slate-700">
              Based in Ajman Media City Free Zone, UAE.
            </p>
            <p className="text-sm text-slate-700">
              Industrial raw materials and chemicals for plastics, foam, soap &amp; detergent,
              mining, and construction industries.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-700">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About" },
                { href: "/compliance", label: "Compliance" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-700">
              <span>Email: info@afrochem.example (placeholder)</span>
              <span>Phone/WhatsApp: +971-000-0000 (placeholder)</span>
              <span className="font-semibold text-orange-700">Business Inquiries Only</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200 pt-6 text-sm text-slate-700">
          <p>
            © {year} AFROCHEM TRADING FZE LLC. All rights reserved.
          </p>
          <p>
            Some products may be regulated. Supply is subject to applicable laws, licensing, and documentation.
          </p>
          <p className="text-slate-800">
            Powered by{" "}
            <a
              href="tel:+251911692252"
              className="font-semibold text-orange-700 hover:text-orange-800"
            >
              4loop technologies
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
