"use client";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Shield,
  Clock,
  Star,
  Zap,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    color: "#7C3FBE",
    bg: "#F3EEFF",
    title: "Real-Time GPS Tracking",
    description:
      "Watch your pet walker live on the map. Get photo and video updates throughout every session.",
  },
  {
    icon: Shield,
    color: "#D84FA5",
    bg: "#FCE8F5",
    title: "Verified Service Providers",
    description:
      "Every walker, groomer, and trainer goes through background checks, ratings, and certification.",
  },
  {
    icon: Clock,
    color: "#059669",
    bg: "#ECFDF5",
    title: "Instant Booking",
    description:
      "Book any service in under 60 seconds. Calendar availability, instant confirmation, no back-and-forth.",
  },
  {
    icon: Bell,
    color: "#F97316",
    bg: "#FFF7ED",
    title: "Live Activity Updates",
    description:
      "Photos, check-ins, and notes from your service provider — straight to your phone in real time.",
  },
  {
    icon: Zap,
    color: "#B07800",
    bg: "#FFF8E1",
    title: "10% Cashback Rewards",
    description:
      "Earn cashback on every booking. Extend or rebook to keep the rewards stacking up.",
  },
];

const metrics = [
  { value: "60s", label: "Avg. booking time", color: "#7C3FBE", bg: "#F3EEFF" },
  {
    value: "500+",
    label: "Verified providers",
    color: "#D84FA5",
    bg: "#FCE8F5",
  },
  {
    value: "4.9★",
    label: "Average app rating",
    color: "#B07800",
    bg: "#FFF8E1",
  },
];

const appScreens = [
  {
    title: "Walker Tracking",
    bg: "#F0F9FF",
    content: (
      <div className="flex flex-col gap-3 p-4">
        {/* Map placeholder */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            height: "140px",
            background: "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)",
            position: "relative",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ fontSize: "32px" }}>🗺️</div>
          </div>
          {/* Route line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 140"
            fill="none"
          >
            <path
              d="M30 110 Q80 40 160 60"
              stroke="#7C3FBE"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              strokeLinecap="round"
            />
            <circle cx="30" cy="110" r="5" fill="#D84FA5" />
            <circle cx="160" cy="60" r="5" fill="#7C3FBE" />
          </svg>
          {/* Live badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-white rounded-full px-2.5 py-1 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span
              style={{ fontSize: "9px", fontWeight: 700, color: "#1A0A2E" }}
            >
              LIVE
            </span>
          </div>
        </div>
        {/* Walker info card */}
        <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full bg-[#F3EEFF] flex items-center justify-center flex-shrink-0"
            style={{ fontSize: "20px", lineHeight: 1 }}
          >
            👩
          </div>
          <div className="flex-1 min-w-0">
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#1A0A2E" }}>
              Priya S. · Pet Walker
            </p>
            <p style={{ fontSize: "9px", color: "#6B7280" }}>
              Walking Bruno · 2.4 km covered
            </p>
          </div>
          <div className="flex items-center gap-0.5">
            <svg className="w-3 h-3 fill-[#FFB800]" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span
              style={{ fontSize: "10px", fontWeight: 700, color: "#1A0A2E" }}
            >
              4.9
            </span>
          </div>
        </div>
        {/* Update */}
        <div className="bg-[#F3EEFF] rounded-xl p-3 flex items-start gap-2.5">
          <span style={{ fontSize: "16px", lineHeight: 1, flexShrink: 0 }}>
            📸
          </span>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 700, color: "#7C3FBE" }}>
              New photo update
            </p>
            <p style={{ fontSize: "9px", color: "#6B7280" }}>
              Bruno is having a great time at the park!
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function AppPreview() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Bg decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 -translate-y-1/2 -left-32 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3FBE08 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-24 w-[360px] h-[360px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #D84FA508 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Feature list ── */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                  text-xs font-semibold uppercase tracking-widest
                  bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-5 reveal"
              >
                ✦ The App Experience
              </span>

              <h2
                className="font-extrabold text-[#1A0A2E] mb-4 reveal reveal-delay-1"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.15,
                }}
              >
                Built for Pet Owners
                <br />
                <span className="gradient-text">Who Care Deeply</span>
              </h2>

              <p
                className="text-[#6B7280] leading-relaxed reveal reveal-delay-2"
                style={{
                  fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                  maxWidth: "46ch",
                }}
              >
                Every feature is designed around one goal — giving you total
                peace of mind while your pet is cared for.
              </p>
            </div>

            {/* Feature rows */}
            <div className="flex flex-col gap-4">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="flex items-start gap-4 p-4 rounded-2xl reveal"
                    style={{
                      animationDelay: `${i * 80}ms`,
                      border: "1px solid transparent",
                      transition:
                        "background 200ms ease, border-color 200ms ease, box-shadow 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = feat.bg;
                      e.currentTarget.style.borderColor = `${feat.color}22`;
                      e.currentTarget.style.boxShadow = `0 4px 16px ${feat.color}12`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: feat.bg,
                        border: `1.5px solid ${feat.color}28`,
                      }}
                    >
                      <Icon size={18} style={{ color: feat.color }} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1 min-w-0">
                      <h3
                        className="font-bold text-[#1A0A2E] leading-snug"
                        style={{
                          fontFamily: "var(--font-plus-jakarta, sans-serif)",
                          fontSize: "0.9375rem",
                        }}
                      >
                        {feat.title}
                      </h3>
                      <p
                        className="text-[#6B7280] leading-relaxed"
                        style={{ fontSize: "0.8375rem" }}
                      >
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="reveal">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                Get Early Access
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* ── Right: Phone mockup ── */}
          <div className="flex flex-col items-center gap-8 reveal">
            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center gap-1.5 px-3 py-4 rounded-2xl text-center"
                  style={{
                    background: m.bg,
                    border: `1px solid ${m.color}20`,
                  }}
                >
                  <span
                    className="font-extrabold leading-none tabular-nums"
                    style={{
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                      fontSize: "1.375rem",
                      color: m.color,
                    }}
                  >
                    {m.value}
                  </span>
                  <span
                    className="text-[#6B7280] leading-tight text-center"
                    style={{ fontSize: "10px" }}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Phone frame */}
            <div className="relative animate-float">
              <div
                className="w-[260px] sm:w-[280px] rounded-[42px] overflow-hidden border-[7px] border-[#1A0A2E]"
                style={{
                  boxShadow:
                    "0 32px 80px oklch(0.25 0.2 300 / 0.35), 0 0 0 1px rgba(0,0,0,0.07)",
                }}
              >
                {/* Status bar */}
                <div className="bg-[#1A0A2E] px-5 py-2 flex items-center justify-between">
                  <span
                    className="text-white font-medium"
                    style={{ fontSize: "10px" }}
                  >
                    9:41
                  </span>
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-2 border border-white/60 rounded-sm relative">
                      <div className="absolute inset-[1.5px] right-1 bg-white/60 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App header */}
                <div className="bg-white px-4 pt-3 pb-2.5 border-b border-gray-100 flex items-center gap-2">
                  <button
                    aria-label="Back"
                    className="w-7 h-7 rounded-full bg-[#F3F4F6] flex items-center justify-center"
                    style={{ fontSize: "12px" }}
                  >
                    ←
                  </button>
                  <span
                    className="font-bold text-[#1A0A2E]"
                    style={{ fontSize: "13px" }}
                  >
                    Live Tracking
                  </span>
                  <div className="ml-auto flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span
                      style={{
                        fontSize: "9px",
                        color: "#059669",
                        fontWeight: 700,
                      }}
                    >
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Screen content */}
                <div className="bg-[#F9F7FF]">{appScreens[0].content}</div>

                {/* Bottom nav */}
                <div className="bg-white border-t border-gray-100 px-6 py-2.5 flex justify-between items-center">
                  {[
                    { icon: "🏠", label: "Home" },
                    { icon: "🔍", label: "Explore" },
                    { icon: "📋", label: "Bookings" },
                    { icon: "👤", label: "Profile" },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-0.5"
                    >
                      <span
                        style={{
                          fontSize: "16px",
                          lineHeight: 1,
                          opacity: i === 2 ? 1 : 0.3,
                        }}
                      >
                        {item.icon}
                      </span>
                      <span
                        style={{
                          fontSize: "7px",
                          color: i === 2 ? "#7C3FBE" : "#9CA3AF",
                          fontWeight: i === 2 ? 700 : 400,
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom pill */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1A0A2E] rounded-full" />

              {/* Floating notification card */}
              <div
                className="absolute -right-6 top-[22%] glass-card rounded-2xl px-3.5 py-3 z-20 animate-float-slow"
                style={{ minWidth: "148px", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-xl bg-[#F3EEFF] flex items-center justify-center flex-shrink-0"
                    style={{ fontSize: "16px", lineHeight: 1 }}
                  >
                    🐕
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#1A0A2E] leading-none mb-0.5"
                      style={{ fontSize: "11px" }}
                    >
                      Bruno arrived!
                    </p>
                    <p
                      className="text-[#9CA3AF] leading-none"
                      style={{ fontSize: "9px" }}
                    >
                      Happily at the park 🎉
                    </p>
                  </div>
                </div>
              </div>

              {/* Cashback badge */}
              <div
                className="absolute -left-6 bottom-[28%] glass-card rounded-2xl px-3.5 py-3 z-20 animate-float"
                style={{ minWidth: "136px", animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "18px", lineHeight: 1 }}>💰</span>
                  <div>
                    <p
                      className="font-bold leading-none mb-0.5"
                      style={{ fontSize: "11px", color: "#B07800" }}
                    >
                      ₹49 earned
                    </p>
                    <p
                      className="text-[#9CA3AF] leading-none"
                      style={{ fontSize: "9px" }}
                    >
                      Cashback credited
                    </p>
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
