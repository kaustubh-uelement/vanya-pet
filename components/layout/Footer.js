"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_COL_1 = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

const NAV_COL_2 = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
];

const MOCKUP_WIDTH = 240; // px — adjust to match your mockup asset
const MOCKUP_HEIGHT = 340; // px
const MOCKUP_BLEED = 140; // px — how far it bleeds above footer top

export default function Footer() {
  return (
    <footer
      className="relative overflow-visible bg-linear-to-tr from-[#FE6EA7] to-[#FFD8E8]"
      style={{ marginTop: `${MOCKUP_BLEED}px` }}
    >
      {/* ══════════════════════════════════════════
          PHONE MOCKUP — bleeds above footer top
      ══════════════════════════════════════════ */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          top: `-${MOCKUP_BLEED}px`,
          right: "clamp(1rem, 5vw, 4rem)",
          width: `${MOCKUP_WIDTH}px`,
          height: `${MOCKUP_HEIGHT}px`,
          zIndex: 20,
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/phone-mockup.png"
          alt="Vanya Pet app mockup"
          fill
          className="object-contain object-bottom drop-shadow-2xl"
          sizes={`${MOCKUP_WIDTH}px`}
          priority
        />
      </div>

      {/* ══════════════════════════════════════════
          MAIN FOOTER CONTENT
      ══════════════════════════════════════════ */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: "1200px",
          paddingInline: "clamp(1rem, 5vw, 2.5rem)",
          paddingTop: "clamp(2.5rem, 5vw, 4rem)",
          paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
        }}
      >
        {/* 4-column grid */}
        <div
          className="grid gap-10"
          style={{
            /* Col 1 wide, cols 2-3 narrow, col 4 medium — right col doesn't overlap mockup */
            gridTemplateColumns: "1fr auto auto minmax(200px, 260px)",
            paddingRight: `${MOCKUP_WIDTH - 62}px` /* keep content away from mockup */,
          }}
        >
          {/* ── Col 1: Logo + tagline ── */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 w-fit">
              {/* Icon/favicon logo */}
              <div
                className="relative shrink-0"
                style={{ width: "52px", height: "52px" }}
              >
                <Image
                  src="/logo-icon.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="52px"
                />
              </div>

              {/* Text logo */}
              <div
                className="relative shrink-0"
                style={{ width: "clamp(100px, 10vw, 140px)", height: "52px" }}
              >
                <Image
                  src="/logo-text.png"
                  alt="Vanya Pet"
                  fill
                  className="object-contain object-left"
                  sizes="140px"
                />
              </div>
            </Link>

            {/* Tagline paragraphs */}
            <div
              className="text-[#7C3D6B] leading-relaxed"
              style={{
                fontSize: "clamp(0.8125rem, 1.1vw, 0.9375rem)",
                maxWidth: "38ch",
              }}
            >
              <p className="mb-2">
                Cum sociis natoque orem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean
              </p>
              <p>Cum sociis natoque orem ipsum dolor sit amet, consectetuer</p>
            </div>
          </div>

          {/* ── Col 2: Nav links left ── */}
          <nav aria-label="Footer navigation column 1">
            <ul className="flex flex-col gap-5 list-none">
              {NAV_COL_1.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#7C3D6B] hover:text-[#D84FA5]
                      transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Col 3: Nav links right ── */}
          <nav aria-label="Footer navigation column 2">
            <ul className="flex flex-col gap-5 list-none">
              {NAV_COL_2.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#7C3D6B] hover:text-[#D84FA5]
                      transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-plus-jakarta, sans-serif)",
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Col 4: Download CTA + store badges ── */}
          <div className="flex flex-col items-end gap-4 ">
            {/* "Download App" outlined pill button */}
            <Link
              href="#download"
              className="inline-flex items-center justify-center
                border-2 rounded-full font-semibold
                hover:bg-[#D84FA5] hover:text-white
                transition-colors duration-200"
              style={{
                borderColor: "#D84FA5",
                color: "#D84FA5",
                fontSize: "clamp(0.8125rem, 1.1vw, 0.9375rem)",
                paddingInline: "1.5rem",
                paddingBlock: "0.6rem",
                whiteSpace: "nowrap",
              }}
            >
              Download App
            </Link>

            {/* Google Play badge */}
            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              style={{ width: "clamp(140px, 14vw, 180px)" }}
              aria-label="Get it on Google Play"
            >
              <div
                className="relative"
                style={{
                  width: "100%",
                  height: "clamp(42px, 4.5vw, 54px)",
                }}
              >
                <Image
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  fill
                  className="object-contain object-right"
                  sizes="180px"
                />
              </div>
            </Link>

            {/* App Store badge */}
            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              style={{ width: "clamp(140px, 14vw, 180px)" }}
              aria-label="Download on the App Store"
            >
              <div
                className="relative"
                style={{
                  width: "100%",
                  height: "clamp(42px, 4.5vw, 54px)",
                }}
              >
                <Image
                  src="/images/app-store.png"
                  alt="Download on the App Store"
                  fill
                  className="object-contain object-right"
                  sizes="180px"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="w-full mt-8 mb-5"
          style={{ height: "1px", background: "rgba(216, 79, 165, 0.3)" }}
          role="separator"
        />

        {/* ── Bottom copyright bar ── */}
        <p
          className="text-center text-[#9D4E85]"
          style={{ fontSize: "clamp(0.75rem, 1vw, 0.875rem)" }}
        >
          Cum sociis natoque orem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean
        </p>
      </div>
    </footer>
  );
}
