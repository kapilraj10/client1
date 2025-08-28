import React from "react";

function CheckIcon({ className = "h-4 w-4 text-violet-600" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M6 10.5l2.5 2.5L14 8.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Waves({ variant = "lavender" }) {
  if (variant === "mint") {
    return (
      <svg className="absolute inset-x-0 bottom-0 w-full h-28" viewBox="0 0 600 120" preserveAspectRatio="none">
        <path d="M0 70 C120 100 220 40 320 72 C420 104 510 78 600 92 V120 H0 Z" fill="#BBF7D0" opacity="0.65" />
        <path d="M0 88 C120 108 220 72 320 96 C420 120 510 96 600 105 V120 H0 Z" fill="#86EFAC" opacity="0.9" />
      </svg>
    );
  }
  if (variant === "primary") {
    return (
      <svg className="absolute inset-x-0 bottom-0 w-full h-32" viewBox="0 0 600 140" preserveAspectRatio="none">
        <path d="M0 76 C120 112 220 58 320 92 C420 126 510 96 600 112 V140 H0 Z" fill="#C4B5FD" opacity="0.9" />
        <path d="M0 100 C120 130 220 84 320 112 C420 140 510 116 600 124 V140 H0 Z" fill="#A78BFA" />
      </svg>
    );
  }
  // lavender
  return (
    <svg className="absolute inset-x-0 bottom-0 w-full h-28" viewBox="0 0 600 120" preserveAspectRatio="none">
      <path d="M0 70 C120 100 220 40 320 72 C420 104 510 78 600 92 V120 H0 Z" fill="#E9D5FF" opacity="0.7" />
      <path d="M0 88 C120 108 220 72 320 96 C420 120 510 96 600 105 V120 H0 Z" fill="#C4B5FD" opacity="0.9" />
    </svg>
  );
}

function PlanCard({
  highlight = false,
  title = "Professional",
  price = "$25.45",
  period = "/month",
  students = "2.1k+ Students",
  features = [],
  cta = "Explore more about the plan",
  waves = "lavender", 
}) {
  const ring = highlight ? "ring-2 ring-violet-300 shadow-xl" : "ring-1 ring-violet-100 shadow-md";
  const bottomPad = highlight ? "pb-32" : "pb-28";

  return (
    <article className={`relative overflow-hidden rounded-3xl bg-white ${ring}`}>
      <div className={`p-8 sm:p-9 lg:p-10 ${bottomPad}`}>
        <p className="text-sm font-semibold text-violet-500">{students}</p>
        <h3 className="mt-3 text-2xl sm:text-[26px] font-bold text-slate-900">{title}</h3>

        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-violet-700 text-xl font-extrabold">{price}</p>
          <span className="text-slate-400 text-sm">{period}</span>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-slate-700">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckIcon />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            href="/plan"
            className="inline-flex items-center gap-2 rounded-full border border-violet-400 px-5 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-50 transition-colors"
          >
            {cta}
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l5 5A1 1 0 0116 9h-5a1 1 0 110-2h2.586L9.293 4.707a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>
      </div>

      <Waves variant={waves} />
    </article>
  );
}

export default function PricingSection() {
  const features = [
    "Some features here",
    "Explore more about the plan Some features here",
    "Some features here",
    "Some features here",
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* heading */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-500">
            Our Courses
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Find the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-700">
              right plan
            </span>
          </h2>
        </div>

        {/* cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <PlanCard title="Professional" price="$25.45" period="/month" students="2.1k+ Students" features={features} waves="lavender" />
          <PlanCard title="Professional" price="$25.45" period="/month" students="2.1k+ Students" features={features} waves="primary" highlight />
          <PlanCard title="Professional" price="$25.45" period="/month" students="2.1k+ Students" features={features} waves="mint" />
        </div>
      </div>
    </section>
  );
}
