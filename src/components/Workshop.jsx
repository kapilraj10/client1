import React from "react";

export default function Workshop({ imgSrc = "/workshop.png" }) {
  const fallback =
    "https://i.postimg.cc/fTz5sMmd/cheerful-smart-schoolboy-sitting-table-600nw-1213293643.webp";

  const avatars = [
    "bg-violet-500",
    "bg-pink-400",
    "bg-amber-400",
    "bg-lime-400",
    "bg-emerald-400",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="absolute -left-[30%] bottom-[-20%] h-[140%] w-[160%] opacity-60 [mask-image:radial-gradient(65%_65%_at_30%_70%,black,transparent)]"
          viewBox="0 0 1600 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wk-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          {Array.from({ length: 7 }).map((_, i) => {
            const rx = 380 + i * 160;
            const ry = 240 + i * 110;
            return (
              <ellipse
                key={i}
                cx="420"
                cy="760"
                rx={rx}
                ry={ry}
                stroke="url(#wk-bg)"
                strokeWidth="1.2"
                strokeDasharray="6 12"
                opacity={0.14 - i * 0.015}
              />
            );
          })}
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* left copy */}
          <div className="lg:col-span-6">
            <p className="text-[12px] font-semibold tracking-widest uppercase text-violet-600">
              Workshop
            </p>

            <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-700">
                workshop
              </span>
            </h2>

            <div className="mt-5 max-w-xl space-y-4 text-[15px] sm:text-[16px] leading-6 text-slate-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation veniam, quis
                nostrud.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation veniam, quis
                nostrud.
              </p>
            </div>

            <p className="mt-4 text-slate-800 text-sm">Some points maybe</p>

            <div className="mt-7">
              <a
                href="/workshop"
                className="inline-flex items-center gap-2 rounded-full border border-violet-300 px-5 py-3 text-[14px] font-semibold text-violet-700 hover:bg-violet-50 transition-colors"
              >
                Know more about our workshop
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

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[640px]">
              {/* main image */}
              <img
                src={imgSrc}
                onError={(e) => {
                  e.currentTarget.src = fallback;
                }}
                alt=""
                className="w-full h-auto object-contain drop-shadow-xl"
              />

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[92%] h-10 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-purple-500/10 blur-xl pointer-events-none" />

              
              {/* avatars only */}
              <div className="absolute -top-2 right-4">
                <div className="flex items-center -space-x-2 rounded-full bg-white/90 backdrop-blur px-3 py-2 shadow-xl ring-1 ring-violet-100">
                  {avatars.map((c, i) => (
                    <span
                      key={i}
                      className={`h-7 w-7 rounded-full ${c} ring-2 ring-white grid place-items-center text-white`}
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 20.5A7.5 7.5 0 0116.9 17h.6A7.5 7.5 0 0122 24H2v-3.5z" />
                      </svg>
                    </span>
                  ))}
                  <span className="h-7 w-7 rounded-full bg-violet-600 ring-2 ring-white grid place-items-center text-white text-[11px] font-bold">
                    +
                  </span>
                </div>
              </div>

              {/*  10 Workshops pill */}
              <div className="absolute left-[6%] top-[46%]">
                <div className="rounded-full bg-white/85 backdrop-blur px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-lg ring-1 ring-violet-100">
                  10 Workshops
                </div>
              </div>
              <div className="absolute right-2 bottom-2">
                <div className="rounded-2xl bg-white/90 backdrop-blur px-3 py-2 shadow-xl ring-1 ring-violet-100">
                  <p className="text-[11px] font-semibold text-slate-600">
                    2.1k+ Students
                  </p>
                  <div className="mt-2 flex -space-x-2">
                    {[
                      "bg-violet-500",
                      "bg-pink-400",
                      "bg-emerald-400",
                      "bg-amber-400",
                      "bg-sky-400",
                    ].map((c, i) => (
                      <span
                        key={i}
                        className={`h-6 w-6 rounded-full ${c} ring-2 ring-white grid place-items-center`}
                        title="Student"
                      >
                        <svg
                          className="h-3 w-3 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 20.5A7.5 7.5 0 0116.9 17h.6A7.5 7.5 0 0122 24H2v-3.5z" />
                        </svg>
                      </span>
                    ))}
                    <span className="h-6 w-6 rounded-full bg-slate-200 ring-2 ring-white grid place-items-center text-[10px] font-bold text-slate-700">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}