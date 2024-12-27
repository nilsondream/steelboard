import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = localFont({
  src: "./fonts/SFProDisplayRegular.otf",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Steel Board — Skate Shop",
  description: "Explore top-quality skateboards, gear, and accessories. Ride with style and performance.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/faviconblack.ico',
        href: '/faviconblack.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/faviconwhite.ico',
        href: '/faviconwhite.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
