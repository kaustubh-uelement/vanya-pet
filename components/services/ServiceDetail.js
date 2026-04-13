"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const phaseConfig = {
  1: {
    label: "Phase 1 · MVP",
    text: "#7C3FBE",
    bg: "#F3EEFF",
    border: "#D8C8F0",
    bar: "#7C3FBE",
  },
  2: {
    label: "Phase 2 · Expansion",
    text: "#D84FA5",
    bg: "#FCE8F5",
    border: "#F0C8E0",
    bar: "#D84FA5",
  },
  3: {
    label: "Phase 3 · Advanced",
    text: "#B07800",
    bg: "#FFF8E1",
    border: "#FFE082",
    bar: "#FFB800",
  },
};

export default function ServiceDetail({ svc, index, expanded, onToggle }) {
  const cfg = phaseConfig[svc.phase];
  const isPhase1 = svc.phase === 1;

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden reveal"
      style={{
        animationDelay: `${index * 60}ms`,
        border: `1.5px solid ${expanded ? cfg.bar + "44" : isPhase1 ? "#E8D8FF" : "#EBEBEB"}`,
        background: expanded ? "#FDFBFF" : isPhase1 ? "#FFFFFF" : "#FAFAFA",
        boxShadow: expanded
          ? `0 12px 40px oklch(0.4 0.15 300 / 0.12)`
          : isPhase1
            ? "0 2px 12px oklch(0.4 0.15 300 / 0.06)"
            : "0 1px 4px oklch(0.2 0.02 250 / 0.05)",
        transition:
          "box-shadow 220ms ease, border-color 220ms ease, background 220ms ease",
      }}
    >
      {/* Phase bar */}
      <div className="h-1" style={{ background: cfg.bar }} />

      {/* Card header — always visible */}
      <button
        onClick={onToggle}
        className="flex items-start gap-4 p-5 text-left w-full group"
        aria-expanded={expanded}
        aria-controls={`service-detail-${svc.id}`}
        style={{ background: "transparent" }}
      >
        {/* Emoji icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: expanded ? cfg.bg : isPhase1 ? cfg.bg : "#F3F4F6",
            transition: "background 200ms ease",
            fontSize: "24px",
            lineHeight: 1,
          }}
        >
          {svc.icon}
        </div>

        {/* Title + phase badge */}
        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3
              className="font-bold text-[#1A0A2E] leading-tight"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "1rem",
              }}
            >
              {svc.title}
            </h3>
            <ChevronDown
              size={17}
              className="flex-shrink-0 mt-0.5 transition-transform duration-300"
              style={{
                color: cfg.text,
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>

          <span
            className="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full font-semibold"
            style={{
              background: cfg.bg,
              color: cfg.text,
              border: `1px solid ${cfg.border}`,
              fontSize: "10px",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: cfg.bar }}
            />
            {cfg.label}
          </span>

          <p
            className="text-[#6B7280] leading-snug"
            style={{ fontSize: "0.8375rem" }}
          >
            {svc.description}
          </p>
        </div>
      </button>

      {/* Expanded detail panel */}
      <div
        id={`service-detail-${svc.id}`}
        style={{
          maxHeight: expanded ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 350ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="px-5 pb-5 flex flex-col gap-5">
          {/* Divider */}
          <div className="h-px" style={{ background: cfg.border }} />

          {/* Core features */}
          <div>
            <p
              className="font-semibold text-[#1A0A2E] mb-3 uppercase tracking-wide"
              style={{ fontSize: "11px" }}
            >
              Core Features
            </p>
            <div className="grid grid-cols-1 gap-2">
              {svc.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: cfg.bar, minWidth: "16px" }}
                  >
                    <svg
                      width="7"
                      height="5"
                      viewBox="0 0 7 5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 2.5L2.8 4.2L6 1"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-[#374151]"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business model */}
          {svc.businessModel && (
            <div
              className="flex items-start gap-3 p-3.5 rounded-xl"
              style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
            >
              <span
                style={{
                  fontSize: "18px",
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                💼
              </span>
              <div>
                <p
                  className="font-semibold mb-0.5"
                  style={{ fontSize: "12px", color: cfg.text }}
                >
                  Business Model
                </p>
                <p className="text-[#6B7280]" style={{ fontSize: "0.8125rem" }}>
                  {svc.businessModel}
                </p>
              </div>
            </div>
          )}

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-colors duration-200 group w-fit"
            style={{ color: cfg.text, fontSize: "0.875rem" }}
          >
            Get early access for {svc.title}
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
