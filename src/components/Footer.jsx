import React from "react";
import logoSrc from "../assets/logo.png";
export default function Footer({
  logo = logoSrc,
  meetingHref = "/book-meeting",
}) {
  return (
    <footer className="relative w-full bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="relative">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[26px] bg-gradient-to-r from-indigo-600 to-violet-700 px-6 sm:px-10 py-10 sm:py-12 lg:py-16 text-center text-white shadow-[0_30px_60px_-20px_rgba(124,58,237,0.45)]">
              <h2 className="text-[34px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Ready to work,{" "}
                <span className="underline decoration-white/30 underline-offset-8">
                  Let’s chat
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/90">
                Trying to book one on one meeting, contact us at
              </p>

              <div className="mt-7">
                <a
                  href={meetingHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 sm:px-6 py-2.5 text-sm font-semibold text-violet-700 ring-1 ring-white/60 hover:bg-white/95 transition-colors"
                >
                  Book a meeting with us
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
          </div>

          <div className="h-10" />
        </div>

        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-start gap-4">
            
              <div className="shrink-0">
             
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-10 w-auto"
                  onError={(e) => {
                    
                    e.currentTarget.outerHTML =
                      '<div class="h-10 w-28 rounded bg-white/10 grid place-items-center text-white font-bold">LOGO</div>';
                  }}
                />
              </div>

              <div className="sr-only">Makit Labs</div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-6">
              <p className="text-white">
                We are a group of Engineers and Educators who provide:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Weekly STEAM classes</li>
                <li>Robotics, AI and Coding Bootcamps at Schools</li>
                <li>Kit to practically learn STEAM concepts</li>
              </ul>

              <p className="text-xs text-neutral-400">
                And make sure to check our YouTube channel "Third World Nerd"
                where we blend technology with humour to simultaneously provide
                both education and entertainment.
              </p>
              <p className="text-xs text-neutral-400">
                Because “knowing Ohm’s Law” is useless until you can make a
                robot dog pee on a pole.
              </p>
            </div>
          </div>

    
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <h3 className="text-white text-lg font-semibold">Information</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Our Products
                </a>
              </li>
            </ul>

            <h4 className="mt-8 text-white text-lg font-semibold">
              Main Location
            </h4>
            <p className="mt-2 text-sm text-neutral-400">
              detailed location here
            </p>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-neutral-300">+977-9841234567</p>
              <p className="text-neutral-300">info@makitlabs.com.np</p>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 1.89 6.49 1.89 12.06c0 5.02 3.67 9.18 8.47 9.94v-7.03H7.9v-2.91h2.46V9.41c0-2.43 1.45-3.77 3.67-3.77 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.58.74-1.58 1.5v1.8h2.69l-.43 2.91h-2.26V22c4.8-.76 8.47-4.92 8.47-9.94Z" />
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0-5.3c2.5 0 2.8 0 3.8.06 1 .05 1.7.22 2.3.47.6.24 1.1.57 1.6 1.02.44.44.78.98 1.02 1.58.25.6.42 1.31.47 2.31.06 1 .06 1.35.06 3.76s0 2.76-.06 3.76c-.05 1-.22 1.7-.47 2.31a4.9 4.9 0 0 1-1.02 1.58c-.44.44-.98.78-1.58 1.02-.6.25-1.31.42-2.31.47-1 .06-1.35.06-3.76.06s-2.76 0-3.76-.06c-1-.05-1.7-.22-2.31-.47a4.9 4.9 0 0 1-1.58-1.02 4.9 4.9 0 0 1-1.02-1.58c-.25-.6-.42-1.31-.47-2.31C2.3 14.76 2.3 14.41 2.3 12s0-2.76.06-3.76c.05-1 .22-1.7.47-2.31.24-.6.57-1.14 1.02-1.58.44-.45.98-.78 1.58-1.02.6-.25 1.31-.42 2.31-.47C9.24 2 9.59 2 12 2Z" />
                  <circle cx="18" cy="6" r="1.2" />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M23.5 7.1a4.6 4.6 0 0 0-3.2-3.2C18.5 3.3 12 3.3 12 3.3s-6.5 0-8.3.6A4.6 4.6 0 0 0 .5 7.1 47.1 47.1 0 0 0 0 12a47 47 0 0 0 .5 4.9 4.6 4.6 0 0 0 3.2 3.2c1.8.6 8.3.6 8.3.6s6.5 0 8.3-.6a4.6 4.6 0 0 0 3.2-3.2A47 47 0 0 0 24 12c0-1.7-.1-3.3-.5-4.9ZM9.6 15.4V8.6l6.3 3.4-6.3 3.4Z" />
                </svg>
              </a>
            </div>

        
            <div className="mt-6">
              <a
                href="https://youtu.be/hZSTKfBtF3Y?si=2G1JLIueDpvUp9gQ"
                className="group relative block overflow-hidden rounded-xl ring-1 ring-white/10"
              >
                <img
                  src="https://i.postimg.cc/3N4G8b8P/Campers-work-on-their-robot-jpg.webp"
                  alt="Students working on a small robot"
                  className="h-40 w-full object-cover"
                />
                <span className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-violet-700 shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M9.5 7.5v9l8-4.5-8-4.5Z" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

      
        <div className="mt-12 border-t border-white/10 py-6">
          <p className="text-xs text-neutral-400">
            © 2025 MakitLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}