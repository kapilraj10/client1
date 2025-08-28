import React from "react";
const people = [
  {
    name: "Name Here",
    quote:
      "Some part of the testimonials or some good points they've quote. Include numbers if possible here...",
    img: "/client-1.jpg",
    rating: 5, 
  },
  {
    name: "Name Here",
    quote:
      "Some part of the testimonials or some good points they've quote. Include numbers if possible here...",
    img: "/client-2.jpg",
    rating: 4,
  },
  {
    name: "Name Here",
    quote:
      "Some part of the testimonials or some good points they've quote. Include numbers if possible here...",
    img: "/client-3.jpg",
    rating: 3,
  },
];

function Stars({ rating = 4 }) {
  return (
    <div className="mt-4 flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="h-4 w-4 fill-current"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.984 2.136c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M12 17.27l5.18 3.04-1.64-5.63L20 10.24l-5.73-.5L12 4.5l-2.27 5.24-5.73.5 4.46 4.44-1.64 5.63L12 17.27z" />
          </svg>
        )
      )}
    </div>
  );
}

export default function Testimonials() {
  const fallback =
    "https://i.postimg.cc/28dnthg7/client-2.png";

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* heading */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-violet-600 uppercase">
            Testimonials
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Words from our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Clients
            </span>
          </h2>
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((p, idx) => (
            <article
              key={idx}
              className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 bg-black"
            >
              {/* portrait */}
              <img
                src={p.img}
                onError={(e) => {
                  e.currentTarget.src = fallback;
                }}
                alt=""
                className="h-[460px] w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-white text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-5 text-white/90">
                  {p.quote}
                </p>

                <Stars rating={p.rating} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}