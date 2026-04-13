"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  User,
  PawPrint,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";

const cities = [
  "Mumbai",
  "Pune",
  "Bangalore",
  "Delhi",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Other",
];

const petTypes = [
  { value: "dog", label: "🐶 Dog" },
  { value: "cat", label: "🐱 Cat" },
  { value: "rabbit", label: "🐰 Rabbit" },
  { value: "bird", label: "🦜 Bird" },
  { value: "other", label: "🐾 Other" },
];

const infoCards = [
  {
    icon: "🚀",
    title: "Early App Access",
    desc: "Be the first to try Vanya before the public launch.",
    color: "#7C3FBE",
    bg: "#F3EEFF",
    border: "#D8C8F0",
  },
  {
    icon: "🎁",
    title: "Exclusive Discounts",
    desc: "Founding members get special launch pricing — forever.",
    color: "#D84FA5",
    bg: "#FCE8F5",
    border: "#F0C8E0",
  },
  {
    icon: "📍",
    title: "City Priority Listing",
    desc: "Your city gets prioritised based on waitlist demand.",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
  {
    icon: "💬",
    title: "Founder Access",
    desc: "Direct feedback channel with the founding team.",
    color: "#B07800",
    bg: "#FFF8E1",
    border: "#FFE082",
  },
];

const inputBase = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  border: "1.5px solid #E5E7EB",
  fontSize: "0.9375rem",
  color: "#1A0A2E",
  background: "#fff",
  outline: "none",
  transition: "border-color 180ms ease, box-shadow 180ms ease",
  appearance: "none",
};

const inputFocus = {
  borderColor: "#7C3FBE",
  boxShadow: "0 0 0 3px oklch(0.5 0.2 300 / 0.12)",
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    petType: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  /* ── Validation ── */
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (form.phone && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone))
      e.phone = "Please enter a valid phone number.";
    if (!form.city) e.city = "Please select your city.";
    return e;
  }

  /* ── Submit ── */
  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field])
      setErrors((prev) => {
        const n = { ...prev };
        delete n[field];
        return n;
      });
  }

  function getInputStyle(field) {
    return {
      ...inputBase,
      borderColor: errors[field]
        ? "#EF4444"
        : focused === field
          ? "#7C3FBE"
          : "#E5E7EB",
      boxShadow: errors[field]
        ? "0 0 0 3px oklch(0.55 0.2 15 / 0.12)"
        : focused === field
          ? inputFocus.boxShadow
          : "none",
    };
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F7FF] pt-20 px-4">
        <div
          className="w-full max-w-md text-center flex flex-col items-center gap-6
            bg-white rounded-3xl p-10"
          style={{ boxShadow: "0 8px 40px oklch(0.4 0.15 300 / 0.1)" }}
        >
          {/* Success icon */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #7C3FBE 0%, #D84FA5 100%)",
            }}
          >
            <CheckCircle2 size={36} color="#fff" strokeWidth={2.5} />
          </div>

          <div className="flex flex-col gap-2">
            <h1
              className="font-extrabold text-[#1A0A2E]"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "1.75rem",
              }}
            >
              You&apos;re on the list! 🎉
            </h1>
            <p
              className="text-[#6B7280] leading-relaxed"
              style={{ fontSize: "0.9375rem" }}
            >
              Hey{" "}
              <strong className="text-[#7C3FBE]">
                {form.name.split(" ")[0]}
              </strong>
              , we&apos;ve saved your spot. We&apos;ll notify you at{" "}
              <strong className="text-[#1A0A2E]">{form.email}</strong> the
              moment Vanya launches in{" "}
              <strong className="text-[#1A0A2E]">{form.city}</strong>.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#F3F4F6]" />

          {/* What's next */}
          <div className="w-full text-left flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
              What happens next
            </p>
            {[
              "You'll get a confirmation email shortly.",
              "We'll send city-specific launch updates.",
              "Early access invite arrives before public launch.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "linear-gradient(135deg, #7C3FBE, #D84FA5)",
                  }}
                >
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: "9px" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <span
                  className="text-[#4B5563]"
                  style={{ fontSize: "0.875rem" }}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="btn btn-primary w-full"
            style={{ justifyContent: "center" }}
          >
            Back to Home
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  /* ── Main form ── */
  return (
    <div
      className="min-h-screen pt-20"
      style={{ background: "linear-gradient(180deg, #F9F7FF 0%, #FFFFFF 60%)" }}
    >
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* ── Left: Info panel ── */}
          <div className="flex flex-col gap-8">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#7C3FBE]
                transition-colors duration-200 w-fit"
              style={{ fontSize: "0.875rem" }}
            >
              <ArrowLeft size={15} />
              Back to home
            </Link>

            {/* Header */}
            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                  text-xs font-semibold uppercase tracking-widest
                  bg-[#F3EEFF] text-[#7C3FBE] border border-[#D8C8F0] mb-5"
              >
                ✦ Early Access
              </span>

              <h1
                className="font-extrabold text-[#1A0A2E] mb-4"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                }}
              >
                Join the Waitlist.
                <br />
                <span className="gradient-text">Be First in Line.</span>
              </h1>

              <p
                className="text-[#6B7280] leading-relaxed"
                style={{ fontSize: "1.0625rem", maxWidth: "44ch" }}
              >
                Vanya is launching soon. Sign up today and we&apos;ll make sure
                you&apos;re the first to know — with perks that won&apos;t be
                available after launch.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{
                    background: card.bg,
                    border: `1px solid ${card.border}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "22px",
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    {card.icon}
                  </span>
                  <div>
                    <p
                      className="font-bold mb-0.5"
                      style={{
                        color: card.color,
                        fontSize: "0.875rem",
                        fontFamily: "var(--font-plus-jakarta, sans-serif)",
                      }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="text-[#6B7280] leading-snug"
                      style={{ fontSize: "0.8125rem" }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ background: "#1A0A2E" }}
            >
              <p
                className="font-semibold text-white mb-1"
                style={{
                  fontSize: "0.875rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Get in Touch
              </p>
              {[
                { icon: Mail, text: "hello@vanya.org.in" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: MapPin, text: "Pune, Maharashtra, IN" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(1 0 0 / 0.08)" }}
                  >
                    <Icon size={14} color="#D84FA5" />
                  </div>
                  <span
                    className="text-white/70"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="rounded-3xl p-7 sm:p-9"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #E8D8FF",
              boxShadow: "0 8px 40px oklch(0.4 0.15 300 / 0.09)",
            }}
          >
            {/* Form header */}
            <div className="mb-8">
              <h2
                className="font-extrabold text-[#1A0A2E] mb-1.5"
                style={{
                  fontFamily: "var(--font-plus-jakarta, sans-serif)",
                  fontSize: "1.375rem",
                }}
              >
                Notify Me When Vanya Launches
              </h2>
              <p className="text-[#9CA3AF]" style={{ fontSize: "0.875rem" }}>
                Takes less than 60 seconds. No spam, ever.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <Field label="Full Name" error={errors.name} required>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      color: focused === "name" ? "#7C3FBE" : "#9CA3AF",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    autoComplete="name"
                    style={{ ...getInputStyle("name"), paddingLeft: "2.5rem" }}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>
              </Field>

              {/* Email */}
              <Field label="Email Address" error={errors.email} required>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      color: focused === "email" ? "#7C3FBE" : "#9CA3AF",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={form.email}
                    autoComplete="email"
                    style={{ ...getInputStyle("email"), paddingLeft: "2.5rem" }}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
              </Field>

              {/* Phone */}
              <Field label="Phone Number" error={errors.phone} hint="Optional">
                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      color: focused === "phone" ? "#7C3FBE" : "#9CA3AF",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    autoComplete="tel"
                    style={{ ...getInputStyle("phone"), paddingLeft: "2.5rem" }}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused("")}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>
              </Field>

              {/* City */}
              <Field label="Your City" error={errors.city} required>
                <div className="relative">
                  <MapPin
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                    style={{
                      color: focused === "city" ? "#7C3FBE" : "#9CA3AF",
                    }}
                  />
                  <ChevronDown
                    size={16}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "#9CA3AF" }}
                  />
                  <select
                    value={form.city}
                    style={{
                      ...getInputStyle("city"),
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      cursor: "pointer",
                    }}
                    onFocus={() => setFocused("city")}
                    onBlur={() => setFocused("")}
                    onChange={(e) => handleChange("city", e.target.value)}
                  >
                    <option value="" disabled>
                      Select your city
                    </option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </Field>

              {/* Pet type */}
              <Field label="What kind of pet do you have?">
                <div className="grid grid-cols-5 gap-2">
                  {petTypes.map((pt) => {
                    const selected = form.petType === pt.value;
                    return (
                      <button
                        key={pt.value}
                        type="button"
                        onClick={() => handleChange("petType", pt.value)}
                        className="flex flex-col items-center gap-1.5 py-3 rounded-xl
                          transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#7C3FBE]"
                        style={{
                          border: selected
                            ? "1.5px solid #7C3FBE"
                            : "1.5px solid #E5E7EB",
                          background: selected ? "#F3EEFF" : "#FAFAFA",
                          fontSize: "20px",
                          lineHeight: 1,
                        }}
                        aria-pressed={selected}
                        aria-label={pt.label}
                      >
                        <span style={{ fontSize: "22px", lineHeight: 1 }}>
                          {pt.label.split(" ")[0]}
                        </span>
                        <span
                          style={{
                            fontSize: "9px",
                            fontWeight: 600,
                            color: selected ? "#7C3FBE" : "#9CA3AF",
                          }}
                        >
                          {pt.label.split(" ")[1]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Field>

              {/* Divider */}
              <div className="h-px bg-[#F3F4F6] -mx-2" />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg w-full relative overflow-hidden"
                style={{
                  justifyContent: "center",
                  opacity: loading ? 0.85 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? (
                  <>
                    <LoadingSpinner />
                    Joining the waitlist…
                  </>
                ) : (
                  <>
                    <PawPrint size={18} />
                    Notify Me — It&apos;s Free
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              {/* Privacy note */}
              <p
                className="text-center text-[#9CA3AF]"
                style={{ fontSize: "0.8125rem" }}
              >
                By signing up you agree to our{" "}
                <Link
                  href="#"
                  className="text-[#7C3FBE] hover:underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                . We never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Field wrapper ── */
function Field({ label, error, hint, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label
          className="font-semibold text-[#374151]"
          style={{ fontSize: "0.875rem" }}
        >
          {label}
          {required && <span className="text-[#D84FA5] ml-0.5">*</span>}
        </label>
        {hint && (
          <span className="text-[#9CA3AF]" style={{ fontSize: "0.75rem" }}>
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p
          className="flex items-center gap-1.5 text-[#EF4444]"
          style={{ fontSize: "0.8125rem" }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="6.5"
              cy="6.5"
              r="6"
              stroke="#EF4444"
              strokeWidth="1.2"
            />
            <path
              d="M6.5 4v3M6.5 8.5v.5"
              stroke="#EF4444"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Loading spinner ── */
function LoadingSpinner() {
  return (
    <svg
      className="animate-spin"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ animationDuration: "0.7s" }}
    >
      <circle
        cx="9"
        cy="9"
        r="7"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="2.5"
      />
      <path
        d="M9 2a7 7 0 0 1 7 7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
