import React, { useState } from "react";
import Logo from "../assets/logo.png"
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={Logo}
              alt="MAKIT Labs"
              className="h-8 w-auto"
              onError={(e) => {
             
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="sr-only">MAKIT Labs</span>
          </a>

          {/*nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="about" className="hover:text-indigo-600 transition-colors">
              About Us
            </a>
            <a href="courses" className="hover:text-indigo-600 transition-colors">
              Courses
            </a>
            <a href="code-generator" className="hover:text-indigo-600 transition-colors">
              Code Generator
            </a>

            {/* dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 mt-2 min-w-[12rem] rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-black/5">
                <ul className="py-2 text-sm text-slate-700">
                  <li>
                    <a
                      href="/product-1"
                      className="block px-4 py-2 hover:bg-slate-50"
                    >
                      Product One
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-2"
                      className="block px-4 py-2 hover:bg-slate-50"
                    >
                      Product Two
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-3"
                      className="block px-4 py-2 hover:bg-slate-50"
                    >
                      Product Three
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        
          <div className="flex items-center gap-3">
            <a
              href="tel:+9779841234567"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-indigo-500/80 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C11.3 21 3 12.7 3 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" />
              </svg>
              +977-9841234567
            </a>

            <a
              href="/enroll"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
            >
              Enroll Now
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l5 5A1 1 0 0116 9h-5a1 1 0 110-2h2.586L9.293 4.707a1 1 0 010-1.414z" />
                <path d="M3 11a1 1 0 011-1h9a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </a>

            
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ${
            mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-200 py-3 space-y-1 text-sm font-medium text-slate-700">
            <a href="/about" className="block px-1 py-2 hover:text-indigo-600">
              About Us
            </a>
            <a href="/courses" className="block px-1 py-2 hover:text-indigo-600">
              Courses
            </a>
            <details className="px-1 py-2">
              <summary className="cursor-pointer list-none flex items-center justify-between hover:text-indigo-600">
                <span>Products</span>
                <svg
                  className="h-4 w-4 flex-none"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div className="mt-2 ml-3 space-y-1">
                <a href="/product-1" className="block py-1 hover:text-indigo-600">
                  Product One
                </a>
                <a href="/product-2" className="block py-1 hover:text-indigo-600">
                  Product Two
                </a>
                <a href="/product-3" className="block py-1 hover:text-indigo-600">
                  Product Three
                </a>
              </div>
            </details>
            <a
              href="tel:+9779841234567"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/80 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C11.3 21 3 12.7 3 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" />
              </svg>
              +977-9841234567
            </a>
            <a
              href="/enroll"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md"
            >
              Enroll Now
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l5 5A1 1 0 0116 9h-5a1 1 0 110-2h2.586L9.293 4.707a1 1 0 010-1.414z" />
                <path d="M3 11a1 1 0 011-1h9a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
