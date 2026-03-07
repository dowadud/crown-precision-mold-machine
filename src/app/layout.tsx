import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "Crown Precision Mold & Machine | Tire Mold Services",
  description:
    "Crown Precision Mold & Machine delivers expert tire mold repair, refurbishment, CNC machining, laser welding, inspection, and lifecycle support for global tire manufacturers.",
  keywords: [
    "tire mold repair",
    "tire mold refurbishment",
    "tire mold services",
    "precision machining",
    "industrial mold maintenance",
    "tire manufacturing support",
    "mold inspection",
    "mold certification",
    "CNC machining",
    "laser welding",
  ],
  openGraph: {
    title: "Crown Precision Mold & Machine | Tire Mold Services",
    description:
      "Expert tire mold repair, refurbishment, and precision machining for global tire manufacturers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B0B0D] text-smoke antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
