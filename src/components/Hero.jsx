// import React from "react";

// export default function Hero() {
//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -left-[20%] top-[-30%] h-[140vh] w-[140vw] opacity-[0.5] [mask-image:radial-gradient(60%_60%_at_40%_40%,black,transparent)]">
//           <svg
//             className="h-full w-full"
//             viewBox="0 0 1400 1000"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {[220, 360, 520, 700, 900, 1120].map((r, i) => (
//               <ellipse
//                 key={r}
//                 cx="500"
//                 cy="420"
//                 rx={r}
//                 ry={r * 0.55}
//                 stroke="url(#bgGrad)"
//                 strokeWidth="1.2"
//                 strokeDasharray="6 10"
//                 opacity={0.18 - i * 0.02}
//               />
//             ))}
//             <defs>
//               <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
//                 <stop offset="0%" stopColor="#6D28D9" />
//                 <stop offset="100%" stopColor="#9333EA" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </div>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           <div>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
//               Stop just{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//                 learning
//               </span>{" "}
//               about science.
//               <br className="hidden sm:block" />
//               Start{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//                 doing
//               </span>{" "}
//               it.
//             </h1>

//             <p className="mt-6 max-w-xl text-lg text-slate-600">
//               Your classroom said “Read About It.” We say “Go Build It.”
//             </p>

//             <div className="mt-8 flex items-center gap-4">
//               <a
//                 href="/demo"
//                 className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
//               >
//                 Join our free demo class
//                 <svg
//                   className="h-4 w-4"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path d="M10.293 3.293a1 1 0 011.414 0l5 5A1 1 0 0116 9h-5a1 1 0 110-2h2.586L9.293 4.707a1 1 0 010-1.414z" />
//                   <path d="M3 11a1 1 0 011-1h9a1 1 0 110 2H4a1 1 0 01-1-1z" />
//                 </svg>
//               </a>
//             </div>

            
//             <div className="mt-10">
//               <p className="text-sm font-medium text-slate-500">Trusted by</p>
//               <div className="mt-4 flex items-center gap-5 sm:gap-6">
                
//                 <a
//                   href="https://trello.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="h-10 w-10 rounded-lg bg-[#0052CC] grid place-items-center shadow-sm ring-1 ring-black/5"
//                   aria-label="Trello"
//                   title="Trello"
//                 >
//                   <svg viewBox="0 0 48 48" className="h-5 w-5" role="img" aria-hidden="true">
//                     <rect x="8" y="8" width="14" height="28" rx="3" fill="#fff" />
//                     <rect x="26" y="8" width="14" height="18" rx="3" fill="#fff" />
//                   </svg>
//                 </a>

//                 <span
//                   className="h-10 w-10 rounded-lg bg-[#3B82F6] grid place-items-center shadow-sm ring-1 ring-black/5"
//                   aria-label="Paw logo"
//                   title="Paw"
//                   role="img"
//                 >
//                   <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
//                     <circle cx="16" cy="18" r="3.4" fill="#fff" />
//                     <circle cx="24" cy="15.5" r="3.1" fill="#fff" />
//                     <circle cx="32" cy="18" r="3.4" fill="#fff" />
//                     <circle cx="20" cy="23" r="3.2" fill="#fff" />
//                     <circle cx="28" cy="23" r="3.2" fill="#fff" />
//                     {/* Pad */}
//                     <path
//                       d="M24 26c6.5 0 10.5 4.2 10.5 8.2 0 2.9-2.7 4.8-5.4 4.8-2.1 0-3.2-1.1-5.1-1.1s-3 1.1-5.1 1.1c-2.7 0-5.4-1.9-5.4-4.8C13.5 30.2 17.5 26 24 26z"
//                       fill="#fff"
//                     />
//                   </svg>
//                 </span>

//                 <a
//                   href="https://vimeo.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="h-10 w-10 rounded-lg bg-[#1AB7EA] grid place-items-center shadow-sm ring-1 ring-black/5"
//                   aria-label="Vimeo"
//                   title="Vimeo"
//                 >
//                   <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true">
//                     <path
//                       fill="#fff"
//                       d="M22.38 6.17c-.09 2-1.49 4.74-4.21 8.23-2.81 3.63-5.18 5.44-7.12 5.44-1.2 0-2.22-1.11-3.05-3.33L6.6 9.82c-.58-1.56-1.21-2.34-1.88-2.34-.15 0-.67.31-1.56.93L2 7.19c.98-.86 1.94-1.72 2.89-2.58C6.04 3.84 6.93 3.4 7.67 3.4c1.53 0 2.48 1.42 2.85 4.27.39 3.28.66 5.32.82 6.13.45 2.05.94 3.08 1.47 3.08.41 0 1.02-.64 1.83-1.91.81-1.27 1.24-2.24 1.29-2.89.11-1.1-.32-1.65-1.29-1.65-.46 0-.94.1-1.44.29.96-3.14 2.78-4.68 5.45-4.62 1.99.04 2.93 1.14 2.73 3.17Z"
//                     />
//                   </svg>
//                 </a>
//                 <a
//                   href="https://airbnb.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="h-10 w-10 rounded-lg bg-[#FF5A5F] grid place-items-center shadow-sm ring-1 ring-black/5"
//                   aria-label="Airbnb"
//                   title="Airbnb"
//                 >
//                   <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true">
//                     <path
//                       fill="#fff"
//                       d="M12 19.5c1.83 0 3.3-1.49 3.3-3.33 0-.85-.32-1.62-.84-2.2l-2.46-2.83-2.47 2.83c-.52.58-.83 1.35-.83 2.2 0 1.84 1.47 3.33 3.3 3.33Zm0 2.25c-3.06 0-5.55-2.51-5.55-5.58 0-1.33.47-2.55 1.25-3.49l3.87-4.43c.27-.31.63-.47 1.01-.47.37 0 .73.16 1 .47l3.88 4.43c.77.94 1.24 2.16 1.24 3.49 0 3.07-2.48 5.58-5.55 5.58Zm0-16.6c-.79-1.5-1.6-2.28-2.44-2.33-.58-.04-1.13.25-1.35.79-.21.52-.07 1.07.28 1.61 1.01 1.54 2.33 3.33 3.51 4.75l.01.01.01-.01c1.18-1.42 2.49-3.21 3.51-4.75.35-.54.5-1.09.28-1.61-.22-.54-.77-.83-1.35-.79-.83.05-1.65.83-2.45 2.33Z"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-[640px]">
//             <svg
//               className="absolute -top-3 left-[12%] h-6 w-6 text-yellow-400 drop-shadow-sm"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path d="M12 2l2.1 5.7L20 10l-5.9 1.6L12 18l-2.1-6.4L4 10l5.9-2.3L12 2z" />
//             </svg>

//             <div className="relative">
//               <svg className="w-full h-auto" viewBox="0 0 720 560" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                   <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="#6D28D9" />
//                     <stop offset="100%" stopColor="#9333EA" />
//                   </linearGradient>

//                   <clipPath id="blobClip">
//                     <path
//                       d="
//                         M20,120
//                         C160,80 290,70 420,95
//                         C560,120 620,110 700,95
//                         L700,520
//                         C520,560 300,560 160,520
//                         C80,500 30,470 20,430
//                         Z
//                       "
//                     />
//                   </clipPath>
//                 </defs>

//                 <image
//                   href="https://i.postimg.cc/DwR8zDKd/1754327543919.jpg"
//                   width="720"
//                   height="560"
//                   preserveAspectRatio="xMidYMid slice"
//                   clipPath="url(#blobClip)"
//                 />

//                 <path
//                   d="
//                     M20,120
//                     C160,80 290,70 420,95
//                     C560,120 620,110 700,95
//                     L700,520
//                     C520,560 300,560 160,520
//                     C80,500 30,470 20,430
//                     Z
//                   "
//                   fill="transparent"
//                   stroke="url(#strokeGrad)"
//                   strokeWidth="4"
//                 />
//               </svg>

             
//               <div className="absolute left-[46%] -top-3">
//                 <div className="rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-600 shadow-lg ring-1 ring-slate-200">
//                   10 Workshops
//                 </div>
//               </div>

//               <div className="absolute right-3 bottom-4">
//                 <div className="rounded-2xl bg-white/90 backdrop-blur px-3 py-2 shadow-xl ring-1 ring-slate-200">
//                   <p className="text-[11px] font-semibold text-slate-600">2.1k+ Students</p>
//                   <div className="mt-2 flex -space-x-2">
//                     {["bg-pink-400", "bg-amber-400", "bg-lime-400", "bg-emerald-400", "bg-sky-400", "bg-violet-400"].map(
//                       (c, i) => (
//                         <span key={i} className={`h-6 w-6 rounded-full ${c} ring-2 ring-white`} title="Student" />
//                       )
//                     )}
//                     <span className="h-6 w-6 rounded-full bg-slate-200 ring-2 ring-white grid place-items-center text-[10px] font-bold text-slate-700">
//                       +
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="pointer-events-none absolute -bottom-4 inset-x-10 h-6 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-purple-500/10 blur-xl" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useId } from "react";

export default function Hero() {
  const clipId = useId();
  const gradId = useId();

  return (
    <section className="relative overflow-hidden">
      {/* Subtle dashed rings background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[20%] top-[-30%] h-[160vh] w-[160vw] opacity-60 [mask-image:radial-gradient(60%_60%_at_40%_40%,black,transparent)]">
          <svg
            className="h-full w-full"
            viewBox="0 0 1600 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[260, 420, 600, 820, 1040, 1260, 1480].map((r, i) => (
              <ellipse
                key={r}
                cx="560"
                cy="500"
                rx={r}
                ry={r * 0.56}
                stroke="url(#ringGrad)"
                strokeWidth="1.2"
                strokeDasharray="6 10"
                opacity={0.18 - i * 0.02}
              />
            ))}
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6D28D9" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-6">
            <h1 className="text-[40px] sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              <span className="block">Stop just{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  learning
                </span>
              </span>
              <span className="block">about science.</span>
              <span className="block">Start{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  doing
                </span>{" "}
                it.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] sm:text-base text-slate-600">
              Your classroom said “Read About It.” We say “Go Build It.”
            </p>

            <div className="mt-8">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
              >
                Join our free demo class
                <span aria-hidden="true" className="text-lg leading-none">»</span>
              </a>
            </div>

            {/* Trusted by */}
            <div className="mt-12">
              <p className="text-sm font-medium text-slate-500">Trusted by</p>
              <div className="mt-4 flex items-center gap-5 sm:gap-6">
                {/* Trello */}
                <a
                  href="https://trello.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-lg bg-[#0052CC] grid place-items-center shadow-sm ring-1 ring-black/5"
                  aria-label="Trello"
                  title="Trello"
                >
                  <svg viewBox="0 0 48 48" className="h-5 w-5" role="img" aria-hidden="true">
                    <rect x="8" y="8" width="14" height="28" rx="3" fill="#fff" />
                    <rect x="26" y="8" width="14" height="18" rx="3" fill="#fff" />
                  </svg>
                </a>

                {/* Paw (generic) */}
                <span
                  className="h-10 w-10 rounded-lg bg-[#3B82F6] grid place-items-center shadow-sm ring-1 ring-black/5"
                  aria-label="Paw logo"
                  title="Paw"
                  role="img"
                >
                  <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                    <circle cx="16" cy="18" r="3.4" fill="#fff" />
                    <circle cx="24" cy="15.5" r="3.1" fill="#fff" />
                    <circle cx="32" cy="18" r="3.4" fill="#fff" />
                    <circle cx="20" cy="23" r="3.2" fill="#fff" />
                    <circle cx="28" cy="23" r="3.2" fill="#fff" />
                    <path
                      d="M24 26c6.5 0 10.5 4.2 10.5 8.2 0 2.9-2.7 4.8-5.4 4.8-2.1 0-3.2-1.1-5.1-1.1s-3 1.1-5.1 1.1c-2.7 0-5.4-1.9-5.4-4.8C13.5 30.2 17.5 26 24 26z"
                      fill="#fff"
                    />
                  </svg>
                </span>

                {/* Vimeo */}
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-lg bg-[#1AB7EA] grid place-items-center shadow-sm ring-1 ring-black/5"
                  aria-label="Vimeo"
                  title="Vimeo"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true">
                    <path
                      fill="#fff"
                      d="M22.38 6.17c-.09 2-1.49 4.74-4.21 8.23-2.81 3.63-5.18 5.44-7.12 5.44-1.2 0-2.22-1.11-3.05-3.33L6.6 9.82c-.58-1.56-1.21-2.34-1.88-2.34-.15 0-.67.31-1.56.93L2 7.19c.98-.86 1.94-1.72 2.89-2.58C6.04 3.84 6.93 3.4 7.67 3.4c1.53 0 2.48 1.42 2.85 4.27.39 3.28.66 5.32.82 6.13.45 2.05.94 3.08 1.47 3.08.41 0 1.02-.64 1.83-1.91.81-1.27 1.24-2.24 1.29-2.89.11-1.1-.32-1.65-1.29-1.65-.46 0-.94.1-1.44.29.96-3.14 2.78-4.68 5.45-4.62 1.99.04 2.93 1.14 2.73 3.17Z"
                    />
                  </svg>
                </a>

                {/* Airbnb */}
                <a
                  href="https://airbnb.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-lg bg-[#FF5A5F] grid place-items-center shadow-sm ring-1 ring-black/5"
                  aria-label="Airbnb"
                  title="Airbnb"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-hidden="true">
                    <path
                      fill="#fff"
                      d="M12 19.5c1.83 0 3.3-1.49 3.3-3.33 0-.85-.32-1.62-.84-2.2l-2.46-2.83-2.47 2.83c-.52.58-.83 1.35-.83 2.2 0 1.84 1.47 3.33 3.3 3.33Zm0 2.25c-3.06 0-5.55-2.51-5.55-5.58 0-1.33.47-2.55 1.25-3.49l3.87-4.43c.27-.31.63-.47 1.01-.47.37 0 .73.16 1 .47l3.88 4.43c.77.94 1.24 2.16 1.24 3.49 0 3.07-2.48 5.58-5.55 5.58Zm0-16.6c-.79-1.5-1.6-2.28-2.44-2.33-.58-.04-1.13.25-1.35.79-.21.52-.07 1.07.28 1.61 1.01 1.54 2.33 3.33 3.51 4.75l.01.01.01-.01c1.18-1.42 2.49-3.21 3.51-4.75.35-.54.5-1.09.28-1.61-.22-.54-.77-.83-1.35-.79-.83.05-1.65.83-2.45 2.33Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-6 relative">
            {/* Star accent */}
            <svg
              className="absolute -top-2 left-[12%] h-7 w-7 text-yellow-400 drop-shadow-sm"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l2.1 5.7L20 10l-5.9 1.6L12 18l-2.1-6.4L4 10l5.9-2.3L12 2z" />
            </svg>

            <div className="relative">
              <svg className="w-full h-auto" viewBox="0 0 760 560" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6D28D9" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>

                  {/* Wavy blob shape */}
                  <clipPath id={clipId}>
                    <path
                      d="
                        M40,120
                        C210,80 370,60 520,90
                        C640,115 700,110 740,96
                        L740,520
                        C580,560 340,560 190,520
                        C100,495 52,468 40,430
                        Z
                      "
                    />
                  </clipPath>
                </defs>

                {/* Image clipped to blob */}
                <image
                  href="https://i.postimg.cc/DwR8zDKd/1754327543919.jpg"
                  width="760"
                  height="560"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#${clipId})`}
                />

                {/* Inner subtle white stroke */}
                <path
                  d="
                    M40,120
                    C210,80 370,60 520,90
                    C640,115 700,110 740,96
                    L740,520
                    C580,560 340,560 190,520
                    C100,495 52,468 40,430
                    Z
                  "
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeWidth="3"
                />

                {/* Outer gradient stroke to match screenshot */}
                <path
                  d="
                    M36,112
                    C206,72 366,52 516,82
                    C640,108 706,104 748,90
                    L748,526
                    C584,566 336,566 182,524
                    C94,500 48,470 36,430
                    Z
                  "
                  fill="none"
                  stroke={`url(#${gradId})`}
                  strokeWidth="3.5"
                />
              </svg>

              {/* "10 Workshops" pill */}
              <div className="absolute left-[42%] top-[52%] -translate-y-1/2">
                <div className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-purple-700 shadow-lg ring-1 ring-purple-200">
                  10 Workshops
                </div>
              </div>

              {/* Students card */}
              <div className="absolute right-4 bottom-4">
                <div className="rounded-2xl bg-white/95 backdrop-blur px-4 py-2.5 shadow-xl ring-1 ring-slate-200">
                  <p className="text-[12px] font-semibold text-slate-600">
                    2.1k+ Students
                  </p>
                  <div className="mt-2 flex -space-x-2">
                    {["bg-purple-300","bg-pink-300","bg-rose-300","bg-amber-300","bg-lime-300","bg-sky-300"].map((c, i) => (
                      <span key={i} className={`h-7 w-7 rounded-full ${c} ring-2 ring-white`} />
                    ))}
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-500 text-white text-sm font-bold ring-2 ring-white">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft glow under blob */}
            <div className="pointer-events-none absolute inset-x-12 -bottom-4 h-6 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-purple-500/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}