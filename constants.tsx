
import React from 'react';
import { NavItem, Project, IndustrySector, ServiceCategory } from './types';
import { Settings, Droplets, Factory, HardHat, ShieldCheck, Ruler, Truck, Zap } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/services",
    subItems: [
      { label: "Engineering & Design", href: "/services/engineering" },
      { label: "Fabrication", href: "/services/fabrication" },
      { label: "Supply & Logistics", href: "/services/supply" },
      { label: "Installation", href: "/services/installation" },
      { label: "Supervision", href: "/services/supervision" }
    ]
  },
  { label: "Expertise", href: "/expertise" }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Seawater Desalination Plant P-04",
    industry: IndustrySector.Water,
    category: ServiceCategory.Installation,
    description: "Complete installation of PRFV intake pipes for a major desalination facility.",
    technicalDetails: [
      "Diameter: DN 2000mm",
      "Pressure Rating: PN 16",
      "Standard: ISO 14692",
      "Material: Vinyl Ester Resin with Glass Fiber Reinforcement"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542013936693-884638324252?auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    title: "Chemical Processing Exhaust System",
    industry: IndustrySector.Chemical,
    category: ServiceCategory.Fabrication,
    description: "Design and fabrication of specialized corrosion-resistant exhaust manifolds.",
    technicalDetails: [
      "High Chemical Resistance (pH 1-14)",
      "Temp Range: up to 95°C",
      "Compliance: DIN 16965",
      "Custom Molded Fittings"
    ],
    imageUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    title: "Mining Slurry Transport Line",
    industry: IndustrySector.Mining,
    category: ServiceCategory.Engineering,
    description: "Hydraulic calculation and structural design for abrasive slurry transport.",
    technicalDetails: [
      "Abrasion Resistant Inner Liner",
      "Span Calculation for Elevated Support",
      "ASTM D2996 Compliance",
      "Seismic Zone 3 Reinforcement"
    ],
    imageUrl: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?auto=format&fit=crop&q=80"
  }
];

export const CORE_VALUES = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "Technical Rigor",
    description: "Every joint and lamination follows strict international engineering standards."
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "High Durability",
    description: "PRFV solutions designed for 50+ year lifecycles in corrosive environments."
  },
  {
    icon: <Ruler className="w-6 h-6 text-blue-300" />,
    title: "EPC Precision",
    description: "Integrating seamlessly with larger project workflows and EPC schedules."
  }
];
