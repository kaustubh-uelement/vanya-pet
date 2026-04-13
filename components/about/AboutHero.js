'use client'
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const crumbs = [
  { value: "2026", label: "Founded" },
  { value: "Pune", label: "Headquartered" },
  { value: "11", label: "Services planned" },
  { value: "India", label: "Starting market" },
];

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-24"
      style={{
        background:
          "linear-gradient(155deg, #F9F7FF 0%, #FFFFFF 45%, #FCE8F5 100%)",
      }}
    >
      {/* Bg blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3FBE0A 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #D84FA508 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Spinning star */}
      <div
        aria-hidden="true"
        className="absolute top-28 right-20 animate-spin-slow pointer-events-none
          opacity-30 hidden lg:block"
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="#D84FA5">
          <path d="M18 0l3 12L36 18l-15 6-3 12-3-12L0 18l15-6z" />
        </svg>
      </div>

      {/* Small yellow star */}
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-1/3 pointer-events-none opacity-50 hidden md:block"
        style={{ animation: "spin-slow 18s linear infinite reverse" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#FFB800">
          <path d="M10 0l1.8 7.2L20 10l-8.2 2.8L10 20l-1.8-7.2L0 10l8.2-2.8z" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 mb-8 animate-slide-up"
        >
          <Link
            href="/"
            className="text-[#9CA3AF] hover:text-[#7C3FBE] transition-colors duration-200"
            style={{ fontSize: "0.875rem" }}
          >
            Home
          </Link>
          <span className="text-[#D1D5DB]" aria-hidden="true">
            /
          </span>
          <span
            className="text-[#7C3FBE] font-medium"
            style={{ fontSize: "0.875rem" }}
          >
            About
          </span>
        </nav>

        <div className="max-w-3xl">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              text-xs font-semibold uppercase tracking-widest
              bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-6
              animate-slide-up delay-100"
          >
            ✦ Our Story
          </span>

          {/* Headline */}
          <h1
            className="font-extrabold text-[#1A0A2E] mb-6 animate-slide-up delay-200"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
              lineHeight: 1.06,
            }}
          >
            Building a World
            <br />
            Where Every Pet
            <br />
            <span className="gradient-text">Thrives</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-[#6B7280] max-w-2xl leading-relaxed mb-10 animate-slide-up delay-300"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
          >
            Vanya was born from a simple belief — pets are family, and they
            deserve access to every care, comfort, and community that family
            deserves. We&apos;re building India&apos;s most complete pet
            technology ecosystem, one service at a time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-slide-up delay-400">
            <Link href="/contact" className="btn btn-primary btn-lg group">
              Join the Journey
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              Explore Services
            </Link>
          </div>

          {/* Founding stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-5 animate-slide-up delay-500">
            {crumbs.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <div
                    className="w-px h-8 bg-[#E5E7EB] hidden sm:block"
                    aria-hidden="true"
                  />
                )}
                <div>
                  <p
                    className="font-extrabold text-[#1A0A2E] leading-none tabular-nums"
                    style={{
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                      fontSize: "1.375rem",
                    }}
                  >
                    {c.value}
                  </p>
                  <p className="text-[#9CA3AF]" style={{ fontSize: "0.8rem" }}>
                    {c.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
