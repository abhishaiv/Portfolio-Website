import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's build something cooler together. Get in touch to discuss AI systems, market intelligence, or collaboration opportunities.",
  openGraph: {
    title: "Contact Abhishai Vardhan",
    description: "Let's build something cooler together. Get in touch to discuss AI systems, market intelligence, or collaboration opportunities.",
  },
  twitter: {
    title: "Contact Abhishai Vardhan",
    description: "Let's build something cooler together. Reach out for AI systems, market intelligence, or collaboration.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
