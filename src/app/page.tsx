import {
  AlertTriangle,
  BadgeCheck,
  Bolt,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";
import { CallButton } from "@/components/CallButton";
import {
  faqs,
  phoneHref,
  pricingItems,
  proofPoints,
  serviceAreas,
  services,
  site,
} from "@/lib/site";

const stats = [
  { label: "Based on North Shore", icon: MapPin },
  { label: "Licensed and fully insured", icon: ShieldCheck },
  { label: "24/7 response available", icon: Clock3 },
];

const trustPoints = [
  "Professional, reliable service for small jobs and full projects",
  "Transparent pricing with no hidden costs",
  "Compliance certificates and paperwork provided",
  "Residential repairs, rewiring, renovations, and new build electrical work",
];

const reviews = [
  {
    quote:
      "Fast response, clear pricing, and careful electrical fault finding for our home.",
    name: "North Shore homeowner",
  },
  {
    quote:
      "Reliable support for renovation wiring, with paperwork handled properly.",
    name: "Renovation client",
  },
  {
    quote:
      "Straightforward communication and practical help with our hot water cylinder power issue.",
    name: "Auckland property owner",
  },
];

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: site.businessName,
    url: site.siteUrl,
    telephone: site.phone,
    email: site.email,
    areaServed: {
      "@type": "City",
      name: site.serviceArea,
      address: {
        "@type": "PostalAddress",
        addressCountry: "NZ",
      },
    },
    priceRange: "$$",
    description:
      "ZZL Electrical Ltd is a licensed and fully insured Auckland electrician based on North Shore, providing electrical repairs, fault finding, rewiring, new build installation, hot water cylinder repairs, and 24/7 emergency response.",
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.copy,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <JsonLd />

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a className="flex items-center gap-2 font-black" href="#top">
            <BrandMark />
            <span className="leading-tight">{site.businessName}</span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex"
          >
            <a className="hover:text-slate-950" href="#services">
              Services
            </a>
            <a className="hover:text-slate-950" href="#areas">
              Areas
            </a>
            <a className="hover:text-slate-950" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-slate-950" href="#faq">
              FAQ
            </a>
          </nav>
          <CallButton className="hidden sm:inline-flex" label={site.phone} />
        </div>
      </header>

      <section
        id="top"
        className="relative border-b border-slate-200 bg-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(250,204,21,0.18),transparent_38%),linear-gradient(180deg,transparent,rgba(15,23,42,0.04))]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm font-bold text-slate-900">
              <ShieldCheck aria-hidden="true" size={17} />
              Licensed electrician based on {site.baseArea}
            </div>
            <a
              className="mb-5 grid w-full max-w-2xl gap-2 rounded-md border-2 border-slate-950 bg-amber-400 p-3 text-slate-950 shadow-lg shadow-amber-900/10 sm:grid-cols-[auto_1fr_auto] sm:items-center"
              href="#pricing"
            >
              <span className="text-3xl font-black">$55</span>
              <span className="text-sm font-black leading-5">
                Downlights from $55. General call-out from $120 including the
                first 30 minutes.
              </span>
              <span className="rounded-md bg-slate-950 px-3 py-2 text-center text-xs font-black uppercase text-white">
                View prices
              </span>
            </a>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              ZZL Electrical Ltd licensed Auckland electrician, 24/7 response
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Professional, reliable, and fully insured electrical services
              across Auckland. Call Aaron for fault finding, repairs, old house
              rewiring, new build electrical installation, hot water cylinder
              repairs, and emergency electrical help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton label={`Call now: ${site.phone}`} />
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 text-sm font-bold text-slate-950 transition hover:border-slate-950"
                href={`mailto:${site.email}`}
              >
                <Mail aria-hidden="true" size={18} />
                Email for a quote
              </a>
            </div>
            <div className="mt-6 rounded-md border-2 border-amber-400 bg-slate-950 p-4 text-white shadow-xl shadow-amber-900/10">
              <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <div>
                  <p className="text-xs font-black uppercase text-amber-300">
                    Transparent prices
                  </p>
                  <p className="mt-1 text-2xl font-black">$55 downlights</p>
                </div>
                <p className="text-sm leading-6 text-slate-200">
                  General call-out from <strong>$120</strong> including the
                  first 30 minutes. Common job prices are listed below before
                  you call.
                </p>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-400 px-4 text-sm font-black text-slate-950 transition hover:bg-amber-300"
                  href="#pricing"
                >
                  See prices
                </a>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {proofPoints.slice(0, 4).map((point) => (
                <span
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm"
                  key={point}
                >
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className="flex min-h-20 items-center gap-3 rounded-md border border-slate-200 bg-white p-4 shadow-sm"
                    key={item.label}
                  >
                    <Icon
                      aria-hidden="true"
                      className="shrink-0 text-amber-500"
                      size={22}
                    />
                    <p className="text-sm font-bold leading-5">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="mb-4 overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl shadow-slate-300">
              <Image
                alt="Electrician inspecting wiring during a service call"
                className="h-64 w-full object-cover sm:h-72"
                height={720}
                priority
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                width={1200}
              />
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-bold text-amber-300">
                    Need an electrician?
                  </p>
                  <p className="mt-1 text-2xl font-black">Call Aaron first</p>
                </div>
                <BrandMark size="lg" />
              </div>
              <div className="grid gap-4 py-6">
                {[
                  "Power outage or tripping circuits",
                  "Faulty sockets, switches, or lights",
                  "Old wiring or renovation electrical work",
                  "Hot water cylinder electrical faults",
                ].map((item) => (
                  <div className="flex items-start gap-3" key={item}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-amber-300"
                      size={20}
                    />
                    <span className="text-sm leading-6 text-slate-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <CallButton
                className="w-full"
                label={`Tap to call ${site.phone}`}
                variant="primary"
              />
              <p className="mt-4 text-center text-xs leading-5 text-slate-300">
                Available 24/7 for emergency electrical response across
                Auckland.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase text-amber-600">
              Electrical services
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Practical help for homes, renovations, and urgent faults
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"
                key={service.title}
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-amber-100 text-slate-950">
                  {index === 4 ? (
                    <AlertTriangle aria-hidden="true" size={22} />
                  ) : (
                    <Bolt aria-hidden="true" size={22} />
                  )}
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {service.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-black uppercase text-amber-600">
                Compliance and trust
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
                Licensed, insured, and paperwork provided
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                From small jobs to full electrical projects, ZZL Electrical Ltd
                focuses on professional service, clear communication, and peace
                of mind.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div
                  className="flex min-h-20 items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-4"
                  key={point}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="shrink-0 text-emerald-600"
                    size={21}
                  />
                  <p className="text-sm font-bold leading-6">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-amber-600">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Clear, careful electrical work without the runaround
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Call Aaron directly for a practical answer, clear next steps, and
              transparent pricing before work proceeds.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                className="flex min-h-24 items-start gap-4 rounded-md border border-slate-200 bg-slate-50 p-5"
                key={point}
              >
                <BadgeCheck
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={24}
                />
                <p className="font-bold leading-6 text-slate-900">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase text-amber-600">
                Service areas
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
                Electrician services across Auckland
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                ZZL Electrical Ltd is based on North Shore Auckland and provides
                Auckland-wide electrical service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <div
                  className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold shadow-sm"
                  key={area}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="border-y border-amber-300 bg-amber-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="inline-flex rounded-md bg-slate-950 px-3 py-2 text-sm font-black uppercase text-amber-300">
                Transparent pricing - no hidden costs
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                Clear prices for common electrical jobs
              </h2>
            </div>
            <p className="max-w-md text-base font-semibold leading-7 text-slate-800">
              Final pricing depends on site access, materials, safety
              requirements, and job scope. Call first for urgent faults.
            </p>
          </div>
          <div className="mt-8 grid gap-4 rounded-md border border-slate-900 bg-slate-950 p-4 text-white shadow-2xl shadow-amber-900/20 md:grid-cols-3">
            {[
              ["From $55", "Downlight installation"],
              ["From $120", "General call-out"],
              ["From $180", "Power point with RCD"],
            ].map(([price, label]) => (
              <div className="rounded-md bg-white p-5 text-slate-950" key={label}>
                <p className="text-3xl font-black">{price}</p>
                <p className="mt-2 text-sm font-bold text-slate-700">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {pricingItems.map((price) => (
              <div
                className="grid gap-4 rounded-md border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-400 hover:shadow-lg sm:grid-cols-[1fr_auto] sm:items-center"
                key={price.item}
              >
                <div>
                  <h3 className="text-lg font-black">{price.item}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {price.note}
                  </p>
                </div>
                <p className="rounded-md bg-amber-400 px-4 py-3 text-center text-3xl font-black text-slate-950">
                  {price.price}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-md border border-slate-300 bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-base font-bold leading-7 text-slate-800">
                Price-focused and ready to book? Call Aaron and mention the job
                type for a quick estimate.
              </p>
              <CallButton label={`Call ${site.phone}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase text-amber-600">
                Reviews
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
                Customer feedback
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Replace these with verified customer reviews when available.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                className="rounded-md border border-slate-200 bg-slate-50 p-6"
                key={review.name}
              >
                <div className="mb-4 flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      aria-hidden="true"
                      fill="currentColor"
                      key={index}
                      size={18}
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-7 text-slate-700">
                  &quot;{review.quote}&quot;
                </blockquote>
                <figcaption className="mt-5 font-bold text-slate-950">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-amber-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Common questions before you call
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                className="group rounded-md border border-slate-200 bg-white p-5 shadow-sm"
                key={faq.question}
              >
                <summary className="cursor-pointer list-none text-base font-black">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-amber-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">
              Need electrical help in Auckland?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Call Aaron at ZZL Electrical Ltd for faults, rewiring, new build
              electrical installation, hot water cylinder electrical issues, and
              emergency electrical repairs.
            </p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/5 p-6">
            <CallButton
              className="w-full"
              label={`Call ${site.phone}`}
              variant="primary"
            />
            <a
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-bold text-white transition hover:border-white"
              href={`mailto:${site.email}`}
            >
              <Mail aria-hidden="true" size={18} />
              {site.email}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-2 font-bold text-slate-950">
            <BrandMark />
            {site.businessName}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.serviceArea}, New Zealand</span>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
