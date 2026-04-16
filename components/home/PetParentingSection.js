"use client";

import Image from "next/image";
import PawPrint from "@/components/ui/PawPrint";

export default function PetParentingSection() {
  return (
    <section
      className="relative bg-white"
      style={{ padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem)" }}
    >
      {/* ── Scattered paws OUTSIDE card ── */}

      {/* Pink paw — top left outside card */}
      <PawPrint
        size={52}
        color="#F472B6"
        style={{
          position: "absolute",
          top: "clamp(1.5rem, 4vw, 3rem)",
          left: "clamp(0.5rem, 2vw, 1.5rem)",
          opacity: 0.55,
          pointerEvents: "none",
        }}
      />

      {/* Purple paws — right side outside card */}
      <PawPrint
        size={32}
        color="#A78BFA"
        style={{
          position: "absolute",
          top: "30%",
          right: "clamp(0.5rem, 2vw, 2rem)",
          opacity: 0.35,
          pointerEvents: "none",
          transform: "rotate(10deg)",
        }}
      />
      <PawPrint
        size={24}
        color="#A78BFA"
        style={{
          position: "absolute",
          top: "50%",
          right: "clamp(1.5rem, 4vw, 4rem)",
          opacity: 0.25,
          pointerEvents: "none",
          transform: "rotate(-8deg)",
        }}
      />
      <PawPrint
        size={40}
        color="#A78BFA"
        style={{
          position: "absolute",
          bottom: "12%",
          right: "clamp(0.25rem, 1.5vw, 1.5rem)",
          opacity: 0.3,
          pointerEvents: "none",
          transform: "rotate(15deg)",
        }}
      />

      {/* ── Main pink card ── */}
      <div className="relative mx-auto" style={{ maxWidth: "1100px" }}>
        <div
          className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          style={{
            background: "#FFD6E7",
            borderRadius: "1.5rem",
            padding: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          {/* ══════════════════
              LEFT — text content
          ══════════════════ */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow + doodle curl */}
            <div className="flex items-end gap-1 mb-2">
              <span
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  fontWeight: 400,
                }}
              >
                Anytime, Anywhere
              </span>
              {/* Small doodle curl — exactly like in Figma */}
              <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                aria-hidden="true"
                style={{ marginBottom: "-4px" }}
              >
                <path
                  d="M11 3 C11 3, 5 9, 9 15 C13 21, 17 19, 15 23"
                  stroke="#1A1A1A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Headline */}
            <h2
              className="font-black uppercase text-[#1A1A1A] leading-[1.0]
                tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              }}
            >
              Your
              <br />
              Pet Parenting
              <br />
              Companion
            </h2>

            {/* Body */}
            <p
              className="text-[#2D2D2D] leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                maxWidth: "42ch",
              }}
            >
              Cum sociis natoque orem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean Cum sociis natoque orem ipsum dolor sit
              amet, consectetuer
            </p>
          </div>

          {/* ══════════════════
              RIGHT — chat UI
          ══════════════════ */}
          <div
            className="flex-1 flex flex-col gap-5 w-full"
            style={{ maxWidth: "460px" }}
          >
            {/* ── AI message bubble (left aligned) ── */}
            <div className="flex items-start gap-3">
              {/* Sparkle icon in white circle */}
              <div
                className="shrink-0 flex items-center justify-center rounded-full bg-white"
                style={{
                  width: "52px",
                  height: "52px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {/* Orange sparkle / 4-point star */}
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2 L13.5 9.5 L21 12 L13.5 14.5 L12 22 L10.5 14.5 L3 12 L10.5 9.5 Z"
                    fill="#D84FA5"
                    stroke="#D84FA5"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                  />
                  {/* Small top-right sparkle dot */}
                  <circle cx="18" cy="6" r="1.5" fill="#D84FA5" />
                </svg>
              </div>

              {/* White chat bubble */}
              <div
                className="relative bg-white rounded-2xl px-5 py-4"
                style={{
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderRadius: "0.25rem 1.25rem 1.25rem 1.25rem",
                  maxWidth: "340px",
                }}
              >
                <p
                  className="text-[#1A1A1A] leading-snug"
                  style={{ fontSize: "clamp(0.9rem, 1.3vw, 1rem)" }}
                >
                  Hello! How can I help you today?
                </p>
              </div>
            </div>

            {/* ── User message bubble (right aligned) ── */}
            <div className="flex items-center justify-end gap-3">
              {/* Bordered white bubble — muted ghost style */}
              <div
                className="relative rounded-2xl px-5 py-4"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: "1.5px solid rgba(255,255,255,0.8)",
                  borderRadius: "1.25rem 0.25rem 1.25rem 1.25rem",
                  maxWidth: "280px",
                  backdropFilter: "blur(4px)",
                }}
              >
                <p
                  className="text-[#2D2D2D] leading-snug"
                  style={{ fontSize: "clamp(0.875rem, 1.2vw, 0.9375rem)" }}
                >
                  My dog has a red dry eye, is it concerning?
                </p>
              </div>

              {/* Circular avatar */}
              <div
                className="shrink-0 rounded-full overflow-hidden border-2 border-white"
                style={{
                  width: "56px",
                  height: "56px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src="/images/user-avatar.jpg"
                  alt="Pet owner"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
