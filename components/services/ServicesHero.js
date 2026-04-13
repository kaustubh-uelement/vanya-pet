"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "11", label: "Service Verticals" },
  { value: "3", label: "Launch Phases" },
  { value: "500+", label: "Service Providers" },
  { value: "4.9★", label: "Average Rating" },
];

export default function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-20"
      style={{
        background:
          "linear-gradient(160deg, #F9F7FF 0%, #FFFFFF 50%, #FCE8F5 100%)",
      }}
    >
      {/* Bg blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3FBE0A 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #D84FA508 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Spinning star */}
      <div
        aria-hidden="true"
        className="absolute top-32 right-24 animate-spin-slow pointer-events-none opacity-40 hidden lg:block"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="#7C3FBE">
          <path d="M14 0l2.4 9.6L28 14l-11.6 4.4L14 28l-2.4-9.6L0 14l11.6-4.4z" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              text-xs font-semibold uppercase tracking-widest
              bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-6 animate-slide-up"
          >
            ✦ 11 Service Verticals
          </span>

          {/* Headline */}
          <h1
            className="font-extrabold text-[#1A0A2E] mb-5 animate-slide-up delay-100"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.08,
            }}
          >
            Every Service Your
            <br />
            Pet Will Ever <span className="gradient-text">Need</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-[#6B7280] max-w-2xl leading-relaxed mb-10 animate-slide-up delay-200"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
          >
            Vanya is building the world&apos;s most complete pet care platform.
            From the day you bring your pet home to lifetime care — we cover
            every milestone, every need, every moment.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14 animate-slide-up delay-300">
            <Link href="/contact" className="btn btn-primary btn-lg group">
              Join the Waitlist
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <a href="#services-grid" className="btn btn-outline btn-lg">
              Browse Services ↓
            </a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 animate-slide-up delay-400">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <div className="w-px h-8 bg-[#E5E7EB]" aria-hidden="true" />
                )}
                <div>
                  <p
                    className="font-extrabold text-[#1A0A2E] leading-none tabular-nums"
                    style={{
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                      fontSize: "1.375rem",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#9CA3AF]" style={{ fontSize: "0.8rem" }}>
                    {s.label}
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
