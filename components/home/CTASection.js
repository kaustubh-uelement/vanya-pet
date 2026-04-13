"use client";
import Link from "next/link";
import { ArrowRight, Bell, Users, Sparkles } from "lucide-react";

const perks = [
  { icon: "🚀", text: "Early access to the app" },
  { icon: "🎁", text: "Exclusive launch discounts" },
  { icon: "📍", text: "Priority listing in your city" },
  { icon: "💬", text: "Direct line to the founding team" },
];

const avatarEmojis = ["🐶", "🐱", "🐰", "🦜", "🐹", "🐾"];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="cta-heading">
      {/* ── Full-bleed gradient background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #3D1278 0%, #7C3FBE 30%, #C040A0 65%, #E8609A 100%)",
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Glow orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #fff 0%, transparent 70%)",
            opacity: 0.06,
          }}
        />
        <div
          className="absolute -bottom-16 right-1/3 w-[320px] h-[320px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #FFB800 0%, transparent 70%)",
            opacity: 0.12,
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-20 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #fff 0%, transparent 70%)",
            opacity: 0.04,
          }}
        />
      </div>

      {/* Decorative circles — top-left + bottom-right */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border border-white/10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border border-white/10 pointer-events-none"
      />

      {/* Spinning star — top right */}
      <div
        aria-hidden="true"
        className="absolute top-8 right-12 animate-spin-slow pointer-events-none opacity-60"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="#FFB800">
          <path d="M16 1l2.8 11.2L31 16l-12.2 3.8L16 31l-2.8-11.2L1 16l12.2-3.8z" />
        </svg>
      </div>

      {/* Small pink star — bottom left */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-16 pointer-events-none opacity-50"
        style={{ animation: "spin-slow 16s linear infinite reverse" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff">
          <path d="M10 0l1.8 7.2L20 10l-8.2 2.8L10 20l-1.8-7.2L0 10l8.2-2.8z" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="container-default relative z-10 section-padding">
        <div className="flex flex-col items-center text-center gap-10">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              text-xs font-semibold uppercase tracking-widest
              border border-white/20 text-white/90"
            style={{
              background: "oklch(1 0 0 / 0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Bell size={12} className="text-[#FFB800]" />
            Limited Early Access Spots
          </span>

          {/* Headline */}
          <div className="flex flex-col gap-4">
            <h2
              id="cta-heading"
              className="font-extrabold text-white"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.08,
                textShadow: "0 2px 20px oklch(0 0 0 / 0.2)",
              }}
            >
              Be the First to Give
              <br />
              Your Pet the World
              <span className="text-[#FFB800]"> ✦</span>
            </h2>

            <p
              className="text-white/75 max-w-xl mx-auto leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)" }}
            >
              Join the waitlist today — get early access, exclusive launch
              discounts, and priority listing when Vanya goes live in your city.
            </p>
          </div>

          {/* Perks grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
            {perks.map((perk) => (
              <div
                key={perk.text}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-left"
                style={{
                  background: "oklch(1 0 0 / 0.1)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{ fontSize: "20px", lineHeight: 1, flexShrink: 0 }}
                >
                  {perk.icon}
                </span>
                <span
                  className="text-white/90 font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  {perk.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5
                font-bold text-[#1A0A2E] rounded-full
                transition-all duration-200 active:scale-[0.97]"
              style={{
                background: "#FFB800",
                padding: "1rem 2.5rem",
                fontSize: "1rem",
                minHeight: "56px",
                boxShadow: "0 4px 20px oklch(0.65 0.18 70 / 0.4)",
                transition:
                  "background 180ms ease, box-shadow 180ms ease, transform 180ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E09800";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px oklch(0.65 0.18 70 / 0.55)";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFB800";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px oklch(0.65 0.18 70 / 0.4)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Sparkles size={18} />
              Notify Me — It&apos;s Free
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-white/80
                hover:text-white transition-colors duration-200 underline underline-offset-4
                decoration-white/30 hover:decoration-white/70"
              style={{ fontSize: "0.9375rem" }}
            >
              Explore all services first
            </Link>
          </div>

          {/* Social proof strip */}
          <div
            className="flex flex-col sm:flex-row items-center gap-5 px-8 py-5 rounded-2xl"
            style={{
              background: "oklch(1 0 0 / 0.08)",
              border: "1px solid oklch(1 0 0 / 0.14)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatarEmojis.map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center"
                    style={{
                      background: `oklch(1 0 0 / ${0.1 + i * 0.03})`,
                      fontSize: "15px",
                      lineHeight: 1,
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p
                  className="font-bold text-white"
                  style={{ fontSize: "0.9375rem" }}
                >
                  10,000+ owners waiting
                </p>
                <p className="text-white/60" style={{ fontSize: "0.8125rem" }}>
                  across Mumbai, Pune, Bangalore &amp; Delhi
                </p>
              </div>
            </div>

            <div
              className="w-px h-8 bg-white/20 hidden sm:block"
              aria-hidden="true"
            />

            {/* Stars */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-0.5">
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
              </div>
              <p className="text-white/60" style={{ fontSize: "0.8125rem" }}>
                Rated 4.9 / 5 by beta users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
