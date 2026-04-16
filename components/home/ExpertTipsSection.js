"use client";

import Image from "next/image";
import PawPrint from "@/components/ui/PawPrint";

const INFO_CARD_HEIGHT = 200; // px
const OVERLAP = 56; // px — how far info card climbs over photo

const posts = [
  {
    id: 1,
    image: "/images/expertTip/expertTip1.png",
    alt: "Three tabby cats sitting in a garden",
    bg: "#FCE8F3",
    border: "#F9A8D4",
  },
  {
    id: 2,
    image: "/images/expertTip/expertTip2.png",
    alt: "Dog looking up close with tongue out",
    bg: "#E8F0FC",
    border: "#BFDBFE",
  },
  {
    id: 3,
    image: "/images/expertTip/expertTip3.png",
    alt: "Bernese mountain dog outdoors in forest",
    bg: "#EDE8FC",
    border: "#C4B5FD",
  },
];

export default function ExpertTipsSection() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ padding: "clamp(3.5rem, 7vw, 6rem) 0 clamp(4rem, 8vw, 7rem)" }}
    >
      {/* Pink paw — top right, outside content */}
      <PawPrint
        size={44}
        color="#F472B6"
        style={{
          position: "absolute",
          top: "clamp(1rem, 3vw, 2.5rem)",
          right: "clamp(1rem, 3vw, 2.5rem)",
          opacity: 0.45,
          pointerEvents: "none",
          transform: "rotate(10deg)",
        }}
      />

      <div
        className="relative mx-auto"
        style={{
          maxWidth: "1200px",
          paddingInline: "clamp(1rem, 5vw, 2.5rem)",
        }}
      >
        {/* ══════════════════════════════
            HEADER — left aligned
        ══════════════════════════════ */}
        <div className="mb-12 md:mb-16">
          {/* Eyebrow — orange, 2 lines */}
          <div className="flex items-end gap-1 mb-2">
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)",
                color: "#EA580C",
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              Industry experts sharing
              <br />
              their stories
            </p>
            {/* Doodle curl */}
            <svg
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
              aria-hidden="true"
              style={{ marginBottom: "2px", flexShrink: 0 }}
            >
              <path
                d="M11 3 C11 3, 5 9, 9 15 C13 21, 17 19, 15 23"
                stroke="#EA580C"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Headline */}
          <h2
            className="font-black uppercase text-[#1A1A1A] leading-[1.0]
              tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            }}
          >
            Expert Tips
          </h2>

          {/* Body */}
          <p
            className="text-[#6B7280] leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
              maxWidth: "38ch",
            }}
          >
            News, guides, and stories to help
            <br />
            you give your pet a happier life.
          </p>
        </div>

        {/* ══════════════════════════════
            CARDS — 3 col grid
        ══════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Blog card — same overlap pattern as HelpPetsSection ── */
function BlogCard({ post }) {
  return (
    <div
      className="relative cursor-pointer group"
      style={{ paddingBottom: `${INFO_CARD_HEIGHT - OVERLAP}px` }}
    >
      {/* Photo — landscape aspect ratio */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "4/3",
          borderRadius: "1.25rem",
          boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        }}
      >
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 31vw"
          className="object-cover transition-transform duration-500
            group-hover:scale-[1.03]"
        />
      </div>

      {/* Info card — fixed height, overlaps photo bottom */}
      <div
        className="absolute flex flex-col justify-start"
        style={{
          left: "26px",
          right: "76px",
          bottom: 0,
          height: `${INFO_CARD_HEIGHT}px`,
          background: post.bg,
          border: `1.5px solid ${post.border}`,
          borderRadius: "1rem",
          padding: "1rem 1.25rem",
          boxShadow: `0 4px 20px ${post.border}55`,
        }}
      >
        {/* Tags row — "Blog" left, "Parenting" bold right */}
        <div
          className="flex items-center justify-between mb-3"
          style={{
            borderBottom: `1px solid ${post.border}`,
            paddingBottom: "0.6rem",
          }}
        >
          <span
            className="text-[#6B7280]"
            style={{ fontSize: "0.8125rem", fontWeight: 400 }}
          >
            Blog
          </span>
          <span
            className="text-[#1A1A1A]"
            style={{ fontSize: "0.8125rem", fontWeight: 700 }}
          >
            Parenting
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-black uppercase text-[#1A1A1A] leading-tight mb-2"
          style={{
            fontFamily: "var(--font-plus-jakarta, sans-serif)",
            fontSize: "clamp(0.8rem, 1.1vw, 0.9375rem)",
          }}
        >
          Cum Sociis Natoque
          <br />
          Orem Ipsum Dolor
        </h3>

        {/* Excerpt */}
        <p
          className="text-[#6B7280] leading-snug"
          style={{
            fontSize: "0.78125rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          Cum sociis natoque orem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean
        </p>
      </div>
    </div>
  );
}
