"use client";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const capabilities = [
  { icon: "🤖", label: "AI & Edge Computing" },
  { icon: "⚙️", label: "SaaS Product Development" },
  { icon: "🔐", label: "Cybersecurity Integration" },
  { icon: "🏢", label: "Enterprise Solutions" },
  { icon: "🎨", label: "Branding & UX Design" },
  { icon: "📱", label: "iOS & Android Apps" },
  { icon: "☁️", label: "Cloud-Native Architecture" },
  { icon: "🚀", label: "Go-to-Market Strategy" },
];

const teamRoles = [
  { icon: "👩‍💼", role: "Project Manager", note: "Scrum & delivery" },
  { icon: "👨‍💻", role: "Full-Stack × 3", note: "React.js / Node.js" },
  { icon: "📱", role: "Mobile Developer", note: "iOS & Android" },
  { icon: "🎨", role: "UI/UX Designer", note: "Design systems" },
  { icon: "🧪", role: "QA Engineer", note: "Test automation" },
  { icon: "⚙️", role: "DevOps Engineer", note: "CI/CD & infra" },
  { icon: "🏗️", role: "Systems Architect", note: "Backend & scalability" },
];

export default function AboutStudio() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Bg decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full blur-3xl"
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
            ✦ The Team Behind Vanya
          </span>
          <h2
            className="font-extrabold text-[#1A0A2E] mb-4 reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
            }}
          >
            Built by <span className="gradient-text">UElement Studios</span>
          </h2>
          <p
            className="text-[#6B7280] max-w-xl mx-auto leading-relaxed reveal reveal-delay-2"
            style={{ fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)" }}
          >
            A technology product development and design agency specialising in
            AI, SaaS, cybersecurity, and enterprise solutions — now channelling
            that expertise into the pet tech space.
          </p>
        </div>

        {/* ── Two column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Studio card */}
          <div
            className="rounded-3xl overflow-hidden reveal"
            style={{
              background: "linear-gradient(135deg, #1A0A2E 0%, #2D1052 100%)",
              boxShadow: "0 12px 40px oklch(0.15 0.2 300 / 0.25)",
            }}
          >
            {/* Top accent */}
            <div
              className="h-1.5"
              style={{
                background: "linear-gradient(90deg, #7C3FBE, #D84FA5, #FFB800)",
              }}
            />

            <div className="p-8 flex flex-col gap-7">
              {/* Studio identity */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #7C3FBE 0%, #D84FA5 100%)",
                    fontSize: "28px",
                    lineHeight: 1,
                  }}
                >
                  ⚡
                </div>
                <div>
                  <h3
                    className="font-extrabold text-white"
                    style={{
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                      fontSize: "1.1875rem",
                    }}
                  >
                    UElement Studios
                  </h3>
                  <p
                    className="text-white/50"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    Technology Product Development & Design
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-white/70 leading-relaxed"
                style={{ fontSize: "0.9375rem" }}
              >
                We build intelligent, scalable digital products from concept to
                launch. Our team brings deep expertise in modern web
                technologies, mobile development, cloud-native architecture, and
                product strategy.
              </p>

              {/* Capabilities grid */}
              <div>
                <p
                  className="font-semibold text-white/40 mb-4 uppercase tracking-widest"
                  style={{ fontSize: "11px" }}
                >
                  Capabilities
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {capabilities.map((c) => (
                    <div key={c.label} className="flex items-center gap-2.5">
                      <span
                        style={{
                          fontSize: "16px",
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                      >
                        {c.icon}
                      </span>
                      <span
                        className="text-white/70"
                        style={{ fontSize: "0.8125rem" }}
                      >
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer row */}
              <div
                className="flex items-center justify-between pt-2 border-t"
                style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
              >
                <span
                  className="text-white/40"
                  style={{ fontSize: "0.8125rem" }}
                >
                  Pune, Maharashtra
                </span>
                <a
                  href="https://uelement.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#D84FA5]
                    hover:text-[#FFB800] transition-colors duration-200"
                  style={{ fontSize: "0.875rem" }}
                >
                  Visit Studio
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Team roster */}
          <div
            className="rounded-3xl p-7 reveal"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #E8D8FF",
              boxShadow: "0 4px 24px oklch(0.4 0.15 300 / 0.07)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className="font-extrabold text-[#1A0A2E]"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1.125rem",
                }}
              >
                Phase 1 Core Team
              </h3>
              <span
                className="px-2.5 py-1 rounded-full font-semibold"
                style={{
                  background: "#F3EEFF",
                  color: "#7C3FBE",
                  border: "1px solid #D8C8F0",
                  fontSize: "11px",
                }}
              >
                8 members
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {teamRoles.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl group"
                  style={{
                    background: "#FAFAFA",
                    border: "1px solid #F3F4F6",
                    transition:
                      "background 180ms ease, border-color 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F3EEFF";
                    e.currentTarget.style.borderColor = "#D8C8F0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FAFAFA";
                    e.currentTarget.style.borderColor = "#F3F4F6";
                  }}
                >
                  <span
                    style={{ fontSize: "22px", lineHeight: 1, flexShrink: 0 }}
                  >
                    {m.icon}
                  </span>
                  <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
                    <span
                      className="font-semibold text-[#1A0A2E]"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {m.role}
                    </span>
                    <span
                      className="flex-shrink-0 text-[#9CA3AF]"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {m.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#F3F4F6] my-5" />

            {/* Tech stack pill row */}
            <div>
              <p
                className="font-semibold text-[#9CA3AF] mb-3 uppercase tracking-widest"
                style={{ fontSize: "11px" }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React Native",
                  "Node.js",
                  "PostgreSQL",
                  "Redis",
                  "AWS",
                  "Razorpay",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "#F3F4F6",
                      color: "#374151",
                      fontSize: "12px",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom contact strip ── */}
        <div
          className="rounded-2xl p-7 sm:p-8 reveal"
          style={{
            background: "linear-gradient(135deg, #F9F7FF 0%, #FCE8F5 100%)",
            border: "1.5px solid #E8D8FF",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3
                className="font-extrabold text-[#1A0A2E] mb-1.5"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1.1875rem",
                }}
              >
                Interested in partnering with Vanya?
              </h3>
              <p className="text-[#6B7280]" style={{ fontSize: "0.9rem" }}>
                Whether you&apos;re a service provider, investor, or pet brand —
                we&apos;d love to talk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/contact" className="btn btn-primary group">
                Get in Touch
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
