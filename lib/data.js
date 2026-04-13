export const services = [
  {
    id: 1,
    phase: 1,
    icon: "🛒",
    title: "Pet Market",
    description:
      "Breeder aggregator, pet purchases, accessories marketplace and food supplies.",
    features: [
      "Breeder discovery & verification system",
      "Pet listings with photos & health certs",
      "Accessories & food marketplace",
      "Subscription delivery for pet supplies",
      "Secure payment & escrow service",
    ],
    businessModel:
      "Transaction commission + seller subscription tiers for featured listings.",
  },
  {
    id: 2,
    phase: 1,
    icon: "🐾",
    title: "Pet Care",
    description:
      "Walker, grooming, food delivery, and trainer booking with real-time tracking.",
    features: [
      "Walker, groomer & trainer discovery",
      "Real-time GPS tracking for walkers",
      "Calendar-based booking & scheduling",
      "Photo/video proof of completion",
      "Recurring booking automation",
    ],
    businessModel:
      "Service commission model — percentage of each booking value.",
  },
  {
    id: 3,
    phase: 1,
    icon: "🏠",
    title: "Pet Stay",
    description:
      "Hostel, day care and pet-friendly accommodation booking with live updates.",
    features: [
      "Hostel & day care facility listings",
      "Pet-friendly accommodation (BnB)",
      "Availability & rate management",
      "Health requirement verification",
      "Live photo updates during stay",
    ],
    businessModel:
      "Commission per booking + premium facility listing subscriptions.",
  },
  {
    id: 4,
    phase: 2,
    icon: "📸",
    title: "Pet Social",
    description:
      "Social profiles, photo sharing, competitions, events and community building.",
    features: [
      "Social feed for pet photos & videos",
      "Community-driven content & engagement",
      "Photography services marketplace",
      "Pet competitions & event organisation",
      "Influencer & brand partnerships",
    ],
    businessModel:
      "Advertising, brand partnerships, and premium creator subscriptions.",
  },
  {
    id: 5,
    phase: 2,
    icon: "🩺",
    title: "Pet Wellness",
    description:
      "Vet directory, telemedicine, specialist bookings, pharmacy and health records.",
    features: [
      "Veterinary services directory & booking",
      "Telemedicine for remote consultations",
      "Specialist directories (surgeon, dental)",
      "Pharmacy integration for prescriptions",
      "Health records & prescription management",
    ],
    businessModel:
      "Consultation commission + pharmacy affiliate + premium vet listings.",
  },
  {
    id: 6,
    phase: 2,
    icon: "🛡️",
    title: "Pet Insurance",
    description:
      "Insurance plan aggregation, quote generation, claims management and wellness plans.",
    features: [
      "Insurance plan aggregation & comparison",
      "Instant quote generation",
      "Policy enrolment & management",
      "Claims tracking & reimbursement",
      "Wellness plan recommendations",
    ],
    businessModel:
      "Insurance affiliate commissions + premium plan management fees.",
  },
  {
    id: 7,
    phase: 3,
    icon: "💕",
    title: "Pet Dating",
    description:
      "Breeding matchmaking with genetics compatibility scoring and breeder communication.",
    features: [
      "Breeding matchmaking platform",
      "Genetic compatibility scoring",
      "Breeder-to-breeder communication",
      "Health & genetic screening integration",
      "Litter announcement & tracking",
    ],
    businessModel: "Per-match fee + premium breeder profile subscriptions.",
  },
  {
    id: 8,
    phase: 3,
    icon: "📋",
    title: "Pet Documentation",
    description:
      "Digital identity, microchip registration, travel docs, vaccination records and pet passport.",
    features: [
      "Digital identity & microchip registration",
      "International travel documentation",
      "Vaccination & health certificates",
      "Pet passport generation",
      "Document storage & sharing",
    ],
    businessModel: "Per-document fee + annual digital identity subscription.",
  },
  {
    id: 9,
    phase: 3,
    icon: "📚",
    title: "Pet Parenting",
    description:
      "Educational content, training courses, expert consultations and nutrition guidance.",
    features: [
      "Educational content library",
      "Online training & behavioural courses",
      "Expert consultation booking",
      "Nutrition & wellness guidance",
      "Breed-specific care guides",
    ],
    businessModel:
      "Course sales + expert consultation commission + premium membership.",
  },
  {
    id: 10,
    phase: 3,
    icon: "❤️",
    title: "Pet Adoption & Rescue",
    description:
      "Adoption marketplace, rescue network, AI-driven matching and post-adoption support.",
    features: [
      "Adoption marketplace & rescue network",
      "AI-driven pet-to-owner matching",
      "Post-adoption support resources",
      "Foster network management",
      "NGO & shelter partnerships",
    ],
    businessModel:
      "NGO partnership fees + adoption platform subscription for shelters.",
  },
  {
    id: 11,
    phase: 3,
    icon: "🌈",
    title: "Pet Legacy",
    description:
      "Memorial services, digital tributes, cremation partnerships and memory preservation.",
    features: [
      "Memorial services & digital tributes",
      "Pet cremation & burial partnerships",
      "Memorial products & commemorative items",
      "Legacy account & digital memory vault",
      "Community memorial sharing",
    ],
    businessModel:
      "Service referral commissions + premium memorial product sales.",
  },
];

export const phases = [
  {
    number: 1,
    title: "MVP Launch",
    subtitle: "6–9 Months",
    status: "active",
    color: "#7C3FBE",
    description:
      "Establish market presence with core pet care services and build the initial user base.",
    services: ["Pet Market", "Pet Care", "Pet Stay"],
    milestones: [
      { month: "M1–2", label: "Design system & brand finalization" },
      { month: "M3–4", label: "Backend infrastructure & core APIs" },
      { month: "M5–6", label: "Web & mobile app development" },
      { month: "M7", label: "Testing & security hardening" },
      { month: "M8–9", label: "Soft launch & beta testing" },
    ],
  },
  {
    number: 2,
    title: "Ecosystem Expansion",
    subtitle: "9–12 Months",
    status: "upcoming",
    color: "#D84FA5",
    description:
      "Deepen platform engagement with wellness, social, and insurance services.",
    services: ["Pet Social", "Pet Wellness", "Pet Insurance"],
    milestones: [
      { month: "M10", label: "Pet Social MVP live" },
      { month: "M14", label: "Pet Wellness directory launch" },
      { month: "M17", label: "Insurance integrations complete" },
      { month: "M21", label: "Phase 2 full public launch" },
    ],
  },
  {
    number: 3,
    title: "Full Verticalization",
    subtitle: "12+ Months",
    status: "future",
    color: "#FFB800",
    description:
      "Complete the ecosystem with specialized, emotional, and financial services.",
    services: [
      "Pet Dating",
      "Pet Documentation",
      "Pet Parenting",
      "Pet Adoption",
      "Pet Legacy",
    ],
    milestones: [
      { month: "M22", label: "Pet Documentation & Parenting" },
      { month: "M26", label: "Pet Dating & Adoption launch" },
      { month: "M30", label: "Pet Legacy & memorial services" },
      { month: "M33+", label: "Full 11-vertical ecosystem live" },
    ],
  },
];
export const stats = [
  { value: 26.83, suffix: "B", prefix: "$", label: "Market Size by 2030" },
  { value: 13.55, suffix: "%", prefix: "", label: "Annual Growth Rate (CAGR)" },
  { value: 11, suffix: "+", prefix: "", label: "Service Verticals" },
  { value: 3, suffix: "", prefix: "", label: "Development Phases" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "About", href: "/about" },
];
