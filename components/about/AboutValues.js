"use client";
const values = [
  {
    icon: "❤️",
    color: "#D84FA5",
    bg: "#FCE8F5",
    border: "#F0C8E0",
    title: "Pets First, Always",
    body: "Every product decision starts with one question — does this improve life for a pet? Not a metric, not a revenue line. The pet.",
  },
  {
    icon: "🔒",
    color: "#7C3FBE",
    bg: "#F3EEFF",
    border: "#D8C8F0",
    title: "Trust Through Transparency",
    body: "Verified providers, honest reviews, no hidden fees. Pet owners trust us with their most loved companions — we take that seriously.",
  },
  {
    icon: "⚡",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    title: "Move Fast, Build Right",
    body: "We ship early, learn from real users, and iterate quickly. Speed without shortcuts — quality is non-negotiable in pet care.",
  },
  {
    icon: "🤝",
    color: "#B07800",
    bg: "#FFF8E1",
    border: "#FFE082",
    title: "Community Over Competition",
    body: "Vanya grows when its community grows. We invest in service providers, pet owners, and rescue organisations equally.",
  },
  {
    icon: "🌱",
    color: "#0284C7",
    bg: "#F0F9FF",
    border: "#BAE6FD",
    title: "Inclusive by Design",
    body: "Every pet — indie dog or Persian cat, metro owner or small-town adopter — deserves the same quality of care and access.",
  },
  {
    icon: "🧠",
    color: "#7C3FBE",
    bg: "#F3EEFF",
    border: "#D8C8F0",
    title: "Technology with Purpose",
    body: "AI, IoT, real-time tracking — we use technology because it genuinely improves pet care outcomes, not for its own sake.",
  },
];

export default function AboutValues() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F9F7FF 0%, #FFFFFF 100%)",
      }}
    >
      {/* Bg decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #D84FA506 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              text-xs font-semibold uppercase tracking-widest
              bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-5 reveal"
          >
            ✦ What We Stand For
          </span>
          <h2
            className="font-extrabold text-[#1A0A2E] mb-4 reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            }}
          >
            Values That Guide
            <br />
            <span className="gradient-text">Every Decision</span>
          </h2>
          <p
            className="text-[#6B7280] max-w-lg mx-auto leading-relaxed reveal reveal-delay-2"
            style={{ fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)" }}
          >
            These aren&apos;t poster words. They&apos;re the filters we apply
            when making product, hiring, and partnership decisions.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="flex flex-col gap-4 p-6 rounded-2xl reveal"
              style={{
                animationDelay: `${i * 80}ms`,
                background: "#FFFFFF",
                border: `1.5px solid ${v.border}`,
                boxShadow: "0 2px 12px oklch(0.2 0.05 300 / 0.05)",
                transition: "box-shadow 220ms ease, transform 220ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 36px oklch(0.4 0.15 300 / 0.1)`;
                e.currentTarget.style.background = v.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 12px oklch(0.2 0.05 300 / 0.05)";
                e.currentTarget.style.background = "#FFFFFF";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: v.bg,
                  border: `1px solid ${v.border}`,
                  fontSize: "24px",
                  lineHeight: 1,
                }}
              >
                {v.icon}
              </div>

              <h3
                className="font-bold text-[#1A0A2E] leading-snug"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1rem",
                }}
              >
                {v.title}
              </h3>

              <p
                className="text-[#6B7280] leading-relaxed"
                style={{ fontSize: "0.875rem" }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
