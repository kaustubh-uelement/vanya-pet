import Link from "next/link";
import { ArrowRight } from "lucide-react";

const badges = [
  {
    icon: "🐾",
    label: "Pet Care",
    sub: "Book instantly",
    position: "top-[18%] left-0 lg:-left-6",
    delay: "delay-500",
  },
  {
    icon: "🏠",
    label: "Pet Stay",
    sub: "500+ hostels",
    position: "bottom-[28%] left-0 lg:-left-4",
    delay: "delay-600",
  },
  {
    icon: "⭐",
    label: "4.9 Rating",
    sub: "2k+ reviews",
    position: "top-[10%] right-0 lg:-right-4",
    delay: "delay-400",
  },
  {
    icon: "💰",
    label: "10% Cashback",
    sub: "On every booking",
    position: "bottom-[18%] right-0 lg:-right-2",
    delay: "delay-600",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background gradient blob */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 bottom-0 w-[58%] rounded-l-[80px] animate-scale-in"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 70% 50%, #7C3FBE 0%, #C040A0 55%, #E8709C 100%)",
        }}
      />

      {/* Inner glow */}
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[20%] w-72 h-72 rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #B060D0 0%, transparent 70%)",
        }}
      />

      {/* Sparkle dots */}
      <div
        aria-hidden="true"
        className="absolute top-[22%] left-[38%] w-2 h-2 rounded-full bg-white opacity-80 animate-pulse pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[65%] left-[42%] w-1.5 h-1.5 rounded-full bg-white opacity-60 animate-pulse delay-300 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[40%] left-[53%] w-1.5 h-1.5 rounded-full bg-white opacity-70 animate-pulse delay-500 pointer-events-none"
      />

      <div className="container-wide relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[calc(100vh-5rem)] py-16 lg:py-0">
          {/* ── Left: Text ── */}
          <div className="flex flex-col items-start">
            {/* Pill badge */}
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                text-xs font-semibold uppercase tracking-widest
                bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-6
                animate-slide-up"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="#FFB800"
                aria-hidden="true"
              >
                <path d="M6 0l1.2 4.2L12 6l-4.8 1.8L6 12l-1.2-4.2L0 6l4.8-1.8z" />
              </svg>
              India&apos;s Pet Tech Ecosystem
            </span>

            {/* Headline */}
            <h1
              className="font-extrabold text-[#1A0A2E] tracking-tight mb-5
                animate-slide-up delay-100"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "clamp(2.75rem, 7vw, 5rem)",
                lineHeight: 1.08,
              }}
            >
              Your Pet&apos;s World.
              <br />
              <span className="gradient-text">Just a Tap</span>
              <br />
              Away.
            </h1>

            {/* Subheading */}
            <p
              className="text-[#6B7280] max-w-md leading-relaxed mb-8
                animate-slide-up delay-200"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
            >
              From vet visits to grooming, boarding, adoption, and more —
              discover trusted pet care services near you,{" "}
              <span className="text-[#7C3FBE] font-semibold">
                anytime, anywhere.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 animate-slide-up delay-300">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                Notify Me
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg">
                Discover More
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 flex-wrap animate-slide-up delay-400">
              {/* Avatars */}
              <div className="flex -space-x-2.5" aria-label="Pet owner avatars">
                {["🐶", "🐱", "🐰", "🦜"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full gradient-brand-soft border-2 border-white
                      flex items-center justify-center shadow-sm"
                    style={{ fontSize: "16px" }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A0A2E]">
                  10,000+ Pet Owners
                </p>
                <p className="text-xs text-[#9CA3AF]">
                  already on the waitlist
                </p>
              </div>

              <div className="h-8 w-px bg-[#E5E7EB]" aria-hidden="true" />

              {/* Stars */}
              <div
                className="flex items-center gap-1"
                aria-label="4.9 out of 5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="#FFB800"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs font-semibold text-[#1A0A2E] ml-1">
                  4.9/5
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Phone mockup ── */}
          <div className="relative flex items-center justify-center lg:justify-end h-[500px] sm:h-[580px] lg:h-[680px] animate-slide-up delay-200">
            {/* Phone — floats with CSS */}
            <div className="relative z-10 animate-float">
              {/* Frame */}
              <div
                className="relative w-[240px] sm:w-[260px] rounded-[42px] overflow-hidden border-[7px] border-[#1A0A2E]"
                style={{
                  boxShadow:
                    "0 30px 80px oklch(0.25 0.2 300 / 0.4), 0 0 0 1px rgba(0,0,0,0.08)",
                }}
              >
                {/* Status bar */}
                <div className="bg-[#1A0A2E] px-5 py-2 flex items-center justify-between">
                  <span
                    className="text-white font-medium"
                    style={{ fontSize: "10px" }}
                  >
                    9:27
                  </span>
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-2 border border-white/60 rounded-sm relative">
                      <div className="absolute inset-[1.5px] right-1 bg-white/60 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App screen */}
                <div
                  className="bg-[#F9F7FF] flex flex-col"
                  style={{ minHeight: "460px" }}
                >
                  {/* App header */}
                  <div className="px-4 pt-3 pb-2.5 bg-white border-b border-gray-100 flex items-center justify-between">
                    <span
                      className="font-bold text-[#1A0A2E]"
                      style={{ fontSize: "13px" }}
                    >
                      Vanya Pet
                    </span>
                    <div
                      className="w-6 h-6 rounded-full bg-[#F3EEFF] flex items-center justify-center"
                      style={{ fontSize: "12px" }}
                    >
                      🔔
                    </div>
                  </div>

                  {/* Cashback banner */}
                  <div className="mx-3 mt-3 rounded-xl bg-[#FFB800] p-3 flex items-center justify-between">
                    <div>
                      <p
                        className="font-bold text-[#1A0A2E]"
                        style={{ fontSize: "10px" }}
                      >
                        Get 10% Cashback
                      </p>
                      <p
                        className="text-[#1A0A2E]/70"
                        style={{ fontSize: "9px" }}
                      >
                        when you extend &amp; rebook
                      </p>
                      <div className="mt-1.5 bg-[#1A0A2E] rounded-full px-2.5 py-0.5 w-fit">
                        <span
                          className="text-white font-semibold"
                          style={{ fontSize: "9px" }}
                        >
                          Book Now!
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: "32px", lineHeight: 1 }}>🐕</span>
                  </div>

                  {/* Service icons */}
                  <div className="grid grid-cols-4 gap-x-2 gap-y-3 px-4 pt-4">
                    {[
                      { icon: "🏠", label: "Boarding" },
                      { icon: "☀️", label: "Daycare" },
                      { icon: "🪑", label: "Sitting" },
                      { icon: "🦮", label: "Walking" },
                      { icon: "🚗", label: "Taxi" },
                      { icon: "✂️", label: "Grooming" },
                      { icon: "🎓", label: "Training" },
                      { icon: "···", label: "More" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col items-center gap-1"
                      >
                        <div
                          className="w-10 h-10 rounded-full bg-[#FFB800] flex items-center justify-center shadow-sm"
                          style={{
                            fontSize: s.icon === "···" ? "10px" : "17px",
                            lineHeight: 1,
                          }}
                        >
                          {s.icon}
                        </div>
                        <span
                          className="text-[#6B7280] text-center leading-tight"
                          style={{ fontSize: "8px" }}
                        >
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Nearby */}
                  <div className="px-4 pt-4">
                    <p
                      className="font-bold text-[#1A0A2E] mb-2"
                      style={{ fontSize: "11px" }}
                    >
                      VanyaPets Nearby
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        {
                          name: "Happy House",
                          emoji: "🐕",
                          price: "₹499/night",
                        },
                        {
                          name: "Humble Abode",
                          emoji: "🐈",
                          price: "₹399/night",
                        },
                      ].map((p) => (
                        <div
                          key={p.name}
                          className="rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm"
                        >
                          <div
                            className="bg-[#F3EEFF] h-12 flex items-center justify-center"
                            style={{ fontSize: "28px", lineHeight: 1 }}
                          >
                            {p.emoji}
                          </div>
                          <div className="px-2 py-1.5">
                            <p
                              className="font-semibold text-[#1A0A2E] truncate"
                              style={{ fontSize: "9px" }}
                            >
                              {p.name}
                            </p>
                            <p
                              className="text-[#7C3FBE]"
                              style={{ fontSize: "8px" }}
                            >
                              {p.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-auto border-t border-gray-100 bg-white px-6 py-2 flex justify-between">
                    {["🏠", "🔍", "📋", "👤"].map((icon, i) => (
                      <span
                        key={i}
                        style={{ fontSize: "16px", opacity: i === 0 ? 1 : 0.3 }}
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom pill */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1A0A2E] rounded-full" />
            </div>

            {/* Floating badges */}
            {badges.map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.position} glass-card rounded-2xl px-3 py-2.5
                  flex items-center gap-2.5 z-20 animate-slide-up ${b.delay}`}
                style={{ minWidth: "128px" }}
              >
                <span style={{ fontSize: "20px", lineHeight: 1 }}>
                  {b.icon}
                </span>
                <div>
                  <p
                    className="font-bold text-[#1A0A2E] leading-tight"
                    style={{ fontSize: "12px" }}
                  >
                    {b.label}
                  </p>
                  <p
                    className="text-[#9CA3AF] leading-tight"
                    style={{ fontSize: "10px" }}
                  >
                    {b.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Yellow star */}
            <div
              aria-hidden="true"
              className="absolute top-[8%] left-[12%] lg:left-[4%] z-20 animate-spin-slow"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="#FFB800">
                <path d="M13 1l2.3 9.7L25 13l-9.7 2.3L13 25l-2.3-9.7L1 13l9.7-2.3z" />
              </svg>
            </div>

            {/* Pink mini-star */}
            <div
              aria-hidden="true"
              className="absolute bottom-[16%] left-[8%] lg:left-[1%] z-20 opacity-70"
              style={{ animation: "spin-slow 14s linear infinite reverse" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#D84FA5">
                <path d="M8 0l1.4 6.6L16 8l-6.6 1.4L8 16l-1.4-6.6L0 8l6.6-1.4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-slide-up delay-600">
        <span
          className="uppercase tracking-widest text-[#9CA3AF]"
          style={{ fontSize: "10px" }}
        >
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-[#D1D5DB] flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-[#9CA3AF] animate-float" />
        </div>
      </div>
    </section>
  );
}
