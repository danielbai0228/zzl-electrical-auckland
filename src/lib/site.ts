export const site = {
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || "ZZL Electrical Ltd",
  ownerName: "Aaron",
  phone: process.env.NEXT_PUBLIC_PHONE || "022 307 2796",
  email: process.env.NEXT_PUBLIC_EMAIL || "lhl630221@gmail.com",
  serviceArea: process.env.NEXT_PUBLIC_SERVICE_AREA || "Auckland",
  baseArea: "North Shore Auckland",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.co.nz",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  googleAdsConversionLabel:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "",
};

const normalizedPhone = site.phone.replace(/[^\d+]/g, "");

export const phoneHref = `tel:${
  normalizedPhone.startsWith("0")
    ? `+64${normalizedPhone.slice(1)}`
    : normalizedPhone
}`;

export const services = [
  {
    title: "Electrical Repairs & Fault Finding",
    copy: "Fast diagnosis for tripping circuits, power loss, faulty outlets, lights, switches, and urgent electrical faults.",
  },
  {
    title: "Old House Rewiring & Renovations",
    copy: "Careful rewiring and upgrade work for older Auckland homes, villas, units, and renovation projects.",
  },
  {
    title: "New Build Electrical Installation",
    copy: "Complete electrical installation for new homes, additions, garages, kitchens, bathrooms, and fit-outs.",
  },
  {
    title: "Hot Water Cylinder Repairs & Replacement",
    copy: "Electrical checks, repairs, element issues, thermostat faults, and replacement support for hot water systems.",
  },
  {
    title: "Emergency Electrical Repairs",
    copy: "Responsive help when something electrical is unsafe, urgent, or stopping your home or business from operating.",
  },
];

export const proofPoints = [
  "Licensed electrician",
  "Fully insured",
  "Compliance certificates and paperwork provided",
  "Transparent pricing with no hidden costs",
  "24/7 emergency response",
  "Responsible and reliable service",
];

export const pricingItems = [
  {
    item: "Power point in existing house with RCD",
    price: "$180",
    note: "Without RCD: $300",
  },
  {
    item: "Outdoor power point with RCD",
    price: "$200",
    note: "Without RCD: $325",
  },
  {
    item: "Hot water cylinder power connection",
    price: "$200",
    note: "Electrical connection service",
  },
  {
    item: "Downlight installation",
    price: "$55",
    note: "Per downlight",
  },
  {
    item: "Single light switch",
    price: "$135",
    note: "Standard single switch",
  },
  {
    item: "Bathroom fan",
    price: "$250",
    note: "Standard installation",
  },
  {
    item: "Bathroom integrated light-heater-fan",
    price: "$345",
    note: "Integrated unit installation",
  },
  {
    item: "Ceiling light",
    price: "$170",
    note: "Standard ceiling light",
  },
  {
    item: "General maintenance call-out",
    price: "$120",
    note: "Includes first 30 minutes, then $80 per hour",
  },
  {
    item: "New circuit to first point",
    price: "$350",
    note: "Adding a new circuit to first point",
  },
];

export const serviceAreas = [
  "North Shore",
  "Auckland Central",
  "West Auckland",
  "East Auckland",
  "South Auckland",
  "Mt Eden",
  "Ponsonby",
  "Remuera",
  "Newmarket",
  "Takapuna",
  "Henderson",
  "Manukau",
];

export const faqs = [
  {
    question: "Do you handle urgent electrical faults?",
    answer:
      "Yes. Call first for urgent faults, power loss, tripping circuits, burning smells, or unsafe wiring concerns.",
  },
  {
    question: "Can you work on older Auckland homes?",
    answer:
      "Yes. The service list includes old house rewiring, renovation wiring, switchboard upgrades, and fault finding.",
  },
  {
    question: "Do you repair hot water cylinder electrical issues?",
    answer:
      "Yes. Electrical faults with hot water cylinders, thermostats, elements, and related wiring can be assessed.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "ZZL Electrical Ltd is based on North Shore Auckland and provides Auckland-wide service.",
  },
  {
    question: "Are prices transparent before work starts?",
    answer:
      "Yes. Common job prices are shown on this page, and any extra work is discussed before proceeding.",
  },
  {
    question: "Do you provide compliance certificates and paperwork?",
    answer:
      "Yes. Compliance certificates and required paperwork are provided for applicable electrical work.",
  },
];
