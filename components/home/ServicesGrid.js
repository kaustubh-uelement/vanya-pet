"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

const phaseLabel = {
  1: { text: "MVP", bg: "#F3EEFF", color: "#7C3FBE", border: "#D8C8F0" },
  2: { text: "Phase 2", bg: "#FCE8F5", color: "#D84FA5", border: "#F0C8E0" },
  3: { text: "Phase 3", bg: "#FFF8E1", color: "#B07800", border: "#FFE082" },
};

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Bg blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, #7C3FBE06 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, #D84FA506 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-wide relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            text-xs font-semibold uppercase tracking-widest
            bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-5 reveal"
          >
            ✦ 11 Service Verticals
          </span>

          <h2
            className="font-extrabold text-[#1A0A2E] mb-4 reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Everything Your Pet <span className="gradient-text">Deserves</span>
          </h2>

          <p
            className="text-[#6B7280] max-w-lg mx-auto leading-relaxed reveal reveal-delay-2"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
          >
            One platform. Every milestone of your pet&apos;s life — from first
            day home to lifetime care.
          </p>
        </div>

        {/* Phase legend */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 reveal">
          {[1, 2, 3].map((p) => {
            const cfg = phaseLabel[p];
            return (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: cfg.bg,
                  color: cfg.color,
                  border: `1px solid ${cfg.border}`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: cfg.color }}
                />
                {p === 1 ? "Phase 1 · MVP" : `Phase ${p}`}
              </span>
            );
          })}
          <span className="text-xs text-[#9CA3AF] pl-1">— rollout order</span>
        </div>

        {/* Cards grid */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {services.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12 reveal">
          <Link href="/services" className="btn btn-outline btn-lg group">
            Explore All Services
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Card component ── */
function ServiceCard({ svc }) {
  const cfg = phaseLabel[svc.phase];
  const isPhase1 = svc.phase === 1;

  return (
    <li className="h-full reveal">
      <div
        className={`h-full flex flex-col gap-4 rounded-2xl p-5
          border cursor-default
          ${
            isPhase1
              ? "bg-white border-[#E8D8FF] shadow-[0_2px_12px_oklch(0.4_0.15_300/0.07)]"
              : "bg-[#FAFAFA] border-[#EBEBEB] shadow-[0_1px_6px_oklch(0.2_0.02_250/0.05)]"
          }`}
        style={{
          transition:
            "box-shadow 220ms ease, transform 220ms ease, border-color 220ms ease, background 220ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = isPhase1
            ? "0 10px 32px oklch(0.4 0.15 300/0.14)"
            : "0 8px 24px oklch(0.2 0.05 250/0.1)";
          if (!isPhase1) e.currentTarget.style.background = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = isPhase1
            ? "0 2px 12px oklch(0.4 0.15 300/0.07)"
            : "0 1px 6px oklch(0.2 0.02 250/0.05)";
          if (!isPhase1) e.currentTarget.style.background = "#FAFAFA";
        }}
      >
        {/* Row 1: Icon + Phase badge */}
        <div className="flex items-center justify-between gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${svc.color}14`,
              border: `1.5px solid ${svc.color}28`,
              fontSize: "22px",
              lineHeight: 1,
            }}
          >
            {svc.icon}
          </div>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full
              text-[11px] font-semibold leading-none flex-shrink-0"
            style={{
              background: cfg.bg,
              color: cfg.color,
              border: `1px solid ${cfg.border}`,
            }}
          >
            {cfg.text}
          </span>
        </div>

        {/* Row 2: Title */}
        <h3
          className="text-[#1A0A2E] font-bold leading-snug"
          style={{
            fontFamily: "var(--font-plus-jakarta, sans-serif)",
            fontSize: "0.9375rem",
          }}
        >
          {svc.title}
        </h3>

        {/* Row 3: Description */}
        <p
          className="text-[#6B7280] leading-relaxed flex-1"
          style={{
            fontSize: "0.8125rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {svc.description}
        </p>

        {/* Row 4: Feature pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {svc.features.slice(0, 2).map((feat) => (
            <span
              key={feat}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full leading-none"
              style={{ background: `${svc.color}12`, color: svc.color }}
            >
              {feat}
            </span>
          ))}
          {svc.features.length > 2 && (
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full leading-none bg-[#F3F4F6] text-[#9CA3AF]">
              +{svc.features.length - 2}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
