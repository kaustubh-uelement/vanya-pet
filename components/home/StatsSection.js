"use client";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    prefix: "$",
    value: "26.83",
    suffix: "B",
    decimals: 2,
    label: "Market Size by 2030",
    sub: "Global pet tech industry",
    color: "#7C3FBE",
  },
  {
    prefix: "",
    value: "13.55",
    suffix: "%",
    decimals: 2,
    label: "Annual Growth Rate",
    sub: "CAGR through 2030",
    color: "#D84FA5",
  },
  {
    prefix: "",
    value: "11",
    suffix: "+",
    decimals: 0,
    label: "Service Verticals",
    sub: "Covering the full pet lifecycle",
    color: "#FFB800",
  },
  {
    prefix: "",
    value: "3",
    suffix: "",
    decimals: 0,
    label: "Phase Roadmap",
    sub: "MVP to full ecosystem",
    color: "#fff",
  },
];

export default function StatsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #5B2A93 0%, #7C3FBE 35%, #C040A0 70%, #D84FA5 100%)",
      }}
    >
      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Soft inner glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #fff 0%, transparent 70%)",
            opacity: 0.05,
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #FFB800 0%, transparent 70%)",
            opacity: 0.1,
          }}
        />
      </div>

      <div className="container-wide relative z-10 section-padding-sm">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              text-xs font-semibold uppercase tracking-widest mb-5
              border border-white/20 text-white/80"
            style={{ background: "oklch(1 0 0 / 0.1)" }}
          >
            ✦ By the Numbers
          </span>

          <h2
            className="font-extrabold text-white mb-3"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            }}
          >
            A Market Ready for Disruption
          </h2>

          <p
            className="text-white/70 max-w-md mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.0625rem)" }}
          >
            The global pet tech space is exploding — and Vanya is positioned
            right at the centre.
          </p>
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: "oklch(1 0 0 / 0.12)" }}
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>

        {/* Source footnote */}
        <p
          className="text-center text-white/40 mt-8"
          style={{ fontSize: "11px" }}
        >
          Source: Benchmark International Global Pet Tech Industry Report, 2024
        </p>
      </div>
    </section>
  );
}

/* ── Individual stat card ── */
function StatCard({ stat, index }) {
  const isLast = index === 3;

  return (
    <div
      className="flex flex-col items-center text-center px-8 py-10 gap-3 reveal"
      style={{
        background: "oklch(1 0 0 / 0.06)",
        transition: "background 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "oklch(1 0 0 / 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "oklch(1 0 0 / 0.06)";
      }}
    >
      {/* Big number */}
      <div
        className="font-extrabold leading-none tracking-tight"
        style={{
          fontFamily: "var(--font-plus-jakarta, sans-serif)",
          fontSize: "clamp(2.75rem, 5vw, 4rem)",
          color: stat.color,
          textShadow: isLast ? "none" : "0 2px 20px oklch(1 0 0 / 0.15)",
        }}
      >
        <AnimatedCounter
          value={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
          decimals={stat.decimals}
          duration={1800}
        />
      </div>

      {/* Divider line */}
      <div
        className="w-10 h-0.5 rounded-full"
        style={{ background: `${stat.color}60` }}
      />

      {/* Label */}
      <div className="flex flex-col gap-1">
        <p
          className="font-bold text-white leading-snug"
          style={{ fontSize: "0.9375rem" }}
        >
          {stat.label}
        </p>
        <p
          className="text-white/55 leading-snug"
          style={{ fontSize: "0.8125rem" }}
        >
          {stat.sub}
        </p>
      </div>
    </div>
  );
}
