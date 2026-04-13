"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

/* ── Inline SVG paw logo ── */
function PawLogo({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Toes */}
      <ellipse cx="7.5" cy="6" rx="2" ry="2.2" fill="white" />
      <ellipse cx="12" cy="4.5" rx="2" ry="2.2" fill="white" />
      <ellipse cx="16.5" cy="6" rx="2" ry="2.2" fill="white" />
      {/* Dewclaw */}
      <ellipse cx="4.5" cy="10" rx="1.5" ry="1.7" fill="white" />
      {/* Main pad */}
      <path
        d="M12 10c-4 0-6.5 2.5-6.5 5.5 0 2.5 2.5 4.5 6.5 4.5s6.5-2 6.5-4.5C18.5 12.5 16 10 12 10z"
        fill="white"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on navigate */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Fixed header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid #F3F4F6" : "none",
          boxShadow: scrolled
            ? "0 1px 12px oklch(0.2 0.05 300 / 0.06)"
            : "none",
        }}
      >
        <div className="container-wide">
          <nav
            className="flex items-center justify-between h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
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
                <PawLogo size={22} />
              </div>
              <span
                className="font-extrabold tracking-tight"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1.125rem",
                  color: scrolled ? "#1A0A2E" : "#1A0A2E",
                }}
              >
                Vanya <span className="gradient-text">Pet</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <div
              className="hidden md:flex items-center gap-1"
              role="list"
              aria-label="Site navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="listitem"
                    aria-current={isActive ? "page" : undefined}
                    className="px-4 py-2 rounded-full font-medium transition-all duration-200"
                    style={{
                      fontSize: "0.9375rem",
                      color: isActive ? "#7C3FBE" : "#4B5563",
                      background: isActive ? "#F3EEFF" : "transparent",
                      fontWeight: isActive ? 600 : 500,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        e.currentTarget.style.background = "#F9F7FF";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact" className="btn btn-primary group">
                Notify Me
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl
                transition-all duration-200"
              style={{
                background: mobileOpen ? "#F3EEFF" : "transparent",
                color: "#1A0A2E",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* ── Mobile drawer overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className="fixed inset-0 z-40 md:hidden"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 250ms ease",
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/25 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className="absolute top-0 right-0 bottom-0 w-72 flex flex-col bg-white"
          style={{
            boxShadow: "-8px 0 40px oklch(0.2 0.12 300 / 0.18)",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 320ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#F3F4F6]">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #7C3FBE, #D84FA5)",
                }}
              >
                <PawLogo size={18} />
              </div>
              <span
                className="font-extrabold text-[#1A0A2E]"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1rem",
                }}
              >
                Vanya <span className="gradient-text">Pet</span>
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center
                bg-[#F3F4F6] text-[#6B7280] transition-all duration-200
                hover:bg-[#F3EEFF] hover:text-[#7C3FBE]"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          {/* Nav links */}
          <nav
            className="flex flex-col gap-1 px-4 pt-4 flex-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium
                    transition-all duration-200"
                  style={{
                    color: isActive ? "#7C3FBE" : "#374151",
                    background: isActive ? "#F3EEFF" : "transparent",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "1rem",
                    borderLeft: isActive
                      ? "3px solid #7C3FBE"
                      : "3px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Drawer CTA */}
          <div className="px-6 pb-8 pt-4 border-t border-[#F3F4F6]">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg w-full"
              style={{ justifyContent: "center" }}
            >
              <span>🐾</span>
              Notify Me — It&apos;s Free
            </Link>
            <p
              className="text-center text-[#9CA3AF] mt-3"
              style={{ fontSize: "12px" }}
            >
              10,000+ owners already on the list
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
