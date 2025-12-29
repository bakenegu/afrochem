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
          </div>
        </div>
      </section>
    </main>
  );
}
