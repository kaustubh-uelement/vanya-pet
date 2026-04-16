"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
        style={{
          borderBottom: "1px solid #F3F4F6",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between h-[72px]"
          style={{
            maxWidth: "1200px",
            paddingInline: "clamp(1rem, 5vw, 2rem)",
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Vanya Pet — Home"
          >
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Vanya Pet logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="font-extrabold tracking-tight text-[#1A0A2E]"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "1.125rem",
              }}
            >
              Vanya{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D84FA5, #7C3FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Pet
              </span>
            </span>
          </Link>

          {/* ── Desktop: nav links + CTA pushed to right ── */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <nav
              className="flex items-center gap-1"
              aria-label="Main navigation"
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
                    className="px-4 py-2 rounded-full font-medium transition-all duration-200
                      hover:text-[#1A0A2E] hover:bg-[#F9F7FF]"
                    style={{
                      fontSize: "0.9375rem",
                      color: isActive ? "#7C3FBE" : "#374151",
                      background: isActive ? "#F3EEFF" : "transparent",
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="font-semibold transition-all duration-200
                hover:bg-pink-50 active:scale-95 shrink-0"
              style={{
                fontSize: "0.875rem",
                color: "#D84FA5",
                border: "1.5px solid #D84FA5",
                borderRadius: "9999px",
                padding: "0.4rem 1.1rem",
              }}
            >
              Download App
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex items-center justify-center w-10 h-10
              rounded-xl transition-all duration-200 text-[#1A0A2E]"
            style={{ background: mobileOpen ? "#F3EEFF" : "transparent" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
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
            boxShadow: "-8px 0 40px rgba(124,63,190,0.12)",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 320ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#F3F4F6]">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Vanya Pet logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="font-extrabold text-[#1A0A2E]"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1rem",
                }}
              >
                Vanya{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D84FA5, #7C3FBE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Pet
                </span>
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

          {/* Mobile nav links */}
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
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl
                    font-medium transition-all duration-200"
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
              className="flex items-center justify-center gap-2 w-full
                font-semibold transition-all duration-200 active:scale-95"
              style={{
                fontSize: "0.875rem",
                color: "#D84FA5",
                border: "1.5px solid #D84FA5",
                borderRadius: "9999px",
                padding: "0.65rem 1.5rem",
              }}
            >
              <span>🐾</span>
              Download App
            </Link>
            <p className="text-center text-[#9CA3AF] mt-3 text-xs">
              10,000+ owners already on the list
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
