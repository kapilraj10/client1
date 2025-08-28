import React from "react";

export default function TrustStudents() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="absolute -left-[32%] -top-[42%] h-[120%] w-[120%] opacity-80 [mask-image:radial-gradient(62%_62%_at_18%_12%,black,transparent)]"
          viewBox="0 0 1400 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cornerGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EDE9FE" />
              <stop offset="100%" stopColor="#DDD6FE" />
            </linearGradient>
          </defs>
          {[
            { r: 280, dash: "0 0", opacity: 0.55 },
            { r: 420, dash: "8 10", opacity: 0.45 },
            { r: 580, dash: "0 0", opacity: 0.35 },
            { r: 760, dash: "8 12", opacity: 0.28 },
            { r: 940, dash: "0 0", opacity: 0.2 },
          ].map((c, i) => (
            <circle
              key={i}
              cx="-40"
              cy="-40"
              r={c.r}
              stroke="url(#cornerGrad)"
              strokeWidth="2"
              strokeDasharray={c.dash}
              opacity={c.opacity}
            />
          ))}
        </svg>
      </div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[70vh] py-16 sm:py-20 lg:py-24 flex flex-col items-center justify-center text-center">
  {/* heading */}
  <div className="mt-4">
    <h2 className="text-[38px] sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
      Trust our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-700">
        Students
      </span>
    </h2>
  </div>
        <div className="flex-1" />
        <div className="pb-4 flex justify-center">
          <a
            href="/students"
            className="inline-flex items-center gap-2 rounded-full border border-violet-400 px-5 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-50 transition-colors"
          >
            View more
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l5 5A1 1 0 0116 9h-5a1 1 0 110-2h2.586L9.293 4.707a1 1 0 010-1.414z" />
            </svg>
            <svg
              className="h-4 w-4 -ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l5 5A1 1 0 0116 9h-5a1 1 0 110-2h2.586L9.293 4.707a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}