import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Khurram Munir · Full Stack Engineer",
  description:
    "Six years across websites, enterprise software, smart-city monitoring, digital evidence workflows and production delivery. Senior full stack engineer based in Lahore.",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030405" },
    { media: "(prefers-color-scheme: light)", color: "#f3f6fa" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
