import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mudassar Hasan — Full-Stack Engineer & SaaS Builder",
  description: "Full-stack engineer building scalable web applications, SaaS products, and AI-powered experiences.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mudassar Hasan — Full-Stack Engineer & SaaS Builder",
    description: "Building thoughtful software from product idea to production.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
