
export enum ServiceCategory {
  Engineering = "Engineering & Design",
  Fabrication = "Fabrication",
  Supply = "Supply & Logistics",
  Installation = "Installation",
  Supervision = "Supervision"
}

export enum IndustrySector {
  Chemical = "Chemical Industry",
  Water = "Water & Desalination",
  Mining = "Mining & Heavy Industry",
  Infrastructure = "Infrastructure"
}

export interface Project {
  id: string;
  title: string;
  industry: IndustrySector;
  category: ServiceCategory;
  description: string;
  technicalDetails: string[];
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}
