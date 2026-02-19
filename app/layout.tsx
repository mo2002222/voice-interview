import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const mona_sans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "prepWise",
  description: "An AI-powered interview preparation platform that helps you ace your next job interview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mona_sans.className} antialiased pattern`}
      >
        {children}
      </body>
    </html>
  );
}
