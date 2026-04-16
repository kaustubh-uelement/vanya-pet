"use client";

import Image from "next/image";

/* ── Left grid: 6 images in 3×2 ── */
const leftGrid = [
  { src: "/images/findFriend/petFriend1.png", alt: "Man with cat on shoulder" },
  {
    src: "/images/findFriend/petFriend2.png",
    alt: "Man smiling with small dog",
  },
  { src: "/images/findFriend/petFriend3.png", alt: "Woman holding fluffy cat" },
  {
    src: "/images/findFriend/petFriend4.png",
    alt: "Girl cuddling with black dog",
  },
  {
    src: "/images/findFriend/petFriend5.png",
    alt: "Girl hugging puppy outdoors",
  },
  {
    src: "/images/findFriend/petFriend6.png",
    alt: "Man laughing with white dog",
  },
];

/* ── Right stack: 2 wide images ── */
const rightStack = [
  {
    src: "/images/findFriend/petFriendLonger.png",
    alt: "Couple playing with poodle",
  },
  {
    src: "/images/findFriend/petFriendLonger1.png",
    alt: "Woman holding kitten",
  },
];

export default function FindFriendSection() {
  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}
    >
      <div
        className="mx-auto flex items-center gap-0"
        style={{ maxWidth: "1400px" }}
      >
        {/* ══════════════════════════════
            LEFT — 3×2 photo grid
            No padding, bleeds to edge
        ══════════════════════════════ */}
        <div
          className="hidden lg:grid shrink-0"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "10px",
            width: "clamp(360px, 32vw, 500px)",
            height: "clamp(340px, 30vw, 480px)",
            paddingLeft: "clamp(1rem, 3vw, 2.5rem)",
          }}
        >
          {leftGrid.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
              style={{ borderRadius: "0.75rem" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════
            CENTER — eyebrow + headline
        ══════════════════════════════ */}
        <div
          className="flex-1 flex flex-col items-center text-center px-8 lg:px-12"
          style={{ minWidth: 0 }}
        >
          {/* Eyebrow + doodle curl */}
          <div className="mb-3 flex flex-col items-center">
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "clamp(0.875rem, 1.3vw, 1.0625rem)",
                color: "#D84FA5",
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              Say hello to the furry
              <br />
              friends across
            </p>
            {/* Doodle curl below eyebrow */}
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              aria-hidden="true"
              style={{ marginTop: "2px" }}
            >
              <path
                d="M12 2 C12 2, 6 9, 10 16 C14 23, 18 20, 16 25"
                stroke="#D84FA5"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Headline */}
          <h2
            className="font-black uppercase text-[#1A1A1A] leading-[1.0]
              tracking-tight mb-5"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            Find Your
            <br />
            Pet&apos;s Next Best
            <br />
            Friend
          </h2>

          {/* Body */}
          <p
            className="text-[#6B7280] leading-relaxed text-center"
            style={{
              fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
              maxWidth: "28ch",
            }}
          >
            orem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>

        {/* ══════════════════════════════
            RIGHT — 2 stacked wide images
            No padding, bleeds to edge
        ══════════════════════════════ */}
        <div
          className="hidden lg:flex flex-col shrink-0 gap-[10px]"
          style={{
            width: "clamp(300px, 28vw, 420px)",
            height: "clamp(340px, 30vw, 480px)",
            paddingRight: "clamp(1rem, 3vw, 2.5rem)",
          }}
        >
          {/* Top image — taller (~60% of height) */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "0.75rem",
              flex: "0 0 58%",
            }}
          >
            <Image
              src={rightStack[0].src}
              alt={rightStack[0].alt}
              fill
              className="object-cover"
              sizes="420px"
            />
          </div>

          {/* Bottom image — shorter (~40% of height) */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "0.75rem",
              flex: "1 1 0",
            }}
          >
            <Image
              src={rightStack[1].src}
              alt={rightStack[1].alt}
              fill
              className="object-cover"
              sizes="420px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
