import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building - Nexaflow Studios",
  description: "Nexaflow Studios: Building AI systems that make teams faster, sharper, and 10x more effective. Custom automation and AI solutions for modern businesses.",
  openGraph: {
    title: "Nexaflow Studios - Building AI Systems",
    description: "Building AI systems that make teams faster, sharper, and 10x more effective. Custom automation and AI solutions for modern businesses.",
  },
  twitter: {
    title: "Nexaflow Studios - Building AI Systems",
    description: "AI systems that make teams 10x more effective. Automation, custom AI solutions, productivity tools.",
  },
};

export default function BuildingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
