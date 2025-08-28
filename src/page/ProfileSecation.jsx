import React from "react";

const IMG =
  "https://i.postimg.cc/Fz7pRWf0/ka.webp";

export default function ProfileSecation ({ reverse = false }) {
  return (
    <section
      className={[
        "grid grid-cols-1 items-center gap-8 md:gap-12",
        "lg:grid-cols-2",
        reverse ? "lg:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      {/* Copy */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
          Safar Partner
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-tight tracking-tight">
          Er.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Kumar
          </span>
        </h2>

        <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
          Some people think…
        </p>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
          >
            Know more about Er. Kumar
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 5l5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Visual */}
      <div className="relative">
        {/* Accent star */}
        <svg
          className="absolute -top-2 left-6 h-6 w-6 text-yellow-400 drop-shadow-sm"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.1 5.7L20 10l-5.9 1.6L12 18l-2.1-6.4L4 10l5.9-2.3L12 2z" />
        </svg>

        {/* Image container with soft edge and subtle outline to match the feel */}
        <div className="relative mx-auto w-full max-w-md">
          {/* The image */}
          <img
            src={IMG}
            alt="Kid building a robot"
            className="w-full rounded-3xl object-cover shadow-xl ring-1 ring-slate-200"
          />

          {/* Top-left small stat pill over image */}
          <div className="absolute left-4 top-4">
            <div className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-slate-600 shadow ring-1 ring-slate-200">
              1.5M+ Learners
            </div>
          </div>

          {/* Bottom-right students group card */}
          <div className="absolute right-3 -bottom-4">
            <div className="rounded-2xl bg-white/95 backdrop-blur px-3 py-2 shadow-xl ring-1 ring-slate-200">
              <p className="text-[11px] font-semibold text-slate-600">2.1k+ Students</p>
              <div className="mt-2 flex -space-x-2">
                {[
                  "bg-pink-400",
                  "bg-amber-400",
                  "bg-lime-400",
                  "bg-emerald-400",
                  "bg-sky-400",
                  "bg-violet-400",
                ].map((c, i) => (
                  <span key={i} className={`h-6 w-6 rounded-full ${c} ring-2 ring-white`} title="Student" />
                ))}
                <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-700 ring-2 ring-white">
                  +
                </span>
              </div>
            </div>
          </div>

          {/* Soft under-glow */}
          <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-6 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-purple-500/10 blur-xl" />
        </div>
      </div>
    </section>
  );
}