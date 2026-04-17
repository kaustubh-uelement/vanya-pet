"use client";

import Image from "next/image";
import Link from "next/link";
import PawPrint from "@/components/ui/PawPrint";

const MOCKUP_WIDTH = 240; // px
const MOCKUP_HEIGHT = 480; // px
const MOCKUP_OVERLAP = 0.75; // 75% inside photo, 25% in bottom strip

export default function FamilySection() {
  const mockupInPhoto = MOCKUP_HEIGHT * MOCKUP_OVERLAP; // 360px inside photo
  const mockupBelowPhoto = MOCKUP_HEIGHT * (1 - MOCKUP_OVERLAP); // 120px in bottom strip

  return (
    <section className="relative bg-white overflow-hidden">
      {/* ══════════════════════════════════════
          TOP WHITE ZONE — text content
          Paw is absolute, left outside content
      ══════════════════════════════════════ */}
      <div
        className="relative"
        style={{
          paddingTop: "clamp(2.5rem, 5vw, 4rem)",
          paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
        }}
      >
        {/* Absolute paw — far left, vertically centred in this zone */}
        <div
          className="absolute top-1/2 -translate-y-1/2 hidden lg:block"
          style={{ left: "1.5rem" }} // ← flush to section left edge
          aria-hidden="true"
        >
          <PawPrint size={48} color="#F9A8D4" style={{ opacity: 0.55 }} />
        </div>

        {/* Content — padded away from the absolute paw */}
        <div
          className="relative mx-auto flex items-start justify-between gap-8"
          style={{
            maxWidth: "1200px",
            paddingInline: "clamp(1rem, 5vw, 2.5rem)",
          }}
        >
          {/* Left — eyebrow + headline + desc */}
          <div className="flex-1 max-w-lg ">
            {/* Eyebrow */}
            {/* <div className="flex items-center gap-1 mb-3">
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "#D84FA5",
                  lineHeight: 1.2,
                }}
              >
                coz pets are family
              </span>
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 2 C10 2, 4 8, 8 14 C12 20, 16 18, 14 22"
                  stroke="#D84FA5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="3 3"
                />
              </svg>
            </div> */}

            {/* Headline */}
            <h2 className="font-title mb-4">
              Add Your
              <br />
              Family Members
            </h2>

            {/* Description */}
            <p
              className="text-[#6B7280] leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                maxWidth: "40ch",
              }}
            >
              Manage every pet in one place — their health records, bookings,
              and daily care, all under one family profile.
            </p>
          </div>

          {/* Right — pets trio, pinned to bottom of this white zone */}
          <div
            className="hidden lg:block shrink-0 self-end"
            style={{
              width: `${MOCKUP_WIDTH + 40}px`,
              height: "clamp(130px, 12vw, 170px)",
              marginBottom: "-46px", // ← overlap amount: increase for more, decrease for less
              position: "relative",
              zIndex: 10, // ← sit on top of the family photo
            }}
          >
            <Image
              src="/images/pets-trio1.png"
              alt="Two cats and a puppy peeking over"
              fill
              className="object-contain object-bottom"
              sizes={`${MOCKUP_WIDTH + 40}px`}
              priority
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PHOTO ZONE — full section width
          Mockup is absolute, bottom-right,
          75% inside this zone
      ══════════════════════════════════════ */}
      <div
        className="relative w-full"
        style={{ height: "clamp(300px, 42vw, 520px)" }}
      >
        {/* Full-width family photo */}
        <Image
          src="/images/family.png"
          alt="Happy family with their pet dog"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />

        {/* Phone mockup — absolute, bottom-right, 75% inside photo */}
        <div
          className="hidden lg:block absolute"
          style={{
            width: `${MOCKUP_WIDTH}px`,
            height: `${MOCKUP_HEIGHT}px`,
            right: "clamp(1rem, 3vw, 3rem)",
            // bottom offset: negative = extends below photo
            bottom: `-${mockupBelowPhoto}px`,
            zIndex: 20,
          }}
        >
          <Image
            src="/images/phone-mockup.png"
            alt="Vanya Pet app on phone"
            fill
            className="object-contain"
            sizes={`${MOCKUP_WIDTH}px`}
            priority
          />
        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM STRIP — paw + text + button
          Left side only, right side reserved
          for the bottom 25% of the mockup
      ══════════════════════════════════════ */}
      <div
        className="relative bg-white"
        style={{
          // Height = 25% of mockup that sticks below photo + breathing room
          minHeight: `${mockupBelowPhoto + 32}px`,
          zIndex: 10,
        }}
      >
        <div
          className="mx-auto flex flex-row md:flex-col justify-center gap-3"
          style={{
            maxWidth: "1200px",
            paddingInline: "clamp(1rem, 5vw, 2.5rem)",
            // Reserve right space so content doesn't go under mockup
            paddingRight: `${MOCKUP_WIDTH + 48}px`,
            height: "100%",
            paddingBlock: "1.25rem",
          }}
        >
          {/* Paw + label */}
          <div className="flex items-center justify-end gap-3">
            <PawPrint
              size={32}
              color="#A78BFA"
              style={{ opacity: 0.85, flexShrink: 0 }}
            />
            <span
              className="font-black uppercase text-[#1A1A1A] tracking-tight"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "clamp(0.9rem, 1.6vw, 1.125rem)",
              }}
            >
              Add Your Family Members
            </span>
          </div>

          {/* Download App button */}
          <div className="flex justify-end" style={{ paddingLeft: "44px" }}>
            {" "}
            {/* align with text past paw */}
            <Link
              href="/contact"
              className="inline-block font-bold transition-all duration-200
                active:scale-95 hover:opacity-90 w-fit whitespace-nowrap"
              style={{
                background: "#D84FA5",
                color: "#fff",
                borderRadius: "9999px",
                padding: "0.6rem 1.75rem",
                fontSize: "0.9rem",
              }}
            >
              Download App
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative paw — bottom far right */}
      <PawPrint
        size={34}
        color="#F9A8D4"
        style={{
          position: "absolute",
          bottom: "8%",
          right: "1%",
          opacity: 0.25,
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </section>
  );
}
