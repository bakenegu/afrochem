import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-24">
        <p className="text-sm font-medium text-orange-600">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight">Request a Quote</h1>
        <p className="text-lg text-slate-700">
          Share your requirements for industrial raw materials or chemicals, and our team will
          provide fast, compliance-minded quotations.
        </p>

        <div className="mt-6 grid gap-6 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">Contact details</h2>
            <div className="space-y-2 text-sm text-slate-700">
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
                  href="https://maps.google.com/?q=AMC%20Boulevard%20Building%2C%20Ajman%20Media%20City%2C%20Ajman%20UAE"
                  className="font-semibold text-orange-700 hover:text-orange-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-slate-700">
            <p className="text-slate-800">
              Prefer to send details? Use the inquiry form below and include product/material, quantity,
              destination, and intended industrial use.
            </p>
            <div className="space-y-3">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-orange-100 shadow-sm">
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

        <div className="mt-8 space-y-6 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/50 via-white to-orange-100/40 p-6 shadow-sm">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">Quick Inquiry</h2>
            <p className="text-sm text-slate-700">
              A compact form for fast leads.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="quick-name">
                  Full name *
                </label>
                <input
                  id="quick-name"
                  name="name"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="quick-company">
                  Company *
                </label>
                <input
                  id="quick-company"
                  name="company"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-800" htmlFor="quick-email">
                Email *
              </label>
              <input
                id="quick-email"
                name="email"
                type="email"
                required
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-800" htmlFor="quick-message">
                Message *
              </label>
              <textarea
                id="quick-message"
                name="message"
                required
                rows={3}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <label className="flex items-start gap-2 text-sm text-slate-800">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-400"
              />
              <span>I understand regulated materials may require licensing and verification.</span>
            </label>

            <Button
              type="submit"
              className="px-6 bg-orange-600 text-white hover:bg-orange-700"
            >
              Send Quick Inquiry
            </Button>
          </form>
        </div>

        <div className="mt-8 space-y-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">Detailed Request</h2>
            <p className="text-sm text-slate-700">
              Share full requirements to receive a tailored quotation.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="detail-name">
                  Full name *
                </label>
                <input
                  id="detail-name"
                  name="name"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="detail-company">
                  Company *
                </label>
                <input
                  id="detail-company"
                  name="company"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="detail-email">
                  Email *
                </label>
                <input
                  id="detail-email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="detail-phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="detail-phone"
                  name="phone"
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="detail-product">
                  Product / material *
                </label>
                <input
                  id="detail-product"
                  name="product"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="detail-quantity">
                  Quantity *
                </label>
                <input
                  id="detail-quantity"
                  name="quantity"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="detail-destination">
                  Destination country *
                </label>
                <input
                  id="detail-destination"
                  name="destination"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-800" htmlFor="detail-use">
                  Intended industrial use *
                </label>
                <input
                  id="detail-use"
                  name="use"
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-800" htmlFor="detail-notes">
                Additional details
              </label>
              <textarea
                id="detail-notes"
                name="notes"
                rows={4}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <label className="flex items-start gap-2 text-sm text-slate-800">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-400"
              />
              <span>I understand regulated materials may require licensing and verification.</span>
            </label>

            <Button
              type="submit"
              className="px-6 bg-orange-600 text-white hover:bg-orange-700"
            >
              Send Detailed Request
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
