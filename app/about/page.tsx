import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-24">
        <p className="text-sm font-medium text-orange-600">About</p>
        <h1 className="text-4xl font-semibold tracking-tight">About AFROCHEM TRADING FZE LLC</h1>
        <p className="text-lg text-slate-700">
          We are a UAE-based general trading company and agency / commission agent focused on industrial
          raw materials and chemicals for global supply partners.
        </p>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-16">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-600">
            Company Overview
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Company Overview</h2>
          <p className="text-lg text-slate-700">
            AFROCHEM TRADING FZE LLC serves industrial clients with dependable supply and agency services,
            emphasizing compliance, responsiveness, and sector-focused expertise.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Established", value: "April 16, 2019" },
            { label: "Base", value: "Ajman Media City Free Zone, Ajman, United Arab Emirates" },
            { label: "Office", value: "BLA-BR3-360, AMC Boulevard Building, Ajman Media City, Ajman, UAE" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-orange-700">{item.label}</p>
              <p className="text-sm text-slate-800">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-24">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-600">Leadership</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Leadership</h2>
        </div>

        <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full aspect-square bg-orange-100 text-sm font-semibold text-orange-700 ring-2 ring-orange-500/40 md:h-16 md:w-16">
              AE
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-900">Admaw Anley Endalew</h3>
              <p className="text-sm font-semibold text-orange-700">
                Owner &amp; Chief Executive Officer – Afrochem Trading FZE LLC
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Admaw is a chemical engineer and international trade professional with experience spanning
                industrial supply chains and investment consulting. He integrates technical insight with
                market access, guiding compliant sourcing and responsive service for industrial clients.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:pl-20 lg:pr-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Education</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>BSc Chemical Engineering – Addis Ababa University (AAU)</li>
                <li>Master’s in Business Leadership – University of South Africa (UNISA)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Experience areas</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Gold mining and metallurgy</li>
                <li>Foam &amp; plastics, ceramics, and printing industries</li>
                <li>FDI advisory and investment consulting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {[
            {
              name: "Mr. Alishan Said",
              role: "Head of Supply Chain, Logistics & Trade Operations",
              summary:
                "Oversees procurement, import/export, inventory, warehousing, and logistics. Handles bank LC coordination, shipment follow-up, customs documentation, and compliant, cost-effective movement of goods.",
              initials: "AS",
            },
            {
              name: "Mr. Gebremariam Fenta",
              role: "Head of Finance & Human Resources",
              summary:
                "Leads financial planning, budgeting, reporting, compliance, and cash-flow. Manages bank relationships, LC opening/settlements, trade finance, and HR to support stability and growth.",
              initials: "GF",
            },
            {
              name: "Mr. Fiseha Abebaw",
              role: "Head of Marketing",
              summary:
                "Drives marketing strategy, brand development, research, and customer engagement. Supports sales growth, export market development, and relationships with customers and distributors.",
              initials: "FA",
            },
          ].map((person) => (
            <div
              key={person.name}
              className="flex flex-col gap-3 rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:flex-row"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full aspect-square bg-orange-100 text-sm font-semibold text-orange-700 ring-2 ring-orange-500/40 md:h-16 md:w-16">
                {person.initials}
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-slate-900">{person.name}</p>
                <p className="text-sm font-semibold text-orange-700">{person.role}</p>
                <p className="text-sm leading-relaxed text-slate-700">{person.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
