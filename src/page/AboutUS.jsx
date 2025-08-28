import { SiTrello, SiReact, SiVite, SiVuedotjs, SiGatsby } from "react-icons/si";
import ProfileSecation from "./ProfileSecation";
export default function AboutUS() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background subtle rings */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="#6366f1" strokeOpacity="0.14" strokeWidth="1.5">
            <circle cx="600" cy="-220" r="420" />
            <circle cx="600" cy="-220" r="520" />
            <circle cx="600" cy="-220" r="620" />
            <circle cx="600" cy="-220" r="720" />
            <circle cx="600" cy="-220" r="820" />
            <circle cx="600" cy="-220" r="920" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto max-w-[980px] px-6 py-16 md:py-20 lg:py-24 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Know more about
        </h1>
        <p className="mt-2 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Malit Labs
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-[13px] leading-6 text-slate-600 md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco, quis nostrud exercitation veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation veniam, quis nostrud
        </p>

        <div className="mt-8">
          <a
            href="#!"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(110,64,255,0.35)] transition hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
          >
            Join our course to know more about us
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M7 5l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="mt-10">
              <p className="text-sm font-medium text-slate-500">Trusted by</p>
              <div className="mt-4 flex items-center gap-5 sm:gap-6">
                
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
                    {/* Pad */}
                    <path
                      d="M24 26c6.5 0 10.5 4.2 10.5 8.2 0 2.9-2.7 4.8-5.4 4.8-2.1 0-3.2-1.1-5.1-1.1s-3 1.1-5.1 1.1c-2.7 0-5.4-1.9-5.4-4.8C13.5 30.2 17.5 26 24 26z"
                      fill="#fff"
                    />
                  </svg>
                </span>

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
      </div>
    </section>
    
  );
}

function Brand({ icon }) {
  return (
    <div className="grid h-8 w-8 place-items-center rounded-md bg-white ring-1 ring-slate-200 shadow-sm">
      <div className="h-5 w-5">{icon}</div>
    </div>
  

  );
}