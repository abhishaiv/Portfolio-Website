import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Building AI-fuelled systems that upgrade humans from 1 to 10x. Market Intelligence professional at Cognizant, AI product builder, and founder of Nexaflow Studios.",
  openGraph: {
    title: "About Abhishai Vardhan",
    description: "Building AI-fuelled systems that upgrade humans from 1 to 10x. Market Intelligence professional at Cognizant, AI product builder, and founder of Nexaflow Studios.",
  },
  twitter: {
    title: "About Abhishai Vardhan",
    description: "Building AI-fuelled systems that upgrade humans from 1 to 10x. Market Intelligence professional, AI builder, founder of Nexaflow Studios.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
