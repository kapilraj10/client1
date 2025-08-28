import React, { useState } from "react";

function TeacherIllustration(props) {

  return (
    <svg
      viewBox="0 0 420 280"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <defs>
        <linearGradient id="tabGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6D28D9" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* board */}
      <rect x="250" y="60" width="140" height="98" rx="8" fill="#EDE9FE" stroke="#C4B5FD" />
      <rect x="250" y="158" width="140" height="6" rx="3" fill="#C4B5FD" />
      <circle cx="280" cy="100" r="8" fill="#C4B5FD" />
      <rect x="300" y="92" width="60" height="8" rx="4" fill="#DDD6FE" />
      <rect x="300" y="110" width="36" height="8" rx="4" fill="#DDD6FE" />

      {/* plant */}
      <g transform="translate(250,190)">
        <rect x="0" y="36" width="50" height="10" rx="5" fill="#D1D5DB" />
        <rect x="6" y="6" width="38" height="34" rx="6" fill="#FFFFFF" stroke="#D1D5DB" />
        <path d="M14 18c6-14 16-10 18 0-7 0-10 6-9 14-8-2-9-9-9-14z" fill="#A78BFA" opacity="0.5" />
        <path d="M22 12c2-10 10-12 16-2-6 2-8 8-7 16-7-1-9-7-9-14z" fill="#8B5CF6" opacity="0.6" />
      </g>

 
      <g transform="translate(150,70)">
        <path
          d="M70 76 c10 0 20 8 24 20l22 78H58l-6-26"
          fill="#111827"
          opacity="0.95"
        />
        <rect x="38" y="176" width="140" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="82" y="170" width="34" height="8" rx="4" fill="#9CA3AF" />
        <rect x="122" y="170" width="34" height="8" rx="4" fill="#9CA3AF" />

        <circle cx="90" cy="28" r="20" fill="#DDD6FE" stroke="#C4B5FD" />
        <path d="M74 20c8-14 36-12 40 0-8 4-24 3-40 0z" fill="url(#tabGrad)" />
        <path d="M120 90c-16-4-26-18-26-28 14 2 24 10 30 18l30-10v30l-10 4" fill="#F3F4F6" stroke="#C4B5FD" />
        <rect x="146" y="73" width="42" height="32" rx="6" fill="#A78BFA" />
        <rect x="150" y="78" width="34" height="22" rx="4" fill="#EDE9FE" />
        <path d="M180 80 L220 78" stroke="#C4B5FD" strokeWidth="3" strokeLinecap="round" />
      </g>

      <ellipse cx="330" cy="180" rx="36" ry="74" fill="#EEF2FF" />
    </svg>
  );
}

const TABS = [
  {
    key: "first",
    label: "FIRST POINT",
    headingLead: "Accomplished",
    headingFocus: "Teachers",
    body:
      "If your teacher can’t explain it without Googling it mid-class, you’re doomed. That’s why all our instructors are Pulchowk engineers with years of tech and teaching experience. They know exactly what to teach you — and more importantly, how to teach you.",
    cta: "Join our free demo class",
  },
  {
    key: "second",
    label: "SECOND POINT",
    headingLead: "Project‑based",
    headingFocus: "Learning",
    body:
      "Build first, explain later. Every concept is wrapped in a hands‑on mini‑project so you immediately see how the theory works in real life.",
    cta: "See sample projects",
  },
  {
    key: "third",
    label: "THIRD POINT",
    headingLead: "Curriculum",
    headingFocus: "That Works",
    body:
      "A syllabus designed by builders, not bureaucrats. It scales from beginner to advanced with zero fluff.",
    cta: "Browse the syllabus",
  },
  {
    key: "forth",
    label: "FORTH POINT",
    headingLead: "Support",
    headingFocus: "That Sticks",
    body:
      "Live help, code reviews, and community. We stay with you until it clicks.",
    cta: "Join the community",
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active) ?? TABS[0];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="rounded-[24px] bg-violet-50/50 ring-1 ring-violet-100 p-5 sm:p-7 lg:p-10">
          {/* header */}
          <div className="mb-6 sm:mb-8">
            <div className="grid grid-cols-4 gap-6 items-end">
              {TABS.map((tab) => {
                const isActive = tab.key === active;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActive(tab.key)}
                    className={`text-[11px] sm:text-xs font-semibold tracking-widest uppercase transition-colors ${
                      isActive ? "text-violet-700" : "text-violet-400 hover:text-violet-600"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span>{tab.label}</span>
                      <span
                        className={`mt-2 h-[3px] w-full rounded-full ${
                          isActive ? "bg-gradient-to-r from-violet-600 to-fuchsia-600" : "bg-white"
                        }`}
                        style={{ boxShadow: isActive ? "0 0 0 1px rgba(199, 210, 254, .6) inset" : undefined }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* left text */}
            <div className="col-span-12 lg:col-span-8">
              <p className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-violet-600">
                Why us
              </p>

              <h2 className="mt-2 text-[34px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                {current.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  {current.headingFocus}
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-6 text-slate-700">
                {current.body}
              </p>

              <div className="mt-8">
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
                >
                  {current.cta}
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l5 5A1 1 0 0116 9h-5a1 1 0 110-2h2.586L9.293 4.707a1 1 0 010-1.414z" />
                  </svg>
                </a>
              </div>
            </div>

        
            <div className="col-span-12 lg:col-span-4">
              <div className="mx-auto max-w-sm">
                <TeacherIllustration className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}