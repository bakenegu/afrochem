import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-orange-500 bg-orange-600 text-orange-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-orange-100">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
              AFROCHEM TRADING FZE LLC
            </div>
            <p className="text-sm text-orange-50/90">
              Based in Ajman Media City Free Zone, UAE.
            </p>
            <p className="text-sm text-orange-50/90">
              Industrial raw materials and chemicals for plastics, foam, soap &amp; detergent,
              mining, and construction industries.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm text-orange-50/90">
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
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-orange-50/90">
              <span>
                Email:{" "}
                <a href="mailto:afrochem2019@gmail.com" className="underline-offset-2 hover:underline">
                  afrochem2019@gmail.com
                </a>
              </span>
              <span>
                Mobile:{" "}
                <a href="tel:+971569653824" className="underline-offset-2 hover:underline">
                  +971569653824
                </a>
              </span>
              <span>Location: Ajman Media City Free Zone, Ajman, United Arab Emirates</span>
              <span>Office: AMC Boulevard Building, Ajman, UAE</span>
              <span className="font-semibold text-white">Business Inquiries Only</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 border-t border-orange-500 pt-6 text-sm text-orange-50/90">
          <p>
            © {year} AFROCHEM TRADING FZE LLC. All rights reserved.
          </p>
          <p>
            Some products may be regulated. Supply is subject to applicable laws, licensing, and documentation.
          </p>
          <p className="text-orange-50">
            Powered by{" "}
            <a
              href="tel:+251911692252"
              className="font-semibold text-white hover:text-orange-100"
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
