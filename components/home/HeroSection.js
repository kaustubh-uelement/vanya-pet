"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import PawPrint from "../ui/PawPrint";

const avatars = [
  { initials: "R", bg: "#F9A8D4" },
  { initials: "A", bg: "#C4B5FD" },
  { initials: "S", bg: "#6EE7B7" },
];

const IMAGE_CONTAINER_HEIGHT = "clamp(280px, 44vw, 500px)";

export default function HeroSection() {
  return (
    <section
      className="relative bg-white"
      style={{
        paddingTop: "80px",
        overflowX: "clip",
        overflowY: "visible",
      }}
      aria-label="Hero"
    >
      {/* ══ SCATTERED PAWS ══ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <PawPrint
          size={28}
          color="#D1D5DB"
          style={{
            position: "absolute",
            top: "20%",
            left: "2%",
            transform: "rotate(-15deg)",
            opacity: 0.55,
          }}
        />
        <PawPrint
          size={16}
          color="#D1D5DB"
          style={{
            position: "absolute",
            top: "58%",
            left: "5%",
            transform: "rotate(10deg)",
            opacity: 0.4,
          }}
        />
        <PawPrint
          size={20}
          color="#F472B6"
          style={{
            position: "absolute",
            top: "15%",
            right: "25%",
            transform: "rotate(20deg)",
            opacity: 0.35,
          }}
        />
        <PawPrint
          size={14}
          color="#F472B6"
          style={{
            position: "absolute",
            top: "40%",
            right: "11%",
            transform: "rotate(-12deg)",
            opacity: 0.3,
          }}
        />
        <PawPrint
          size={18}
          color="#F472B6"
          style={{
            position: "absolute",
            top: "60%",
            right: "32%",
            transform: "rotate(6deg)",
            opacity: 0.25,
          }}
        />
        <PawPrint
          size={12}
          color="#D1D5DB"
          style={{
            position: "absolute",
            top: "10%",
            right: "46%",
            transform: "rotate(15deg)",
            opacity: 0.25,
          }}
        />
      </div>

      {/* ══ SEARCH BAR ══ */}
      <div
        className="relative flex justify-center px-4 z-10"
        style={{ paddingTop: "clamp(1rem, 2.5vw, 1.75rem)" }}
      >
        <div
          role="search"
          aria-label="Product search — coming soon"
          className="flex items-center gap-2 bg-white w-full rounded-md"
          style={{
            maxWidth: "560px",
            border: "1.5px solid #E5E7EB",
            padding: "0.5rem 0.5rem 0.5rem 1.25rem",
          }}
        >
          <input
            type="text"
            placeholder="Search for more than 10,000 products"
            disabled
            aria-label="Search products"
            className="flex-1 bg-transparent outline-none text-gray-400 placeholder-gray-400 cursor-default min-w-0 border-none"
            style={{ fontSize: "clamp(0.8rem, 2vw, 0.9375rem)" }}
          />
          <div
            aria-hidden="true"
            className="flex items-center justify-center rounded-full shrink-0"
            style={{ width: "36px", height: "36px" }}
          >
            <Search size={18} color="black" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* ══ MAIN CONTENT GRID ══ */}
      <div
        className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-end"
        style={{
          maxWidth: "1200px",
          paddingInline: "clamp(1rem, 5vw, 2rem)",
          gap: "clamp(1rem, 3vw, 2rem)",
        }}
      >
        {/* ── LEFT — Text column ── */}
        <div
          style={{
            paddingTop: "clamp(2rem, 5vw, 3.5rem)",
            paddingBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <div className="w-full" style={{ maxWidth: "min(100%, 480px)" }}>
            {/* Headline */}
            <div className="relative mb-4">
              <h1
                className="animate-slide-up font-title"
                style={{ lineHeight: 1.05 }}
              >
                <span className="flex items-center gap-2 flex-wrap">
                  The Best
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-0.5"
                  >
                    <svg
                      width="clamp(22px,3.2vw,38px)"
                      height="clamp(22px,3.2vw,38px)"
                      viewBox="0 0 40 40"
                      fill="#EC4899"
                      className="inline align-middle"
                    >
                      <ellipse cx="10" cy="8" rx="4.5" ry="5.5" />
                      <ellipse cx="21" cy="5" rx="4.5" ry="5.5" />
                      <ellipse cx="31" cy="8" rx="4.5" ry="5.5" />
                      <ellipse cx="5" cy="18" rx="3.5" ry="4.5" />
                      <path d="M20 16 C10 16 6 22 6 27 C6 33 12 36 20 36 C28 36 34 33 34 27 C34 22 30 16 20 16Z" />
                    </svg>
                    <svg
                      width="clamp(13px,1.8vw,22px)"
                      height="clamp(13px,1.8vw,22px)"
                      viewBox="0 0 40 40"
                      fill="#EC4899"
                      className="inline align-top mt-0.5"
                    >
                      <ellipse cx="10" cy="8" rx="4.5" ry="5.5" />
                      <ellipse cx="21" cy="5" rx="4.5" ry="5.5" />
                      <ellipse cx="31" cy="8" rx="4.5" ry="5.5" />
                      <ellipse cx="5" cy="18" rx="3.5" ry="4.5" />
                      <path d="M20 16 C10 16 6 22 6 27 C6 33 12 36 20 36 C28 36 34 33 34 27 C34 22 30 16 20 16Z" />
                    </svg>
                  </span>
                </span>
                <span className="block">Pet Parenting App</span>
              </h1>
            </div>

            {/* Subheading */}
            <p
              className="animate-slide-up delay-100 font-body text-gray-600 leading-relaxed mb-5"
              style={{
                fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)",
                maxWidth: "42ch",
              }}
            >
              One app to care better and give your pet their best life.
            </p>

            {/* Social proof pill */}
            <div
              className="animate-slide-up delay-200 flex items-center gap-3 w-fit px-4 py-2.5 rounded-full mb-6"
              style={{ background: "#EDE1FF", border: "1px solid #E9D8FD" }}
            >
              <div className="flex items-center">
                {avatars.map((av, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    className="font-body flex items-center justify-center rounded-full font-bold text-gray-700 border-2 border-white shrink-0 relative"
                    style={{
                      width: "30px",
                      height: "30px",
                      background: av.bg,
                      marginLeft: i === 0 ? 0 : "-8px",
                      fontSize: "11px",
                      zIndex: avatars.length - i,
                    }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>
              <p
                className="font-body font-medium text-gray-700"
                style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
              >
                &ldquo;All my pet records in one place&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Single hero image ── */}
        <div
          className="relative w-full self-end"
          style={{
            height: IMAGE_CONTAINER_HEIGHT,
            zIndex: 20,
          }}
        >
          <div className="absolute hero-img-bleed">
            <Image
              src="/images/hero-bg.png"
              alt="Dog and cat peeking over the edge with pink circle background"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* ══ BOTTOM SHADOW ══ */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "80px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.045) 40%, transparent 100%)",
          zIndex: 8,
        }}
      />
    </section>
  );
}
