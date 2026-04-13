"use client";
const pillars = [
  {
    phase: "01",
    icon: "🐾",
    color: "#7C3FBE",
    bg: "#F3EEFF",
    border: "#D8C8F0",
    title: "Our Mission",
    body: "To become the single trusted destination for every pet owner in India — eliminating fragmentation by unifying all pet services into one seamless, joyful platform.",
  },
  {
    phase: "02",
    icon: "🌟",
    color: "#D84FA5",
    bg: "#FCE8F5",
    border: "#F0C8E0",
    title: "Our Vision",
    body: "A future where every pet — regardless of breed, city, or owner background — has access to world-class care, community, and the tools to live a long, healthy, happy life.",
  },
  {
    phase: "03",
    icon: "🚀",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    title: "Our Approach",
    body: "Phased, deliberate, and data-driven. We launch with a focused MVP, learn from real users, and expand into new verticals only when we can do them exceptionally well.",
  },
];

const timeline = [
  {
    year: "Feb 2026",
    event: "Proposal & vision document finalised with UElement Studios.",
    color: "#7C3FBE",
  },
  {
    year: "Q2 2026",
    event: "Design system, brand identity and MVP scoping underway.",
    color: "#7C3FBE",
  },
  {
    year: "Q4 2026",
    event: "Phase 1 soft launch — Pet Market, Care & Stay go live.",
    color: "#D84FA5",
  },
  {
    year: "2027",
    event: "Phase 2 expansion — Social, Wellness & Insurance added.",
    color: "#D84FA5",
  },
  {
    year: "2028+",
    event: "Full 11-vertical ecosystem — India's definitive pet platform.",
    color: "#FFB800",
  },
];

export default function AboutMission() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Bg decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-48 w-[560px] h-[560px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #7C3FBE06 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* ── Mission / Vision / Approach ── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                text-xs font-semibold uppercase tracking-widest
                bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-5 reveal"
            >
              ✦ What Drives Us
            </span>
            <h2
              className="font-extrabold text-[#1A0A2E] reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
              }}
            >
              Mission, Vision & <span className="gradient-text">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 p-6 rounded-2xl reveal"
                style={{
                  animationDelay: `${i * 100}ms`,
                  background: p.bg,
                  border: `1.5px solid ${p.border}`,
                }}
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-extrabold tabular-nums"
                    style={{
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                      fontSize: "2.5rem",
                      color: `${p.color}28`,
                      lineHeight: 1,
                    }}
                  >
                    {p.phase}
                  </span>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "#FFFFFF",
                      boxShadow: `0 2px 8px ${p.color}18`,
                      fontSize: "24px",
                      lineHeight: 1,
                    }}
                  >
                    {p.icon}
                  </div>
                </div>

                <h3
                  className="font-extrabold leading-tight"
                  style={{
                    fontFamily: "var(--font-plus-jakarta, sans-serif)",
                    fontSize: "1.1875rem",
                    color: p.color,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  className="text-[#374151] leading-relaxed"
                  style={{ fontSize: "0.9rem" }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Journey timeline ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                text-xs font-semibold uppercase tracking-widest
                bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-5 reveal"
            >
              ✦ Our Journey
            </span>
            <h2
              className="font-extrabold text-[#1A0A2E] mb-5 reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
              }}
            >
              From Idea to
              <br />
              <span className="gradient-text">India&apos;s Pet Platform</span>
            </h2>
            <p
              className="text-[#6B7280] leading-relaxed reveal reveal-delay-2"
              style={{ fontSize: "1rem", maxWidth: "44ch" }}
            >
              Vanya&apos;s story started with a single frustration — pet owners
              in India juggling five different apps for grooming, vet visits,
              food delivery, and boarding. We decided to fix that, permanently.
            </p>
          </div>

          {/* Right timeline */}
          <div className="flex flex-col gap-0 reveal">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-4 group">
                {/* Connector column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Dot */}
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 transition-transform
                      duration-200 group-hover:scale-125"
                    style={{ background: t.color }}
                  />
                  {/* Vertical line — not on last */}
                  {i < timeline.length - 1 && (
                    <div
                      className="w-0.5 flex-1 mt-1"
                      style={{
                        minHeight: "40px",
                        background: `linear-gradient(to bottom, ${t.color}60, ${timeline[i + 1].color}30)`,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-md font-semibold mb-1.5"
                    style={{
                      background: `${t.color}14`,
                      color: t.color,
                      fontSize: "11px",
                    }}
                  >
                    {t.year}
                  </span>
                  <p
                    className="text-[#374151] leading-relaxed"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {t.event}
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
