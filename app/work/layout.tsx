import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI-powered products built to remove friction and amplify productivity. Explore Tailr AI, Recall, F1 Pitwall, Kathy, and more projects that upgrade human capabilities.",
  openGraph: {
    title: "Projects - Abhishai Vardhan",
    description: "AI-powered products built to remove friction and amplify productivity. Explore Tailr AI, Recall, F1 Pitwall, Kathy, and more projects that upgrade human capabilities.",
  },
  twitter: {
    title: "Projects - Abhishai Vardhan",
    description: "AI-powered products: Tailr AI, Recall, F1 Pitwall, Kathy. Systems that upgrade humans from 1 to 10x.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
