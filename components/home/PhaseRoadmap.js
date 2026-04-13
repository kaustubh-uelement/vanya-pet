"use client";
import { CheckCircle2, Clock, Rocket, ChevronRight } from "lucide-react";
import { phases } from "@/lib/data";

const statusConfig = {
  active: {
    label: "In Progress",
    icon: Rocket,
    iconColor: "#7C3FBE",
    bg: "#F3EEFF",
    border: "#D8C8F0",
    textColor: "#7C3FBE",
    ringColor: "#7C3FBE",
    cardBorder: "#D8C8F0",
    cardBg: "#FFFFFF",
    shadow: "0 8px 32px oklch(0.4 0.2 300 / 0.12)",
  },
  upcoming: {
    label: "Coming Soon",
    icon: Clock,
    iconColor: "#D84FA5",
    bg: "#FCE8F5",
    border: "#F0C8E0",
    textColor: "#D84FA5",
    ringColor: "#D84FA5",
    cardBorder: "#F0E0EC",
    cardBg: "#FDFAFC",
    shadow: "0 4px 16px oklch(0.5 0.15 330 / 0.08)",
  },
  future: {
    label: "Planned",
    icon: Clock,
    iconColor: "#B07800",
    bg: "#FFF8E1",
    border: "#FFE082",
    textColor: "#B07800",
    ringColor: "#FFB800",
    cardBorder: "#F0E8C0",
    cardBg: "#FFFDF5",
    shadow: "0 4px 16px oklch(0.6 0.12 80 / 0.08)",
  },
};

const phaseColors = {
  1: "#7C3FBE",
  2: "#D84FA5",
  3: "#FFB800",
};

export default function PhaseRoadmap() {
  return (
    <section
      id="roadmap"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F9F7FF 0%, #FFFFFF 100%)",
      }}
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3FBE06 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              text-xs font-semibold uppercase tracking-widest
              bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-5 reveal"
          >
            ✦ Development Roadmap
          </span>

          <h2
            className="font-extrabold text-[#1A0A2E] mb-4 reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Built to <span className="gradient-text">Last a Lifetime</span>
          </h2>

          <p
            className="text-[#6B7280] max-w-lg mx-auto leading-relaxed reveal reveal-delay-2"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.0625rem)" }}
          >
            A phased approach — shipping fast, scaling smart. Phase 1 launches
            in 6–9 months.
          </p>
        </div>

        {/* ── Timeline connector (desktop only) ── */}
        <div className="relative">
          {/* Horizontal line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[16.67%] right-[16.67%] h-0.5 z-0"
            style={{
              background:
                "linear-gradient(90deg, #7C3FBE 0%, #D84FA5 50%, #FFB800 100%)",
            }}
          />

          {/* ── Phase cards row ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {phases.map((phase, i) => (
              <PhaseCard key={phase.number} phase={phase} index={i} />
            ))}
          </div>
        </div>

        {/* ── Total timeline summary bar ── */}
        <div
          className="mt-16 rounded-2xl p-6 md:p-8 reveal"
          style={{
            background: "linear-gradient(135deg, #1A0A2E 0%, #2D1052 100%)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p
                className="font-bold text-white mb-1"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1.0625rem",
                }}
              >
                Full Ecosystem Launch
              </p>
              <p className="text-white/60" style={{ fontSize: "0.875rem" }}>
                From kickoff to all 11 verticals live
              </p>
            </div>

            {/* Timeline bar */}
            <div className="flex-1 max-w-md w-full">
              <div className="flex justify-between text-xs text-white/50 mb-2">
                <span>Month 0</span>
                <span>Month 21</span>
                <span>Month 33+</span>
              </div>
              <div
                className="relative h-3 rounded-full overflow-hidden"
                style={{ background: "oklch(1 0 0 / 0.1)" }}
              >
                {/* Phase 1 bar */}
                <div
                  className="absolute top-0 left-0 h-full rounded-l-full"
                  style={{
                    width: "27%" /* ~9/33 */,
                    background: "linear-gradient(90deg, #7C3FBE, #9B6FD0)",
                  }}
                />
                {/* Phase 2 bar */}
                <div
                  className="absolute top-0 h-full"
                  style={{
                    left: "27%",
                    width: "37%" /* ~12/33 */,
                    background: "linear-gradient(90deg, #9B6FD0, #D84FA5)",
                  }}
                />
                {/* Phase 3 bar */}
                <div
                  className="absolute top-0 h-full rounded-r-full opacity-60"
                  style={{
                    left: "64%",
                    right: "0",
                    background: "linear-gradient(90deg, #D84FA5, #FFB800)",
                  }}
                />
              </div>
              <div className="flex gap-4 mt-3 flex-wrap">
                {[
                  { label: "Phase 1 · MVP", color: "#9B6FD0" },
                  { label: "Phase 2 · Expansion", color: "#D84FA5" },
                  { label: "Phase 3 · Full Build", color: "#FFB800" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-1.5 text-white/60"
                    style={{ fontSize: "11px" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: item.color }}
                    />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <p
                className="font-extrabold text-white"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "2rem",
                  lineHeight: 1,
                }}
              >
                33+
              </p>
              <p
                className="text-white/50 mt-1"
                style={{ fontSize: "11px", letterSpacing: "0.05em" }}
              >
                MONTHS TOTAL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────
   PhaseCard
──────────────────────────────── */
function PhaseCard({ phase, index }) {
  const cfg = statusConfig[phase.status];
  const color = phaseColors[phase.number];
  const StatusIcon = cfg.icon;
  const isActive = phase.status === "active";

  return (
    <div
      className={`flex flex-col rounded-2xl overflow-hidden reveal`}
      style={{
        animationDelay: `${index * 120}ms`,
        border: `1.5px solid ${cfg.cardBorder}`,
        background: cfg.cardBg,
        boxShadow: cfg.shadow,
        transition: "box-shadow 220ms ease, transform 220ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = `0 16px 48px oklch(0.3 0.15 300 / 0.16)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = cfg.shadow;
      }}
    >
      {/* Top accent bar */}
      <div className="h-1.5 w-full" style={{ background: color }} />

      <div className="flex flex-col gap-5 p-6">
        {/* Phase number + status row */}
        <div className="flex items-start justify-between gap-3">
          {/* Phase number circle */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-extrabold text-white"
            style={{
              background: color,
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "1.375rem",
              boxShadow: `0 4px 14px ${color}40`,
            }}
          >
            {phase.number}
          </div>

          {/* Status badge */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0"
            style={{
              background: cfg.bg,
              color: cfg.textColor,
              border: `1px solid ${cfg.border}`,
              fontSize: "11px",
              fontWeight: 600,
            }}
          >
            <StatusIcon size={11} />
            {cfg.label}
          </span>
        </div>

        {/* Title + subtitle */}
        <div>
          <p
            className="text-[#9CA3AF] mb-1"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {phase.subtitle}
          </p>
          <h3
            className="font-extrabold text-[#1A0A2E] leading-tight"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "1.1875rem",
            }}
          >
            {phase.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-[#6B7280] leading-relaxed"
          style={{ fontSize: "0.875rem" }}
        >
          {phase.description}
        </p>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: cfg.cardBorder }} />

        {/* Services */}
        <div>
          <p
            className="font-semibold text-[#1A0A2E] mb-3"
            style={{
              fontSize: "12px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Services Included
          </p>
          <div className="flex flex-col gap-2">
            {phase.services.map((svc) => (
              <div key={svc} className="flex items-center gap-2.5">
                <CheckCircle2 size={14} style={{ color, flexShrink: 0 }} />
                <span
                  className="text-[#374151] font-medium"
                  style={{ fontSize: "0.875rem" }}
                >
                  {svc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: cfg.cardBorder }} />

        {/* Milestones */}
        <div>
          <p
            className="font-semibold text-[#1A0A2E] mb-3"
            style={{
              fontSize: "12px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Key Milestones
          </p>
          <div className="flex flex-col gap-2.5">
            {phase.milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* Month pill */}
                <span
                  className="flex-shrink-0 rounded-md px-2 py-0.5 font-semibold leading-snug"
                  style={{
                    background: `${color}14`,
                    color,
                    fontSize: "10px",
                    minWidth: "40px",
                    textAlign: "center",
                  }}
                >
                  {m.month}
                </span>
                <span
                  className="text-[#6B7280] leading-snug"
                  style={{ fontSize: "0.8125rem" }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — only Phase 1 */}
        {isActive && (
          <a
            href="/contact"
            className="btn btn-primary mt-1 group"
            style={{ justifyContent: "center" }}
          >
            Join Phase 1 Launch
            <ChevronRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        )}
      </div>
    </div>
  );
}
