"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import ServiceDetail from "./ServiceDetail";

const phases = [
  { id: "all", label: "All Services", count: 11 },
  { id: 1, label: "Phase 1 · MVP", count: 3 },
  { id: 2, label: "Phase 2 · Expansion", count: 3 },
  { id: 3, label: "Phase 3 · Advanced", count: 5 },
];

const phaseColors = {
  all: { text: "#7C3FBE", bg: "#F3EEFF", border: "#D8C8F0", active: "#7C3FBE" },
  1: { text: "#7C3FBE", bg: "#F3EEFF", border: "#D8C8F0", active: "#7C3FBE" },
  2: { text: "#D84FA5", bg: "#FCE8F5", border: "#F0C8E0", active: "#D84FA5" },
  3: { text: "#B07800", bg: "#FFF8E1", border: "#FFE082", active: "#B07800" },
};

export default function ServicesFilter() {
  const [activePhase, setActivePhase] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = services.filter((svc) => {
    const matchPhase = activePhase === "all" || svc.phase === activePhase;
    const matchSearch =
      !searchQuery.trim() ||
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPhase && matchSearch;
  });

  function handleToggle(id) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="services-grid" className="section-padding bg-white relative">
      <div className="container-wide">
        {/* ── Filter bar ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          {/* Phase tabs */}
          <div
            className="flex flex-wrap gap-2 p-1.5 rounded-2xl flex-1"
            style={{ background: "#F3F4F6" }}
            role="tablist"
            aria-label="Filter services by phase"
          >
            {phases.map((p) => {
              const isActive = activePhase === p.id;
              const cfg = phaseColors[p.id];
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActivePhase(p.id);
                    setExpandedId(null);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold
                    transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#7C3FBE]"
                  style={{
                    fontSize: "0.8125rem",
                    background: isActive ? "#FFFFFF" : "transparent",
                    color: isActive ? cfg.active : "#6B7280",
                    boxShadow: isActive
                      ? "0 1px 4px oklch(0.2 0.05 300 / 0.1)"
                      : "none",
                    border: isActive
                      ? `1px solid ${cfg.border}`
                      : "1px solid transparent",
                  }}
                >
                  {p.label}
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full font-bold"
                    style={{
                      fontSize: "10px",
                      background: isActive ? cfg.bg : "#E5E7EB",
                      color: isActive ? cfg.active : "#9CA3AF",
                    }}
                  >
                    {p.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative flex-shrink-0 w-full sm:w-56">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="5.5"
                stroke="#9CA3AF"
                strokeWidth="1.4"
              />
              <path
                d="M11 11l2.5 2.5"
                stroke="#9CA3AF"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              placeholder="Search services…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setExpandedId(null);
              }}
              className="w-full rounded-xl py-2.5 pl-9 pr-4
                border border-[#E5E7EB] bg-[#FAFAFA]
                text-[#1A0A2E] placeholder-[#9CA3AF]
                focus:outline-none focus:border-[#7C3FBE]
                focus:ring-2 focus:ring-[#7C3FBE]/10
                transition-all duration-180"
              style={{ fontSize: "0.875rem" }}
            />
          </div>
        </div>

        {/* ── Results count ── */}
        <p className="text-[#9CA3AF] mb-6" style={{ fontSize: "0.875rem" }}>
          Showing <strong className="text-[#1A0A2E]">{filtered.length}</strong>
          {filtered.length === 1 ? " service" : " services"}
          {activePhase !== "all" && (
            <>
              {" "}
              in{" "}
              <strong className="text-[#7C3FBE]">
                {phases.find((p) => p.id === activePhase)?.label}
              </strong>
            </>
          )}
          {searchQuery.trim() && (
            <>
              {" "}
              matching &ldquo;
              <strong className="text-[#1A0A2E]">{searchQuery}</strong>&rdquo;
            </>
          )}
        </p>

        {/* ── Services grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((svc, i) => (
              <ServiceDetail
                key={svc.id}
                svc={svc}
                index={i}
                expanded={expandedId === svc.id}
                onToggle={() => handleToggle(svc.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center py-24 gap-4 text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "#F3EEFF", fontSize: "32px", lineHeight: 1 }}
            >
              🔍
            </div>
            <h3
              className="font-bold text-[#1A0A2E]"
              style={{
                fontFamily: "var(--font-plus-jakarta, sans-serif)",
                fontSize: "1.125rem",
              }}
            >
              No services found
            </h3>
            <p
              className="text-[#6B7280] max-w-xs"
              style={{ fontSize: "0.9rem" }}
            >
              Try a different search term or browse all services.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActivePhase("all");
              }}
              className="btn btn-outline mt-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
