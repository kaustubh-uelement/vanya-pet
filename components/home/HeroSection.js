import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

function PawPrint({ size = 28, color = "#F0B8CC", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={color}
      aria-hidden="true"
      style={style}
    >
      <ellipse cx="10" cy="8" rx="4.5" ry="5.5" />
      <ellipse cx="21" cy="5" rx="4.5" ry="5.5" />
      <ellipse cx="31" cy="8" rx="4.5" ry="5.5" />
      <ellipse cx="5" cy="18" rx="3.5" ry="4.5" />
      <path d="M20 16 C10 16 6 22 6 27 C6 33 12 36 20 36 C28 36 34 33 34 27 C34 22 30 16 20 16Z" />
    </svg>
  );
}

const avatars = [
  { initials: "R", bg: "#F9A8D4" },
  { initials: "A", bg: "#C4B5FD" },
  { initials: "S", bg: "#6EE7B7" },
];

/* ─────────────────────────────────────────────────────────────────
   🎛️  ANIMAL POSITION CONTROLS — tweak these to reposition animals
   ─────────────────────────────────────────────────────────────────
   left / right   → horizontal position (% from that edge)
   bottom         → how far they overflow BELOW the section
                    positive = more overflow (paws stick out more)
                    negative = pull them up (less overflow)
   width          → size of the animal (% of the right column)
   height         → vertical size of the container
   ──────────────────────────────────────────────────────────────── */
const DOG = {
  left: "22%", // ← increase to push right, decrease to push left
  bottom: "-25%", // ← increase for more paw overflow
  width: "56%", // ← increase to make bigger
  height: "115%", // ← increase for more vertical space
  zIndex: 1,
};

const CAT = {
  right: "-18%", // ← increase to push further right (off-edge), decrease to pull left
  bottom: "-5%", // ← increase for more paw overflow
  width: "48%", // ← increase to make bigger
  height: "95%", // ← increase for more vertical space
  zIndex: 2,
};

/* Height of the image container (right column).
   Increase for taller animals, decrease for shorter. */
const IMAGE_CONTAINER_HEIGHT = "clamp(300px, 46vw, 520px)";

export default function HeroSection() {
  return (
    <section
      className="relative bg-white"
      style={{
        paddingTop: "80px",
        /*
         * overflow-x: clip  → hides horizontal overflow (pink circle)
         *                      WITHOUT creating a scroll container
         * overflow-y: visible → paws are allowed to break below
         */
        overflowX: "clip",
        overflowY: "visible",
      }}
      aria-label="Hero"
    >
      {/* ══ PINK CIRCLE ══ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-10%",
          bottom: "0%",
          transform: "translateY(50%)",
          width: "clamp(420px, 72vw, 980px)",
          height: "clamp(420px, 72vw, 980px)",
          borderRadius: "50%",
          background:
            "linear-gradient(160deg, #FFE4EF 0%, #FFBCD9 45%, #FF9EC8 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ══ SCATTERED PAWS ══ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <PawPrint
          size={28}
          color="#D1D5DB"
          style={{
            position: "absolute",
            top: "20%",
            left: "2%",
            transform: "rotate(-15deg)",
            opacity: 0.55,
          }}
        />
        <PawPrint
          size={16}
          color="#D1D5DB"
          style={{
            position: "absolute",
            top: "58%",
            left: "5%",
            transform: "rotate(10deg)",
            opacity: 0.4,
          }}
        />
        <PawPrint
          size={20}
          color="#F472B6"
          style={{
            position: "absolute",
            top: "15%",
            right: "25%",
            transform: "rotate(20deg)",
            opacity: 0.35,
          }}
        />
        <PawPrint
          size={14}
          color="#F472B6"
          style={{
            position: "absolute",
            top: "40%",
            right: "11%",
            transform: "rotate(-12deg)",
            opacity: 0.3,
          }}
        />
        <PawPrint
          size={18}
          color="#F472B6"
          style={{
            position: "absolute",
            top: "60%",
            right: "32%",
            transform: "rotate(6deg)",
            opacity: 0.25,
          }}
        />
        <PawPrint
          size={12}
          color="#D1D5DB"
          style={{
            position: "absolute",
            top: "10%",
            right: "46%",
            transform: "rotate(15deg)",
            opacity: 0.25,
          }}
        />
      </div>

      {/* ══ SEARCH BAR ══ */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          paddingTop: "clamp(1rem, 2.5vw, 1.75rem)",
          paddingInline: "1rem",
        }}
      >
        <div
          role="search"
          aria-label="Product search — coming soon"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            width: "100%",
            maxWidth: "560px",
            background: "white",
            border: "1.5px solid #E5E7EB",
            borderRadius: "9999px",
            padding: "0.5rem 0.5rem 0.5rem 1.25rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <input
            type="text"
            placeholder="Search for more than 10,000 products"
            disabled
            aria-label="Search products"
            style={{
              flex: 1,
              background: "transparent",
              outline: "none",
              color: "#9CA3AF",
              fontSize: "clamp(0.8rem, 2vw, 0.9375rem)",
              cursor: "default",
              minWidth: 0,
              border: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #EC4899, #BE185D)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Search size={15} color="white" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* ══ MAIN CONTENT GRID ══ */}
      <div
        style={{
          maxWidth: "1200px",
          marginInline: "auto",
          paddingInline: "clamp(1rem, 5vw, 2rem)",
          position: "relative",
          zIndex: 10,
          display: "grid",
          /* Mobile: single column | Desktop: two equal columns */
          gridTemplateColumns: "1fr",
          alignItems: "flex-end",
          gap: "clamp(1rem, 3vw, 2rem)",
        }}
        className="lg:!grid-cols-[1fr_1fr]"
      >
        {/* ── LEFT — Text column ── */}
        <div
          style={{
            paddingTop: "clamp(2rem, 5vw, 3.5rem)",
            paddingBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <div style={{ maxWidth: "min(100%, 480px)", width: "100%" }}>
            {/* Headline */}
            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <span
                aria-hidden="true"
                className="hidden sm:block"
                style={{
                  position: "absolute",
                  top: "-0.4em",
                  right: "0",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                  color: "#EC4899",
                  transform: "rotate(-8deg)",
                  textDecoration: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "#EC4899",
                  userSelect: "none",
                }}
              >
                ever
              </span>

              <h1
                className="animate-slide-up"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontWeight: 900,
                  color: "#1A1A1A",
                  textTransform: "uppercase",
                  fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  The Best
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <svg
                      width="clamp(22px,3.2vw,38px)"
                      height="clamp(22px,3.2vw,38px)"
                      viewBox="0 0 40 40"
                      fill="#EC4899"
                      style={{ display: "inline", verticalAlign: "middle" }}
                    >
                      <ellipse cx="10" cy="8" rx="4.5" ry="5.5" />
                      <ellipse cx="21" cy="5" rx="4.5" ry="5.5" />
                      <ellipse cx="31" cy="8" rx="4.5" ry="5.5" />
                      <ellipse cx="5" cy="18" rx="3.5" ry="4.5" />
                      <path d="M20 16 C10 16 6 22 6 27 C6 33 12 36 20 36 C28 36 34 33 34 27 C34 22 30 16 20 16Z" />
                    </svg>
                    <svg
                      width="clamp(13px,1.8vw,22px)"
                      height="clamp(13px,1.8vw,22px)"
                      viewBox="0 0 40 40"
                      fill="#EC4899"
                      style={{
                        display: "inline",
                        verticalAlign: "top",
                        marginTop: "2px",
                      }}
                    >
                      <ellipse cx="10" cy="8" rx="4.5" ry="5.5" />
                      <ellipse cx="21" cy="5" rx="4.5" ry="5.5" />
                      <ellipse cx="31" cy="8" rx="4.5" ry="5.5" />
                      <ellipse cx="5" cy="18" rx="3.5" ry="4.5" />
                      <path d="M20 16 C10 16 6 22 6 27 C6 33 12 36 20 36 C28 36 34 33 34 27 C34 22 30 16 20 16Z" />
                    </svg>
                  </span>
                </span>
                <span style={{ display: "block" }}>Pet Parenting App</span>
              </h1>
            </div>

            {/* Subheading */}
            <p
              className="animate-slide-up delay-100"
              style={{
                color: "#4B5563",
                fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)",
                lineHeight: 1.7,
                maxWidth: "42ch",
                marginBottom: "1.25rem",
              }}
            >
              One app to care better and give your pet their best life.
            </p>

            {/* Social proof pill */}
            <div
              className="animate-slide-up delay-200"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                width: "fit-content",
                padding: "0.625rem 1rem",
                borderRadius: "1rem",
                background: "#F5F0FF",
                border: "1px solid #E9D8FD",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {avatars.map((av, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: av.bg,
                      marginLeft: i === 0 ? 0 : "-8px",
                      border: "2px solid white",
                      fontSize: "11px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#374151",
                      position: "relative",
                      zIndex: avatars.length - i,
                      flexShrink: 0,
                    }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: "clamp(0.75rem,1.2vw,0.875rem)",
                  fontWeight: 500,
                  color: "#374151",
                }}
              >
                &ldquo;All my pet records in one place&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Image column ── */}
        <div
          className=""
          style={{
            position: "relative",
            height: IMAGE_CONTAINER_HEIGHT,
            width: "100%",
            zIndex: 20,
            alignSelf: "flex-end",
          }}
        >
          {/* 🐶 DOG */}
          <div
            style={{
              position: "absolute",
              left: DOG.left,
              bottom: DOG.bottom,
              width: DOG.width,
              height: DOG.height,
              zIndex: DOG.zIndex,
            }}
          >
            <Image
              src="/images/hero-dog.png"
              alt="Happy dog with paws resting on the edge"
              fill
              sizes="(max-width: 1024px) 44vw, 26vw"
              className="object-contain object-bottom"
              style={{ filter: "drop-shadow(0 20px 32px rgba(0,0,0,0.18))" }}
              priority
            />
          </div>

          {/* 🐱 CAT */}
          <div
            style={{
              position: "absolute",
              right: CAT.right,
              bottom: CAT.bottom,
              width: CAT.width,
              height: CAT.height,
              zIndex: CAT.zIndex,
            }}
          >
            <Image
              src="/images/hero-cat.png"
              alt="Curious cat peeking over the edge"
              fill
              sizes="(max-width: 1024px) 36vw, 20vw"
              className="object-contain object-bottom"
              style={{ filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.14))" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* ══ BOTTOM SHADOW — inset ledge effect ══ */}
      {/* Hard shadow line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "rgba(0,0,0,0.09)",
          zIndex: 8,
          pointerEvents: "none",
        }}
      />
      {/* Soft fade above */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5px",
          left: 0,
          right: 0,
          height: "70px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.05) 0%, transparent 100%)",
          zIndex: 8,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
