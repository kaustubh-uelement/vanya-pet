import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerNav = {
  Services: [
    { label: "Pet Market", href: "/services" },
    { label: "Pet Care", href: "/services" },
    { label: "Pet Stay", href: "/services" },
    { label: "Pet Wellness", href: "/services" },
    { label: "Pet Social", href: "/services" },
    { label: "Pet Insurance", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Roadmap", href: "/#roadmap" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/vanyapet",
    svg: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/vanyapet",
    svg: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/vanyapet",
    svg: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function PawLogo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="7.5" cy="6" rx="2" ry="2.2" fill="white" />
      <ellipse cx="12" cy="4.5" rx="2" ry="2.2" fill="white" />
      <ellipse cx="16.5" cy="6" rx="2" ry="2.2" fill="white" />
      <ellipse cx="4.5" cy="10" rx="1.5" ry="1.7" fill="white" />
      <path
        d="M12 10c-4 0-6.5 2.5-6.5 5.5 0 2.5 2.5 4.5 6.5 4.5s6.5-2 6.5-4.5C18.5 12.5 16 10 12 10z"
        fill="white"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#0F0520" }} aria-labelledby="footer-label">
      <h2 id="footer-label" className="sr-only">
        Site footer
      </h2>

      {/* Top gradient accent */}
      <div
        aria-hidden="true"
        className="h-1"
        style={{
          background: "linear-gradient(90deg, #7C3FBE, #D84FA5, #FFB800)",
        }}
      />

      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8 mb-14">
          {/* ── Brand column ── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 w-fit group"
              aria-label="Vanya Pet — Home"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                  transition-transform duration-300 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #7C3FBE 0%, #D84FA5 100%)",
                }}
              >
                <PawLogo />
              </div>
              <span
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1.125rem",
                }}
              >
                Vanya{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #B06FDF, #D84FA5)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Pet
                </span>
              </span>
            </Link>

            {/* Tagline */}
            <p
              className="leading-relaxed"
              style={{
                color: "oklch(1 0 0 / 0.55)",
                fontSize: "0.9375rem",
                maxWidth: "32ch",
              }}
            >
              India&apos;s most complete pet technology ecosystem — from first
              day home to lifetime care.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: Mail,
                  text: "hello@vanya.org.in",
                  href: "mailto:hello@vanya.org.in",
                },
                {
                  icon: Phone,
                  text: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                { icon: MapPin, text: "Pune, Maharashtra, IN", href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(1 0 0 / 0.07)" }}
                  >
                    <Icon size={13} style={{ color: "#D84FA5" }} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="transition-colors duration-200 hover:text-white"
                      style={{
                        color: "oklch(1 0 0 / 0.5)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span
                      style={{
                        color: "oklch(1 0 0 / 0.5)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div
              className="flex items-center gap-2.5"
              aria-label="Social media links"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-btn w-9 h-9 rounded-xl flex items-center justify-center"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {Object.entries(footerNav).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <h3
                className="font-semibold uppercase tracking-widest"
                style={{ color: "oklch(1 0 0 / 0.35)", fontSize: "11px" }}
              >
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:text-white"
                      style={{
                        color: "oklch(1 0 0 / 0.55)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "oklch(1 0 0 / 0.08)" }}
          aria-hidden="true"
        />

        {/* ── Bottom row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ color: "oklch(1 0 0 / 0.35)", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} Vanya Pet. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span
              style={{ color: "oklch(1 0 0 / 0.3)", fontSize: "0.8125rem" }}
            >
              Crafted with
            </span>
            <span style={{ fontSize: "14px" }}>❤️</span>
            <span
              style={{ color: "oklch(1 0 0 / 0.3)", fontSize: "0.8125rem" }}
            >
              by
            </span>
            <a
              href="https://uelement.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors duration-200 hover:text-white"
              style={{ color: "#B06FDF", fontSize: "0.8125rem" }}
            >
              UElement Studios
            </a>
          </div>

          {/* Phase 1 launch badge */}
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.1)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span
              className="font-semibold"
              style={{ color: "oklch(1 0 0 / 0.6)", fontSize: "11px" }}
            >
              Phase 1 launching 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
