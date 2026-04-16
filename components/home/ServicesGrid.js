"use client";

import Image from "next/image";
import PawPrint from "@/components/ui/PawPrint";

/* ── Card data ── */
const cards = [
  {
    id: 1,
    image: "/images/features/card1.png",
    bg: "linear-gradient(160deg, #FFD6E7 0%, #FFB3D1 100%)",
    border: "#F9A8D4",
    badge: "GREAT WALK!",
    badgeColor: "#EC4899",
    icon: "/images/features/icon-walk.png",
    useEmojiIcon: "🦮",
    title: "Max walked for",
    stat: "45 mins",
    statColor: "#EC4899",
    desc: null,
  },
  {
    id: 2,
    image: "/images/features/card2.png",
    bg: "linear-gradient(160deg, #DBEAFE 0%, #BFDBFE 100%)",
    border: "#93C5FD",
    badge: "RECORD ADDED!",
    badgeColor: "#2563EB",
    icon: "/images/features/icon-record.png",
    useEmojiIcon: "💉",
    title: null,
    stat: null,
    statColor: null,
    desc: (
      <>
        Your care today means a <strong>healthier tomorrow</strong> for your cat
      </>
    ),
  },
  {
    id: 3,
    image: "/images/features/card3.png",
    bg: "linear-gradient(160deg, #EDE9FE 0%, #DDD6FE 100%)",
    border: "#C4B5FD",
    badge: "WEIGHT CHECK",
    badgeColor: "#7C3FBE",
    icon: "/images/features/icon-weight.png",
    useEmojiIcon: "⚖️",
    title: null,
    stat: null,
    statColor: null,
    desc: (
      <>
        A <strong>little check</strong> that tells you how Luna is doing
      </>
    ),
  },
  {
    id: 4,
    image: "/images/features/card4.png",
    bg: "linear-gradient(160deg, #CCFBF1 0%, #99F6E4 100%)",
    border: "#5EEAD4",
    badge: "EXPENSE ADDED",
    badgeColor: "#0D9488",
    icon: "/images/features/icon-expense.png",
    useEmojiIcon: "₹",
    title: null,
    stat: null,
    statColor: null,
    desc: (
      <>
        Tracking every step shows how much <strong>you care</strong>
      </>
    ),
  },
];

export default function HelpPetsSection() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ padding: "clamp(4rem, 8vw, 7rem) 0 clamp(5rem, 10vw, 9rem)" }}
    >
      {/* ── Scattered paws ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <PawPrint
          size={52}
          color="#F472B6"
          style={{
            position: "absolute",
            top: "8%",
            left: "3%",
            transform: "rotate(-15deg)",
            opacity: 0.35,
          }}
        />
        <PawPrint
          size={38}
          color="#A78BFA"
          style={{
            position: "absolute",
            bottom: "6%",
            right: "4%",
            transform: "rotate(12deg)",
            opacity: 0.3,
          }}
        />
        <PawPrint
          size={24}
          color="#F9A8D4"
          style={{
            position: "absolute",
            top: "20%",
            right: "8%",
            transform: "rotate(20deg)",
            opacity: 0.25,
          }}
        />
        <PawPrint
          size={18}
          color="#C4B5FD"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "6%",
            transform: "rotate(-8deg)",
            opacity: 0.2,
          }}
        />
      </div>

      <div
        className="relative mx-auto"
        style={{ maxWidth: "1200px", paddingInline: "clamp(1rem, 5vw, 2rem)" }}
      >
        {/* ── Section heading ── */}
        <div className="text-center mb-12 md:mb-16">
          {/* Eyebrow */}
          <p
            className="text-[#9CA3AF] mb-4 tracking-wide"
            style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.9375rem)" }}
          >
            Built by pet parents
          </p>

          {/* Main headline */}
          <h2
            className="font-black text-[#1A1A1A] uppercase leading-[1.05] tracking-tight"
            style={{
              fontFamily: "var(--font-plus-jakarta, sans-serif)",
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
            }}
          >
            {/* Line 1 */}
            <span className="block">To Help Pets</span>

            {/* Line 2 — with inline meme cat */}
            <span className="inline-flex items-center gap-3 flex-wrap justify-center">
              Live Longer
              {/* Meme cat inline sticker */}
              <span
                className="inline-block align-middle relative shrink-0"
                style={{
                  width: "clamp(44px, 6vw, 72px)",
                  height: "clamp(44px, 6vw, 72px)",
                }}
              >
                <Image
                  src="/images/features/meme-cat.png"
                  alt="Cool cat with sunglasses"
                  fill
                  className="object-contain"
                  sizes="72px"
                />
              </span>
              And
            </span>

            {/* Line 3 */}
            <span className="block">Happier.</span>
          </h2>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Individual feature card ── */
function FeatureCard({ card }) {
  /* 🎛️ OVERLAP CONTROLS
   * INFO_CARD_HEIGHT  → fixed height of the white info card
   * OVERLAP           → how many px the info card climbs over the image
   * The wrapper paddingBottom = INFO_CARD_HEIGHT - OVERLAP
   * (that's the space below the image the info card needs)
   */
  const INFO_CARD_HEIGHT = 180; // px — increase for taller card
  const OVERLAP = 48; // px — increase for more overlap onto image

  return (
    <div
      className="relative"
      style={{ paddingBottom: `${INFO_CARD_HEIGHT - OVERLAP}px` }}
    >
      {/* ── Image box — ends exactly where image ends ── */}
      <div
        className="relative w-full rounded-[1.5rem] overflow-hidden"
        style={{
          background: card.bg,
          aspectRatio: "3/4",
          border: `1.5px solid ${card.border}`,
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        }}
      >
        <Image
          src={card.image}
          alt={card.badge}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
          className="object-cover object-top"
        />
      </div>

      {/* ── Info card — fixed height, narrower, more overlap ── */}
      <div
        className="absolute bg-white rounded-[1rem] p-4 flex flex-col justify-center gap-2"
        style={{
          /* Narrower: left-5/right-5 = 20px inset each side */
          left: "28px",
          right: "58px",
          bottom: 0,
          /* Fixed height so all cards are equal */
          height: `${INFO_CARD_HEIGHT}px`,
          border: `1.5px solid ${card.border}`,
          boxShadow: `0 4px 20px ${card.border}66`,
        }}
      >
        {/* Icon + badge row */}
        <div className="flex items-center flex-col gap-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-base"
            style={{ background: `${card.border}40` }}
            aria-hidden="true"
          >
            {card.useEmojiIcon}
          </div>
          <span
            className="font-black uppercase tracking-wide leading-none"
            style={{
              fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
              color: card.badgeColor,
            }}
          >
            {card.badge}
          </span>
        </div>

        {/* Content row */}
        {card.stat ? (
          <div className="leading-tight text-center">
            <p
              className="text-[#6B7280] leading-none mb-1"
              style={{ fontSize: "0.75rem" }}
            >
              {card.title}
            </p>
            <p
              className="font-black leading-none"
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.375rem)",
                color: card.statColor,
              }}
            >
              {card.stat}
            </p>
          </div>
        ) : (
          <p
            className="text-[#374151] leading-snug text-center"
            style={{
              fontSize: "0.75rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {card.desc}
          </p>
        )}
      </div>
    </div>
  );
}
