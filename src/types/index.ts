export interface NavItem {
  label: string;
  href: string;
}

export interface Solution {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface MethodItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  image: string;
}